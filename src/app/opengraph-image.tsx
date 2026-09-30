import profile from "@/data/profile";
import { ogSize, renderOgImage } from "@/lib/og";
import { site } from "@/lib/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = `${site.name}, ${profile.status}`;

export default function Image() {
  return renderOgImage({
    eyebrow: profile.status,
    title: site.name,
    subtitle: profile.tagline,
  });
}
