export type StoryPhoto = {
  src: string;
  alt: string;
  caption: string;
  meta?: string;
  shape?: "landscape" | "portrait" | "square" | "wide";
  href?: string;
  video?: boolean;
};

export type StoryBlock =
  | { kind: "section"; title: string; text: string[] }
  | { kind: "stats"; items: { value: string; label: string }[] }
  | {
      kind: "build";
      title: string;
      problem: string;
      approach: string;
      result?: string;
      tech?: string[];
    }
  | { kind: "quote"; text: string }
  | { kind: "milestones"; items: { date: string; title: string; detail?: string }[] }
  | { kind: "evidence"; links: { label: string; href: string; source: string }[] };

export type RoleStory = {
  org: string;
  role: string;
  headline: string;
  lede: string;
  /** Slugs from projectsData that this role produced or contributed to. */
  related?: string[];
  photos: StoryPhoto[];
  blocks: StoryBlock[];
};

export const roleStories: RoleStory[] = [
  {
    org: "caracal",
    role: "founder",
    headline: "Authority, not credentials, for AI agents",
    lede: "Agents are reaching production with long-lived API keys in their environment, broader access than any task needs, and no answer to the question auditors actually ask: which agent did this, under whose authority?",
    related: ["caracal"],
    photos: [
      {
        src: "/experience/story/caracal/osf.jpg",
        alt: "GitHub Open Source Friday episode on Caracal",
        caption:
          "Open Source Friday with Kevin Crosby, Senior Director at GitHub — walking through Caracal live.",
        meta: "GitHub · Open Source Friday",
        shape: "wide",
        href: "https://www.youtube.com/live/tZ4FdO-zjeE",
        video: true,
      },
      {
        src: "/experience/story/caracal/speaker.jpeg",
        alt: "Speaking at the Linux Foundation's Open Source Summit",
        caption: "At the podium, Linux Foundation Open Source Summit.",
        meta: "Open Source Summit",
        shape: "portrait",
      },
      {
        src: "/experience/story/caracal/opensearch_eu.jpeg",
        alt: "OpenSearchCon Europe",
        caption: "OpenSearchCon Europe, Prague.",
        meta: "OpenSearchCon EU",
        shape: "landscape",
      },
      {
        src: "/experience/story/caracal/ops_eu.jpeg",
        alt: "Hallway conversation at OpenSearchCon Europe",
        caption: "The hallway track in Prague, where most of the useful feedback happens.",
        meta: "OpenSearchCon EU",
        shape: "landscape",
      },
      {
        src: "/experience/story/caracal/yg_entrepreneur.jpeg",
        alt: "On a panel as a young entrepreneur",
        caption: "On a panel, explaining why agent security is an infrastructure problem.",
        meta: "Panel",
        shape: "landscape",
      },
      {
        src: "/experience/story/caracal/ef.jpeg",
        alt: "At Entrepreneurs First",
        caption: "At Entrepreneur First.",
        meta: "EF",
        shape: "portrait",
      },
      {
        src: "/experience/story/caracal/ceo_digiyatra.jpeg",
        alt: "In conversation with DigiYatra's CEO",
        caption: "With DigiYatra's CEO between sessions.",
        meta: "Open Source Summit",
        shape: "landscape",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "4", label: "Orgs backing it" },
          { value: "Top 50", label: "GitHub SOSF '26" },
          { value: "30", label: "Vercel OSS cohort" },
          { value: "100%", label: "Open source" },
        ],
      },
      {
        kind: "section",
        title: "The gap",
        text: [
          "One prompt injection, leaked key or runaway loop turns an assistant into an incident. Security reviews block launches. Auditors have nothing to inspect.",
          "Nothing in the existing stack closes it. Identity providers register agents but never see their actions. Secrets managers hand the credential to the workload, so a compromised agent is a leaked secret. API gateways route and rate-limit without deciding anything.",
        ],
      },
      {
        kind: "build",
        title: "The missing control plane",
        problem:
          "Agents need real access to do useful work, but nothing decides what they may do before they do it, and nothing proves what they did afterwards.",
        approach:
          "Agents never receive upstream credentials for gateway-mediated calls. They carry mandates — short-lived, signed grants of authority that can only shrink as work is delegated — and the gateway injects the real credential at call time.",
        result:
          "Every action is policy-approved before it runs, scoped to exactly what was delegated, revocable in one call, and recorded as tamper-evident evidence.",
        tech: [
          "OAuth 2.0 token exchange",
          "OPA",
          "MCP",
          "Policy engine",
          "Signed mandates",
          "Append-only audit",
        ],
      },
      {
        kind: "quote",
        text: "Gateway-mediated agents never hold upstream credentials. Least privilege is enforced, not requested.",
      },
      {
        kind: "section",
        title: "What that gives a team",
        text: [
          "No standing secrets, and delegation that can only narrow — an agent can hand work to a sub-agent, never with more access than it holds itself. Default-deny policy evaluates every request before it reaches a resource, rather than flagging it in a log afterwards.",
          "Revoke an agent and everything it started loses access at once, with no waiting for tokens to expire. Approval gates hold high-risk operations for an authenticated human. And the audit trail is append-only and tamper-evident, exportable for SOC 2, EU AI Act, NIST AI RMF and OWASP Agentic reviews.",
        ],
      },
      {
        kind: "section",
        title: "Standards-native, not a rewrite",
        text: [
          "OAuth 2.0 token exchange (RFC 8693), OPA for policy, and MCP integrations. It fits the stack a team already runs instead of replacing it.",
          "Assembling a proxy, a vault and a policy engine yourself gets you plumbing — not narrowing delegation, revocation propagation or a tamper-evident audit chain. And then you maintain it forever.",
        ],
      },
      {
        kind: "section",
        title: "Designed in public",
        text: [
          "Every significant decision goes through a public proposal first. Slower, and the reason the project earned trust quickly — the reasoning is on the record, not just the result.",
          "Contributors arrived with threat models I had not considered. Several of the sharpest edges in the design came from review, not from me.",
        ],
      },
      {
        kind: "section",
        title: "Backing, earned by review",
        text: [
          "Nobody funded a deck. GitHub, Microsoft, Vercel and LF Decentralized Trust each reviewed the codebase and its security posture before committing.",
        ],
      },
      {
        kind: "milestones",
        items: [
          { date: "Feb 2026", title: "Founded", detail: "First commits on the gateway and policy core" },
          { date: "Apr 2026", title: "GitHub Secure Open Source Fund", detail: "2026 cohort" },
          { date: "May 2026", title: "Microsoft for Startups", detail: "Infrastructure and guidance" },
          { date: "Jun 2026", title: "Vercel OSS Program", detail: "Spring '26, 30 projects worldwide" },
          { date: "Jun 2026", title: "LFX Mentorship", detail: "Accepted under LFDT" },
        ],
      },
      {
        kind: "evidence",
        links: [
          { label: "caracal.run", href: "https://www.caracal.run", source: "Project site" },
          {
            label: "Caracal on GitHub",
            href: "https://github.com/Garudex-Labs/caracal",
            source: "Garudex-Labs",
          },
          {
            label: "Open Source Friday episode",
            href: "https://www.youtube.com/live/tZ4FdO-zjeE",
            source: "youtube.com",
          },
          {
            label: "GitHub Secure Open Source Fund",
            href: "https://github.com/open-source/github-secure-open-source-fund",
            source: "github.com",
          },
        ],
      },
    ],
  },
  {
    org: "lf-decentralized-trust",
    role: "lfx-mentee",
    headline: "Building an AI knowledge layer for the Hyperledger ecosystem",
    lede: "My time at LF Decentralized Trust started as an LFX Mentee on AIFAQ — a multi-agent RAG platform meant to answer technical questions accurately across Hyperledger projects, starting with Besu and Fabric.",
    photos: [
      {
        src: "/experience/story/lfdt/mentee/lfx_ent.jpeg",
        alt: "LFX Mentorship acceptance email",
        caption: "Accepted to the LFDT Multi-Agent RAG for AIFAQ mentorship.",
        meta: "Jun 2025",
        shape: "landscape",
      },
      {
        src: "/experience/story/lfdt/mentee/aifaq.png",
        alt: "AIFAQ architecture diagram",
        caption:
          "The pipeline: docs and GitHub issues ingested and chunked, embedded, stored in ChromaDB, then orchestrated behind a FastAPI service.",
        meta: "Architecture",
        shape: "square",
      },
      {
        src: "/experience/story/lfdt/mentee/lfx.jpeg",
        alt: "LFX mentorship cohort call",
        caption:
          "Cohort call with mentors and LFDT leadership, including Daniela Barbosa and Alfonso Govela.",
        meta: "LFX cohort",
        shape: "wide",
      },
      {
        src: "/experience/story/lfdt/mentee/talk.jpg",
        alt: "LFDT meetup on the AIFAQ multi-agent RAG assistant",
        caption:
          "LFDT meetup on AIFAQ — from documents to decisions with multi-agent RAG, presented by my mentor Gianluca Capuzzi.",
        meta: "LFDT Meetup · 14 Oct",
        shape: "wide",
        href: "https://www.youtube.com/live/bNO8uvQmw04",
        video: true,
      },
    ],
    blocks: [
      {
        kind: "section",
        title: "What the project was for",
        text: [
          "Hyperledger's technical knowledge is spread across documentation, issues and pull requests for a dozen separate projects. The brief was a unified knowledge layer that could answer accurately across all of it, beginning with Besu and Fabric.",
          "As one of the early contributors I helped build the production system from the ground up, rather than extending something that already worked.",
        ],
      },
      {
        kind: "build",
        title: "The multi-agent RAG platform",
        problem:
          "Answers had to be grounded in the real documentation of many separate projects, and stay correct as those projects changed.",
        approach:
          "Designed the end-to-end RAG pipeline: ingestion from docs and GitHub issues and PRs, chunking and embedding, ChromaDB for vector search, LangGraph orchestrating the agents, and FastAPI serving it. Open-source models from Hugging Face were deployed on AWS, with Snowflake as the data platform.",
        result:
          "A production-ready system serving an entire open source ecosystem rather than a single application.",
        tech: [
          "Python",
          "LangGraph",
          "ChromaDB",
          "FastAPI",
          "Hugging Face",
          "Snowflake",
          "AWS",
          "RAG",
        ],
      },
      {
        kind: "section",
        title: "What it taught me",
        text: [
          "Document ingestion, embedding pipelines, vector databases, retrieval optimisation, multi-agent orchestration, cloud deployment and serving language models where other people depend on the answers.",
          "It was my first system built for an ecosystem rather than an application, which changes what counts as finished.",
        ],
      },
      {
        kind: "section",
        title: "The people behind it",
        text: [
          "Supported by LF Decentralized Trust and Founder Institute, and mentored by Barbara (Bobbi) Muscara, a Technical Steering Committee member at LFDT, and Gianluca Capuzzi.",
          "Their reviews shaped how I build production AI systems, and how I think about maintainability long after a mentorship ends.",
        ],
      },
      {
        kind: "section",
        title: "Open Source Summit Korea",
        text: [
          "The mentorship led to an invitation to speak at Open Source Summit Korea — my first international open source conference — presenting the project and the work happening inside LFDT.",
          "It was also where I met Daniela Barbosa, Executive Director of LF Decentralized Trust, and Julian Gordon, its Vice President.",
        ],
      },
      {
        kind: "milestones",
        items: [
          { date: "Jun 2025", title: "Accepted to LFX Mentorship", detail: "Multi-Agent RAG for AIFAQ" },
          { date: "Oct 2025", title: "AIFAQ presented at an LFDT meetup" },
          { date: "Nov 2025", title: "Mentorship completed" },
        ],
      },
      {
        kind: "evidence",
        links: [
          { label: "LF Decentralized Trust", href: "https://lfdecentralizedtrust.org", source: "Foundation" },
          {
            label: "AIFAQ meetup recording",
            href: "https://www.youtube.com/live/bNO8uvQmw04",
            source: "youtube.com",
          },
        ],
      },
    ],
  },
  {
    org: "lf-decentralized-trust",
    role: "lab-leader",
    headline: "One of the youngest lab leaders in Linux Foundation history",
    lede: "Technical direction and community leadership for a lab under LF Decentralized Trust — a 14-service intelligence platform, Caracal, production operations, and the maintainers and contributors around all of it.",
    related: ["gitmesh", "caracal"],
    photos: [
      {
        src: "/experience/story/lfdt/lableader/kr.jpeg",
        alt: "In the audience at Open Source Summit Korea",
        caption: "Open Source Summit Korea, in the room rather than on the schedule.",
        meta: "OSS Korea",
        shape: "landscape",
      },
      {
        src: "/experience/story/lfdt/lableader/lfdt_kr.jpeg",
        alt: "With LF Decentralized Trust leadership at Open Source Summit Korea",
        caption: "With LF Decentralized Trust's leadership in Seoul.",
        meta: "OSS Korea",
        shape: "landscape",
      },
      {
        src: "/experience/story/lfdt/lableader/atlassian_talk.jpeg",
        alt: "Hallway track conversation at OpenSearchCon Seoul",
        caption: "The hallway track with Cameron Stewart of Atlassian, OpenSearchCon Seoul.",
        meta: "OpenSearchCon Korea",
        shape: "landscape",
      },
      {
        src: "/experience/story/lfdt/lableader/lf_ceo.jpeg",
        alt: "With the Linux Foundation's Executive Director",
        caption: "With the Linux Foundation's Executive Director, Open Source Summit Korea.",
        meta: "OSS Korea",
        shape: "portrait",
      },
      {
        src: "/experience/story/lfdt/lableader/verizon.jpeg",
        alt: "With Dirk Hohndel of Verizon at Open Source Summit Japan",
        caption: "With Dirk Hohndel of Verizon, between sessions in Tokyo.",
        meta: "OSS Japan",
        shape: "portrait",
      },
      {
        src: "/experience/story/lfdt/lableader/atlassian.jpeg",
        alt: "Evening reception at OpenSearchCon Korea",
        caption: "The conversation carried on into the evening reception.",
        meta: "OpenSearchCon Korea",
        shape: "portrait",
      },
      {
        src: "/experience/story/lfdt/lableader/grafana.jpeg",
        alt: "At the Open Source Summit Japan podium with Grafana",
        caption: "At the podium with Grafana, Open Source Summit Japan.",
        meta: "OSS Japan",
        shape: "portrait",
      },
      {
        src: "/experience/story/lfdt/lableader/opensearch.jpeg",
        alt: "At the OpenSearch booth",
        caption: "At the OpenSearch booth — contributors wanted, as always.",
        meta: "OSS Japan",
        shape: "portrait",
      },
      {
        src: "/experience/story/lfdt/lableader/red_hat.jpeg",
        alt: "With Red Hat at Open Source Summit Japan",
        caption: "With Red Hat, Tokyo.",
        meta: "OSS Japan",
        shape: "portrait",
      },
      {
        src: "/experience/story/lfdt/lableader/linux_maintainer.jpeg",
        alt: "With a Linux kernel maintainer before the keynote",
        caption: "With a Linux kernel maintainer, in an empty hall before the keynote.",
        meta: "OSS Japan",
        shape: "portrait",
      },
      {
        src: "/experience/story/lfdt/lableader/japan.jpeg",
        alt: "At Open Source Summit Japan",
        caption: "Open Source Summit Japan.",
        meta: "OSS Japan",
        shape: "portrait",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "14", label: "Interconnected services" },
          { value: "7", label: "International conferences" },
          { value: "2", label: "Platforms led" },
          { value: "20", label: "Age at appointment" },
        ],
      },
      {
        kind: "section",
        title: "What the role actually covered",
        text: [
          "Technical direction and community leadership, working with maintainers and the Technical Advisory Council to set the roadmap, drive execution and grow the ecosystem around it.",
          "Hands-on engineering on one side, long-term architectural ownership, contributor mentorship and open source governance on the other.",
        ],
      },
      {
        kind: "build",
        title: "The intelligence platform",
        problem:
          "Maintainers had no single view of project health. Signals were scattered across roadmaps, issue trackers, pull requests, discussions, community channels and other ecosystems, and contributors join and leave constantly.",
        approach:
          "Led the architecture and development of a distributed platform of 14 interconnected services: scalable ingestion pipelines, AI-powered signal processing, multi-agent orchestration, search and retrieval, and analytics that correlate all of it.",
        result:
          "A real-time picture of project health, contributor activity, user demand and competitive landscape — connecting engineering progress to what the community actually expects.",
        tech: [
          "Distributed services",
          "Ingestion pipelines",
          "Multi-agent orchestration",
          "Search & retrieval",
          "Analytics",
          "AI signal processing",
        ],
      },
      {
        kind: "build",
        title: "Caracal — policy-driven authority delegation",
        problem:
          "Autonomous AI systems and other non-human actors need to collaborate without anyone losing track of who authorised what.",
        approach:
          "Policy-as-Code with graph-based delegation models, authorisation evaluated before execution, real-time revocation, secure credential management and immutable audit trails.",
        result:
          "Agents able to work together across distributed environments with verifiable authorisation and complete auditability.",
        tech: [
          "Policy-as-Code",
          "Graph delegation",
          "Pre-execution authz",
          "Secret management",
          "Immutable audit",
        ],
      },
      {
        kind: "section",
        title: "Running it in production",
        text: [
          "Deployments, infrastructure maintenance, scaling distributed services and release management — including reliability for organisations in regulated industries, banking and financial services in particular.",
          "Which mostly means holding feature velocity and production stability in tension without letting either win outright.",
        ],
      },
      {
        kind: "quote",
        text: "A project that depends on one person isn't infrastructure. It's a liability.",
      },
      {
        kind: "section",
        title: "Leading people, not just code",
        text: [
          "Architectural discussions, technical reviews, roadmap planning, project governance and community growth — coordinating across engineering, the open source community and organisational stakeholders.",
          "I stayed one of the most active contributors throughout. The coordination was in addition to the code, not instead of it.",
        ],
      },
      {
        kind: "section",
        title: "Representing the foundation",
        text: [
          "Open Source Summit Korea, Japan, India and North America, plus OpenSearchCon Europe, China and Korea — presenting the technical work and meeting founders, CTOs, maintainers and executives from across the ecosystem.",
          "I went to talk about the project and spent most of it listening. The hallway track changed the roadmap more than any talk did.",
        ],
      },
      {
        kind: "evidence",
        links: [
          { label: "LF Decentralized Trust", href: "https://lfdecentralizedtrust.org", source: "Foundation" },
          {
            label: "GitMesh in LFDT Labs",
            href: "https://github.com/LF-Decentralized-Trust-labs/gitmesh",
            source: "github.com",
          },
          { label: "Caracal", href: "https://www.caracal.run", source: "Project site" },
        ],
      },
    ],
  },
  {
    org: "lf-decentralized-trust",
    role: "lfx-mentor",
    headline: "Back as a mentor, leading the next cohort",
    lede: "A year after finishing the programme as a mentee, I returned as an LFX Mentor under LF Decentralized Trust — guiding two contributors through six months building Caracal, a security-first authority delegation platform for AI systems.",
    related: ["caracal"],
    photos: [
      {
        src: "/experience/story/lfdt/mentor/lfdt_community.jpeg",
        alt: "LFDT community on stage at Open Source Summit India",
        caption: "The LF Decentralized Trust community on stage at Open Source Summit India.",
        meta: "OSS India · 2026",
        shape: "wide",
      },
      {
        src: "/experience/story/lfdt/mentor/lf_japan.jpeg",
        alt: "Open Source Summit Japan",
        caption: "Open Source Summit Japan, alongside AI_dev and the Automotive Linux Summit.",
        meta: "OSS Japan",
        shape: "landscape",
      },
      {
        src: "/experience/story/lfdt/mentor/selfie_lfdt.jpeg",
        alt: "LFDT community at Open Source Summit India",
        caption: "Contributors and maintainers from across the foundation, in one room.",
        meta: "OSS India · 2026",
        shape: "landscape",
      },
      {
        src: "/experience/story/lfdt/mentor/ibm_cto.jpeg",
        alt: "With IBM's CTO at Open Source Summit India",
        caption: "With IBM's CTO at Open Source Summit India.",
        meta: "OSS India",
        shape: "landscape",
      },
      {
        src: "/experience/story/lfdt/mentor/digiyatra.jpeg",
        alt: "With DigiYatra at Open Source Summit India",
        caption: "With DigiYatra's leadership between sessions.",
        meta: "OSS India",
        shape: "landscape",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "2", label: "Mentees guided" },
          { value: "6 mo", label: "Programme length" },
          { value: "LFDT", label: "Umbrella foundation" },
        ],
      },
      {
        kind: "section",
        title: "Coming back",
        text: [
          "Having been through the programme as a mentee, I came back to run it — mentoring Ashutosh and MHD. Ali Haider over six months on secure infrastructure for autonomous AI agents.",
        ],
      },
      {
        kind: "build",
        title: "Caracal — authority delegation for AI systems",
        problem:
          "Humans, agents and services constantly delegate authority to each other, with nothing checking policy before execution, no way to revoke access in real time, and no record you could audit afterwards.",
        approach:
          "Led the architecture and guided the implementation: a policy enforcement gateway in front of every request, a delegation graph engine with authority evaluation over it, vault integration for API credentials, immutable audit infrastructure, and end-to-end delegation workflows tying them together.",
        result:
          "A cohesive, production-oriented foundation rather than a collection of independent features.",
        tech: [
          "Policy enforcement",
          "Graph traversal",
          "Secret vault",
          "Immutable audit",
          "Decentralised identity",
          "Distributed evaluation",
        ],
      },
      {
        kind: "section",
        title: "What the contributors took away",
        text: [
          "Graph-based authority resolution, policy-driven request routing, secure credential management, decentralised identity, and ledger-backed auditability for autonomous systems.",
          "Most of them had not touched security infrastructure before. By the end they were making design calls in it.",
        ],
      },
      {
        kind: "section",
        title: "Running the mentorship",
        text: [
          "Breaking the roadmap into milestones, reviewing pull requests, holding design discussions, documenting the architecture, and working through the problems that do not have a clean answer.",
          "The part that mattered most was explaining the reasoning behind each decision, not just the implementation. A contributor who knows why can make the next call without me.",
        ],
      },
      {
        kind: "quote",
        text: "Review is teaching. If a mentee leaves a PR having only learned that they were wrong, I wasted both our time.",
      },
      {
        kind: "section",
        title: "Taking it out into the open",
        text: [
          "The project was presented at several open source events and summits, giving visibility to the work happening inside LF Decentralized Trust and showing a practical approach to secure authority delegation for AI systems.",
        ],
      },
      {
        kind: "evidence",
        links: [
          { label: "LFX Mentorship", href: "https://lfdecentralizedtrust.org", source: "Foundation" },
          { label: "Caracal", href: "https://www.caracal.run", source: "Project site" },
        ],
      },
    ],
  },
  {
    org: "vercel",
    role: "oss-program",
    headline: "One of thirty projects Vercel chose to back",
    lede: "Caracal was selected for the Vercel Open Source Program, Spring 2026 — thirty open source projects worldwide, picked for their contribution to the ecosystem.",
    related: ["caracal"],
    photos: [
      {
        src: "/experience/story/vercel/blog.png",
        alt: "Caracal in the Vercel Open Source Program Spring 2026 cohort announcement",
        caption: "Caracal in the Spring '26 cohort announcement.",
        meta: "vercel.com · Jun 2026",
        shape: "landscape",
        href: "https://vercel.com/blog/vercel-open-source-program-spring-2026-cohort#caracal",
      },
      {
        src: "/experience/story/vercel/vercel_community.png",
        alt: "Caracal showcase post in the Vercel community",
        caption: "Showcase post in the Vercel community, picked up in Vercel Weekly.",
        meta: "Jun 2026",
        shape: "wide",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "30", label: "Projects worldwide" },
          { value: "Spring '26", label: "Cohort" },
          { value: "AI SDK", label: "Adopted in Caracal" },
        ],
      },
      {
        kind: "section",
        title: "The unglamorous problem",
        text: [
          "Docs, dashboards and demo environments cost real money, and they are the first thing to degrade when a project runs on a personal budget.",
          "For infrastructure asking people to trust it, that reliability is part of the argument.",
        ],
      },
      {
        kind: "build",
        title: "What we adopted",
        problem:
          "The operator features needed a model layer we would not have to rewrite, and the public surface of the project had to be fast everywhere.",
        approach:
          "Integrated the Vercel AI SDK while building Caracal's AI-powered operator capabilities, and moved the documentation and static web experiences onto Vercel.",
        result:
          "Fast global delivery for the docs, and a deployment workflow short enough that shipping them stopped being a decision.",
        tech: ["Vercel AI SDK", "Vercel", "TypeScript", "Static hosting"],
      },
      {
        kind: "section",
        title: "The part I didn't expect",
        text: [
          "The cohort itself — maintainers building modern AI and developer infrastructure, willing to say plainly what had not worked for them.",
          "Most of the useful conversations were about open source sustainability, developer experience and what production-ready AI tooling actually requires, rather than about any one framework.",
        ],
      },
      {
        kind: "evidence",
        links: [
          {
            label: "Spring 2026 cohort announcement",
            href: "https://vercel.com/blog/vercel-open-source-program-spring-2026-cohort#caracal",
            source: "vercel.com",
          },
        ],
      },
    ],
  },
  {
    org: "github",
    role: "secure-open-source-fund",
    headline: "Fifty projects a year. Caracal was one",
    lede: "The GitHub Secure Open Source Fund puts maintainers of critical open source infrastructure in a room with GitHub's security engineers for three weeks. The 2026 cohort was 72 maintainers, 50 projects, 22 countries.",
    related: ["caracal"],
    photos: [
      {
        src: "/experience/story/github/gssof_4.jpeg",
        alt: "Secure Open Source Fund session slide: 72 maintainers, 50 projects, 22 countries",
        caption: "Session 4 — 72 maintainers, 50 projects, 22 countries.",
        meta: "Secure Open Source Fund",
        shape: "wide",
      },
      {
        src: "/experience/story/github/gsof.jpeg",
        alt: "Working session with cohort maintainers",
        caption: "Working session with the maintainers of FastAPI, Starlette, Sniffnet and Readest.",
        meta: "Cohort session",
        shape: "wide",
      },
      {
        src: "/experience/story/github/gssof.jpeg",
        alt: "Full cohort call with GitHub's open source and security teams",
        caption: "The full cohort, with GitHub's open source and security teams.",
        meta: "Cohort call",
        shape: "wide",
      },
      {
        src: "/experience/story/github/maintainer_summit.jpeg",
        alt: "GitHub Maintainer Summit 2026",
        caption: "Maintainer Summit 2026, hosted by GitHub.",
        meta: "Invite only",
        shape: "wide",
      },
      {
        src: "/experience/story/github/peter.jpeg",
        alt: "Peter Steinberger and Christina Warren at the Maintainer Summit",
        caption: "Peter Steinberger with Christina Warren of GitHub, at the summit.",
        meta: "Maintainer Summit",
        shape: "wide",
      },
      {
        src: "/experience/story/github/gt.jpeg",
        alt: "GitHub maintainer badge showing a profile",
        caption: "The maintainer badge, running my profile.",
        meta: "GitHub",
        shape: "portrait",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "50", label: "Projects worldwide" },
          { value: "72", label: "Maintainers" },
          { value: "22", label: "Countries" },
          { value: "3 wk", label: "Programme" },
        ],
      },
      {
        kind: "section",
        title: "The room",
        text: [
          "The 2026 cohort included FastAPI, LangChain, ONNX and OpenCLAW — projects a very large share of modern software depends on. Backed by GitHub with Stripe, Datadog, 1Password, American Express, Zerodha and Kraken.",
          "It recalibrated what a mature project looks like. Not cleverer code — better boundaries, better release hygiene, better answers for when the maintainer is unavailable.",
        ],
      },
      {
        kind: "section",
        title: "Not a cheque",
        text: [
          "Three weeks working directly with GitHub Security engineers, senior engineering leaders, and maintainers of some of the most widely used projects in the ecosystem.",
          "The focus was production-grade security practice rather than closing individual vulnerabilities — the difference between a project that is currently patched and one that stays defensible.",
        ],
      },
      {
        kind: "build",
        title: "Hardening the project",
        problem:
          "Security tooling is held to its own standard. Caracal needed a posture that could be verified from the outside, not asserted in a README.",
        approach:
          "Threat modelling and secure architecture review, a vulnerability disclosure and incident response process, supply-chain and dependency controls, fuzzing and automated security validation, and release hardening through CI/CD.",
        result:
          "OpenSSF Scorecard above 8, the OpenSSF Best Practices gold badge, and automated test and fuzz coverage around 80%.",
        tech: [
          "Threat modelling",
          "OpenSSF Scorecard",
          "Supply chain security",
          "Fuzz testing",
          "CI/CD hardening",
          "Incident response",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "8+", label: "OpenSSF Scorecard" },
          { value: "Gold", label: "OpenSSF Best Practices" },
          { value: "~80%", label: "Test and fuzz coverage" },
        ],
      },
      {
        kind: "quote",
        text: "Explaining your architecture to people who will immediately find the hole in it is the fastest review loop there is.",
      },
      {
        kind: "section",
        title: "Summit and Open Source Friday",
        text: [
          "The programme came with invitations to the GitHub Maintainer Summit and to Open Source Friday, both rooms full of maintainers, security engineers and engineering leaders from across the ecosystem.",
          "Of everything in my open source work so far, this shifted my understanding of production security and maintainership at scale the most.",
        ],
      },
      {
        kind: "evidence",
        links: [
          {
            label: "Secure Open Source Fund",
            href: "https://github.com/open-source/github-secure-open-source-fund",
            source: "github.com",
          },
        ],
      },
    ],
  },
  {
    org: "microsoft-for-startups",
    role: "cohort-member",
    headline: "Where Caracal actually runs",
    lede: "Microsoft for Startups backed the work with over $100k in Azure and AI credits, and the technical guidance to spend them well. Caracal was deployed end to end on Azure and served to companies from there.",
    related: ["caracal"],
    photos: [
      {
        src: "/experience/story/mfs/mfs.jpeg",
        alt: "Microsoft for Startups collaboration",
        caption: "Backed by Microsoft for Startups.",
        meta: "May 2026",
        shape: "wide",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "$100k+", label: "Azure and AI credits" },
          { value: "Azure", label: "Production deployment" },
          { value: "Foundry", label: "Models in the stack" },
        ],
      },
      {
        kind: "section",
        title: "What the programme gave",
        text: [
          "Azure and AI credits worth more than $100k, which is the difference between running an experiment once and running it until the result means something.",
          "With it came access to Microsoft's AI services and developer tooling, and the documentation, guides and support behind the replication and modernisation paths.",
        ],
      },
      {
        kind: "build",
        title: "Caracal on Azure",
        problem:
          "Security infrastructure has to run somewhere companies can actually adopt it, not just on my machine.",
        approach:
          "Deployed Caracal end to end on Azure and served it from there, with models from Azure AI Foundry behind the agent-facing parts of the system.",
        result:
          "A deployment other companies could be served from, and enough headroom to run adversarial evaluation repeatedly rather than sparingly.",
        tech: ["Azure", "Azure AI Foundry", "Deployment", "Model evaluation"],
      },
      {
        kind: "section",
        title: "Evaluation at scale",
        text: [
          "You cannot claim a policy engine is sound because it worked locally. It has to survive adversarial workloads, repeatedly, and that costs compute.",
        ],
      },
      {
        kind: "section",
        title: "The part I used hardest",
        text: [
          "The guidance and technical support, not the credits. Engineers who have shipped platform software at a scale I have not, willing to say where the design would break.",
          "Two architectural decisions exist in their current form because someone there pushed back on my first answer.",
        ],
      },
      {
        kind: "evidence",
        links: [
          { label: "Microsoft for Startups", href: "https://www.microsoft.com/startups", source: "microsoft.com" },
        ],
      },
    ],
  },
  {
    org: "founders-inc",
    role: "canopy",
    headline: "Five weeks on the part engineering doesn't teach",
    lede: "Selected for Canopy Online, Founders, Inc.'s five-week accelerator — acceptance below 4% globally — alongside founders and builders working across software, hardware, AI and media.",
    related: ["caracal"],
    photos: [
      {
        src: "/experience/story/finc/canopy.jpeg",
        alt: "Canopy Online acceptance",
        caption: "Accepted into Canopy Online.",
        meta: "Apr 2026",
        shape: "landscape",
      },
      {
        src: "/experience/story/finc/canopy_online.jpeg",
        alt: "Canopy kickoff session",
        caption: "Canopy kickoff, from the Founders, Inc. stage.",
        meta: "Canopy Kickoff",
        shape: "landscape",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "<4%", label: "Global acceptance" },
          { value: "5", label: "Weeks" },
        ],
      },
      {
        kind: "section",
        title: "Why I applied",
        text: [
          "I suspected the thing limiting Caracal was not the engineering. Five weeks later that was confirmed in detail, by people who had already made the mistakes I was about to.",
        ],
      },
      {
        kind: "section",
        title: "The sessions",
        text: [
          "Weekly sessions led by founders and operators who had built billion-dollar companies, covering product strategy, fundraising, go-to-market, customer discovery and company building.",
          "They were direct rather than inspirational, which is what made them useful.",
        ],
      },
      {
        kind: "section",
        title: "The cohort was the real value",
        text: [
          "Product reviews and feedback sessions with founders building AI applications, developer tools, enterprise software, consumer products and hardware — a much wider range of architectures and constraints than I would have seen otherwise.",
          "Watching how other teams validated products, prioritised engineering work and handled technical-versus-business trade-offs was more instructive than any single lecture.",
        ],
      },
      {
        kind: "quote",
        text: "An open-source security tool nobody knows how to adopt protects nobody.",
      },
      {
        kind: "section",
        title: "What changed",
        text: [
          "That reframing rewrote how I approach documentation, naming, and what I decide to build next — and how I think about technical execution, product thinking and customer feedback as one thing rather than three.",
        ],
      },
      {
        kind: "evidence",
        links: [{ label: "Founders, Inc. — Canopy", href: "https://f.inc/canopy", source: "f.inc" }],
      },
    ],
  },
  {
    org: "gitmesh",
    role: "creator",
    headline: "A side project that became a Linux Foundation lab",
    lede: "Developer feedback is scattered across GitHub, Reddit, Discord, Slack and forums, so maintainers cannot see what their users actually need. GitMesh pulls those signals into one model and ranks the work by real community demand.",
    related: ["gitmesh"],
    photos: [
      {
        src: "/experience/story/gitmesh/best_pitch.jpeg",
        alt: "IDE Bootcamp 2025 certificate of appreciation",
        caption:
          "Recognised among the best performing teams in the idea pitching session, IDE Bootcamp '25.",
        meta: "Feb 2025",
        shape: "landscape",
      },
      {
        src: "/experience/story/gitmesh/gitmesh_hq.jpeg",
        alt: "The room the GitMesh team worked from",
        caption: "GitMesh HQ — one room, our own server, and the team that scaled the system on it.",
        meta: "GitMesh HQ",
        shape: "landscape",
      },
      {
        src: "/experience/story/gitmesh/alfonso.jpeg",
        alt: "Call with Alfonso Govela",
        caption: "Feedback from Alfonso Govela, a founding member of the Hyperledger Foundation.",
        meta: "Project review",
        shape: "landscape",
      },
      {
        src: "/experience/story/gitmesh/lf_gitmesh.jpeg",
        alt: "Call with Linux Foundation leadership",
        caption: "Showing GitMesh to Linux Foundation leadership for the first time.",
        meta: "First LF demo",
        shape: "landscape",
      },
      {
        src: "/experience/story/gitmesh/linux.jpeg",
        alt: "With Tux at an Open Source Summit",
        caption: "We joined the Linux Foundation as a lab.",
        meta: "Open Source Summit",
        shape: "portrait",
      },
      {
        src: "/experience/story/gitmesh/meetup.jpg",
        alt: "GitMesh meetup hosted by LF Decentralized Trust",
        caption:
          "The GitMesh meetup, hosted on LF Decentralized Trust's channels once we came under LFDT.",
        meta: "LFDT Meetup · 30 Oct",
        shape: "wide",
        href: "https://www.youtube.com/live/_8tHLL5AfAw",
        video: true,
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "100+", label: "GitHub stars" },
          { value: "8", label: "Orgs using it" },
          { value: "5", label: "LF TAC approvals" },
          { value: "20", label: "Age at lab leadership" },
        ],
      },
      {
        kind: "section",
        title: "The problem my mentors had",
        text: [
          "Maintainers I worked with were reading the same feature request in five places and still guessing at priority. The signal existed; it was just fragmented across platforms that do not talk to each other.",
          "I started GitMesh on the side to fix that, and ended up leading it from prototype through architecture, technical direction and community growth.",
        ],
      },
      {
        kind: "build",
        title: "Turning scattered signal into a ranked backlog",
        problem:
          "Engineering feedback arrives as issues, threads, chat messages and forum posts, in different shapes, with heavy duplication and no shared notion of importance.",
        approach:
          "Large-scale ingestion pipelines normalise nine external sources into one data model, then distributed workers enrich it: deduplication, classification, semantic search, and AI signal intelligence that scores what matters.",
        result:
          "Teams could prioritise against real community demand instead of whichever thread they happened to read. Adopted across LFDT, Jaeger, Cartography and Krkn (CNCF), the Linux kernel community, The Linux Foundation, Intel Open Source and AIFAQ.",
        tech: [
          "TypeScript",
          "Python",
          "Vue",
          "PostgreSQL",
          "OpenSearch",
          "Redis",
          "Temporal",
          "Docker",
          "Terraform",
          "AWS",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "14", label: "Deployable services" },
          { value: "312", label: "API endpoints" },
          { value: "92", label: "PostgreSQL tables" },
          { value: "~300k", label: "Lines of code" },
        ],
      },
      {
        kind: "section",
        title: "What that scale looked like",
        text: [
          "Fourteen services and nineteen shared libraries behind 312 endpoints, over 92 tables carrying 309 indexes, with nine platform integrations feeding them.",
          "Asynchronous workers and distributed queues handle the throughput, OpenSearch backs semantic retrieval, Redis handles caching and coordination, and Temporal runs the long workflows that cannot be allowed to half-finish.",
          "Documenting a surface that size is its own job — GitMesh was part of the Mintlify open source program, which the docs were published through.",
        ],
      },
      {
        kind: "section",
        title: "Becoming a lab",
        text: [
          "Getting into LF Decentralized Trust meant a technical review by the TAC, and five members approving it. The audit covered governance, licensing, security disclosure and release process — the most thorough review my work had had.",
          "It made me one of the youngest lab leaders in Linux Foundation history, at twenty. It also permanently changed how I start projects: governance and disclosure policy now exist before the first release, not after the first incident.",
        ],
      },
      {
        kind: "quote",
        text: "Adoption by other maintainers is the only review that counts. They won't use your tool to be kind to you.",
      },
      {
        kind: "section",
        title: "Leading it",
        text: [
          "Beyond writing the core systems: setting the engineering roadmap, reviewing architecture and technical proposals, mentoring contributors, coordinating releases, and holding the long-term shape of the codebase as more people touched it.",
        ],
      },
      {
        kind: "milestones",
        items: [
          { date: "Feb 2025", title: "Best pitch, IDE Bootcamp '25", detail: "AICTE & MoE Innovation Cell" },
          { date: "Jul 2025", title: "First commit", detail: "Built for the maintainers around me" },
          { date: "Sep 2025", title: "Accepted as an LFDT lab", detail: "Approved by five TAC members" },
          { date: "Mar 2026", title: "Handover", detail: "Focus shifted to Caracal" },
        ],
      },
      {
        kind: "evidence",
        links: [
          {
            label: "GitMesh on GitHub",
            href: "https://github.com/LF-Decentralized-Trust-labs/gitmesh",
            source: "LF-Decentralized-Trust-labs",
          },
          {
            label: "Mintlify open source program",
            href: "https://mintlify.com",
            source: "mintlify.com",
          },
        ],
      },
    ],
  },
  {
    org: "deeplearning-ai",
    role: "gans-mentor",
    headline: "Diagnosing GAN training failures, for learners worldwide",
    lede: "Mentor on the DeepLearning.AI Generative Adversarial Networks Specialization, supporting learners through the whole programme — from a first DCGAN to StyleGAN, Pix2Pix and CycleGAN, and every training failure in between.",
    photos: [
      {
        src: "/experience/story/deeplearningai/join_dl.jpeg",
        alt: "DeepLearning.AI Community Team welcoming the new mentor cohort",
        caption: "Onboarding into the mentor team on the DeepLearning.AI forum.",
        meta: "Jun 2025",
        shape: "landscape",
      },
      {
        src: "/experience/story/deeplearningai/mentor.png",
        alt: "DeepLearning.AI Mentor Participation certificate",
        caption: "Mentor Participation certificate for the GANs Specialization.",
        meta: "Q3 2025",
        shape: "landscape",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "3", label: "Courses supported" },
          { value: "PyTorch", label: "Implementation stack" },
          { value: "Global", label: "Learner community" },
          { value: "Q3 2025", label: "Mentor participation" },
        ],
      },
      {
        kind: "section",
        title: "What the role actually was",
        text: [
          "Rarely a question about a lecture slide. Most threads were a training run that had quietly gone wrong: a generator producing noise, a discriminator that had already won, losses that looked fine while the samples did not.",
          "The work was reading unfamiliar PyTorch, finding the smallest reproduction, and explaining the mechanism instead of handing over a patch.",
        ],
      },
      {
        kind: "build",
        title: "Diagnosing adversarial training failures",
        problem:
          "GANs fail quietly. The loss curve stays plausible while the samples collapse, so learners could not tell a bug from an unstable equilibrium.",
        approach:
          "Worked through the usual causes with them — mode collapse, a discriminator overpowering the generator, vanishing gradients from a saturating loss, detached tensors breaking the graph, and normalisation or activation choices in the wrong place.",
        result:
          "Learners left able to read a symptom and locate its cause themselves, rather than resetting the notebook and hoping.",
        tech: ["PyTorch", "GANs", "DCGAN", "cGAN", "StyleGAN", "Pix2Pix", "CycleGAN", "FID"],
      },
      {
        kind: "section",
        title: "Architectures, and the decisions behind them",
        text: [
          "DCGANs and conditional GANs early on, then StyleGAN's mapping network and adaptive instance normalisation, Pix2Pix for paired image-to-image translation, and CycleGAN for the unpaired case.",
          "Architecture questions were usually about trade-offs: where to condition, what the discriminator can actually see, and what the loss is really rewarding.",
        ],
      },
      {
        kind: "section",
        title: "Evaluation, and what it hides",
        text: [
          "Fréchet Inception Distance, and the fidelity-versus-diversity trade-off underneath it — a model can score well while covering a fraction of the distribution.",
          "The same threads often ran into bias: where it enters the training data, how it surfaces in generated samples, and which parts of it can be measured rather than assumed.",
        ],
      },
      {
        kind: "section",
        title: "Applied GANs, and what I contributed",
        text: [
          "The later course work moves into application — data augmentation for small datasets, and privacy-preserving synthetic data for cases where the real records cannot leave the building.",
          "Alongside mentoring I contributed improvements to the projects and worked examples, so the material was clearer and gave learners more to run for themselves.",
        ],
      },
      {
        kind: "quote",
        text: "If you cannot explain why the gradient vanished, you did not understand it.",
      },
      {
        kind: "evidence",
        links: [{ label: "DeepLearning.AI", href: "https://www.deeplearning.ai", source: "deeplearning.ai" }],
      },
    ],
  },
  {
    org: "drdo",
    role: "ai-researcher",
    headline: "Multi-chain mining allocation with a quantum genetic algorithm",
    lede: "Industrial training at Scientific Analysis Group, DRDO, under India's Ministry of Defence. The research problem: how to split a fixed amount of mining capacity across competing proof-of-work blockchains when the profitable answer keeps moving.",
    photos: [
      {
        src: "/experience/story/drdo/drdo_dl.jpeg",
        alt: "Metcalfe House Complex, DRDO Delhi",
        caption: "Metcalfe House Complex, Delhi — SAG's campus, and my desk for two months.",
        meta: "Delhi · May — Jul 2025",
        shape: "landscape",
      },
      {
        src: "/experience/story/drdo/drdo.jpeg",
        alt: "DRDO SAG industrial training certificate",
        caption: "Training certificate, signed by my guide Prashant Verma (Scientist 'E') and Sunil Sagar (Scientist 'F').",
        meta: "16 Jul 2025",
        shape: "landscape",
      },
      {
        src: "/experience/story/drdo/iitd.jpeg",
        alt: "At IIT Delhi",
        caption: "IIT Delhi, on an evening off from the lab.",
        meta: "Delhi · 2025",
        shape: "portrait",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "4", label: "Blockchain networks" },
          { value: "0.00%", label: "Gap to closed-form optimum" },
          { value: "1.8 s", label: "Runtime to that solution" },
          { value: "3", label: "Algorithms benchmarked" },
        ],
      },
      {
        kind: "section",
        title: "The problem",
        text: [
          "Mining capacity is fixed. Where it earns most keeps moving with coin prices, difficulty, transaction fees and network conditions, and the objective combines several competing factors, so it is non-convex.",
          "The project looked at whether a quantum-inspired metaheuristic handled that better than the classical alternatives.",
        ],
      },
      {
        kind: "build",
        title: "Enhanced Adaptive Quantum Genetic Algorithm",
        problem:
          "Allocate a fixed hash rate across four proof-of-work chains under a capacity constraint, against an objective balancing profit against risk.",
        approach:
          "EAQGA — superposition-based initialisation, quantum-guided selection and adaptive mutation, with repair operators keeping every individual feasible rather than tuning penalty coefficients.",
        result:
          "I derived the closed-form optimum and validated the optimiser against it: a 0.00% gap in 1.8 s, converging by generation 14. A reduced search budget reproduced a 9.4% gap, which showed the metric was sensitive rather than saturated.",
        tech: ["Python", "NumPy", "pandas", "Qiskit", "Cirq", "Genetic algorithms"],
      },
      {
        kind: "section",
        title: "How it was put together",
        text: [
          "Four independent layers: synthetic market data, the mining objective, the optimisation algorithms, and the quantum simulation backend. Keeping the economic model separate from the search meant either could be swapped without touching the other.",
          "One adapter interface sits over IBM Qiskit and Google Cirq with three tiers of fallback, so the full test suite runs with no quantum dependencies installed.",
        ],
      },
      {
        kind: "section",
        title: "Modelling the market and the objective",
        text: [
          "720 hourly observations per chain, from correlated geometric Brownian motion over a positive-semidefinite equicorrelation matrix, with Beta and lognormal processes for the bounded and strictly positive variables.",
          "Fitness folded expected profit, a Sharpe-style risk-adjusted return and risk into a single score, under the allocation constraint.",
        ],
      },
      {
        kind: "section",
        title: "Benchmarking, and what it caught",
        text: [
          "EAQGA against a classical GA and a quantum-inspired GA, compared on convergence, solution quality, runtime and population diversity across repeated runs.",
          "Per-generation diversity and coherence telemetry surfaced a 6× scale bias in the benchmark methodology itself, found by comparing predicted against measured values.",
        ],
      },
      {
        kind: "evidence",
        links: [{ label: "DRDO", href: "https://drdo.gov.in/drdo/en", source: "drdo.gov.in" }],
      },
    ],
  },
  {
    org: "aiplato",
    role: "nlp-engineer",
    headline: "Inside the AI tutor that walks students to the answer",
    lede: "aiPlato builds an AI-augmented teaching assistant for STEM: it guides students through physics and mathematics problems step by step instead of handing over the solution. I worked on the AI pipeline behind it.",
    photos: [
      {
        src: "/experience/story/aiplato/aiplatoai.jpeg",
        alt: "aiPlato office signage",
        caption: "aiPlato's office in Ahmedabad. Three months, fully on-site.",
        meta: "Ahmedabad · 2024",
        shape: "landscape",
      },
      {
        src: "/experience/story/aiplato/aiplato.jpeg",
        alt: "Internship completion letter from aiPlato",
        caption: "Completion letter from aiPlato's Director of Engineering.",
        meta: "17 Jul 2024",
        shape: "portrait",
      },
    ],
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "4", label: "Universities using it" },
          { value: "3 mo", label: "On-site, Ahmedabad" },
          { value: "STEM", label: "Physics & mathematics" },
        ],
      },
      {
        kind: "section",
        title: "What the product was",
        text: [
          "An intelligent tutoring platform in real classroom use — educators at Georgia Tech, Rice, The University of Texas and NYU were running it with their students.",
          "That constraint shaped everything. A tutor that guides step by step has to be right about the intermediate steps, not just the final answer.",
        ],
      },
      {
        kind: "build",
        title: "Working on the ingestion and retrieval pipeline",
        problem:
          "Course material arrived as handwritten notes, scanned documents, PDFs and video transcripts. None of it was structured enough for the tutor to retrieve or reason over.",
        approach:
          "Worked across the NLP and RAG side of the pipeline: per-format ingestion and cleaning, embeddings into vector search for retrieval, and Neo4j for graph-based knowledge representation, with MongoDB and AWS behind it.",
        result:
          "Contributed to answer accuracy through data-quality work and model fine-tuning, on a pipeline the production tutor queried directly.",
        tech: [
          "Python",
          "NLP",
          "RAG",
          "LangChain",
          "Vector search",
          "Neo4j",
          "MongoDB",
          "AWS",
        ],
      },
      {
        kind: "section",
        title: "Where my work actually was",
        text: [
          "Not the model. It was turning a scanned worksheet and a lecture transcript into something worth retrieving, then checking the retrieval had improved.",
          "Retrieval quality is invisible until you measure it. Every gain after I started measuring was larger than everything I had done by intuition before.",
        ],
      },
      {
        kind: "section",
        title: "What it left me with",
        text: [
          "My first production codebase, and the foundations — retrieval, vector search, graph representation, fine-tuning, pipeline design — that every project since has been built on.",
        ],
      },
      {
        kind: "evidence",
        links: [{ label: "aiPlato", href: "https://aiplato.ai", source: "aiplato.ai" }],
      },
    ],
  },
];

export function findStory(org: string, role: string) {
  return roleStories.find((story) => story.org === org && story.role === role);
}
