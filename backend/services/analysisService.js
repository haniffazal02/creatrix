/**
 * Analysis Service
 * Sends transcript to Amazon Nova Pro via AWS Bedrock.
 * Returns structured JSON analysis.
 */

const {
    BedrockRuntimeClient,
    InvokeModelCommand,
} = require('@aws-sdk/client-bedrock-runtime');

const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const MODEL_ID = 'amazon.nova-pro-v1:0';

async function analyzeTranscript(transcript) {
    const systemPrompt = `You are a Creator Intelligence AI. You analyze YouTube video transcripts and return ONLY valid JSON. No markdown. No explanations. No extra text. Return ONLY the JSON object.`;

    const userPrompt = `Analyze the following YouTube video transcript and return ONLY a valid JSON object with this exact schema:

{
  "language": "string (primary language detected)",
  "mixedLanguage": "boolean (true if multiple languages are mixed)",
  "estimatedDuration": "string (estimated video duration)",
  "topicCategory": "string (main topic category)",
  "contentSummary": "string (2-3 sentence summary)",
  "toneAndStyle": "string (e.g. casual, professional, educational)",
  "targetAudience": "string (who this video is made for)",
  "hookAnalysis": {
    "hasHook": "boolean",
    "hookText": "string (the opening hook text)",
    "hookEffectiveness": "string (weak/moderate/strong)"
  },
  "repeatedWords": ["array of exact words repeated 3+ times"],
  "tanglishPhrases": ["array of exact Tanglish/code-mixed phrases found"],
  "callToAction": ["array of CTAs detected"],
  "keyTopics": ["array of main topics discussed"],
  "engagementTriggers": ["array of engagement techniques used"],
  "weaknesses": ["array of content weaknesses identified"],
  "strengths": ["array of content strengths identified"],
  "vocabularyLevel": "string (basic/intermediate/advanced)",
  "estimatedRetentionScore": "number (0-100)"
}

IMPORTANT: Return ONLY the JSON. No markdown code blocks. No backticks. No explanations before or after.

Transcript:
${transcript}`;

    const payload = {
        messages: [
            {
                role: 'user',
                content: [{ text: userPrompt }],
            },
        ],
        system: [{ text: systemPrompt }],
        inferenceConfig: {
            maxTokens: 4096,
            temperature: 0.3,
            topP: 0.9,
        },
    };

    const command = new InvokeModelCommand({
        modelId: MODEL_ID,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify(payload),
    });

    const response = await client.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));

    // Extract text from Nova's response
    let rawText = '';
    if (responseBody.output && responseBody.output.message && responseBody.output.message.content) {
        rawText = responseBody.output.message.content
            .map((block) => block.text || '')
            .join('');
    }

    // Clean potential markdown wrappers
    rawText = rawText.trim();
    if (rawText.startsWith('```json')) {
        rawText = rawText.slice(7);
    }
    if (rawText.startsWith('```')) {
        rawText = rawText.slice(3);
    }
    if (rawText.endsWith('```')) {
        rawText = rawText.slice(0, -3);
    }
    rawText = rawText.trim();

    // Parse JSON safely
    try {
        const parsed = JSON.parse(rawText);
        return parsed;
    } catch (parseError) {
        console.error('[AnalysisService] JSON parse failed. Raw response:');
        console.error(rawText);
        throw new Error(`Failed to parse analysis response as JSON: ${parseError.message}`);
    }
}

module.exports = { analyzeTranscript };
