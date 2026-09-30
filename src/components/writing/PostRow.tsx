import Link from "next/link";
import type { PostSummary } from "@/lib/posts";

const PostRow = ({
  post,
  showSummary = false,
}: {
  post: PostSummary;
  showSummary?: boolean;
}) => (
  <Link
    href={`/writing/${post.slug}`}
    aria-labelledby={`post-${post.slug}`}
    className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t py-[18px]"
  >
    <span className="flex-[0_0_104px] font-mono text-[13px] text-faint">
      {post.dateLabel}
    </span>
    <span className="flex min-w-0 flex-[1_1_360px] flex-col gap-1">
      <span
        id={`post-${post.slug}`}
        className="text-[17px] font-medium tracking-[-0.01em] decoration-accent decoration-2 underline-offset-[5px] group-hover:underline"
      >
        {post.title}
      </span>
      {showSummary ? (
        <span className="text-[15px] text-muted">{post.summary}</span>
      ) : null}
    </span>
    <span className="font-mono text-[13px] text-faint">
      {post.tag} · {post.readingMinutes} min
    </span>
  </Link>
);

export default PostRow;
