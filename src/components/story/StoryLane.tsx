import type { CSSProperties, ReactNode } from "react";
import type { StoryBlock, StoryPhoto } from "@/data/experienceStories";
import { StoryBlocks } from "@/components/story/StoryBlocks";
import { PhotoCard } from "@/components/story/PhotoCard";
import { Reveal } from "@/components/story/Reveal";

// Insets are a share of the rail width so the spacing scales with the gutter.
const insets = [7, 19, 11, 24];

const widths = [
  "w-[164px] lg:w-[202px] xl:w-[246px]",
  "w-[148px] lg:w-[178px] xl:w-[214px]",
];

type Placed = {
  photo: StoryPhoto;
  index: number;
  top: number;
  side: "left" | "right";
};

function place(photos: StoryPhoto[]): Placed[] {
  const span = Math.min(82, 21 * photos.length);
  const step = photos.length > 1 ? span / (photos.length - 1) : 0;

  return photos.map((photo, index) => ({
    photo,
    index,
    top: photos.length === 1 ? 26 : 4 + index * step,
    side: index % 2 === 0 ? "left" : "right",
  }));
}

export function StoryLane({
  photos,
  blocks,
  header,
  footer,
}: {
  photos: StoryPhoto[];
  blocks: StoryBlock[];
  header: ReactNode;
  footer: ReactNode;
}) {
  const placed = place(photos);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[30%_40%_30%]">
      <Rail items={placed.filter((item) => item.side === "left")} side="left" />
      <div className="min-w-0 px-4">
        {header}

        {photos.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-6 md:hidden">
            {photos.map((photo, i) => (
              <PhotoCard key={photo.src} photo={photo} index={i} />
            ))}
          </div>
        )}

        <article>
          <StoryBlocks blocks={blocks} />
        </article>
        {footer}
      </div>

      <Rail items={placed.filter((item) => item.side === "right")} side="right" />
    </div>
  );
}

function Rail({ items, side }: { items: Placed[]; side: "left" | "right" }) {
  if (items.length === 0) {
    return <div className="hidden md:block" />;
  }

  return (
    <aside
      aria-label={`Photographs from this role (${side})`}
      className="pointer-events-none relative hidden md:block"
    >
      {items.map(({ photo, index, top }) => {
        const inset = `${insets[index % insets.length]}%`;
        const position: CSSProperties =
          side === "left" ? { right: inset } : { left: inset };

        return (
          <div
            key={photo.src}
            className={`pointer-events-auto absolute ${widths[index % widths.length]}`}
            style={{ top: `${top}%`, zIndex: 10 + index, ...position }}
          >
            <Reveal delay={0.05}>
              <PhotoCard photo={photo} index={index} />
            </Reveal>
          </div>
        );
      })}
    </aside>
  );
}
