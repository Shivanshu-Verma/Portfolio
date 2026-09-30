import Section from "@/components/common/Section";
import experience, { formatPeriod } from "@/data/experience";

const Experience = ({ index }: { index: string }) => (
  <Section id="experience" index={index} title="Experience">
    <ol className="border-b">
      {experience.map((item) => (
        <li
          key={`${item.company}-${item.role}`}
          className="flex flex-wrap gap-x-8 gap-y-1.5 border-t py-6"
        >
          <span className="flex flex-[0_0_190px] items-center gap-2 font-mono text-[13px] text-faint">
            {item.current ? (
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            ) : null}
            {formatPeriod(item)}
          </span>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-1.5">
            <h3 className="text-[17px] font-semibold">
              {item.role} <span className="font-normal text-faint">·</span>{" "}
              {item.company}
            </h3>
            {item.summary ? (
              <p className="text-[15px] text-muted">{item.summary}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
