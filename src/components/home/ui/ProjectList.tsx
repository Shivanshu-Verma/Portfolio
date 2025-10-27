"use client";

import { useEffect, useRef, useState } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const updateScrollability = () => {
      setIsScrollable(element.scrollWidth > element.clientWidth + 1);
    };

    const handleResize = () => {
      requestAnimationFrame(updateScrollability);
    };

    updateScrollability();
    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof window !== "undefined" && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(element);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [projects]);

  const _handleOnClickPrev = () => {
    const container = carouselRef.current;
    if (!container) return;

    const offset = container.clientWidth || 400;
    container.scrollBy({ left: -offset, behavior: "smooth" });
  };

  const _handleOnClickNext = () => {
    const container = carouselRef.current;
    if (!container) return;

    const offset = container.clientWidth || 400;
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <Column classNames="w-full mt-16" ariaLabel="Projects carousel">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 items-stretch"
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
