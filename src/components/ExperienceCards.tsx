"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences, type ExperienceData } from "@/data/experiencesData";

const dashed = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
} as const;

function TypeBadge({ label }: { label: string }) {
  return (
    <span className="whitespace-nowrap rounded-[4px] border border-zinc-300/50 bg-zinc-200/50 px-1.5 py-[1px] text-[11px] font-medium text-zinc-600 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-400">
      {label}
    </span>
  );
}

function CompanyLogo({ experience }: { experience: ExperienceData }) {
  return (
    <div className="size-10 shrink-0 rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[7px] border border-black/5 bg-white dark:border-black/20">
        <Image
          src={experience.src}
          alt={experience.company}
          width={40}
          height={40}
          sizes="40px"
          quality={60}
          unoptimized={experience.src.toLowerCase().endsWith(".svg")}
          style={experience.imageZoom ? { transform: `scale(${experience.imageZoom})` } : undefined}
          className={`${experience.imageFit === "contain" ? "object-contain" : "object-cover"} h-full w-full p-0.5`}
        />
      </div>
    </div>
  );
}

export function ExperienceCards({ limit }: { limit?: number }) {
  const [showAll, setShowAll] = useState(false);

  const canCollapse = typeof limit === "number" && experiences.length > limit;
  const visible = canCollapse && !showAll ? experiences.slice(0, limit) : experiences;

  return (
    <div className="block">
      {visible.map((experience) => {
        const grouped = experience.positions.length > 1;
        const primary = experience.positions[0];

        return (
          <div key={experience.slug} className="relative">
            <div
              className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] z-10 h-0 border-b border-black/30 dark:border-white/[0.15]"
              style={dashed}
            />

            {grouped ? (
              <div className="py-3.5 sm:py-4">
                <div className="group flex items-center gap-3 sm:gap-4">
                  <CompanyLogo experience={experience} />
                  <span className="text-[15px] font-bold leading-tight tracking-[-0.01em] text-zinc-900 sm:text-[17px] dark:text-zinc-100">
                    {experience.company}
                  </span>
                </div>

                <div className="ml-5 mt-1.5 border-l border-black/10 dark:border-white/[0.12]">
                  {experience.positions.map((position) => (
                    <div key={position.slug} className="relative pl-6">
                      <span className="absolute left-0 top-[19px] size-1.5 -translate-x-1/2 rounded-full bg-zinc-300 ring-4 ring-white dark:bg-zinc-600 dark:ring-[#0a0a0a]" />
                      <Link
                        href={`/experience/${experience.slug}/${position.slug}`}
                        className="group -mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/25"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[14px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[15px] dark:text-zinc-100">
                              {position.role}
                            </span>
                            {position.type && <TypeBadge label={position.type} />}
                          </div>
                          <div className="mt-0.5 text-[12px] text-zinc-500 sm:text-[13px] dark:text-zinc-400">
                            {position.location}
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-2.5 text-[12px] font-medium text-zinc-900 sm:text-[13px] dark:text-zinc-100">
                          <span>{position.dates}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-zinc-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={`/experience/${experience.slug}/${primary.slug}`}
                className="group relative z-20 -mx-4 flex items-center gap-3.5 rounded-lg px-4 py-4 transition-colors hover:bg-zinc-50 sm:gap-4 dark:hover:bg-zinc-900/25"
              >
                <CompanyLogo experience={experience} />

                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-bold leading-tight tracking-[-0.01em] text-zinc-900 sm:text-[16px] dark:text-zinc-100">
                      {experience.company}
                    </span>
                    {primary.type && <TypeBadge label={primary.type} />}
                  </div>
                  <span className="truncate text-[13px] text-zinc-600 sm:text-[14px] dark:text-zinc-400">
                    {primary.role}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <div className="hidden flex-col items-end gap-0.5 text-right sm:flex">
                    <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100">
                      {primary.dates}
                    </span>
                    <span className="text-[12px] text-zinc-500 dark:text-zinc-400">
                      {primary.location}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100" />
                </div>
              </Link>
            )}
          </div>
        );
      })}

      {canCollapse && (
        <div className="relative -mx-4 flex justify-center rounded-b-lg px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/20">
          <div
            className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
            style={dashed}
          />
          <button type="button" onClick={() => setShowAll((value) => !value)} className="group relative block">
            <div className="pointer-events-none absolute -inset-[5px] rounded-[11px] border border-black/5 transition-colors duration-300 group-hover:border-black/10 dark:border-white/5 dark:group-hover:border-white/10" />
            <div className="relative flex items-center gap-1.5 rounded-[6px] border border-black/5 bg-zinc-50 px-4 py-2 text-[13px] font-medium text-zinc-600 shadow-sm shadow-black/20 transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/5 dark:bg-[#09090b] dark:text-zinc-400 dark:shadow-lg dark:shadow-black/80 dark:hover:bg-[#121214] dark:hover:text-zinc-100">
              {showAll ? "Show less" : "View all"}
              <svg
                viewBox="0 0 24 24"
                className={`h-3.5 w-3.5 text-zinc-500 transition-transform duration-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
