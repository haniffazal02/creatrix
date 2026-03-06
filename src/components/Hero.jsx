import React from 'react';
import { ArrowRight, Sparkles, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="about"
            className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden"
        >
            {/* Animated background blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[-5%] left-[10%] w-[500px] h-[500px] bg-violet-600/12 blur-[130px] rounded-full animate-pulse" />
                <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/10 blur-[110px] rounded-full animate-pulse delay-300" />
            </div>

            <div className="max-w-4xl mx-auto">

                {/* Trust Badge */}
                <div className="flex justify-center mb-8 animate-fade-in-up">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-violet-500/10 text-violet-300 border border-violet-500/25">
                        <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                        Prototype Version — Hackathon Build
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-7 animate-fade-in-up delay-100">
                    Turn Creator Signals Into{' '}
                    <span className="gradient-text">
                        Structured Growth Intelligence
                    </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                    AI-powered pattern intelligence engine that analyzes creator style, hooks, structure, and psychology —{' '}
                    <span className="text-slate-300">using transcript or manual input.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up delay-300">
                    <a
                        href="#demo"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-violet-600 rounded-xl hover:bg-violet-500 transition-all duration-200 glow-violet glow-violet-hover shadow-violet-500/20 shadow-lg"
                    >
                        <Sparkles className="w-4 h-4" />
                        Analyze Content
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#pricing"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-violet-300 border border-violet-500/40 rounded-xl hover:bg-violet-500/10 hover:border-violet-400/60 hover:text-violet-200 transition-all duration-200"
                    >
                        Start Free 14-Day Trial
                    </a>
                </div>

                {/* Language Support Line */}
                <div className="flex items-center justify-center gap-2 animate-fade-in-up delay-400">
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
                    <p className="text-xs text-slate-500">
                        Now available in{' '}
                        <span className="text-slate-400 font-medium">English</span> &amp;{' '}
                        <span className="text-slate-400 font-medium">Tamil</span>
                        {' '}— Hindi coming soon
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
