import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Projects", template: "%s · Ryan Madhuwala" },
  description: "Projects by Ryan Madhuwala (RAWx18) — Caracal, GitMesh, and more AI infrastructure and open-source work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
