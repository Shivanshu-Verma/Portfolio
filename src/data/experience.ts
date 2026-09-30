import type { IExperienceItem } from "@/types";

// Optional fields render only when set: fill in DoubleTick `start`/`summary` and the missing `end` dates.
const experience: IExperienceItem[] = [
  {
    role: "Software Development Engineer II",
    company: "DoubleTick",
    current: true,
  },
  {
    role: "Full-stack developer",
    company: "DevlUp Labs",
    start: "Feb 2024",
    summary:
      "Built and led MERN projects in IIT Jodhpur's developer club, with secure coding practices baked in.",
  },
  {
    role: "Cybersecurity core team",
    company: "Google Developer Student Clubs",
    start: "Sep 2023",
    summary:
      "Security assessments and projects with Nmap, Metasploit, Burp Suite, Wireshark and Ghidra.",
  },
  {
    role: "Cybersecurity problem statement",
    company: "Inter-IIT Tech Meet 12.0",
    start: "Sep 2023",
    end: "Dec 2023",
    summary:
      "A DevSecOps pipeline with Jenkins, SonarQube, OWASP checks and Trivy. Placed top 5 of 21 IITs at IIT Madras.",
  },
];

export default experience;

export function formatPeriod(item: IExperienceItem): string {
  const end = item.current ? "Present" : item.end;
  return [item.start, end].filter(Boolean).join(" — ");
}
