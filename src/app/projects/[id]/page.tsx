import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import LocalConfig from "@/constants/config";
import Strings from "@/constants/strings";
import projects, { getProjectDetails } from "@/data/projects";
import PageBox from "@/components/core/PageBox";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import type { IProjectItem } from "@/types";
import { ProjectType, RepoType } from "@/types";

const getBaseUrl = () => {
  const raw = LocalConfig.values.NEXT_PUBLIC_SITE_URL;

  if (!raw) {
    return "https://shivanshu.site";
  }

  return raw.startsWith("http")
    ? raw.replace(/\/$/, "")
    : `https://${raw.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
};

const buildImageUrl = (path: string | undefined, baseUrl: string) => {
  if (!path) {
    return `${baseUrl}/icon.svg`;
  }

  if (path.startsWith("http")) {
    return path;
  }

  return `${baseUrl}${path}`;
};

const formatRepoLabel = (repoType: RepoType) =>
  repoType === RepoType.Public ? "Public repository" : "Private repository";

const formatProjectType = (projectType?: ProjectType) => {
  switch (projectType) {
    case ProjectType.Personal:
      return "Personal project";
    case ProjectType.TeamProject:
      return "Team project";
    case ProjectType.CourseWork:
      return "Coursework";
    default:
      return undefined;
  }
};

type ProjectPageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectDetails(params.id);

  if (!project) {
    return {
      title: "Project not found | Shivanshu Verma",
    };
  }

  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}/projects/${project.id}`;
  const imageUrl = buildImageUrl(
    project.screenshots?.[0] ?? project.icon,
    baseUrl
  );
  const description = project.summary ?? project.description;

  return {
    title: `${project.title} Project Overview | ${Strings.fullName}`,
    description,
    alternates: {
      canonical: pageUrl,
    },
    keywords: project.tags,
    openGraph: {
      title: `${project.title} · Project Overview`,
      description,
      url: pageUrl,
      type: "article",
      siteName: Strings.fullName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Project Overview`,
      description,
      creator: Strings.shortName,
      images: [imageUrl],
    },
    category: formatProjectType(project.projectType),
  };
}

const buildProjectJsonLd = (
  project: IProjectItem,
  pageUrl: string,
  imageUrl: string
) => {
  const projectType =
    formatProjectType(project.projectType) ?? "Digital project";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary ?? project.description,
    url: pageUrl,
    image: imageUrl,
    keywords: project.tags,
    inLanguage: "en",
    locationCreated: project.location,
    genre: projectType,
    contributor: project.roles?.map((role) => ({
      "@type": "Person",
      name: Strings.fullName,
      jobTitle: role,
    })),
    creator: {
      "@type": "Person",
      name: Strings.fullName,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: pageUrl.replace(/\/projects\/.*$/, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${pageUrl.replace(/\/projects\/.*$/, "")}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: pageUrl,
      },
    ],
  };

  return [projectSchema, breadcrumbSchema];
};

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = getProjectDetails(params.id);

  if (!project) {
    notFound();
  }

  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}/projects/${project.id}`;
  const imageUrl = buildImageUrl(
    project.screenshots?.[0] ?? project.icon,
    baseUrl
  );
  const schema = buildProjectJsonLd(project, pageUrl, imageUrl);

  const repoLabel = formatRepoLabel(project.repoType);
  const projectTypeLabel = formatProjectType(project.projectType);

  return (
    <PageBox classNames="bg-[var(--backgroundColor)] py-16 md:py-24">
      <main
        className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-16"
        aria-labelledby="project-hero-title"
      >
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm/6 text-[var(--textColorLight)]">
            <li>
              <Link href="/" className="hover:text-[var(--primaryColor)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-[var(--primaryColor)]"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-[var(--textColor)]">
              {project.title}
            </li>
          </ol>
        </nav>

        <header className="flex flex-col gap-8">
          <Row classNames="items-center gap-6">
            <div className="relative w-20 h-20 overflow-hidden rounded-2xl border border-[var(--textColor20)] bg-[var(--textColor10)]">
              <Image
                src={project.icon}
                alt={`${project.title} logo`}
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>
            <Column classNames="gap-3">
              <h1
                id="project-hero-title"
                className="text-3xl/9 md:text-4xl/10 font-bold tracking-tight"
              >
                {project.title}
              </h1>
              <p className="text-base/7 md:text-lg/8 text-[var(--textColorLight)] max-w-3xl">
                <Balancer>{project.summary ?? project.description}</Balancer>
              </p>
            </Column>
          </Row>

          <Row classNames="items-center flex-wrap gap-3 text-sm/6 text-[var(--textColorLight)]">
            {projectTypeLabel ? (
              <span className="rounded-full border border-[var(--textColor20)] px-3 py-1">
                {projectTypeLabel}
              </span>
            ) : null}
            <span className="rounded-full border border-[var(--textColor20)] px-3 py-1">
              {repoLabel}
            </span>
            {project.duration ? (
              <span className="rounded-full border border-[var(--textColor20)] px-3 py-1">
                {project.duration}
              </span>
            ) : null}
            {project.location ? (
              <span className="rounded-full border border-[var(--textColor20)] px-3 py-1">
                {project.location}
              </span>
            ) : null}
          </Row>

          {project.links && project.links.length > 0 ? (
            <Row classNames="items-center gap-3 text-sm/6">
              {project.links.map((link) => {
                const isExternal = /^https?:/i.test(link.url);

                return (
                  <Link
                    key={link.url}
                    href={link.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="app__outlined_btn !px-4 !py-2 !text-sm/6"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </Row>
          ) : null}
        </header>

        {project.metrics && project.metrics.length > 0 ? (
          <section
            aria-labelledby="project-metrics-heading"
            className="flex flex-col gap-6"
          >
            <SectionTitle
              id="project-metrics-heading"
              subtitle="Key outcomes delivered for stakeholders"
            >
              Impact metrics
            </SectionTitle>
            <GridBox classNames="gap-6">
              {project.metrics.map((metric) => (
                <article
                  key={`${project.id}-${metric.label}`}
                  className="flex flex-col gap-2 rounded-2xl border border-[var(--textColor20)] bg-[var(--textColor10)] p-6"
                  aria-label={`${metric.label} ${metric.value}`}
                >
                  <span className="text-sm/6 uppercase tracking-wide text-[var(--primaryColor)]">
                    {metric.label}
                  </span>
                  <p className="text-3xl/10 font-semibold text-[var(--textColor)]">
                    {metric.value}
                  </p>
                  {metric.description ? (
                    <p className="text-sm/6 text-[var(--textColorLight)]">
                      {metric.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </GridBox>
          </section>
        ) : null}

        {project.highlights && project.highlights.length > 0 ? (
          <section
            aria-labelledby="project-highlights-heading"
            className="flex flex-col gap-6"
          >
            <SectionTitle
              id="project-highlights-heading"
              subtitle="Notable milestones and system improvements"
            >
              Highlights
            </SectionTitle>
            <ul className="grid gap-4 text-base/7 md:text-lg/8 text-[var(--textColorLight)]">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[var(--textColor20)] bg-[var(--textColor10)] p-5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.responsibilities && project.responsibilities.length > 0 ? (
          <section
            aria-labelledby="project-responsibilities-heading"
            className="flex flex-col gap-6"
          >
            <SectionTitle
              id="project-responsibilities-heading"
              subtitle="Where I created the most impact"
            >
              Responsibilities
            </SectionTitle>
            <ul className="grid gap-4 text-base/7 text-[var(--textColorLight)]">
              {project.responsibilities.map((item) => (
                <li key={item} className="relative pl-5">
                  <span
                    className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[var(--primaryColor)]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.context || project.approach || project.impact ? (
          <section
            aria-labelledby="project-narrative-heading"
            className="flex flex-col gap-8"
          >
            <SectionTitle
              id="project-narrative-heading"
              subtitle="Snapshot of the project background, execution, and results"
            >
              Project narrative
            </SectionTitle>
            <div className="grid gap-6 md:grid-cols-3">
              {project.context ? (
                <article className="rounded-2xl border border-[var(--textColor20)] bg-[var(--textColor10)] p-6">
                  <h3 className="text-xl/8 font-semibold text-[var(--textColor)]">
                    Project context
                  </h3>
                  <p className="mt-3 text-base/7 text-[var(--textColorLight)]">
                    {project.context}
                  </p>
                </article>
              ) : null}
              {project.approach ? (
                <article className="rounded-2xl border border-[var(--textColor20)] bg-[var(--textColor10)] p-6">
                  <h3 className="text-xl/8 font-semibold text-[var(--textColor)]">
                    Approach
                  </h3>
                  <p className="mt-3 text-base/7 text-[var(--textColorLight)]">
                    {project.approach}
                  </p>
                </article>
              ) : null}
              {project.impact ? (
                <article className="rounded-2xl border border-[var(--textColor20)] bg-[var(--textColor10)] p-6">
                  <h3 className="text-xl/8 font-semibold text-[var(--textColor)]">
                    Impact
                  </h3>
                  <p className="mt-3 text-base/7 text-[var(--textColorLight)]">
                    {project.impact}
                  </p>
                </article>
              ) : null}
            </div>
          </section>
        ) : null}

        {project.tags && project.tags.length > 0 ? (
          <section
            aria-labelledby="project-tech-heading"
            className="flex flex-col gap-4"
          >
            <SectionTitle
              id="project-tech-heading"
              subtitle="Tools and frameworks that powered the build"
            >
              Stack
            </SectionTitle>
            <Row classNames="flex-wrap gap-3 text-sm/6 text-[var(--textColorLight)]">
              {project.tags.map((tag) => (
                <span
                  key={`${project.id}-${tag}`}
                  className="rounded-full border border-[var(--textColor20)] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </Row>
          </section>
        ) : null}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema, null, 2),
        }}
      />
    </PageBox>
  );
};

export default ProjectPage;
