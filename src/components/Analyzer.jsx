import React, { useState } from 'react';
import { Link, Loader2, AlertCircle } from 'lucide-react';

const Analyzer = ({ onAnalyze, isLoading }) => {
    const [reels, setReels] = useState(['', '', '']);

    const handleChange = (index, value) => {
        const updated = [...reels];
        updated[index] = value;
        setReels(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filled = reels.filter((r) => r.trim());
        if (filled.length < 3) return;
        onAnalyze({ mode: 'reels', value: reels });
    };

    const filledCount = reels.filter((r) => r.trim()).length;
    const canSubmit = filledCount >= 3;

    return (
        <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <div className="glass-strong rounded-2xl p-1 shadow-2xl shadow-violet-900/20 relative overflow-hidden">
                {/* Top glow line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500/70 to-transparent" />

                <div className="rounded-xl p-6 sm:p-10">

                    {/* Card header */}
                    <div className="text-center mb-8">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                            Analyze Your Top Performing Reels
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                            Paste links to your top 3 recent reels. Our AI will generate transcripts, extract creator patterns, and generate optimized scripts.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {reels.map((reel, index) => (
                            <div key={index} className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <Link className="w-4 h-4 text-slate-500" />
                                </div>
                                <input
                                    type="url"
                                    className="block w-full pl-10 pr-4 py-3.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 transition-all duration-200 text-sm"
                                    placeholder="https://instagram.com/reel/..."
                                    value={reel}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    disabled={isLoading}
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center text-xs text-slate-600 font-medium pointer-events-none">
                                    Reel {index + 1}
                                </span>
                            </div>
                        ))}

                        {/* Helper text */}
                        <p className="text-xs text-slate-500 text-center pt-1">
                            Minimum 3 reels required for accurate pattern detection.
                        </p>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={isLoading || !canSubmit}
                            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-violet-600 rounded-xl hover:bg-violet-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all duration-200 text-sm mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin w-4 h-4" />
                                    Analyzing patterns...
                                </>
                            ) : (
                                'Analyze Creator Intelligence'
                            )}
                        </button>

                        {/* Disclaimer */}
                        <div className="flex items-start gap-2 justify-center pt-1">
                            <AlertCircle className="w-3 h-3 text-slate-600 mt-0.5 shrink-0" />
                            <p className="text-[11px] text-slate-600 leading-relaxed text-center">
                                We do not scrape accounts automatically. Analysis is based on provided reel content and structured intelligence patterns.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Analyzer;
