import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Rss } from "lucide-react";
import WritingList from "@/components/writing/WritingList";
import { posts, toSummary } from "@/lib/posts";

const description =
  "Notes on backend systems, infrastructure and security, written up after I had to figure them out.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/writing" },
};

const WritingPage = () => {
  if (!posts.length) notFound();

  return (
    <>
      <section
        aria-labelledby="writing-title"
        className="gutter pt-[clamp(48px,7vw,88px)] pb-[88px]"
      >
        <div className="flex rise-in flex-col gap-[18px]">
          <h1
            id="writing-title"
            className="text-[clamp(40px,6vw,64px)] leading-[1.02] font-semibold tracking-[-0.045em]"
          >
            Writing
          </h1>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <p className="max-w-[600px] text-lg leading-[1.65] text-muted">
              {description}
            </p>
            <a
              href="/rss.xml"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-[13px] text-muted transition-colors hover:text-foreground"
            >
              <Rss className="size-3.5" aria-hidden />
              RSS feed
            </a>
          </div>
        </div>
        <WritingList posts={posts.map(toSummary)} />
      </section>
    </>
  );
};

export default WritingPage;
