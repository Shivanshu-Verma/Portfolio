import type { Metadata } from "next";
import { allPosts } from "content-collections";
import { site } from "@/lib/site";

// Drafts show in `next dev` only, never in a production build.
const includeDrafts = process.env.NODE_ENV !== "production";

export type Post = (typeof allPosts)[number];

export const posts: Post[] = allPosts
  .filter((post) => includeDrafts || !post.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

// A page's `alternates` replaces the layout's, so every page spreads this in next to its canonical.
export const rssAlternates: Pick<
  NonNullable<Metadata["alternates"]>,
  "types"
> = posts.length
  ? {
      types: {
        "application/rss+xml": [
          { url: "/rss.xml", title: `${site.name} · Writing` },
        ],
      },
    }
  : {};

export const getPost = (slug: string): Post | undefined =>
  posts.find((post) => post.slug === slug);

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const formatPostDate = (post: Post): string =>
  post.draft ? "Draft" : dateFormat.format(new Date(post.date));

/** Row data for post lists; keeps the compiled MDX out of client bundles. */
export type PostSummary = Pick<
  Post,
  "slug" | "title" | "summary" | "tag" | "readingMinutes"
> & { dateLabel: string };

export const toSummary = (post: Post): PostSummary => ({
  slug: post.slug,
  title: post.title,
  summary: post.summary,
  tag: post.tag,
  readingMinutes: post.readingMinutes,
  dateLabel: formatPostDate(post),
});
