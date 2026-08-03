import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import type { StoryBlock } from "@/data/experienceStories";
import { Reveal } from "@/components/story/Reveal";

const dashRight = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
} as const;

const statColumns: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export function Divider() {
  return (
    <div className="relative my-6">
      <div
        className="pointer-events-none absolute -left-4 -right-4 h-0 border-b border-black/30 dark:border-white/[0.15]"
        style={dashRight}
      />
      <div className="pointer-events-none absolute -left-4 z-20 h-[2px] w-[2px] -translate-x-1/2 translate-y-[-1px] bg-black/50 dark:bg-white/[0.25]" />
      <div className="pointer-events-none absolute -right-4 z-20 h-[2px] w-[2px] translate-x-1/2 translate-y-[-1px] bg-black/50 dark:bg-white/[0.25]" />
    </div>
  );
}

export function StoryBlocks({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <section key={index}>
          <Divider />
          <Block block={block} />
        </section>
      ))}
    </>
  );
}

function Block({ block }: { block: StoryBlock }) {
  switch (block.kind) {
    case "section":
      return (
        <Reveal>
          <h3 className="mb-1.5 text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {block.title}
          </h3>
          <div className="space-y-2">
            {block.text.map((paragraph, i) => (
              <p
                key={i}
                className="text-[13px] leading-relaxed text-zinc-600 sm:text-[14px] dark:text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      );

    case "stats":
      return (
        <Reveal>
          <div
            className={`grid grid-cols-2 divide-x divide-y divide-black/5 overflow-hidden rounded-xl border border-black/5 bg-zinc-50/80 shadow-sm sm:divide-y-0 dark:divide-white/5 dark:border-white/5 dark:bg-[#09090b]/80 ${
              statColumns[block.items.length] ?? "sm:grid-cols-4"
            }`}
          >
            {block.items.map((item) => (
              <div key={item.label} className="px-3.5 py-3">
                <div className="text-[17px] font-bold leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
                  {item.value}
                </div>
                <div className="mt-1.5 text-[11px] leading-snug text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      );

    case "build":
      return (
        <Reveal>
          <div className="rounded-xl border border-black/5 bg-zinc-50/80 p-4 shadow-sm transition-all duration-300 hover:border-black/10 hover:shadow-md dark:border-white/5 dark:bg-[#09090b]/80 dark:hover:border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                Engineering
              </span>
            </div>
            <h3 className="mt-2 text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {block.title}
            </h3>
            <dl className="mt-3 space-y-2.5">
              <BuildRow label="Problem" value={block.problem} />
              <BuildRow label="Approach" value={block.approach} />
              {block.result && <BuildRow label="Result" value={block.result} />}
            </dl>
            {block.tech && (
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-black/5 pt-3 dark:border-white/5">
                {block.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-black/10 bg-white px-2 py-1 text-[11px] font-medium text-zinc-600 dark:border-white/5 dark:bg-black/40 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      );

    case "quote":
      return (
        <Reveal>
          <figure className="relative overflow-hidden rounded-xl border border-black/5 bg-zinc-50/80 px-4 py-4 shadow-sm dark:border-white/5 dark:bg-[#09090b]/80">
            <Quote className="absolute -right-1 -top-1 h-10 w-10 text-black/[0.04] dark:text-white/[0.06]" />
            <p className="relative text-[15px] font-medium leading-relaxed tracking-tight text-zinc-800 sm:text-[16px] dark:text-zinc-100">
              {block.text}
            </p>
          </figure>
        </Reveal>
      );

    case "milestones":
      return (
        <Reveal>
          <ol className="divide-y divide-black/5 dark:divide-white/5">
            {block.items.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[86px_1fr] items-baseline gap-3 py-2.5 first:pt-0 last:pb-0"
              >
                <time className="text-[11px] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                  {item.date}
                </time>
                <span className="min-w-0">
                  <span className="text-[13px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </span>
                  {item.detail && (
                    <span className="ml-2 text-[12px] text-zinc-500 dark:text-zinc-400">
                      {item.detail}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      );

    case "evidence":
      return (
        <Reveal>
          <h3 className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
            Proof
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {block.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-lg border border-black/5 bg-zinc-50/80 px-3 py-2.5 shadow-sm transition-all duration-300 hover:border-black/10 hover:shadow-md dark:border-white/5 dark:bg-[#09090b]/80 dark:hover:border-white/10"
              >
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-medium text-zinc-800 dark:text-zinc-200">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                    {link.source}
                  </span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
              </Link>
            ))}
          </div>
        </Reveal>
      );
  }
}

function BuildRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[68px_1fr] sm:gap-3">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:pt-[3px] dark:text-zinc-500">
        {label}
      </dt>
      <dd className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300">{value}</dd>
    </div>
  );
}
