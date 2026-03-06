require('dotenv').config();
const express = require('express');
const cors = require('cors');
const transcriptService = require('./services/transcriptService');
const analysisService = require('./services/analysisService');
const masterLLMService = require('./services/masterLLMService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is running successfully' });
});

// Main analyze endpoint
app.post('/analyze', async (req, res) => {
    try {
        const { videoUrl } = req.body;

        if (!videoUrl) {
            return res.status(400).json({ error: 'videoUrl is required' });
        }

        console.log(`\n========================================`);
        console.log(`Analyzing video: ${videoUrl}`);
        console.log(`========================================\n`);

        // Step 1: Get transcript (mock for now)
        console.log('[Step 1] Fetching transcript...');
        const transcript = await transcriptService.getTranscript(videoUrl);
        console.log('[Step 1] Transcript received. Length:', transcript.length);

        // Step 2: Analyze transcript with Nova Pro
        console.log('[Step 2] Running AI analysis...');
        const analysis = await analysisService.analyzeTranscript(transcript);
        console.log('[Step 2] Analysis complete.');

        // Step 3: Run master LLM for strategy improvements
        console.log('[Step 3] Generating strategy improvements...');
        const finalResult = await masterLLMService.generateStrategy(analysis);
        console.log('[Step 3] Strategy generation complete.');

        console.log('\n[Done] Returning final result.\n');

        return res.json({
            success: true,
            videoUrl,
            analysis,
            strategy: finalResult,
        });
    } catch (error) {
        console.error('[Error] /analyze failed:', error.message);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`\nCreatrix Labs Backend running on http://localhost:${PORT}`);
    console.log(`Test route:  GET  http://localhost:${PORT}/api/test`);
    console.log(`Analyze:     POST http://localhost:${PORT}/analyze\n`);
});
