import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience of Ryan Madhuwala (RAWx18) — Caracal founder, LF Decentralized Trust Lab Leader, GitHub Secure Open Source Fund, Microsoft for Startups, Vercel OSS, and DRDO.",
  alternates: { canonical: "/experience" },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
