import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projectsData";
import { roleStories } from "@/data/experienceStories";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/resume"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const projects = projectsData.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const stories = roleStories.map((story) => ({
    url: `${siteUrl}/experience/${story.org}/${story.role}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...projects, ...stories];
}
