import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/common/BrandIcons";
import ButtonLink from "@/components/common/ButtonLink";
import projects, { getProject } from "@/data/projects";
import { rssAlternates } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";
import type { IProjectItem } from "@/types";

type ProjectPageProps = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).id);
  if (!project) return {};

  const path = `/projects/${project.id}`;
  return {
    title: project.title,
    description: project.summary,
    keywords: project.tags,
    alternates: { canonical: path, ...rssAlternates },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: path,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      creator: `@${site.handle}`,
    },
  };
}

const buildJsonLd = (project: IProjectItem) => {
  const url = absoluteUrl(`/projects/${project.id}`);
  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url,
      image: absoluteUrl(`/projects/${project.id}/opengraph-image`),
      keywords: project.tags,
      genre: project.kind,
      creator: { "@id": absoluteUrl("/#person") },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work",
          item: absoluteUrl("/#work"),
        },
        { "@type": "ListItem", position: 3, name: project.title, item: url },
      ],
    },
  ];
};

const factLabel = "font-mono text-xs tracking-[0.06em] text-faint uppercase";

const Narrative = ({
  index,
  title,
  text,
  bullets,
}: {
  index: string;
  title: string;
  text: string;
  bullets: string[];
}) => {
  const id = title.toLowerCase();
  return (
    <section aria-labelledby={id} className="flex flex-col gap-3">
      <h2
        id={id}
        className="flex items-baseline gap-3 text-[22px] font-semibold tracking-[-0.02em]"
      >
        <span className="font-mono text-[13px] font-normal text-faint">
          {index}
        </span>
        {title}
      </h2>
      <p className="text-[17px] leading-[1.75] text-muted">{text}</p>
      {bullets.length ? (
        <ul className="mt-1 flex flex-col gap-2.5 text-base leading-[1.65]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = getProject((await params).id);
  if (!project) notFound();

  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];
  const facts = [
    { label: "Role", value: project.roles.join(", ") },
    { label: "Timeline", value: project.duration },
    {
      label: "Type",
      value: `${project.kind}, ${project.repo === "private" ? "private" : "public"} repo`,
    },
    { label: "Stack", value: project.tags.join(", ") },
  ];

  return (
    <>
      <article aria-labelledby="project-title">
        <header className="flex rise-in flex-col gap-[22px] gutter pt-[clamp(40px,6vw,72px)] pb-12">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[13px] text-faint"
          >
            <Link
              href="/#work"
              className="text-muted underline decoration-line underline-offset-4 hover:text-foreground hover:decoration-accent"
            >
              Work
            </Link>
            <span aria-hidden className="px-2">
              /
            </span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <p className="font-mono text-[13px] text-faint">
            {project.kind} · {project.duration} · {project.location}
          </p>
          <h1
            id="project-title"
            className="max-w-[820px] text-[clamp(36px,5.5vw,60px)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance"
          >
            {project.title}
          </h1>
          <p className="max-w-[680px] text-[19px] leading-[1.6] text-pretty text-muted">
            {project.summary}
          </p>
          {project.links.length ? (
            <div className="mt-1 flex flex-wrap gap-3">
              {project.links.map((link, i) => (
                <ButtonLink
                  key={link.url}
                  href={link.url}
                  variant={i === 0 ? "primary" : "secondary"}
                  className="text-sm"
                >
                  {link.type === "github" ? (
                    <GitHubIcon className="size-4" />
                  ) : null}
                  {link.title}
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </header>

        <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-t">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1 border-b gutter py-5"
            >
              <dt className={factLabel}>{fact.label}</dt>
              <dd className="text-[15px]">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <section
          aria-label="Results"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] border-b bg-surface"
        >
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-2 gutter py-8">
              <span className="text-[52px] leading-none font-semibold tracking-[-0.045em] text-accent tabular-nums">
                {metric.value}
              </span>
              <span className="text-[15px] font-medium">{metric.label}</span>
              {metric.description ? (
                <span className="text-sm text-muted">{metric.description}</span>
              ) : null}
            </div>
          ))}
        </section>

        <div className="flex max-w-[808px] flex-col gap-12 gutter pt-16 pb-[72px]">
          <Narrative
            index="01"
            title="Context"
            text={project.context}
            bullets={[]}
          />
          <Narrative
            index="02"
            title="Approach"
            text={project.approach}
            bullets={project.responsibilities}
          />
          <Narrative
            index="03"
            title="Impact"
            text={project.impact}
            bullets={project.highlights}
          />
        </div>
      </article>

      <nav
        aria-label="More projects"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] border-t"
      >
        <Link
          href="/#work"
          className="flex flex-col gap-1.5 border-b gutter py-7 transition-colors hover:bg-surface"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
            <ArrowLeft className="size-3.5" aria-hidden />
            Back
          </span>
          <span className="text-[17px] font-medium">All work</span>
        </Link>
        <Link
          href={`/projects/${next.id}`}
          className="flex flex-col items-end gap-1.5 border-b gutter py-7 text-right transition-colors hover:bg-surface"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
            Next project
            <ArrowRight className="size-3.5" aria-hidden />
          </span>
          <span className="text-[17px] font-medium">{next.title}</span>
        </Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(project)),
        }}
      />
    </>
  );
};

export default ProjectPage;
