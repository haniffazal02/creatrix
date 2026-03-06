import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Analyzer from './components/Analyzer';
import Results from './components/Results';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Sales from './components/Sales';
import Footer from './components/Footer';

// Mock response Data based on user requirements
const mockApiResponse = {
    niche: "Tech & Software Engineering",
    tone: "Authoritative yet accessible",
    keywords: ["AI Architecture", "System Design", "Web Development", "Startup Growth"],
    hook_type: "Contrarian Tech Opinion",
    structure: "Hook → Relatable Problem → Deep Technical Dive → Clear Solution Framework → CTA",
    emotional_trigger: "FOMO on modern tech stacks & desire for technical mastery",
    cta_strategy: "Lead Magnet Download or Newsletter Subscription",
    script: `[HOOK: Visual of clean code editor closing]
"Stop using standard React templates if you want to land a senior role."

[PROBLEM]
Most devs are stuck building the same to-do apps, and recruiters are tired of seeing them. 

[DEEP DIVE]
What actually gets you hired is showing you understand architecture. I spent the last 48 hours analyzing the GitHub repos of 50 developers hired at FAANG this year. They all shared one secret pattern: they built microservices, not just a frontend.

[SOLUTION FRAMEWORK]
Here's the 3-step blueprint to upgrade your portfolio:
1. Dockerize your current app.
2. Add a serverless function acting as a proxy.
3. Use a managed database like DynamoDB.

[CTA]
I just dropped a full blueprint on my newsletter showing exactly how to build this in one weekend. Link in bio to grab it.`,
    explanation: "This pattern leverages the 'Contrarian Hook' which disrupts the viewer's current belief (standard templates are good enough) and immediately introduces a high-value desire (landing a senior role). The structure follows a proven 'Problem-Agitate-Solution' framing, tailored for tech audiences who value data-backed claims (analyzing 50 FAANG devs). The CTA uses an 'information gap' trigger, driving immediate curiosity."
};

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState(null);

    const handleAnalyze = ({ mode, value }) => {
        setIsLoading(true);
        setResults(null);

        // Simulate POST /analyze API call latency
        setTimeout(() => {
            setResults(mockApiResponse);
            setIsLoading(false);

            // Smooth scroll to results
            setTimeout(() => {
                document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500/30 overflow-x-hidden">

            {/* Background radial glows */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-violet-700/8 blur-[150px] rounded-full" />
                <div className="absolute top-[45%] right-[-12%] w-[35%] h-[55%] bg-indigo-700/8 blur-[130px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[15%] w-[45%] h-[40%] bg-slate-700/6 blur-[120px] rounded-full" />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <Navbar />

                <main>
                    {/* 1. Hero */}
                    <Hero />

                    {/* 2. Social Proof strip */}
                    <SocialProof />

                    {/* 3. Dual Input Analyzer */}
                    <Analyzer onAnalyze={handleAnalyze} isLoading={isLoading} />

                    {/* 4. Results (shown after analysis) */}
                    <div id="results-section">
                        {isLoading && !results && (
                            <div className="py-20 flex flex-col items-center justify-center animate-fade-in">
                                <div className="relative">
                                    <div className="w-14 h-14 border-4 border-slate-800 border-t-violet-500 rounded-full animate-spin" />
                                    <div className="absolute inset-0 w-14 h-14 border-4 border-indigo-500/20 border-t-transparent rounded-full animate-pulse blur-sm" />
                                </div>
                                <p className="mt-6 text-slate-400 font-medium">Extracting Creator Intelligence...</p>
                                <p className="mt-2 text-sm text-slate-500">Querying Pattern Repository</p>
                            </div>
                        )}

                        {!isLoading && results && (
                            <Results data={results} />
                        )}
                    </div>

                    {/* 5. Feature Cards */}
                    <Features />

                    {/* 6. How It Works */}
                    <HowItWorks />

                    {/* 7. Sales / Pricing */}
                    <Sales />
                </main>

                <Footer />
            </div>

        </div>
    );
}

export default App;
