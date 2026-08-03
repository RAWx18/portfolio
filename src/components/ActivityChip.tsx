"use client";

import { useState } from "react";
import Image from "next/image";
import * as HoverCard from "@radix-ui/react-hover-card";
import { AnimatePresence, motion } from "framer-motion";

export type Activity = {
  name: string;
  image?: string;
  caption?: string;
  shape?: "landscape" | "portrait";
};

export function ActivityChip({ activity }: { activity: Activity }) {
  const [isOpen, setIsOpen] = useState(false);

  const chip = (
    <div
      className={`grow flex items-center justify-center px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0a0a0a] dark:hover:bg-[#121214] border border-black/30 dark:border-white/[0.15] rounded-[6px] transition-colors duration-200 ${
        activity.image ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400 text-center">
        {activity.name}
      </span>
    </div>
  );

  if (!activity.image) {
    return chip;
  }

  return (
    <HoverCard.Root open={isOpen} onOpenChange={setIsOpen} openDelay={80} closeDelay={120}>
      <HoverCard.Trigger asChild>{chip}</HoverCard.Trigger>
      <AnimatePresence>
        {isOpen && (
          <HoverCard.Portal forceMount>
            <HoverCard.Content
              asChild
              forceMount
              side="top"
              align="center"
              sideOffset={8}
              className="z-50 select-none outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 3, scale: 0.985 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="w-[260px] sm:w-[300px] overflow-hidden rounded-xl border border-black/5 bg-white/95 shadow-2xl backdrop-blur-md dark:border-white/5 dark:bg-[#0c0c0e]/95"
              >
                <div
                  className={`relative w-full bg-zinc-100 dark:bg-[#0a0a0c] ${
                    activity.shape === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    sizes="300px"
                    quality={75}
                    className="object-cover"
                  />
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[12px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {activity.name}
                  </p>
                  {activity.caption && (
                    <p className="mt-0.5 text-[11px] leading-snug text-zinc-500 dark:text-zinc-400">
                      {activity.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            </HoverCard.Content>
          </HoverCard.Portal>
        )}
      </AnimatePresence>
    </HoverCard.Root>
  );
}
