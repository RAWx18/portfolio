import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience of Ryan Madhuwala (RAWx18)",
  alternates: { canonical: "/experience" },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
