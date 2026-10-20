import type { IProjectItem } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "kubernetes-orchestration",
    title: "Cost-efficient Kubernetes orchestration",
    kind: "Course project",
    repo: "public",
    year: "2025",
    note: "GCP",
    description:
      "A Kubernetes scheduler and autoscaler for GKE, implementing a published ACM paper, that bin-packs mixed workloads onto heterogeneous VMs.",
    summary:
      "A Kubernetes scheduler and hybrid task autoscaler (HTAS) for GKE, implementing a published ACM paper, that bin-packs 10+ services and batch jobs onto heterogeneous VMs.",
    duration: "Jan — Apr 2025",
    location: "IIT Jodhpur",
    roles: ["Systems engineer", "Task Packer and autoscaler design lead"],
    tags: ["Kubernetes", "GCP", "Python"],
    lead: {
      value: "↓28%",
      label: "compute cost vs the default GKE scheduler",
    },
    metrics: [
      {
        value: "↓28%",
        label: "Compute cost",
        description: "Comparative GCP billing across identical workloads",
      },
      {
        value: "+35%",
        label: "Utilisation",
        description: "Average CPU and memory efficiency on the test cluster",
      },
      {
        value: "10+",
        label: "Services orchestrated",
        description: "Microservices and batch workloads balanced across nodes",
      },
    ],
    links: [
      {
        title: "Source code",
        url: "https://github.com/Shivanshu-Verma/VCC_Course_Project",
        type: "github",
      },
      {
        title: "Research paper implemented",
        url: "https://dl.acm.org/doi/abs/10.1145/3378447",
        type: "paper",
      },
    ],
    context:
      "High GKE costs from inefficient default scheduling created the need for custom orchestration tuned for mixed workloads on heterogeneous VMs.",
    approach:
      "A modular Kubernetes extension built on CRDs, with autoscaling driven by real-time resource profiling and integrated with GCP's managed cluster APIs.",
    impact:
      "28% lower compute cost and 35% higher utilisation than the default scheduler, validated by stress tests and GCP billing.",
    responsibilities: [
      "Implemented a published ACM paper as a Kubernetes scheduler and autoscaler on GKE, built on CRDs.",
      "Designed a Resource Profiler that characterises workloads, and a Task Packer that places them with BFD/TBFD bin-packing.",
      "Led the Task Packer and autoscaler design in a team of 3, and benchmarked placement on synthetic and real workloads.",
    ],
    highlights: [
      "28% lower cost and 35% higher utilisation than the default GKE scheduler.",
    ],
  },
  {
    id: "virus-detection-system",
    title: "Virus detection engine",
    kind: "Coursework",
    repo: "public",
    year: "2024",
    note: "Windows",
    description:
      "A parallel MD5/SHA-256 signature scanner plus Win32 API hooking with Microsoft Detours to watch processes live.",
    summary:
      "A Windows malware detector that combines a parallel MD5/SHA-256 signature scanner with live Win32 API hooking via Microsoft Detours.",
    duration: "Sep — Nov 2024",
    location: "IIT Jodhpur",
    roles: ["Systems programmer"],
    tags: ["C/C++", "Microsoft Detours", "MD5/SHA-256", "Win32"],
    lead: { value: "100k+", label: "signatures checked per second" },
    metrics: [
      {
        value: "100k+",
        label: "Signatures/s",
        description: "Parallel MD5/SHA-256 signature matching",
      },
      {
        value: "↓25%",
        label: "Scan time",
        description: "Average scan time vs the previous version",
      },
    ],
    links: [
      {
        title: "Source code",
        url: "https://github.com/Shivanshu-Verma/Infectious-Virus-Detection-System",
        type: "github",
      },
    ],
    context:
      "A fast detection prototype to explore real-time malware interception without access to enterprise antivirus tooling.",
    approach:
      "Hash-based scanning combined with API hooking, so signature checks run alongside behavioural heuristics.",
    impact:
      "A working detector that combines signature scanning with live API hooking and behavioural alerts.",
    responsibilities: [
      "Developed a multi-threaded scanning core using memory-mapped files for signature throughput.",
      "Hooked critical Win32 APIs with Microsoft Detours to observe file and registry operations in real time.",
    ],
    highlights: [
      "Checks 100,000+ signatures per second, cutting average scan time 25%.",
      "Hooks syscalls, file I/O and registry APIs via Microsoft Detours to flag malicious runtime behaviour.",
      "Behavioural and network analysis that raises real-time email alerts with the affected directories.",
    ],
  },
  {
    id: "prometeo",
    title: "Prometeo, IIT Jodhpur's tech fest",
    kind: "Team project",
    repo: "public",
    year: "2024",
    note: "Live site",
    description:
      "IIT Jodhpur's tech fest platform: a 3D landing experience on a cached Django API with JWT auth and payments, deployed in Docker on AWS.",
    summary:
      "IIT Jodhpur's annual tech fest portal, serving 5,000 users through registration, sign-in and payments.",
    duration: "Nov 2024 — Jan 2025",
    location: "IIT Jodhpur",
    roles: ["Head of Web Development"],
    tags: ["Django", "Redis", "Docker", "AWS", "Nginx", "Three.js"],
    lead: {
      value: "5,000",
      label: "users through registration, sign-in and payments",
    },
    metrics: [
      {
        value: "↓60%",
        label: "Server load",
        description: "Redis caching in front of the Django API",
      },
      {
        value: "↓80%",
        label: "3D load time",
        description: "70% polygon reduction plus texture compression",
      },
      {
        value: "5,000",
        label: "Users",
        description: "Registration, sign-in and payments",
      },
    ],
    links: [
      { title: "Live site", url: "https://prometeo.in/", type: "live" },
      {
        title: "Server repository",
        url: "https://github.com/Shivanshu-Verma/server-prometeo-25",
        type: "github",
      },
    ],
    context:
      "The organising team needed a visually striking site that could take ticket-sale surges without compromising security.",
    approach:
      "Optimised the Three.js scenes, cached the Django API with Redis, and deployed the Dockerized stack on AWS behind hardened Nginx.",
    impact:
      "Served 5,000 users through registration and payments, with server load cut 60% by caching and 3D load time cut 80%.",
    responsibilities: [
      "Led web development for the platform as Head of Web Development.",
      "Built JWT authentication and integrated online payments.",
      "Cut 3D load time 80% with a 70% polygon reduction and texture compression.",
    ],
    highlights: [
      "Redis caching cut server load 60%.",
      "Deployed on AWS in Docker behind firewalls, hardened Nginx and rate limiting, with active logging and real-time monitoring.",
    ],
  },
  {
    id: "iitj-voting-app",
    title: "IIT Jodhpur election system",
    kind: "Team project",
    repo: "private",
    year: "2023",
    note: "Private repo",
    description:
      "A secure, confidential voting portal with asymmetrically encrypted ballots and biometric voter verification.",
    summary:
      "A secure, confidential voting portal for a student body election at IIT Jodhpur, used by about 3,000 people.",
    duration: "Mar — Apr 2023",
    location: "IIT Jodhpur",
    roles: ["Developer"],
    tags: ["Django", "React", "Docker", "Cryptography"],
    lead: { value: "~3,000", label: "people voted through it" },
    metrics: [
      {
        value: "~3,000",
        label: "Voters",
        description: "Student body election at IIT Jodhpur",
      },
    ],
    links: [],
    context:
      "The student body election needed a secure, confidential way for people to vote.",
    approach:
      "Django and React, with asymmetric encryption for stored votes, biometric voter verification and a containerised deployment.",
    impact:
      "Used by about 3,000 people in a student body election at IIT Jodhpur.",
    responsibilities: [
      "Designed and built the portal with a team in Django and React.",
      "Encrypted stored votes with asymmetric cryptography and verified voters biometrically.",
      "Containerised the app for consistent, fast deployment.",
    ],
    highlights: [],
  },
];

export default projects;

export function getProject(id: string): IProjectItem | undefined {
  return projects.find((project) => project.id === id);
}
