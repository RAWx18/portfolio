import { siteUrl } from "@/lib/site";
import { experiences, roles, type ExperienceData } from "@/data/experiencesData";

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

const months: Record<string, string> = {
  jan: "01",
  feb: "02",
  mar: "03",
  apr: "04",
  may: "05",
  jun: "06",
  jul: "07",
  aug: "08",
  sep: "09",
  oct: "10",
  nov: "11",
  dec: "12",
};

/** Turns "Feb 2026 - Present" into ISO-8601 year-month bounds. */
export function parseDates(dates: string) {
  const toIso = (value: string) => {
    const match = value.trim().match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
    if (!match) return undefined;
    const month = months[match[1].toLowerCase()];
    return month ? `${match[2]}-${month}` : undefined;
  };

  const [start, end] = dates.split(" - ").map((part) => part.trim());
  return { startDate: toIso(start), endDate: end ? toIso(end) : undefined };
}

export function absolute(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

export function organizationId(experience: ExperienceData) {
  return `${siteUrl}/#org-${experience.slug}`;
}

export function organizationNode(experience: ExperienceData) {
  return {
    "@type": "Organization",
    "@id": organizationId(experience),
    name: experience.company,
    url: experience.url,
    logo: absolute(experience.src),
    ...(experience.url ? { sameAs: [experience.url] } : {}),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

/** Every role page, listed so crawlers can reach the whole experience graph. */
export function roleListNode() {
  return {
    "@type": "ItemList",
    "@id": `${siteUrl}/#experience`,
    name: "Experience of Ryan Madhuwala",
    itemListElement: roles.map(({ experience, position }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${position.role} · ${experience.company}`,
      url: `${siteUrl}/experience/${experience.slug}/${position.slug}`,
    })),
  };
}

export function affiliationNodes() {
  return experiences.map((experience) => ({
    "@type": "Organization",
    "@id": organizationId(experience),
    name: experience.company,
    ...(experience.url ? { url: experience.url } : {}),
  }));
}
