import type { ComponentType } from "react";
import { Network, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
  SiGo,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiBetterauth,
  SiPostgresql,
  SiJavascript,
  SiVuedotjs,
  SiGooglecloud,
  SiGnubash,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama"
  | "go" | "docker" | "k8s" | "terraform" | "betterauth" | "postgres"
  | "js" | "vue" | "gcp" | "script";

export type TechItem = TechKey | { label: string; tooltip?: string; img?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  status?: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta,
  go: SiGo, docker: SiDocker, k8s: SiKubernetes, terraform: SiTerraform, betterauth: SiBetterauth,
  postgres: SiPostgresql,
  js: SiJavascript, vue: SiVuedotjs, gcp: SiGooglecloud, script: SiGnubash,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA",
  go: "Go", docker: "Docker", k8s: "Kubernetes", terraform: "Terraform", betterauth: "Better Auth",
  postgres: "PostgreSQL",
  js: "JavaScript", vue: "Vue", gcp: "Google Cloud", script: "Script",
};

export const projectsData: Project[] = [
  {
    slug: "caracal",
    title: "Caracal",
    imageTitle: "Demo",
    src: "/projects/caracal_project.png",
    video: "https://www.youtube.com/embed/l7CT6ButUco",
    description: "Authority, not credentials, for AI agents: policy-approved actions, delegation that can only narrow, instant revocation, tamper-evident audit.",
    tech: ["go", "ts", "python", "docker", { label: "OPA", img: "/opa.png" }, "k8s", "terraform", "betterauth", { label: "Azure", img: "/azure.png" }, { label: "AWS", img: "/aws.png" }, "redis", "postgres"],
    github: "https://github.com/Garudex-Labs/caracal",
    live: "https://www.caracal.run",
    backgroundImage: "/background_1.png",
    hasPin: true,
  },
  {
    slug: "gitmesh",
    title: "GitMesh",
    imageTitle: "Demo",
    src: "/projects/gitmesh_project.png",
    video: "https://www.youtube.com/embed/0EUWYmeCjWM",
    description: "Capacity-aware product intelligence layer for engineering teams",
    tech: ["ts", "js", "vue", "python", "docker", "terraform", "gcp", { label: "AWS", img: "/aws.png" }, "script"],
    github: "https://github.com/LF-Decentralized-Trust-labs/gitmesh",
    live: "",
    status: "Acquired",
    backgroundImage: "/background_2.png",
    hasPin: false,
  },
];
