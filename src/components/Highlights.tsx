"use client";

import { highlightsData } from "@/data/highlightsData";

export function Highlights() {
  return (
    <div className="relative mt-4">
      {/* Left fade mask */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-3 z-10 w-8 bg-gradient-to-r from-white to-transparent dark:from-black" />
      {/* Right fade mask */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-3 z-10 w-8 bg-gradient-to-l from-white to-transparent dark:from-black" />

      <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {highlightsData.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[320px] overflow-hidden rounded-[6px] border border-black/30 bg-zinc-50 dark:border-white/[0.15] dark:bg-[#09090b] sm:w-[360px]"
          >
            <div className="flex items-center border-b border-black/10 px-3 py-2 dark:border-white/10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
                {item.title}
              </span>
            </div>
            <iframe
              src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${item.id}`}
              title={item.title}
              allowFullScreen
              className="block h-[480px] w-full border-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
