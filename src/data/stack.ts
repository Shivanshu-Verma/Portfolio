import type { IStackGroup } from "@/types";

const stack: IStackGroup[] = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "C/C++",
      "Bash",
      "Java",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "Django", "REST APIs", "pg-boss"],
  },
  {
    title: "Data & messaging",
    items: [
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Elasticsearch",
      "ClickHouse",
      "MongoDB",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Nginx",
      "Linux",
      "GCP",
    ],
  },
  {
    title: "Security",
    items: [
      "RBAC",
      "IAM",
      "Secrets management",
      "SonarQube",
      "Trivy",
      "OWASP Dependency-Check",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "Metasploit",
    ],
  },
];

export default stack;
