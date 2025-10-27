import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import socialLinks from "@/data/socialLinks";
import ResumeButton from "./ui/ResumeButton";
import TalkButton from "./ui/TalkButton";
import { FlipWords } from "../common/FlipWords";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="w-full">
      <ResponsiveBox classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] min-h-screen items-center justify-center relative overflow-hidden rounded-md">
        <ConstraintedBox classNames="px-4 py-8 pt-20 z-20 items-center justify-center">
          <Column classNames="w-full items-center justify-center text-center gap-6">
            <h1
              id={headingId}
              className="text-3xl/normal sm:text-4xl/normal md:text-6xl/none lg:text-7xl/none xl:text-8xl/none font-extrabold text-balance"
            >
              Hi, I&apos;m{" "}
              <span className="text-[var(--primaryColor)]">
                Shivanshu Verma
              </span>
            </h1>
            <p className="text-base/7 md:text-lg/8 max-w-3xl text-[var(--textColorLight)]">
              A software engineer from IIT Jodhpur focused on building secure,
              resilient, and accessible products across the full stack. I blend
              modern web engineering with cybersecurity research to ship
              high-impact experiences for campus communities, startups, and
              open-source teams.
            </p>

            <div className="inline-flex items-center justify-center flex-wrap gap-3 text-sm/6 uppercase tracking-[0.25em] text-[var(--textColorLight)]">
              <span>Full Stack Engineering</span>
              <span className="hidden sm:inline" aria-hidden="true">
                •
              </span>
              <span>Cybersecurity</span>
              <span className="hidden sm:inline" aria-hidden="true">
                •
              </span>
              <FlipWords
                words={["DevSecOps", "Cloud-Native", "Open Source"]}
                className="text-sm/6 md:text-base/6 text-[var(--primaryColor)] font-semibold tracking-[0.2em]"
              />
            </div>

            <Row classNames="gap-4 mt-6 flex-wrap items-center justify-center">
              <TalkButton />
              <ResumeButton />
              <Link
                href="/#projects"
                className="app__outlined_btn !px-6 !py-3 !text-base/6"
              >
                Explore recent projects
              </Link>
            </Row>
          </Column>

          <div className="mt-16 w-full flex flex-col items-center">
            <p className="text-base/6 font-medium text-[var(--textColor)]">
              Find me on the web
            </p>

            <Row classNames="mt-4 gap-3 flex-wrap justify-center">
              {socialLinks.slice(0, 5).map((link, index) => {
                return (
                  <Link
                    key={`social-link-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                    aria-label={`${link.name ?? link.text}`}
                  >
                    <span className="text-base/6 text-[var(--whiteColor)]">
                      <FontAwesomeIcon icon={link.icon} />
                    </span>
                  </Link>
                );
              })}
            </Row>
          </div>
        </ConstraintedBox>
      </ResponsiveBox>
    </section>
  );
};

export default HomeSection1;
