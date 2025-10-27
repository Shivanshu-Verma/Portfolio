import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="w-full">
      <ResponsiveBox classNames="relative flex flex-col justify-start items-start w-full h-auto p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-small-white/[0.1] bg-grid-smaill-white/[0.1] min-h-screen items-center justify-center">
        <ConstraintedBox classNames="p-4 py-16">
          <SectionTitle
            id={headingId}
            subtitle="Hands-on roles where I scaled products, collaborated with security teams, and led student-led engineering initiatives."
          >
            Experience & Impact
          </SectionTitle>

          <GridBox
            role="list"
            ariaLabel="Professional experience cards"
            classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16 gap-6"
          >
            {experiences.map((experience, index) => {
              return (
                <ExperienceItem key={`experience-${index}`} data={experience} />
              );
            })}
          </GridBox>
        </ConstraintedBox>
      </ResponsiveBox>
    </section>
  );
};

export default HomeSection3;
