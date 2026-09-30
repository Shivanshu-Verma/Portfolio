"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Heading = { id: string; text: string };

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  const [active, setActive] = useState(headings[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className="sticky top-24 hidden flex-[0_1_220px] flex-col gap-1.5 pt-[72px] lg:flex"
    >
      <p className="mb-1.5 font-mono text-xs tracking-[0.06em] text-faint uppercase">
        On this page
      </p>
      {headings.map(({ id, text }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? "true" : undefined}
          className={cn(
            "border-l py-1.5 pl-3 text-sm text-muted transition-colors hover:text-foreground",
            active === id && "border-accent text-foreground",
          )}
        >
          {text}
        </a>
      ))}
    </nav>
  );
};

export default TableOfContents;
