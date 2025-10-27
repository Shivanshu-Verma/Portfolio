import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { HoverLayoutGrid } from "@/components/common/HoverLayoutGrid";
import services from "@/data/services";

const HomeSection2 = ({ id }: { id: string }) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="w-full">
      <ResponsiveBox classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.2] bg-dot-white/[0.2] rounded-md">
        <ConstraintedBox classNames="p-4 py-16 z-20">
          <SectionTitle
            id={headingId}
            subtitle="A snapshot of the domains where I love experimenting, building, and mentoring teams."
          >
            Interests & Focus Areas
          </SectionTitle>
          <HoverLayoutGrid cards={services} />
        </ConstraintedBox>
      </ResponsiveBox>
    </section>
  );
};

export default HomeSection2;
