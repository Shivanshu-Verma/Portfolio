import Section from "@/components/common/Section";
import profile from "@/data/profile";

const factLabel = "font-mono text-xs tracking-[0.06em] text-faint uppercase";

const About = ({
  index,
  hasWriting,
}: {
  index: string;
  hasWriting: boolean;
}) => {
  const { degree, school, year } = profile.education;

  return (
    <Section id="about" index={index} title="About">
      <div className="flex flex-wrap gap-x-14 gap-y-8">
        <div className="flex max-w-[620px] min-w-0 flex-[1_1_440px] flex-col gap-4 text-[17px] leading-[1.7] text-muted">
          <p>{profile.about}</p>
          {hasWriting ? <p>{profile.aboutWriting}</p> : null}
        </div>
        <dl className="flex min-w-0 flex-[1_1_280px] flex-col gap-5">
          <div className="flex flex-col gap-1">
            <dt className={factLabel}>Education</dt>
            <dd className="flex flex-col text-[15px]">
              {degree ? <span>{degree}</span> : null}
              <span className={degree ? "text-muted" : undefined}>
                {school}
                {year ? <span className="text-faint"> · {year}</span> : null}
              </span>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={factLabel}>Recognition</dt>
            <dd className="text-[15px]">{profile.recognition}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={factLabel}>Languages</dt>
            <dd className="text-[15px]">{profile.languages}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
};

export default About;
