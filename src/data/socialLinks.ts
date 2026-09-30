import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/common/BrandIcons";
import { site } from "@/lib/site";
import type { ISocialLink } from "@/types";

const socialLinks: ISocialLink[] = [
  { name: "GitHub", url: site.links.github, icon: GitHubIcon },
  { name: "LinkedIn", url: site.links.linkedin, icon: LinkedInIcon },
  { name: "X", url: site.links.x, icon: XIcon },
  { name: "Instagram", url: site.links.instagram, icon: InstagramIcon },
];

export default socialLinks;
