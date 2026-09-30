"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

// Icon visibility is driven by CSS on <html data-theme>, so no React state is needed.
const ThemeToggle = ({ className }: { className?: string }) => {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className={cn(
        "inline-flex size-11 cursor-pointer items-center justify-center rounded-[10px] border transition-colors hover:bg-surface",
        className,
      )}
    >
      <Sun
        className="theme-icon-sun size-[18px]"
        strokeWidth={1.75}
        aria-hidden
      />
      <Moon
        className="theme-icon-moon size-[18px]"
        strokeWidth={1.75}
        aria-hidden
      />
    </button>
  );
};

export default ThemeToggle;
