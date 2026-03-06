/**
 * Master LLM Service
 * Takes the initial analysis JSON and generates
 * actionable strategy improvements via Amazon Nova Pro.
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

async function generateStrategy(analysisData) {
    const systemPrompt = `You are an elite YouTube growth strategist AI. You receive a structured content analysis and generate actionable strategy improvements. Return ONLY valid JSON. No markdown. No explanations. No extra text.`;

    const userPrompt = `Based on the following content analysis, generate a comprehensive creator strategy. Return ONLY a valid JSON object with this exact schema:

{
  "overallScore": "number (0-100, overall content quality score)",
  "verdictSummary": "string (one-line verdict on the content)",
  "contentStrategy": {
    "hookImprovement": "string (specific suggestion to improve the opening hook)",
    "structureSuggestion": "string (how to better structure the video)",
    "retentionTips": ["array of 3-5 specific tips to improve viewer retention"],
    "ctaOptimization": "string (how to improve calls to action)"
  },
  "languageStrategy": {
    "recommendation": "string (language mixing advice)",
    "tanglishOptimization": "string (how to better use Tanglish for engagement)",
    "vocabularyAdvice": "string (vocabulary level recommendation)"
  },
  "growthStrategy": {
    "uploadFrequency": "string (recommended upload schedule)",
    "thumbnailTips": ["array of 3 thumbnail improvement tips"],
    "titleFormulas": ["array of 3 suggested title formulas for similar content"],
    "hashtagSuggestions": ["array of 5-10 relevant hashtags"],
    "collaborationIdeas": ["array of 2-3 collaboration suggestions"]
  },
  "seoStrategy": {
    "suggestedTags": ["array of 10 SEO tags"],
    "descriptionTemplate": "string (optimized description template)",
    "categoryRecommendation": "string (best YouTube category)"
  },
  "monetizationInsights": {
    "sponsorshipPotential": "string (assessment of sponsorship readiness)",
    "productOpportunities": ["array of potential product/merch ideas"],
    "affiliateRecommendations": ["array of relevant affiliate program suggestions"]
  },
  "nextVideoIdeas": ["array of 5 specific video ideas based on this content"]
}

IMPORTANT: Return ONLY the JSON. No markdown code blocks. No backticks. No explanations before or after.

Content Analysis:
${JSON.stringify(analysisData, null, 2)}`;

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
            temperature: 0.5,
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
        console.error('[MasterLLMService] JSON parse failed. Raw response:');
        console.error(rawText);
        throw new Error(`Failed to parse strategy response as JSON: ${parseError.message}`);
    }
}

module.exports = { generateStrategy };
