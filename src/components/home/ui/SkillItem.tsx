import type { ISkillListItem } from "@/types";
import Image from "next/image";
import CardBox from "@/components/core/CardBox";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <article
      role="listitem"
      aria-label={`${data.title} skills`}
      className="w-full h-full"
    >
      <CardBox classNames="p-6 items-center justify-start bg-[var(--textColor10)] w-full group h-full min-h-[18rem]">
        <p className="text-lg/6 font-semibold text-center text-[var(--textColor)]">
          {data.title}
        </p>

        {data.items.length > 0 ? (
          <Row classNames="gap-4 mt-8 flex-wrap justify-center items-center">
            {data.items.map((skill, index) => {
              return (
                <Column
                  key={`skill-item-${index}`}
                  classNames="items-center gap-1 text-[var(--textColor)]"
                >
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      alt={`${skill.title} logo`}
                      width={144}
                      height={144}
                      sizes="100%"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/images/logical-thinking.png"
                      className="w-12 lg:w-14 h-auto aspect-square object-contain"
                    />
                  ) : null}

                  <p className="text-xs/6 font-normal">{skill.title}</p>
                </Column>
              );
            })}
          </Row>
        ) : null}
      </CardBox>
    </article>
  );
};

export default SkillItem;
