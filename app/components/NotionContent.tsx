"use client";

import { NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export default function NotionContent({
  recordMap,
}: any) {
  return (
    <div
      className="
        prose prose-lg max-w-none prose-neutral

        prose-headings:font-semibold
        prose-headings:tracking-[-0.03em]

        prose-h1:text-5xl
        prose-h2:text-4xl
        prose-h3:text-3xl

        prose-p:text-neutral-700
        prose-p:leading-8

        prose-a:text-blue-600
        prose-a:no-underline

        prose-strong:text-black

        prose-blockquote:border-l-blue-500
        prose-blockquote:bg-blue-50
        prose-blockquote:px-6
        prose-blockquote:py-4
        prose-blockquote:rounded-r-2xl

        prose-code:text-pink-600

        prose-pre:rounded-2xl
        prose-pre:border
        prose-pre:border-black/10

        prose-img:rounded-2xl

        prose-li:text-neutral-700
      "
    >
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
      />
    </div>
  );
}