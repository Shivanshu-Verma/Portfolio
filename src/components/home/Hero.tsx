import { ArrowUpRight, Mail } from "lucide-react";
import ButtonLink from "@/components/common/ButtonLink";
import profile from "@/data/profile";
import socialLinks from "@/data/socialLinks";
import { site } from "@/lib/site";

const Hero = () => (
  <section
    id="top"
    aria-labelledby="hero-title"
    className="gutter pt-[clamp(56px,9vw,112px)] pb-[clamp(48px,7vw,88px)]"
  >
    <div className="flex max-w-[720px] rise-in flex-col gap-6">
      <p className="inline-flex items-center gap-2.5 font-mono text-[13px] text-muted">
        <span className="size-2 rounded-full bg-accent ring-4 ring-accent/20" />
        {profile.status}
      </p>
      <h1
        id="hero-title"
        className="text-[clamp(44px,7vw,76px)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance"
      >
        {site.name}
      </h1>
      <p className="max-w-[640px] text-[clamp(20px,2.4vw,26px)] leading-[1.35] tracking-[-0.015em] text-balance">
        {profile.tagline}
      </p>
      <p className="max-w-[620px] text-[17px] leading-[1.7] text-pretty text-muted">
        {profile.intro}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <ButtonLink variant="primary" href={site.links.email}>
          <Mail className="size-4" strokeWidth={1.75} aria-hidden />
          Email me
        </ButtonLink>
        {site.resumeUrl ? (
          <ButtonLink href={site.resumeUrl}>
            Résumé
            <ArrowUpRight className="size-3.5" aria-hidden />
          </ButtonLink>
        ) : null}
        <div className="flex gap-0.5">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              aria-label={name}
              className="inline-flex size-11 items-center justify-center rounded-[10px] text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
