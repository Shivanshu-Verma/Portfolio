import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import SkillItem from "./ui/SkillItem";
import skills from "@/data/skills";

const HomeSection4 = ({ id }: { id: string }) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="w-full">
      <ResponsiveBox classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] items-center justify-center">
        <ConstraintedBox classNames="p-4 py-16">
          <SectionTitle
            id={headingId}
            subtitle="A mix of engineering and security tools I rely on to ship production-ready experiences and safeguard systems."
          >
            Technical Toolkit
          </SectionTitle>

          <GridBox
            role="list"
            ariaLabel="Skill categories"
            classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16 gap-6"
          >
            {skills.map((skill, index) => {
              return <SkillItem key={`skill-${index}`} data={skill} />;
            })}
          </GridBox>
        </ConstraintedBox>
      </ResponsiveBox>
    </section>
  );
};

export default HomeSection4;
