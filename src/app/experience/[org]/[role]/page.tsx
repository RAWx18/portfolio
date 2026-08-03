/**
 * Copyright (C) 2026 Garudex Labs.  All Rights Reserved.
 * Caracal, a product of Garudex Labs
 *
 * Story page for a single role, with the narrative centred and its photographs in the margins.
 */

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink, MapPin, CalendarDays } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { RightNavbar } from "@/components/RightNavbar";
import { FooterBackground } from "@/components/FooterBackground";
import { roles, findRole, type RoleRef } from "@/data/experiencesData";
import { roleStories, findStory } from "@/data/experienceStories";
import { StoryLane } from "@/components/story/StoryLane";
import { Divider } from "@/components/story/StoryBlocks";
import { Reveal } from "@/components/story/Reveal";

const dashDown = {
  maskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
} as const;

const dashRight = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
} as const;

export async function generateStaticParams() {
  return roleStories.map((story) => ({ org: story.org, role: story.role }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ org: string; role: string }>;
}): Promise<Metadata> {
  const { org, role } = await params;
  const story = findStory(org, role);
  const found = findRole(org, role);
  if (!story || !found) return {};

  const name = found.experience.short ?? found.experience.company;
  const title = `${found.position.role} · ${name}`;

  return {
    title,
    description: story.lede,
    alternates: { canonical: `/experience/${org}/${role}` },
    openGraph: {
      title: `${title} · Ryan Madhuwala`,
      description: story.lede,
      url: `/experience/${org}/${role}`,
      images: [{ url: found.experience.src, alt: found.experience.company }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Ryan Madhuwala`,
      description: story.lede,
      images: [found.experience.src],
    },
  };
}

export default async function RoleStoryPage({
  params,
}: {
  params: Promise<{ org: string; role: string }>;
}) {
  const { org, role } = await params;
  const story = findStory(org, role);
  const found = findRole(org, role);

  if (!story || !found) {
    notFound();
  }

  const { experience, position } = found;
  const name = experience.short ?? experience.company;
  const siblings = experience.positions.filter((item) => item.slug !== position.slug);
  const index = roles.findIndex(
    (item) => item.experience.slug === org && item.position.slug === role,
  );
  const previous = index > 0 ? roles[index - 1] : undefined;
  const next = index < roles.length - 1 ? roles[index + 1] : undefined;

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300">
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={dashDown} />
      <div className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={dashDown} />

      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={dashRight} />
      <div className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={dashRight} />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: "22vh", left: "30%" },
        { top: "22vh", right: "30%" },
        { top: "calc(22vh + 112px)", left: "30%" },
        { top: "calc(22vh + 112px)", right: "30%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      {/* Cell 1: Dot Matrix Background */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto">
        <FooterBackground />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Cell 2: Header with Back Button + Title + Controls */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-5">
            <Link
              href="/#experience"
              className="group flex items-center justify-center w-8 h-8 shrink-0 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </Link>
            <div className="flex min-w-0 flex-col justify-center">
              <h1 className="truncate text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                {name}
              </h1>
              <p className="truncate text-[12px] text-zinc-500 dark:text-zinc-400 font-medium">
                Experience/{position.role}
              </p>
            </div>
          </div>

          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-[calc(22vh+112px)] pb-16">
        <StoryLane
          photos={story.photos}
          blocks={story.blocks}
          header={
            <Reveal>
              <div className="mt-8 flex items-center gap-2.5">
                <span className="relative size-6 shrink-0 overflow-hidden rounded-[6px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#111111]">
                  <Image
                    src={experience.src}
                    alt={experience.company}
                    fill
                    sizes="24px"
                    unoptimized={experience.src.toLowerCase().endsWith(".svg")}
                    className={`${experience.imageFit === "contain" ? "object-contain" : "object-cover"} p-[2px]`}
                  />
                </span>
                {experience.url ? (
                  <a
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {experience.company}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ) : (
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                    {experience.company}
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-[22px] sm:text-[26px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.15]">
                {story.headline}
              </h2>

              <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                {story.lede}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-md border border-black/10 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:border-white/5 dark:bg-[#09090b] dark:text-zinc-300">
                  <CalendarDays className="h-3 w-3" /> {position.dates}
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-black/10 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:border-white/5 dark:bg-[#09090b] dark:text-zinc-300">
                  <MapPin className="h-3 w-3" /> {position.location}
                </span>
                {position.type && (
                  <span className="rounded-md border border-zinc-300/50 bg-zinc-200/50 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-400">
                    {position.type}
                  </span>
                )}
              </div>
            </Reveal>
          }
          footer={
            <>
              {siblings.length > 0 && (
                <>
                  <Divider />
                  <Reveal>
                    <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                      More at {name}
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {siblings.map((sibling) => (
                        <Link
                          key={sibling.slug}
                          href={`/experience/${experience.slug}/${sibling.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-lg border border-black/5 bg-zinc-50/80 px-3 py-2.5 shadow-sm transition-all duration-300 hover:border-black/10 hover:shadow-md dark:border-white/5 dark:bg-[#09090b]/80 dark:hover:border-white/10"
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-[13px] font-medium text-zinc-800 dark:text-zinc-200">
                              {sibling.role}
                            </span>
                            <span className="mt-0.5 block truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                              {sibling.dates}
                            </span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                        </Link>
                      ))}
                    </div>
                  </Reveal>
                </>
              )}

              <Divider />

              <Reveal>
                <div className="grid gap-2 sm:grid-cols-2">
                  <NavCard target={previous} direction="previous" />
                  <NavCard target={next} direction="next" />
                </div>
              </Reveal>
            </>
          }
        />
      </div>
    </div>
  );
}

function NavCard({
  target,
  direction,
}: {
  target?: RoleRef;
  direction: "previous" | "next";
}) {
  if (!target) return <div className="hidden sm:block" />;

  const isNext = direction === "next";

  return (
    <Link
      href={`/experience/${target.experience.slug}/${target.position.slug}`}
      className={`group flex flex-col gap-1 rounded-lg border border-black/5 bg-zinc-50/80 px-3.5 py-3 shadow-sm transition-all duration-300 hover:border-black/10 hover:shadow-md dark:border-white/5 dark:bg-[#09090b]/80 dark:hover:border-white/10 ${
        isNext ? "sm:items-end sm:text-right" : ""
      }`}
    >
      <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
        {!isNext && <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />}
        {direction}
        {isNext && <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />}
      </span>
      <span className="w-full truncate text-[14px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {target.position.role}
      </span>
      <span className="w-full truncate text-[12px] text-zinc-500 dark:text-zinc-400">
        {target.experience.short ?? target.experience.company}
      </span>
    </Link>
  );
}
