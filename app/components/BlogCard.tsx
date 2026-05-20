"use client";

import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date?: string;
  cover?: string;
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  cover,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        
        {cover && (
          <div className="overflow-hidden">
            <img
              src={cover}
              alt={title}
              className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6">
          {date && (
            <p className="mb-3 text-sm text-neutral-500">
              {date}
            </p>
          )}

          <h2 className="mb-3 text-2xl font-bold text-neutral-900">
            {title}
          </h2>

          <p className="line-clamp-3 text-neutral-600">
            {description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-black">
            {/* <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center gap-1 text-[#55c0dc] hover:underline"
            > */}
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Link>
  );
}