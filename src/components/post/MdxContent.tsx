import type { ComponentProps, ReactNode } from "react";
import { Info } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import CopyButton from "@/components/post/CopyButton";
import { slugify } from "@/lib/slugify";

const Callout = ({ children }: { children: ReactNode }) => (
  <aside className="flex gap-3.5 rounded-xl border px-[18px] py-4 text-[15px] leading-[1.65] text-muted [&_p]:m-0 [&_strong]:text-foreground">
    <Info
      className="mt-[3px] size-[18px] shrink-0 text-accent"
      strokeWidth={2}
      aria-hidden
    />
    <div>{children}</div>
  </aside>
);

const components = {
  // Ids must match the headings extracted in content-collections.ts.
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 id={slugify(String(children))} {...props}>
      {children}
    </h2>
  ),
  figure: ({ children, ...props }: ComponentProps<"figure">) => (
    <figure {...props}>
      {children}
      {"data-rehype-pretty-code-figure" in props ? <CopyButton /> : null}
    </figure>
  ),
  Callout,
};

const MdxContent = ({ code }: { code: string }) => (
  <MDXContent code={code} components={components} />
);

export default MdxContent;
