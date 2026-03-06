import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Lock } from 'lucide-react';

const bullets = [
    'Structured intelligence, not generic AI output',
    'Regional language support (English & Tamil)',
    'Pattern-driven script generation',
    'Built for high-retention reels',
];

const Sales = () => {
    return (
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
                <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">
                    Why Creatrix Labs
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
                    Built for Serious{' '}
                    <span className="gradient-text">Regional Creators</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                    Not another generic AI tool. A focused intelligence engine built for your audience.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Bullet Points */}
                <div className="glass rounded-2xl p-8 h-full">
                    <h3 className="font-display text-2xl font-bold text-white mb-8">
                        What makes us different
                    </h3>
                    <ul className="space-y-5">
                        {bullets.map((item) => (
                            <li key={item} className="flex items-start gap-4">
                                <div className="mt-0.5 shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                                </div>
                                <span className="text-slate-300 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col gap-5">

                    {/* Free Trial Card */}
                    <div className="relative glass-strong rounded-2xl p-8 border border-violet-500/25 overflow-hidden">
                        {/* Glow background */}
                        <div className="absolute inset-0 bg-violet-600/5 pointer-events-none" />
                        {/* Top line glow */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

                        <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold tracking-widest uppercase text-violet-400">
                                    Free Trial
                                </span>
                                <span className="text-xs bg-violet-600/30 text-violet-300 px-2.5 py-1 rounded-full border border-violet-500/30 font-medium">
                                    No credit card
                                </span>
                            </div>
                            <h3 className="font-display text-3xl font-extrabold text-white mb-1">
                                14 Days Free
                            </h3>
                            <p className="text-slate-400 text-sm mb-8">
                                Full access. No commitment. No credit card required.
                            </p>
                            <a
                                href="#demo"
                                className="group inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white bg-violet-600 rounded-xl hover:bg-violet-500 transition-all duration-200 glow-violet text-sm"
                            >
                                <Sparkles className="w-4 h-4" />
                                Start Free Trial
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Pro Plan Coming Soon Card */}
                    <div className="glass rounded-2xl p-8 opacity-60">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                                Pro Plan
                            </span>
                            <span className="flex items-center gap-1.5 text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full border border-slate-700 font-medium">
                                <Lock className="w-3 h-3" />
                                Coming Soon
                            </span>
                        </div>
                        <h3 className="font-display text-3xl font-extrabold text-slate-400 mb-1">
                            Pro &amp; Teams
                        </h3>
                        <p className="text-slate-500 text-sm">
                            Advanced intelligence layers, bulk analysis, and team collaboration. Join the waitlist.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sales;
