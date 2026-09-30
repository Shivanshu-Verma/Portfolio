import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  title: string;
  index?: string;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
};

const Section = ({
  id,
  title,
  index,
  action,
  className,
  children,
}: SectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={cn("border-t gutter py-[clamp(52px,8vw,72px)]", className)}
  >
    <div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
      <div className="flex items-baseline gap-3.5">
        {index ? (
          <span className="font-mono text-[13px] text-faint">{index}</span>
        ) : null}
        <h2
          id={`${id}-title`}
          className="text-[22px] font-semibold tracking-[-0.02em]"
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
    {children}
  </section>
);

export default Section;
