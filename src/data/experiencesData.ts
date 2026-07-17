export type ExperiencePosition = {
  role: string;
  type?: string;
  dates: string;
  location: string;
  description?: string;
  tech?: string[];
};

export type ExperienceData = {
  company: string;
  url?: string;
  src: string;
  imageFit?: "contain" | "cover";
  imageZoom?: number;
  positions: ExperiencePosition[];
};

export const experiences: ExperienceData[] = [
  {
    company: "Caracal",
    url: "https://www.caracal.run",
    src: "/experience/caracal.png",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        role: "Founder",
        dates: "Feb 2026 - Present",
        location: "Remote",
        description: `
          Building systems that strengthen trust and security in AI
          Leading development of open-source infrastructure focused on secure, reliable AI agent operations
          Invited by GitHub for Open Source Friday, Maintainer Summit and selected for the GitHub Secure Open Source Fund 2026
          Also backed by Microsoft for Startups, Vercel Open Source Program Spring'26, LFX Mentorship under LF Decentralized Trust
        `,
      },
    ],
  },
  {
    company: "LF Decentralized Trust",
    url: "https://lfdecentralizedtrust.org",
    src: "/experience/lfdt.png",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        role: "Lab Leader",
        dates: "Sep 2025 - Present",
        location: "Remote",
        description: `
          Participated in multiple international Open Source Summits, engaging with CEOs, CTOs, and senior engineers across global technology communities
          Worked closely with leading open-source contributors to advance real-world decentralized trust initiatives
          Leading multiple infrastructure projects, driving the engineering of the project, and leading maintainers
        `,
      },
      {
        role: "LFX Mentor",
        dates: "Jun 2026 - Present",
        location: "Remote",
        description: `
          LFX Mentor for the Caracal project under the LF Decentralized Trust umbrella, focusing on infrastructure and security for AI
          Leading the team and project toward stability, adoption, and sustainability
          Mentoring LFX mentees
        `,
      },
      {
        role: "AI Engineer Intern (LFX Mentorship)",
        type: "Internship",
        dates: "Jun 2025 - Nov 2025",
        location: "Remote",
        description: `
          LFX'25 @ LFDT, building Multi-Agentic AI
          Drove the AI development, multi-agent system, and vector-retrieval and context-memory development in the project
        `,
      },
    ],
  },
  {
    company: "Vercel",
    url: "https://vercel.com/blog/vercel-open-source-program-spring-2026-cohort#caracal",
    src: "/experience/vercel.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        role: "Cohort Member (Vercel OSS Program Spring'26)",
        dates: "Jun 2026 - Present",
        location: "Remote",
        description: `
          Each batch selects only 30 open-source projects globally
          Working with the Vercel community, with access to credits
        `,
      },
    ],
  },
  {
    company: "GitHub",
    url: "https://github.com/open-source/github-secure-open-source-fund",
    src: "/experience/github.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        role: "Cohort Member (GitHub Secure Open Source Fund)",
        dates: "Apr 2026 - Present",
        location: "Remote",
        description: `
          One of the most prestigious programs, selects the top 30 open-source projects globally each year and brings together the best maintainers
          2026 projects include OpenCLAW, FastAPI, LangChain, ONNX, and others
          Backed by GitHub, Stripe, Zerodha, American Express, Datadog, 1Password, Kraken, and others
          Working closely with the GitHub security team and leaders, with invites to the invite-only GitHub Maintainers Summit and GitHub Open Source Friday
        `,
      },
    ],
  },
  {
    company: "Microsoft for Startups",
    url: "https://www.microsoft.com/startups",
    src: "/experience/microsoft.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        role: "Cohort Member",
        dates: "May 2026 - Present",
        location: "Remote",
        description: `
          Backed by Microsoft and its partners with a bulk of AI and deployment credits
          Growth support and, especially, dedicated technical guidance
        `,
      },
    ],
  },
  {
    company: "Founders, Inc.",
    url: "https://f.inc/canopy",
    src: "/experience/foundersinc.jpeg",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        role: "Cohort Member (Canopy Online)",
        dates: "Apr 2026 - Jun 2026",
        location: "Remote",
        description: `
          Canopy is a five-week program designed to help entrepreneurs build startups, supporting creators and builders working in software, hardware, and media
          Participate in weekly lectures from successful billion-dollar startup founders, focusing on fundraising, marketing, and product development
          Low acceptance rate, below 4% globally
        `,
      },
    ],
  },
  {
    company: "GitMesh",
    url: "https://github.com/LF-Decentralized-Trust-labs/gitmesh",
    src: "/experience/gitmesh.jpeg",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        role: "Creator",
        dates: "Jul 2025 - Mar 2026",
        location: "Remote",
        description: `
          GitMesh, backed by LF Decentralized Trust (now under LFDT)
          Youngest-ever LFDT lab leader at 20
          Grew to 100+ GitHub stars
          Used by open-source developers across LFDT, Jaeger (CNCF), the Linux Kernel, Cartography (CNCF), The Linux Foundation, Intel Open Source, Krkn (CNCF), and AIFAQ (Hyperledger Labs)
        `,
      },
    ],
  },
  {
    company: "DeepLearning.AI",
    url: "https://www.deeplearning.ai",
    src: "/experience/dlai.png",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        role: "GANs Mentor",
        dates: "Jun 2025 - Sep 2025",
        location: "Remote",
        description: `
          Mentored global learners in Generative Adversarial Network (GAN) Specializations, providing guidance and debugging support for assignments
        `,
      },
    ],
  },
  {
    company: "Defence Research & Development Organisation (DRDO)",
    url: "https://drdo.gov.in/drdo/en",
    src: "/experience/drdo.svg",
    imageFit: "contain",
    imageZoom: 1,
    positions: [
      {
        role: "AI Researcher & Engineer Intern",
        type: "Internship",
        dates: "May 2025 - Jul 2025",
        location: "Delhi, India · On-site",
        description: `
          Proposed a novel Entanglement-Assisted Quantum Genetic Algorithm (EAQGA) model to optimize mining operations during an ML internship with DRDO SAG (Defense Ministry of India)
        `,
      },
    ],
  },
  {
    company: "aiPlato, Inc.",
    url: "https://aiplato.ai",
    src: "/experience/aiplato.jpeg",
    imageFit: "cover",
    imageZoom: 1,
    positions: [
      {
        role: "Summer Intern",
        type: "Internship",
        dates: "May 2024 - Jul 2024",
        location: "Ahmedabad, India · On-site",
        description: `
          Interned as an NLP Engineer, built NLP systems and an AI RAG system using AI frameworks, AI vector databases, and data science
        `,
      },
    ],
  },
];
