import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
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
}