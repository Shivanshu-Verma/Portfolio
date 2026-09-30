import projects, { getProject } from "@/data/projects";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Project case study preview";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const project = getProject((await params).id);

  return renderOgImage({
    eyebrow: project ? `Case study · ${project.year}` : "Case study",
    title: project?.title ?? "Project",
    metric: project?.lead,
  });
}
