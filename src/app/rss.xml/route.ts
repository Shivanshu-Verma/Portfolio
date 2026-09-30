import { posts } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const items = posts
    .filter((post) => !post.draft)
    .map((post) => {
      const url = absoluteUrl(`/writing/${post.slug}`);
      return `<item><title>${escapeXml(post.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(post.date).toUTCString()}</pubDate><description>${escapeXml(post.summary)}</description><category>${post.tag}</category></item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${escapeXml(`${site.name} · Writing`)}</title><link>${absoluteUrl("/writing")}</link><atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/><description>Notes on backend systems, infrastructure and security.</description><language>en</language>${items}</channel></rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
