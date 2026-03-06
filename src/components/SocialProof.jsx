import React from 'react';
import { Code2, Trophy } from 'lucide-react';

const SocialProof = () => {
    return (
        <div className="py-5 px-4 border-y border-slate-800/60">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4">
                {/* Hackathon badge */}
                <div className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-full">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-medium text-slate-300">
                        Built for <span className="text-white font-semibold">AI for Bharat Hackathon</span>
                    </span>
                </div>

                {/* Divider dot */}
                <span className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />

                {/* AWS Bedrock badge */}
                <div className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-full">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-slate-300">
                        Powered by <span className="text-white font-semibold">AWS Bedrock</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
