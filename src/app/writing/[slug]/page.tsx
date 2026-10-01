import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import MdxContent from "@/components/post/MdxContent";
import TableOfContents from "@/components/post/TableOfContents";
import { formatPostDate, getPost, posts, rssAlternates } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

type PostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};

  const path = `/writing/${post.slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: path, ...rssAlternates },
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: path,
      siteName: site.name,
      publishedTime: post.date,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      creator: `@${site.handle}`,
    },
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = absoluteUrl(`/writing/${post.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    url,
    image: absoluteUrl(`/writing/${post.slug}/opengraph-image`),
    author: { "@id": absoluteUrl("/#person") },
  };
  const next = posts[posts.indexOf(post) + 1];

  return (
    <>
      <div className="flex flex-wrap items-start gap-x-16 gap-y-12 gutter pt-[clamp(40px,6vw,72px)] pb-20">
        <article
          aria-labelledby="post-title"
          className="max-w-[700px] min-w-0 flex-[1_1_560px]"
        >
          <header className="flex rise-in flex-col gap-[22px]">
            <Link
              href="/writing"
              className="inline-flex min-h-11 items-center gap-1.5 self-start font-mono text-[13px] text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              Writing
            </Link>
            <p className="flex flex-wrap items-center gap-x-3.5 gap-y-2 font-mono text-[13px] text-faint">
              <span>{post.tag}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatPostDate(post)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
            <h1
              id="post-title"
              className="text-[clamp(34px,4.8vw,50px)] leading-[1.08] font-semibold tracking-[-0.04em] text-balance"
            >
              {post.title}
            </h1>
          </header>
          <div className="prose mt-8">
            <MdxContent code={post.body} />
          </div>
          <nav
            aria-label="More posts"
            className="mt-12 flex flex-wrap justify-between gap-4 border-t pt-6"
          >
            <Link
              href="/writing"
              className="group flex min-h-11 flex-col gap-1"
            >
              <span className="font-mono text-xs text-faint">All posts</span>
              <span className="font-medium decoration-accent underline-offset-4 group-hover:underline">
                ← Writing
              </span>
            </Link>
            {next ? (
              <Link
                href={`/writing/${next.slug}`}
                className="group flex min-h-11 flex-col items-end gap-1 text-right"
              >
                <span className="font-mono text-xs text-faint">Next post</span>
                <span className="font-medium decoration-accent underline-offset-4 group-hover:underline">
                  {next.title} →
                </span>
              </Link>
            ) : null}
          </nav>
        </article>
        <TableOfContents headings={post.headings} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default PostPage;
