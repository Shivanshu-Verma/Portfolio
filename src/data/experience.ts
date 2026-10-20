import type { IExperienceItem } from "@/types";

// `start`, `end`, `summary` and `highlights` are optional and render only when set.
const experience: IExperienceItem[] = [
  {
    role: "Software Development Engineer II",
    company: "DoubleTick",
    start: "Jul 2026",
    current: true,
    summary:
      "Backend and infrastructure engineer on DoubleTick's WhatsApp CRM platform: Node.js and NestJS services on PostgreSQL, Redis, Kafka and Elasticsearch, running on AWS.",
  },
  {
    role: "Mentor",
    company: "DevlUp Labs",
    start: "Apr 2025",
    current: true,
    summary:
      "Mentor early-stage developers in IIT Jodhpur's open-source developer community on backend development, DevOps and systems programming, and review their projects and pull requests for code quality, security and architecture.",
  },
  {
    role: "Core team member",
    company: "DevlUp Labs",
    start: "Mar 2024",
    end: "Apr 2025",
    summary:
      "Helped run IIT Jodhpur's open-source developer club and grow its membership.",
  },
  {
    role: "Cybersecurity core member",
    company: "Google Developer Student Clubs, IIT Jodhpur",
    start: "Jan 2023",
    end: "Sep 2024",
    summary:
      "Co-led the cybersecurity track: web application security, CTF and network-threat sessions, and hands-on Burp Suite, Nmap, Wireshark and Metasploit workshops.",
  },
  {
    role: "Team member, CERT-In cybersecurity challenge",
    company: "Inter IIT Tech Meet 12.0",
    start: "Sep 2023",
    end: "Dec 2023",
    summary:
      "Placed top 5 of 21 IITs. Built a Jenkins DevSecOps pipeline for Docker and Kubernetes with SonarQube, OWASP Dependency-Check and Trivy scans.",
  },
];

export default experience;

export function formatPeriod(item: IExperienceItem): string {
  const end = item.current ? "Present" : item.end;
  return [item.start, end].filter(Boolean).join(" — ");
}
