import { Astroid } from 'lucide-react';

export default function StackBanner() {
    const tools = [
        "React", "React Native", "NextJS", "TypeScript", "TailwindCSS",
        "Vercel", "AI Workflows", "Claude Code", "WordPress", "Kinsta",
        "ACF", "YooTheme", "Gravity Forms"
    ]

    const renderTools = () => tools.map((tool, k) => (
        <div key={k} className="flex items-center gap-3 shrink-0">
            <p className="text-sm">{tool}</p>
            <Astroid size={15} className="fill-orange-500 text-orange-500" />
        </div>
    ))

    return (
        <div className="w-full overflow-hidden bg-black-500 border-t border-b border-gray-500/30 py-4">
            <div className="flex gap-3 font-sora uppercase font-bold text-white animate-marquee w-max">
                {renderTools()}
                {renderTools()}
            </div>
        </div>
    )
}