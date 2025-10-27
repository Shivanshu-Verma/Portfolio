import type { IExperienceItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import CardBox from "@/components/core/CardBox";
import Column from "@/components/core/Column";
import Image from "next/image";

const ExperienceItem = ({ data }: { data: IExperienceItem }) => {
  return (
    <article
      aria-label={`${data.designation} at ${data.company}`}
      className="h-full w-full"
    >
      <CardBox classNames="p-6 items-center text-center bg-[var(--textColor10)] group min-h-80 h-full">
        <Column classNames="items-center justify-between w-full h-full gap-10">
          <Column classNames="items-center justify-start gap-3">
            <div className="h-14 w-14 rounded-full bg-[var(--textColor20)] flex items-center justify-center">
              <Image
                src={data.icon}
                alt={`${data.company} logo`}
                width={56}
                height={56}
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
            </div>

            <p className="text-lg/6 font-semibold text-[var(--textColor)]">
              {data.designation}
            </p>

            <p className="text-[var(--textColorLight)] text-base/6 font-medium">
              {data.company}
            </p>
          </Column>

          <div className="flex flex-row relative gap-2 items-center justify-center px-3 py-1 border border-[var(--textColor40)] text-[var(--textColor)] rounded-[var(--borderRadius)] uppercase tracking-wide text-xs/6">
            <span>{data.startDate}</span>
            <span aria-hidden="true">–</span>
            <span>{data.isCurrentJob ? "Present" : data.endDate}</span>
          </div>

          <p className="text-base/6 font-normal text-[var(--textColorLight)]">
            <Balancer>{data.shortDescription}</Balancer>
          </p>
        </Column>

        <div className="absolute left-0 right-0 top-[-200%] bottom-0 w-full h-auto min-h-full scroll-smooth overflow-hidden overflow-y-auto p-5 bg-zinc-900/95 hidden invisible opacity-0 transition duration-500 ease-in-out slide_in group-hover:flex group-hover:top-0 group-hover:visible group-hover:opacity-100 group-hover:z-10">
          <p className="text-base/6 font-normal m-auto text-center max-w-prose">
            <Balancer preferNative={false}>{data.description}</Balancer>
          </p>
        </div>
      </CardBox>
    </article>
  );
};

export default ExperienceItem;
