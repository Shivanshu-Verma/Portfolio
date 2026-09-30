import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { slugify } from "./src/lib/slugify";

const posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"),
    tag: z.enum(["Backend", "Infra", "Security"]),
    draft: z.boolean().default(false),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: {
              light: "github-light-default",
              dark: "github-dark-default",
            },
            keepBackground: false,
            defaultLang: "plaintext",
          },
        ],
      ],
    });
    const words = document.content.split(/\s+/).filter(Boolean).length;
    const headings = [...document.content.matchAll(/^## (.+)$/gm)].map(
      ([, text]) => ({ id: slugify(text), text }),
    );

    return {
      ...document,
      slug: document._meta.path,
      body,
      headings,
      readingMinutes: Math.max(1, Math.round(words / 220)),
    };
  },
});

export default defineConfig({ content: [posts] });
