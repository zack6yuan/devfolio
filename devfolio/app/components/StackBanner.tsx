import { Astroid } from "lucide-react";
import { tools } from "@/lib/tools";

export default function StackBanner() {
  const renderTools = () =>
    tools.map((tool, k) => (
      <div key={k} className="flex items-center gap-3 shrink-0">
        <p className="text-sm xl:text-base">{tool}</p>
        <Astroid className="w-[15px] h-[15px] xl:w-[18px] xl:h-[18px] fill-orange-500 text-orange-500" />
      </div>
    ));

  return (
    <div className="w-full overflow-hidden bg-black border-t border-b border-gray-500/30 py-4 xl:py-6">
      <div className="flex gap-3 font-sora uppercase font-bold text-white animate-marquee w-max">
        {renderTools()}
        {renderTools()}
      </div>
    </div>
  );
}
