/**
 * Copyright (C) 2026 Garudex Labs.  All Rights Reserved.
 * Caracal, a product of Garudex Labs
 *
 * Organisations and the individual roles held at each, every role linking to its own story page.
 */

export type ExperiencePosition = {
  slug: string;
  role: string;
  type?: string;
  dates: string;
  location: string;
};

export type ExperienceData = {
  slug: string;
  company: string;
  short?: string;
  url?: string;
  src: string;
  imageFit?: "contain" | "cover";
  imageZoom?: number;
  positions: ExperiencePosition[];
};

export const experiences: ExperienceData[] = [
  {
    slug: "caracal",
    company: "Caracal",
    url: "https://www.caracal.run",
    src: "/experience/caracal.png",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        slug: "founder",
        role: "Founder",
        dates: "Feb 2026 - Present",
        location: "Remote",
      },
    ],
  },
  {
    slug: "lf-decentralized-trust",
    company: "LF Decentralized Trust",
    short: "LF Decentralized Trust",
    url: "https://lfdecentralizedtrust.org",
    src: "/experience/lfdt.png",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        slug: "lab-leader",
        role: "Lab Leader",
        dates: "Sep 2025 - Present",
        location: "Remote",
      },
      {
        slug: "lfx-mentor",
        role: "LFX Mentor",
        dates: "Jun 2026 - Present",
        location: "Remote",
      },
      {
        slug: "lfx-mentee",
        role: "LFX Mentee",
        type: "Mentorship",
        dates: "Jun 2025 - Nov 2025",
        location: "Remote",
      },
    ],
  },
  {
    slug: "vercel",
    company: "Vercel",
    url: "https://vercel.com/blog/vercel-open-source-program-spring-2026-cohort#caracal",
    src: "/experience/vercel.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        slug: "oss-program",
        role: "Open Source Program Cohort Member",
        dates: "Jun 2026 - Present",
        location: "Remote",
      },
    ],
  },
  {
    slug: "github",
    company: "GitHub",
    url: "https://github.com/open-source/github-secure-open-source-fund",
    src: "/experience/github.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        slug: "secure-open-source-fund",
        role: "Project Maintainer, Secure Open Source Fund",
        dates: "Apr 2026 - Present",
        location: "Remote",
      },
    ],
  },
  {
    slug: "microsoft-for-startups",
    company: "Microsoft for Startups",
    url: "https://www.microsoft.com/startups",
    src: "/experience/microsoft.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        slug: "cohort-member",
        role: "Cohort Member",
        dates: "May 2026 - Present",
        location: "Remote",
      },
    ],
  },
  {
    slug: "founders-inc",
    company: "Founders, Inc.",
    url: "https://f.inc/canopy",
    src: "/experience/foundersinc.jpeg",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        slug: "canopy",
        role: "Canopy Online Cohort Member",
        dates: "Apr 2026 - Jun 2026",
        location: "Remote",
      },
    ],
  },
  {
    slug: "gitmesh",
    company: "GitMesh",
    url: "https://github.com/LF-Decentralized-Trust-labs/gitmesh",
    src: "/experience/gitmesh.jpeg",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        slug: "creator",
        role: "Project Lead & Creator",
        dates: "Jul 2025 - Mar 2026",
        location: "Remote",
      },
    ],
  },
  {
    slug: "deeplearning-ai",
    company: "DeepLearning.AI",
    url: "https://www.deeplearning.ai",
    src: "/experience/dlai.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        slug: "gans-mentor",
        role: "GANs Mentor",
        dates: "Jun 2025 - Sep 2025",
        location: "Remote",
      },
    ],
  },
  {
    slug: "drdo",
    company: "Defence Research & Development Organisation (DRDO)",
    short: "DRDO",
    url: "https://drdo.gov.in/drdo/en",
    src: "/experience/drdo.svg",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        slug: "ai-researcher",
        role: "AI Researcher & Engineer Intern",
        type: "Internship",
        dates: "May 2025 - Jul 2025",
        location: "Delhi, India · On-site",
      },
    ],
  },
  {
    slug: "aiplato",
    company: "aiPlato, Inc.",
    short: "aiPlato",
    url: "https://aiplato.ai",
    src: "/experience/aiplato.jpeg",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        slug: "nlp-engineer",
        role: "NLP Engineering Intern",
        type: "Internship",
        dates: "May 2024 - Jul 2024",
        location: "Ahmedabad, India · On-site",
      },
    ],
  },
];

export type RoleRef = {
  experience: ExperienceData;
  position: ExperiencePosition;
};

export const roles: RoleRef[] = experiences.flatMap((experience) =>
  experience.positions.map((position) => ({ experience, position })),
);

export function findRole(org: string, role: string): RoleRef | undefined {
  return roles.find(
    (item) => item.experience.slug === org && item.position.slug === role,
  );
}
