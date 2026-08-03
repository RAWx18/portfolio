/**
 * Copyright (C) 2026 Garudex Labs.  All Rights Reserved.
 * Caracal, a product of Garudex Labs
 *
 * A pinned photograph from an experience, with a caption that reveals on hover.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { StoryPhoto } from "@/data/experienceStories";

const shapeClass = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[2/1]",
} as const;

const tilts = [-2.6, 1.8, -1.4, 2.4, -3.2, 1.2];

export function PhotoCard({ photo, index = 0 }: { photo: StoryPhoto; index?: number }) {
  const [failed, setFailed] = useState(false);

  const card = (
    <figure
      className="group/photo relative block rotate-[var(--tilt)] transition-transform duration-500 ease-out hover:z-30 hover:rotate-0"
      style={{ "--tilt": `${tilts[index % tilts.length]}deg` } as React.CSSProperties}
    >
      <div className="rounded-[10px] border border-black/10 bg-white p-1 shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition-all duration-500 ease-out group-hover/photo:-translate-y-1 group-hover/photo:shadow-[0_14px_30px_rgba(0,0,0,0.18)] dark:border-white/10 dark:bg-[#141417] dark:shadow-[0_4px_14px_rgba(0,0,0,0.5)]">
        <div
          className={`relative overflow-hidden rounded-[6px] bg-zinc-100 dark:bg-[#0a0a0c] ${
            shapeClass[photo.shape ?? "landscape"]
          }`}
        >
          {failed || !photo.src ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-3 text-center">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage: "radial-gradient(currentColor 0.5px, transparent 0.5px)",
                  backgroundSize: "9px 9px",
                  color: "rgb(161 161 170 / 0.35)",
                }}
              />
              <ImageIcon className="relative h-3.5 w-3.5 text-zinc-400 dark:text-zinc-600" />
              <span className="relative max-w-[22ch] text-[10px] leading-snug text-zinc-400 dark:text-zinc-600">
                {photo.alt}
              </span>
            </div>
          ) : (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 240px, 50vw"
              quality={75}
              onError={() => setFailed(true)}
              className="object-cover transition-transform duration-700 ease-out group-hover/photo:scale-[1.06]"
            />
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 via-black/70 to-transparent px-2.5 pb-2 pt-6 transition-transform duration-300 ease-out group-hover/photo:translate-y-0">
            <p className="text-[11px] leading-snug text-white">{photo.caption}</p>
            {photo.href && (
              <span className="mt-1 flex items-center gap-1 text-[10px] font-medium text-white/70">
                {photo.video ? "Watch" : "Source"} <ArrowUpRight className="h-2.5 w-2.5" />
              </span>
            )}
          </div>

          {photo.video && (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-out group-hover/photo:scale-110">
                <svg className="ml-0.5 h-3.5 w-3.5 fill-current text-zinc-900" viewBox="0 0 24 24">
                  <path d="M5.25 5.653v12.694c0 .856.926 1.39 1.668.958l11.1-6.347a1.125 1.125 0 000-1.916L6.918 4.695c-.742-.432-1.668.102-1.668.958z" />
                </svg>
              </span>
            </span>
          )}
        </div>
      </div>

      {photo.meta && (
        <figcaption className="mt-1.5 px-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500">
          {photo.meta}
        </figcaption>
      )}
    </figure>
  );

  return photo.href ? (
    <Link href={photo.href} target="_blank" rel="noopener noreferrer" className="block">
      {card}
    </Link>
  ) : (
    card
  );
}
