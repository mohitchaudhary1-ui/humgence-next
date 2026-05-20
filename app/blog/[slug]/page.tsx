import { getBlogs } from "@/lib/notion";
import Link from "next/link";
import { notFound } from "next/navigation";

import { NotionAPI } from "notion-client";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import NotionContent from "@/app/components/NotionContent";

const notion = new NotionAPI();

// Get Single Blog
async function getBlog(slug: string) {
    const blogs = await getBlogs();

    return blogs.find((blog: any) => {
        return (
            blog.properties.Slug?.rich_text?.[0]
                ?.plain_text === slug
        );
    });
}

// Generate Static Params
export async function generateStaticParams() {
    const blogs: any = await getBlogs();

    return blogs.map((blog: any) => ({
        slug:
            blog.properties.Slug?.rich_text?.[0]
                ?.plain_text,
    }));
}

// SEO Metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blog: any = await getBlog(slug);

    if (!blog) {
        return {};
    }

    const properties = blog.properties;

    const title =
        properties.Title?.title?.[0]?.plain_text || "";

    const description =
        properties.Description?.rich_text?.[0]
            ?.plain_text || "";

    const cover =
        properties.Cover?.files?.[0]?.file?.url ||
        properties.Cover?.files?.[0]
            ?.external?.url ||
        "";

    return {
        title,
        description,

        openGraph: {
            title,
            description,
            images: [cover],
        },
    };
}

// Blog Detail Page
export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // Await params
    const { slug } = await params;

    // Get blog
    const blog: any = await getBlog(slug);

    // Not found
    if (!blog) {
        notFound();
    }

    const properties = blog.properties;

    // Blog data
    const title =
        properties.Title?.title?.[0]?.plain_text || "";

    const description =
        properties.Description?.rich_text?.[0]
            ?.plain_text || "";
    console.log(properties)

    const date =
        properties.PublishDate?.date?.start || "";

    const cover =
        properties.Cover?.files?.[0]?.file?.url ||
        properties.Cover?.files?.[0]
            ?.external?.url ||
        "";

    // IMPORTANT FIX
    const pageId = blog.id.replace(/-/g, "");

    // Fetch Notion content
    const recordMap = await notion.getPage(pageId);

    // Safety check
    if (!recordMap) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#FAFAFC] text-[#111111]">

            {/* HERO */}
            <section className="relative overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)]" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:72px_72px]" />

                {/* Glow */}
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16">

                    {/* Back */}
                    <Link
                        href="/blog"
                        className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-xl transition-all hover:bg-white"
                    >
                        ← Back to Blogs
                    </Link>

                    {/* Date */}
                    <div className="mb-5 text-sm uppercase tracking-[0.2em] text-neutral-500">
                        {new Date(date).toDateString()}
                    </div>

                    {/* Title */}
                    <h1 className="max-w-4xl text-3xl font-semibold leading-[1] tracking-[-0.04em] text-[#111111] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
                        {description}
                    </p>
                </div>
            </section>

            {/* COVER IMAGE */}
            <section className="mx-auto max-w-5xl px-6">

                <div className="relative  w-full overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.06)]">

                    <img
                        src={
                            cover ||
                            "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        }
                        alt={title}
                        className="h-full w-full object-cover"
                    />

                </div>
            </section>

            {/* BLOG CONTENT */}
            <section className="mx-auto max-w-5xl px-6 py-24">

                <article className="overflow-hidden rounded-[36px] border border-black/5 bg-white p-8 shadow-[0_10px_60px_rgba(0,0,0,0.04)] md:p-16">

                    <NotionContent
                        recordMap={recordMap}
                    />

                </article>
            </section>
        </main>
    );
}