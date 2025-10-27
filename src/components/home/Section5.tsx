import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectList from "./ui/ProjectList";
import projects from "@/data/projects";

const HomeSection5 = ({ id }: { id: string }) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="w-full">
      <ResponsiveBox classNames="bg-[var(--bgColor)] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] min-h-[calc(100vh-5rem)] items-center justify-center overflow-visible">
        <ConstraintedBox classNames="p-4 py-16">
          <SectionTitle
            id={headingId}
            subtitle="Selected builds, security experiments, and community platforms I've shipped recently."
          >
            Featured Projects
          </SectionTitle>

          <ProjectList projects={projects} />
        </ConstraintedBox>
      </ResponsiveBox>
    </section>
  );
};

export default HomeSection5;
