import React from 'react';
import { Upload, Cpu, Wand2 } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: Upload,
        title: 'Input Creator Signal',
        description: 'Provide an Instagram creator handle or paste a video/reel transcript directly into the engine.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
    },
    {
        step: '02',
        icon: Cpu,
        title: 'Pattern Retrieval Engine',
        description: 'The AI engine matches your input against a structured intelligence repository of high-performing content patterns.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
    },
    {
        step: '03',
        icon: Wand2,
        title: 'AI Script Generation',
        description: 'Generates structured, high-conversion content tailored to your niche, tone, and regional language.',
        color: 'text-sky-400',
        bg: 'bg-sky-500/10',
        border: 'border-sky-500/20',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
                <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">
                    The Process
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
                    How It Works
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                    Three steps from raw creator input to actionable growth intelligence.
                </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Connector line (desktop) */}
                <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-violet-500/40 via-indigo-500/40 to-sky-500/40" />

                {steps.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.step} className="relative glass rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
                            {/* Step number badge */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="text-xs font-bold text-slate-500 bg-slate-900 border border-slate-700 px-2.5 py-0.5 rounded-full tracking-wider">
                                    Step {item.step}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bg} border ${item.border} mb-5`}>
                                <Icon className={`w-7 h-7 ${item.color}`} />
                            </div>

                            <h3 className="font-display text-xl font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Infrastructure note */}
            <p className="text-center text-xs text-slate-600 mt-12">
                Built on secure serverless AI infrastructure.
            </p>
        </section>
    );
};

export default HowItWorks;
