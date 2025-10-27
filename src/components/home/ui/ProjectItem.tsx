"use client";

import { useRouter } from "next/navigation";
import { ProjectType, RepoType, type IProjectItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  const router = useRouter();

  const githubUrl = project.githubUrl;
  const liveUrl = project.url;
  const hasExternalLinks = Boolean(githubUrl || liveUrl);

  const _handleNavigateToPage = (id: string) => {
    if (!id || id.length < 1) return;

    router.push(`/projects?id=${id}`);
  };

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      role="listitem"
      className="snap-center h-full"
    >
      <CardBox classNames="w-full h-full min-h-[26rem] sm:min-h-[30rem] lg:min-h-[32rem] min-w-[calc(100%-2rem)] sm:min-w-[25rem] md:min-w-[28rem] p-4 gap-4 items-center justify-between bg-[var(--textColor10)] group slide_in">
        <Column classNames="w-full items-center justify-start gap-4">
          <Row classNames="w-[2.5rem] md:w-[3rem] aspect-square items-center justify-center">
            <Image
              src={project.icon}
              alt={`${project.title} cover graphic`}
              width={100}
              height={100}
              sizes="100%"
              loading="lazy"
              placeholder="blur"
              blurDataURL={project.icon}
              className="w-full h-full object-cover aspect-square"
            />
          </Row>

          <Link
            href={`/projects/${project.id}`}
            className="mt-4 text-lg/6 font-semibold text-[var(--textColor)] hover:text-[var(--primaryColor)] transition"
            id={`${project.id}-title`}
          >
            {project.title}
          </Link>

          <div
            className={`flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-4 capitalize text-center border ${
              project.repoType === RepoType.Private
                ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
                : "text-[var(--successColor)] border-[var(--successColor50)]"
            }`}
          >
            <p className="text-xs/6 font-semibold">
              {project.repoType === RepoType.Private ? "Private" : "Public"}
            </p>
          </div>
          <div
            className={`flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-4 capitalize text-center border ${
              project.projectType === ProjectType.CourseWork
                ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
                : "text-[var(--successColor)] border-[var(--successColor50)]"
            }`}
          >
            <p className="text-xs/6 font-semibold">
              {project.projectType === ProjectType.CourseWork
                ? "Course work"
                : project.projectType === ProjectType.Personal
                ? "Personal"
                : project.projectType === ProjectType.TeamProject
                ? "Team project"
                : "Project"}
            </p>
          </div>

          {hasExternalLinks ? (
            <Row classNames="w-full items-center justify-center gap-2">
              {githubUrl ? (
                <Link
                  href={githubUrl}
                  aria-label={`${project.title} GitHub URL`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-base/6 text-[var(--textColor)]"
                  />
                </Link>
              ) : null}

              {liveUrl ? (
                <Link
                  href={liveUrl}
                  aria-label={`${project.title} live demo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-base/6 text-[var(--textColor)]"
                  />
                </Link>
              ) : null}
            </Row>
          ) : null}

          <Link
            href={`/projects/${project.id}`}
            className="app__outlined_btn !px-4 !py-2 !text-sm/6 !w-full sm:!w-auto text-center"
            aria-label={`View more details about ${project.title}`}
          >
            More details
          </Link>
        </Column>

        <Column classNames="w-full items-center flex-1 justify-between gap-4">
          <p className="text-center text-base/6 text-[var(--textColorLight)]">
            <Balancer>{project.description}</Balancer>
          </p>

          {project.tags && project.tags.length > 0 ? (
            <Row classNames="w-full items-center justify-center flex-wrap gap-2">
              {project.tags.map((tag, i) => {
                return (
                  <p
                    key={`tag-${i}`}
                    className="rounded-[var(--borderRadius)] border border-[var(--textColor50)] py-[.125rem] px-2 text-xs/6 font-normal"
                  >
                    {tag}
                  </p>
                );
              })}
            </Row>
          ) : null}
        </Column>
      </CardBox>
    </article>
  );
};

export default ProjectItem;
