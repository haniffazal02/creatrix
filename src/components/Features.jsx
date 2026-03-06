import React from 'react';
import { Zap, Layers, Heart, Target } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'Hook Pattern Intelligence',
        description: 'Identifies how high-performing creators start their content to capture attention in the first 3 seconds.',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/15',
        glow: 'group-hover:shadow-amber-500/10',
    },
    {
        icon: Layers,
        title: 'Structure Mapping',
        description: 'Breaks down the exact content format: Hook → Problem → Solution → CTA, with timing analysis.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/15',
        glow: 'group-hover:shadow-violet-500/10',
    },
    {
        icon: Heart,
        title: 'Emotional Trigger Detection',
        description: 'Detects FOMO, curiosity gaps, and aspiration signals embedded in high-retention creator scripts.',
        color: 'text-rose-400',
        bg: 'bg-rose-500/10',
        border: 'border-rose-500/15',
        glow: 'group-hover:shadow-rose-500/10',
    },
    {
        icon: Target,
        title: 'CTA Optimization',
        description: 'Suggests conversion-focused call-to-action strategies tailored to your niche and audience.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/15',
        glow: 'group-hover:shadow-emerald-500/10',
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
                <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">
                    What We Analyze
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
                    Four Layers of Creator Intelligence
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                    Every piece of content holds patterns. We surface them.
                </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={feature.title}
                            className={`group glass rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-xl ${feature.glow} transition-all duration-300 cursor-default`}
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} mb-6`}>
                                <Icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="font-display text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
