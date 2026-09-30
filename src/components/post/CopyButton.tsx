"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

// Copies the text of the <pre> in the enclosing code figure.
const CopyButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const code = ref.current
      ?.closest("figure")
      ?.querySelector("pre")?.innerText;
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy code"}
      className="absolute top-0 right-0 inline-flex size-11 cursor-pointer items-center justify-center text-muted transition-colors hover:text-foreground"
    >
      {copied ? (
        <Check className="size-4 text-accent" aria-hidden />
      ) : (
        <Copy className="size-4" strokeWidth={1.75} aria-hidden />
      )}
    </button>
  );
};

export default CopyButton;
