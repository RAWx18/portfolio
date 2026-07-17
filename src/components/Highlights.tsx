"use client";

import Image from "next/image";

import { highlightsData } from "@/data/highlightsData";

export function Highlights() {
  return (
    <div className="group relative mt-4 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-3 z-10 w-8 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-3 z-10 w-8 bg-gradient-to-l from-white to-transparent dark:from-black" />

      <div className="flex w-max animate-marquee pb-3 group-hover:paused">
        {[...highlightsData, ...highlightsData].map((item, i) => (
          <a
            key={`${item.id}-${i}`}
            href={`https://www.linkedin.com/feed/update/urn:li:activity:${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden={i >= highlightsData.length ? true : undefined}
            tabIndex={i >= highlightsData.length ? -1 : undefined}
            className="group/card mr-3 shrink-0 w-[320px] overflow-hidden rounded-[6px] border border-black/30 bg-zinc-50 transition-colors hover:border-black/60 dark:border-white/[0.15] dark:bg-[#09090b] dark:hover:border-white/40 sm:w-[360px]"
          >
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                src={`/highlights/${item.id}.png`}
                alt={item.title}
                fill
                loading="eager"
                sizes="(min-width: 640px) 360px, 320px"
                className="object-cover object-top transition-transform duration-300 group-hover/card:scale-[1.03]"
              />
            </div>
            <div className="flex items-center border-t border-black/10 px-3 py-2 dark:border-white/10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
                {item.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
