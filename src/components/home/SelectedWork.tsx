import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/common/Section";
import projects from "@/data/projects";
import type { IProjectItem } from "@/types";

const ProjectCard = ({ project }: { project: IProjectItem }) => (
  <Link
    href={`/projects/${project.id}`}
    aria-labelledby={`${project.id}-title`}
    aria-describedby={`${project.id}-lead`}
    className="group flex flex-col gap-5 rounded-[14px] border bg-surface p-6 transition-colors hover:border-faint/60"
  >
    <div className="flex justify-between gap-3 font-mono text-xs text-faint">
      <span>
        {project.kind} · {project.note}
      </span>
      <span>{project.year}</span>
    </div>
    <div id={`${project.id}-lead`} className="flex flex-col gap-1.5">
      <span className="text-[44px] leading-none font-semibold tracking-[-0.04em] text-accent tabular-nums">
        {project.lead.value}
      </span>
      <span className="font-mono text-xs text-muted">{project.lead.label}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3
        id={`${project.id}-title`}
        className="text-[19px] font-semibold tracking-[-0.01em]"
      >
        {project.title}
      </h3>
      <p className="text-[15px] text-muted">{project.description}</p>
    </div>
    <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border bg-background px-2 py-[3px] font-mono text-xs text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium">
      Read case study
      <ArrowRight
        className="size-3.5 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </span>
  </Link>
);

const SelectedWork = ({ index }: { index: string }) => (
  <Section
    id="work"
    index={index}
    title="Selected work"
    action={
      <span className="font-mono text-[13px] text-faint">
        {projects.length} projects
      </span>
    }
  >
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </Section>
);

export default SelectedWork;
