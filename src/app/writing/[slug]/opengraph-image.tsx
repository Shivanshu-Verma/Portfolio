import { getPost, posts } from "@/lib/posts";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Blog post preview";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);

  return renderOgImage({
    eyebrow: post
      ? `Writing · ${post.tag} · ${post.readingMinutes} min`
      : "Writing",
    title: post?.title ?? "Writing",
  });
}
