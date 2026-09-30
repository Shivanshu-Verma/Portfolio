import type { IStackGroup } from "@/types";

const stack: IStackGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "C/C++", "Java"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "Django", "Socket.IO"],
  },
  {
    title: "Data & messaging",
    items: ["PostgreSQL", "Redis", "Kafka", "MongoDB"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "Jenkins"],
  },
  {
    title: "Security",
    items: [
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Ghidra",
      "SonarQube",
    ],
  },
];

export default stack;
