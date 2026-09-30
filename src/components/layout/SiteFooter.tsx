import { Rss } from "lucide-react";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

const linkClass =
  "inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-foreground";

const SiteFooter = () => (
  <footer className="border-t">
    <div className="rails flex flex-wrap items-center justify-between gap-x-6 gap-y-1 gutter py-4 font-mono text-xs text-faint">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
        {posts.length ? (
          <a href="/rss.xml" className={linkClass}>
            <Rss className="size-3.5" aria-hidden />
            RSS
          </a>
        ) : null}
        <a href={site.links.source} className={linkClass}>
          Source
        </a>
        <a href={site.links.coffee} className={linkClass}>
          Buy me a coffee
        </a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
