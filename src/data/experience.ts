import type { IExperienceItem } from "@/types";

// `start`, `end`, `summary` and `highlights` are optional and render only when set.
const experience: IExperienceItem[] = [
  {
    role: "Software Development Engineer II",
    company: "DoubleTick",
    start: "Jul 2026",
    current: true,
    summary:
      "Backend engineer on DoubleTick's WhatsApp CRM platform: NestJS and Node.js services on PostgreSQL, Redis and Kafka, running on AWS.",
    highlights: [
      "Build public API endpoints, including bulk conversation actions with per-conversation permission checks.",
      "Work on role-based permissions that span services, and on reconciling WhatsApp message and call costs so reported charges match actual billing.",
      "Moved backend services onto Docker with Jenkins CI/CD and Terraform-managed AWS infrastructure, and wrote the team's onboarding handbook for it.",
    ],
  },
  {
    role: "Full-stack developer",
    company: "DevlUp Labs",
    start: "Feb 2024",
    end: "Apr 2026",
    summary:
      "Built and led MERN projects in IIT Jodhpur's developer club, with secure coding practices baked in.",
  },
  {
    role: "Cybersecurity core team",
    company: "Google Developer Student Clubs",
    start: "Sep 2023",
    end: "Apr 2026",
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
