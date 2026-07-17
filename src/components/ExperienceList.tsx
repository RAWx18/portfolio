"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences, type ExperiencePosition } from "@/data/experiencesData";

const dashRight = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
} as const;

function TypeBadge({ label }: { label: string }) {
  return (
    <span className="self-center whitespace-nowrap rounded-[4px] border border-zinc-300/50 bg-zinc-200/50 px-1.5 py-[1px] text-[11px] font-medium text-zinc-600 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-400">
      {label}
    </span>
  );
}

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute -right-5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500 transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

function CompanyLogo({
  src,
  alt,
  imageFit,
  imageZoom,
}: {
  src: string;
  alt: string;
  imageFit?: "contain" | "cover";
  imageZoom?: number;
}) {
  return (
    <div className="size-10 shrink-0 rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[7px] border border-black/5 bg-white dark:border-black/20">
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          sizes="40px"
          quality={60}
          unoptimized={src.toLowerCase().endsWith(".svg")}
          style={imageZoom ? { transform: `scale(${imageZoom})` } : undefined}
          className={`${imageFit === "contain" ? "object-contain" : "object-cover"} h-full w-full p-0.5`}
        />
      </div>
    </div>
  );
}

function PositionDetails({
  position,
  isOpen,
}: {
  position: ExperiencePosition;
  isOpen: boolean;
}) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div
          className={`${
            isOpen ? "pt-1 pb-4 opacity-100 translate-y-0" : "pt-0 pb-0 opacity-0 -translate-y-2"
          } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] text-zinc-600 dark:text-zinc-400`}
        >
          <ul className="space-y-2 text-[13px] leading-relaxed">
            {(position.description ?? "")
              .split("\n")
              .filter((line) => line.trim() !== "")
              .map((point, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="mt-[2px] text-[14px] leading-none text-zinc-400 dark:text-zinc-500">
                    •
                  </span>
                  <span>{point.trim()}</span>
                </li>
              ))}
          </ul>
          {position.tech && (
            <div className="mt-4 flex flex-wrap gap-2">
              {position.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[4px] border border-zinc-200/50 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:border-zinc-800/50 dark:bg-[#111111] dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ExperienceList({ limit }: { limit?: number }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const canCollapse = typeof limit === "number" && experiences.length > limit;
  const visible =
    canCollapse && !showAll ? experiences.slice(0, limit) : experiences;

  return (
    <div className="block">
      {visible.map((company, cIdx) => {
        const isLast = cIdx === visible.length - 1;
        const grouped = company.positions.length > 1;
        const firstPosition = company.positions[0];
        const singleKey = `${cIdx}-0`;
        const singleOpen = openKey === singleKey;
        const singleHasDetails = Boolean(
          firstPosition.description && firstPosition.description.trim(),
        );

        return (
          <div key={cIdx} className="group relative">
            {!isLast ? (
              <div
                className="pointer-events-none absolute bottom-0 left-[-16px] right-[-16px] z-10 h-0 border-b border-black/30 dark:border-white/[0.15]"
                style={dashRight}
              />
            ) : (
              <>
                <div
                  className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] z-10 h-0 border-b border-black/30 dark:border-white/[0.15]"
                  style={dashRight}
                />
                <div className="pointer-events-none absolute bottom-0 -left-4 z-20 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-black/40 dark:bg-white/[0.25]" />
                <div className="pointer-events-none absolute bottom-0 -right-4 z-20 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-black/40 dark:bg-white/[0.25]" />
              </>
            )}

            {grouped ? (
              <div className="py-3.5 sm:py-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <CompanyLogo
                    src={company.src}
                    alt={company.company}
                    imageFit={company.imageFit}
                    imageZoom={company.imageZoom}
                  />
                  <span className="text-[15px] font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                    {company.company}
                  </span>
                </div>

                <div className="ml-5 mt-1.5 border-l border-black/10 dark:border-white/[0.12]">
                  {company.positions.map((position, pIdx) => {
                    const key = `${cIdx}-${pIdx}`;
                    const isOpen = openKey === key;
                    const hasDetails = Boolean(
                      position.description && position.description.trim(),
                    );

                    return (
                      <div key={pIdx} className="relative pl-6">
                        <span className="absolute left-0 top-[13px] size-1.5 -translate-x-1/2 rounded-full bg-zinc-300 ring-4 ring-white dark:bg-zinc-600 dark:ring-[#0a0a0a]" />
                        <div
                          className={`-mx-2 rounded-lg px-2 py-2 transition-colors ${
                            hasDetails
                              ? "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/20"
                              : ""
                          }`}
                          onClick={
                            hasDetails ? () => setOpenKey(isOpen ? null : key) : undefined
                          }
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[14px] font-semibold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-[15px]">
                                  {position.role}
                                </span>
                                {position.type && <TypeBadge label={position.type} />}
                              </div>
                              <div className="mt-0.5 text-[12px] text-zinc-500 dark:text-zinc-400 sm:text-[13px]">
                                {position.location}
                              </div>
                            </div>
                            <div className="relative flex shrink-0 items-center pr-5 text-[12px] font-medium text-zinc-900 dark:text-zinc-100 sm:text-[13px]">
                              <span>{position.dates}</span>
                              {hasDetails && <Chevron isOpen={isOpen} />}
                            </div>
                          </div>
                          {hasDetails && <PositionDetails position={position} isOpen={isOpen} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <>
                <div
                  className={`relative z-20 -mx-4 flex flex-col items-start gap-2.5 rounded-lg px-4 py-3.5 transition-colors sm:gap-3 sm:py-4 2xl:flex-row 2xl:items-center 2xl:justify-between ${
                    singleHasDetails
                      ? "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/20"
                      : ""
                  }`}
                  onClick={
                    singleHasDetails
                      ? () => setOpenKey(singleOpen ? null : singleKey)
                      : undefined
                  }
                >
                  <div className="flex w-full min-w-0 flex-1 items-start gap-3 sm:gap-4">
                    <CompanyLogo
                      src={company.src}
                      alt={company.company}
                      imageFit={company.imageFit}
                      imageZoom={company.imageZoom}
                    />
                    <div className="flex min-w-0 flex-col gap-0.5 pr-2 sm:pr-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[14px] font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                          {company.company}
                        </span>
                        {firstPosition.type && <TypeBadge label={firstPosition.type} />}
                      </div>
                      <span className="truncate text-[14px] text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
                        {firstPosition.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-0.5 pl-[52px] pr-5 text-left sm:pl-[56px] 2xl:items-end 2xl:pl-0 2xl:text-right">
                    <div className="relative flex items-center text-[13px] font-medium text-zinc-900 dark:text-zinc-100 sm:text-[14px]">
                      <span>{firstPosition.dates}</span>
                      {singleHasDetails && <Chevron isOpen={singleOpen} />}
                    </div>
                    <span className="text-[13px] text-zinc-500 dark:text-zinc-400 sm:text-[14px]">
                      {firstPosition.location}
                    </span>
                  </div>
                </div>
                {singleHasDetails && (
                  <div className="pl-[52px] pr-4 sm:pl-[56px]">
                    <PositionDetails position={firstPosition} isOpen={singleOpen} />
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
      {canCollapse && (
        <div className="relative -mx-4 flex justify-center rounded-b-lg px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/20">
          <div
            className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]"
            style={dashRight}
          />
          <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
          <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="group relative block"
          >
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
