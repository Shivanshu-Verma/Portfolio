import Section from "@/components/common/Section";
import stack from "@/data/stack";

const Stack = ({ index }: { index: string }) => (
  <Section id="stack" index={index} title="Stack">
    <div className="border-b">
      {stack.map((group) => (
        <div
          key={group.title}
          className="flex flex-wrap gap-x-8 gap-y-2.5 border-t py-4"
        >
          <h3 className="flex-[0_0_190px] pt-1 font-mono text-[13px] text-faint">
            {group.title}
          </h3>
          <ul className="flex min-w-0 flex-[1_1_380px] flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border px-[11px] py-1 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Stack;
