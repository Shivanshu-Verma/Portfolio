import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MonogramIcon } from "@/components/common/BrandIcons";
import ButtonLink from "@/components/common/ButtonLink";
import NavLinks from "@/components/layout/NavLinks";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

const navItems = [
  { href: "/#work", label: "Work", match: "/projects" },
  { href: "/#experience", label: "Experience" },
  ...(posts.length
    ? [{ href: "/writing", label: "Writing", match: "/writing" }]
    : []),
  { href: "/#about", label: "About" },
];

// Phones (≤560px): brand + toggle share the first row, nav spans the second.
const SiteHeader = () => (
  <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-md backdrop-saturate-150">
    <div className="rails flex min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-2 gutter py-2.5">
      <Link
        href="/"
        className="flex min-h-11 items-center gap-2.5 font-semibold tracking-[-0.01em]"
      >
        <MonogramIcon className="size-7" />
        {site.name}
      </Link>
      <div className="flex flex-wrap items-center gap-1 max-[560px]:contents">
        <NavLinks
          items={navItems}
          className="max-[560px]:order-3 max-[560px]:-mx-3 max-[560px]:w-[calc(100%+24px)] max-[560px]:justify-between"
        />
        <ThemeToggle className="ml-1 max-[560px]:order-2" />
        {site.resumeUrl ? (
          <ButtonLink
            variant="primary"
            href={site.resumeUrl}
            className="ml-1 px-4 text-sm max-[560px]:hidden"
          >
            Résumé
            <ArrowUpRight className="size-3.5" aria-hidden />
          </ButtonLink>
        ) : null}
      </div>
    </div>
  </header>
);

export default SiteHeader;
