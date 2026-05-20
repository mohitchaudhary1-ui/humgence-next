import { getBlogs } from "@/lib/notion";
import BlogCard from "../components/BlogCard";
import { Metadata } from "next";

// metadata
export const metadata: Metadata = {
    title: "Blog | Humgence Digital Agency",
    description: "Insights on design, branding, technology, SEO, AI and development.",
    alternates: { canonical: "https://humgence.com/blog" },
    openGraph: {
        title: "Blog | Humgence Digital Agency",
        description: "Insights on design, branding, technology, SEO, AI and development.",
        url: "https://humgence.com/blog",
        images: [{ url: "/banner.webp", width: 1200, height: 630 }],
        locale: "en_IN",
    },
};

export default async function BlogPage() {
    const blogs: any = await getBlogs();

    return (
        <main className="min-h-screen bg-[#FAFAFC] text-[#111111] selection:bg-black selection:text-white">                {/* HERO */}
            <section className="relative overflow-hidden">

                {/* Premium Gradient Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_30%)]" />

                {/* Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:72px_72px]" />

                {/* Glow */}
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-36">

                    <div className="max-w-5xl">

                        <div className="mb-8 inline-flex items-center rounded-full border border-black/5 bg-white/70 px-5 py-2.5 text-sm font-medium text-neutral-700 shadow-[0_4px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                            ✦ Humgence Journal
                        </div>

                        <h1 className="text-6xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#111111] md:text-8xl xl:text-[110px]">

                            Building the future
                            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                                of digital brands.
                            </span>
                        </h1>

                        <p className="mt-10 max-w-2xl text-xl leading-9 text-neutral-600">
                            Premium insights on design, branding,
                            technology, SEO, AI, development and
                            scalable digital experiences.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">

                            <button className="rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                Explore Articles
                            </button>

                            <button className="rounded-2xl border border-black/10 bg-white/80 px-8 py-4 text-sm font-semibold text-neutral-800 backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-lg">
                                Latest Insights
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED POST */}
            {blogs.length > 0 && (
                <section className="mx-auto max-w-7xl px-6 py-24">

                    <div className="mb-10 flex items-center justify-between">

                        <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                            Featured Article
                        </h2>

                        <div className="text-sm text-neutral-500">
                            {blogs.length} Articles
                        </div>
                    </div>

                    {blogs.slice(0, 1).map((blog: any) => {
                        const properties = blog.properties;

                        const title =
                            properties.Title?.title?.[0]
                                ?.plain_text || "";

                        const description =
                            properties.Description?.rich_text?.[0]
                                ?.plain_text || "";

                        const slug =
                            properties.Slug?.rich_text?.[0]
                                ?.plain_text || "";

                        const date =
                            properties.Date?.date?.start || "";

                        const cover =
                            properties.Cover?.files?.[0]?.file
                                ?.url ||
                            properties.Cover?.files?.[0]
                                ?.external?.url ||
                            "";

                        return (
                            <a
                                key={blog.id}
                                href={`/blog/${slug}`}
                                className="group grid overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-white/20 lg:grid-cols-[1.2fr_0.8fr]"
                            >

                                <div className="overflow-hidden">
                                    <img
                                        src={
                                            cover ||
                                            "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                        }
                                        alt={title}
                                        className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="flex flex-col justify-center p-10 lg:p-14">

                                    <div className="mb-5 text-sm uppercase tracking-[0.2em] text-neutral-500">
                                        {date}
                                    </div>

                                    <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#111111] md:text-5xl">
                                        {title}
                                    </h2>

                                    <p className="mt-8 text-lg leading-8 text-neutral-600">
                                        {description}
                                    </p>

                                    <div className="mt-10 flex items-center gap-3 text-sm font-medium text-white">
                                        Read Article
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </section>
            )}

            {/* BLOG GRID */}
            <section className="mx-auto max-w-7xl px-6 pb-28">

                <div className="mb-14">

                    <h2 className="text-5xl font-semibold tracking-[-0.05em] text-[#111111]">                        Latest Articles
                    </h2>

                    <p className="mt-4 text-lg text-neutral-500">
                        Curated insights from Humgence.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">                    {blogs.map((blog: any) => {
                    const properties = blog.properties;

                    const title =
                        properties.Title?.title?.[0]
                            ?.plain_text || "";

                    const description =
                        properties.Description?.rich_text?.[0]
                            ?.plain_text || "";

                    const slug =
                        properties.Slug?.rich_text?.[0]
                            ?.plain_text || "";

                    const date =
                        properties.Date?.date?.start || "";

                    const cover =
                        properties.Cover?.files?.[0]?.file
                            ?.url ||
                        properties.Cover?.files?.[0]
                            ?.external?.url ||
                        "";

                    return (
                        <BlogCard
                            key={blog.id}
                            title={title}
                            description={description}
                            slug={slug}
                            date={date}
                            cover={cover}
                        />
                    );
                })}
                </div>
            </section>
        </main>
    );
}