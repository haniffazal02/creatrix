import React from 'react';
import { Github, Code2, Trophy, Globe, Hexagon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-800/60 bg-slate-950 mt-16">
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2.5">
                            <div className="bg-violet-500/15 p-1.5 rounded-lg border border-violet-500/20">
                                <Hexagon className="w-4 h-4 text-violet-400" />
                            </div>
                            <span className="font-display text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                                Creatrix Labs
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 max-w-[220px] text-center md:text-left leading-relaxed">
                            AI-powered creator pattern intelligence for regional content creators.
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                            <Globe className="w-3 h-3 text-slate-600" />
                            <span className="text-[11px] text-slate-600">
                                English · Tamil · Hindi (soon)
                            </span>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                            <Trophy className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-xs text-slate-300 font-medium">AI for Bharat Hackathon</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-xs text-slate-300 font-medium">Powered by AWS Bedrock</span>
                        </div>
                    </div>

                    {/* GitHub */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors duration-200"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-5 w-5" />
                    </a>

                </div>

                <div className="mt-10 pt-6 border-t border-slate-800/40 text-center">
                    <p className="text-xs text-slate-600">
                        © 2026 Creatrix Labs. Prototype Version — Hackathon Build.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
