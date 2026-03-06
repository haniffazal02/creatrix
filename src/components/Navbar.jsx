import React from 'react';
import { Hexagon } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="bg-violet-500/15 p-2 rounded-lg border border-violet-500/20">
                            <Hexagon className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                            <span className="font-display text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                                Creatrix Labs
                            </span>
                            <p className="text-[10px] text-slate-500 hidden sm:block leading-none mt-0.5">
                                Creator Intelligence Engine
                            </p>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                            How It Works
                        </a>
                        <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                            Pricing
                        </a>
                        <a
                            href="#demo"
                            className="text-sm px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors duration-200 font-semibold"
                        >
                            Try Demo
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
