import { ArrowUpRight } from "lucide-react";
import socialLinks from "@/data/socialLinks";
import { site } from "@/lib/site";

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-title"
    className="border-t gutter py-[clamp(64px,10vw,88px)]"
  >
    <div className="flex max-w-[720px] flex-col gap-5">
      <h2
        id="contact-title"
        className="text-[clamp(32px,4.5vw,48px)] leading-[1.1] font-semibold tracking-[-0.035em]"
      >
        Say hello.
      </h2>
      <p className="text-[17px] leading-[1.7] text-muted">
        Email is the quickest way to reach me. I&apos;m also on LinkedIn and X.
      </p>
      <a
        href={site.links.email}
        className="self-start py-1.5 font-mono text-[clamp(18px,2.6vw,26px)] underline decoration-accent decoration-2 underline-offset-[7px] transition-[text-decoration-thickness] hover:decoration-4"
      >
        {site.email}
      </a>
      <div className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
        {socialLinks.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            className="inline-flex min-h-11 items-center gap-1 text-muted transition-colors hover:text-foreground"
          >
            {name}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
