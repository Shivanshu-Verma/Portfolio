import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/common/Section";
import PostRow from "@/components/writing/PostRow";
import { posts, toSummary } from "@/lib/posts";

const LatestWriting = ({ index }: { index: string }) => (
  <Section
    id="writing"
    index={index}
    title="Writing"
    action={
      <Link
        href="/writing"
        className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
      >
        All posts
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </Link>
    }
  >
    <ul className="border-b">
      {posts.slice(0, 3).map((post) => (
        <li key={post.slug}>
          <PostRow post={toSummary(post)} />
        </li>
      ))}
    </ul>
  </Section>
);

export default LatestWriting;
