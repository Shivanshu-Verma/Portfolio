"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavItem = { href: string; label: string; match?: string };

const NavLinks = ({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className={cn("flex flex-wrap gap-0.5", className)}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={
            item.match && pathname.startsWith(item.match) ? "page" : undefined
          }
          className="rounded-lg px-3 py-[11px] text-sm text-muted transition-colors hover:text-foreground aria-[current=page]:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
