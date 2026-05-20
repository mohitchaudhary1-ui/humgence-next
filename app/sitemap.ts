import { MetadataRoute } from "next";
import { getBlogs } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // Fetch blogs
  const blogs: any = await getBlogs();

  // Dynamic blog URLs
  const blogUrls = blogs.map((blog: any) => {
    const slug =
      blog.properties.Slug?.rich_text?.[0]
        ?.plain_text || "";

    const date =
      blog.properties.Date?.date?.start;

    return {
      url: `https://humgence.com/blog/${slug}`,

      lastModified: date
        ? new Date(date)
        : new Date(),

      changeFrequency: "weekly" as const,

      priority: 0.7,
    };
  });

  // Static pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: "https://humgence.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://humgence.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://humgence.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://humgence.com/advisory-board",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://humgence.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://humgence.com/team",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: "https://humgence.com/clients",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: "https://humgence.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Merge static + blogs
  return [...routes, ...blogUrls];
}