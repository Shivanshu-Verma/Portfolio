"use client";

import { useState } from "react";
import PostRow from "@/components/writing/PostRow";
import { cn } from "@/lib/cn";
import type { PostSummary } from "@/lib/posts";

const WritingList = ({ posts }: { posts: PostSummary[] }) => {
  const [selected, setSelected] = useState("All");
  const tags = ["All", ...new Set(posts.map((post) => post.tag))];
  const visible =
    selected === "All" ? posts : posts.filter((post) => post.tag === selected);

  return (
    <>
      <div
        role="group"
        aria-label="Filter posts by topic"
        className="mt-4 flex flex-wrap gap-2"
      >
        {tags.map((tag) => {
          const count =
            tag === "All"
              ? posts.length
              : posts.filter((p) => p.tag === tag).length;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={selected === tag}
              onClick={() => setSelected(tag)}
              className={cn(
                "inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm transition-colors hover:border-faint",
                selected === tag &&
                  "border-foreground bg-foreground text-background hover:border-foreground",
              )}
            >
              {tag}
              <span className="font-mono text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-10 mb-2 font-mono text-xs tracking-[0.06em] text-faint uppercase">
        {selected === "All" ? "All posts" : selected}
      </p>
      <ul className="border-b">
        {visible.map((post) => (
          <li key={post.slug}>
            <PostRow post={post} showSummary />
          </li>
        ))}
      </ul>
    </>
  );
};

export default WritingList;
