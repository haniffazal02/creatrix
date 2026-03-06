import React from 'react';
import { User, BrainCircuit, FileText, Lightbulb, CheckCircle2, ChevronRight, Copy } from 'lucide-react';

const Results = ({ data }) => {
    if (!data) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(data.script);
        // In a real app we'd show a toast here
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 1. Creator Profile Summary Card */}
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg lg:col-span-1">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                            <User className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Creator Profile</h3>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Detected Niche</p>
                            <p className="font-medium text-slate-200">{data.niche}</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Primary Tone</p>
                            <div className="inline-flex px-3 py-1 rounded-full bg-slate-700/50 text-sm text-slate-300 border border-slate-600">
                                {data.tone}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-2">Content Keywords</p>
                            <div className="flex flex-wrap gap-2">
                                {data.keywords.map((kw, idx) => (
                                    <span key={idx} className="text-xs px-2.5 py-1 bg-violet-500/10 text-violet-400 rounded-md border border-violet-500/20">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Engagement Pattern</p>
                            <div className="flex items-start gap-2 text-emerald-400 text-sm mt-1">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>Observed stronger engagement on opinion-driven hooks.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Intelligence Match Section */}
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg lg:col-span-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                    <div className="flex justify-between items-start mb-6 border-b border-slate-700 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-violet-500/20 rounded-lg text-violet-400">
                                <BrainCircuit className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Intelligence Match</h3>
                                <p className="text-xs text-slate-400 mt-1">This pattern was selected based on niche similarity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                            <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Hook Type</p>
                            <p className="text-white font-medium">{data.hook_type}</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                            <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Structure Pattern</p>
                            <p className="text-white font-medium">{data.structure}</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                            <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Emotional Trigger</p>
                            <p className="text-white font-medium">{data.emotional_trigger}</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                            <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">CTA Strategy</p>
                            <p className="text-white font-medium">{data.cta_strategy}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* 3. Generated Script Section */}
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Generated Script</h3>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                            title="Copy to clipboard"
                        >
                            <Copy className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex-grow bg-slate-900 p-5 rounded-xl border border-slate-700 text-slate-300 font-mono text-sm leading-relaxed overflow-y-auto max-h-96 whitespace-pre-wrap">
                        {data.script}
                    </div>
                </div>

                {/* 4. Explainable AI Section */}
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg relative overflow-hidden h-full">
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

                    <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                        <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                            <Lightbulb className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Why This Works</h3>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                            {data.explanation}
                        </p>
                        <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-emerald-400">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-emerald-300 font-medium mb-1">Intelligence Match Score (Demo)</h4>
                                <p className="text-xs text-emerald-400/80 leading-relaxed">Indicates similarity between detected niche and repository patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Results;
