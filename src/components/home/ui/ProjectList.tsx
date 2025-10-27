"use client";

import { createRef, useEffect, useState } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (carouselRef.current) {
        setIsScrollable(
          carouselRef.current.scrollWidth > carouselRef.current.clientWidth
        );
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, [projects]);

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  };

  return (
    <Column classNames="w-full mt-16" ariaLabel="Projects carousel">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar"
        elementRef={carouselRef}
        role="list"
        ariaLabel="Highlighted software projects"
        ariaDescribedBy="projects-heading"
      >
        {projects.map((item, index) => {
          return <ProjectItem key={`project-item-${index}`} project={item} />;
        })}
      </Row>

      {isScrollable && (
        <Row classNames="w-full items-center justify-center gap-4 mt-8">
          <button
            type="button"
            className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
            onClick={_handleOnClickPrev}
            aria-label="Scroll projects carousel to previous items"
          >
            Prev
          </button>

          <button
            type="button"
            className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
            onClick={_handleOnClickNext}
            aria-label="Scroll projects carousel to next items"
          >
            Next
          </button>
        </Row>
      )}
    </Column>
  );
};

export default ProjectList;
