import React from 'react';
import { Layers, Server, Box, Database, ArrowRight } from 'lucide-react';

const Architecture = () => {
    return (
        <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Architecture Overview</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg hover:text-slate-300 transition-colors">
                    RAG-Based Serverless Intelligence Architecture
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">

                {/* Frontend block */}
                <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl w-full max-w-[220px] shadow-lg flex flex-col items-center">
                    <div className="bg-blue-500/10 p-4 rounded-full mb-4 text-blue-400">
                        <Layers className="w-8 h-8" />
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-center">Frontend UI</h3>
                    <p className="text-xs text-slate-400 text-center">React + Tailwind</p>
                </div>

                <ArrowRight className="text-slate-600 hidden md:block w-8 h-8 rotate-90 md:rotate-0" />

                {/* API Gateway block */}
                <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl w-full max-w-[220px] shadow-lg flex flex-col items-center">
                    <div className="bg-indigo-500/10 p-4 rounded-full mb-4 text-indigo-400">
                        <Server className="w-8 h-8" />
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-center">API Gateway</h3>
                    <p className="text-xs text-slate-400 text-center">AWS Request Routing</p>
                </div>

                <ArrowRight className="text-slate-600 hidden md:block w-8 h-8 rotate-90 md:rotate-0" />

                {/* Lambda block */}
                <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl w-full max-w-[220px] shadow-lg flex flex-col items-center relative z-10">

                    <div className="absolute -top-16 right-0 left-0 hidden md:flex items-center justify-center pointer-events-none">
                        <div className="w-px h-16 bg-gradient-to-t from-slate-600 to-transparent"></div>
                    </div>

                    <div className="bg-orange-500/10 p-4 rounded-full mb-4 text-orange-400">
                        <Box className="w-8 h-8" />
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-center">AWS Lambda</h3>
                    <p className="text-[11px] text-slate-400 text-center leading-tight">Pattern Retrieval + Prompt Orchestration</p>

                    <div className="absolute -top-24 hidden md:flex flex-col items-center justify-center bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-4 rounded-xl shadow-lg w-[180px]">
                        <Database className="w-6 h-6 text-green-400 mb-2" />
                        <h4 className="text-white font-medium text-sm text-center">S3 Intelligence</h4>
                        <p className="text-[10px] text-slate-400 text-center">Pattern Repository</p>
                    </div>
                </div>

                <ArrowRight className="text-slate-600 hidden md:block w-8 h-8 rotate-90 md:rotate-0" />

                {/* Bedrock block */}
                <div className="bg-violet-900/20 border border-violet-500/30 p-6 rounded-2xl w-full max-w-[220px] shadow-lg shadow-violet-500/10 flex flex-col items-center relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-violet-500/10 animate-pulse mix-blend-overlay"></div>
                    <div className="bg-violet-500/20 p-4 rounded-full mb-4 text-violet-300 relative z-10">
                        <Layers className="w-8 h-8" /> {/* Assuming generic icon if specific AWS not available */}
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-center relative z-10">Amazon Bedrock</h3>
                    <p className="text-[11px] text-violet-300/70 text-center relative z-10 leading-tight">Foundation Model Inference</p>
                </div>

            </div>

            <div className="mt-12 text-center">
                <p className="text-sm font-medium text-slate-500 bg-slate-800/50 inline-block px-4 py-2 rounded-full border border-slate-700/50">
                    Built using AWS-native serverless patterns.
                </p>
            </div>
        </section>
    );
};

export default Architecture;
