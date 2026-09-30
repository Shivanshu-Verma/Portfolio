import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import ButtonLink from "@/components/common/ButtonLink";

export const metadata: Metadata = { title: "Page not found" };

const NotFound = () => (
  <>
    <section className="flex min-h-[60vh] flex-col justify-center gap-5 gutter py-24">
      <p className="font-mono text-[13px] text-faint">404</p>
      <h1 className="text-[clamp(36px,5.5vw,60px)] leading-[1.05] font-semibold tracking-[-0.04em]">
        Nothing lives here.
      </h1>
      <p className="max-w-[520px] text-[17px] leading-[1.7] text-muted">
        The page may have moved, or the link has a typo.
      </p>
      <ButtonLink href="/" variant="primary" className="mt-2 self-start">
        <ArrowLeft className="size-4" aria-hidden />
        Back home
      </ButtonLink>
    </section>
  </>
);

export default NotFound;
