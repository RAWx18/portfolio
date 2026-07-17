import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pull Requests",
  description: "Open-source pull requests and contributions by Ryan Madhuwala (RAWx18) across GitHub projects.",
  alternates: { canonical: "/pull-requests" },
};

export default function PullRequestsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
