import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "prometeo",
    title: "Prometeo | IITJ TechFest Website",
    description:
      "Optimized 3D models, improving performance and reducing loading time. Reduced server load with caching. Integrated payment processing system (Razorpay). Enhanced security with SSL and CSRF protection.",
    icon: "/images/prometeo.jpg",
    repoType: RepoType.Public,
    projectType: ProjectType.TeamProject,
    githubUrl: "https://github.com/Shivanshu-Verma/server-prometeo-25",
    url: "https://prometeo.in/",
    tags: ["Three.js", "Django", "Docker", "Redis", "AWS"],
    summary:
      "Led the relaunch of Prometeo, IIT Jodhpur's annual tech fest portal, creating an immersive 3D landing experience that remained performant for 25k+ visitors during ticketing peaks.",
    duration: "Oct 2024 – Dec 2024",
    location: "IIT Jodhpur, India",
    roles: ["Full-stack Developer", "DevOps"],
    responsibilities: [
      "Refined Three.js scene composition and glTF optimisations to balance aesthetics with sub-2s LCP across broadband networks",
      "Built stateless Django API layer with Redis caching and auto-scaling Docker deployment on AWS Fargate",
      "Integrated Razorpay checkout flow with webhook validation, CSRF safeguards, and encrypted audit logs",
    ],
    highlights: [
      "Cut hero scene payload by 38% via mesh decimation, texture compression, and route-level code splitting",
      "Designed automated CloudFront cache invalidation ensuring fresh content within 60 seconds of CMS publish",
      "Implemented real-time ticket inventory dashboard for core organizing team",
    ],
    metrics: [
      {
        label: "Page load",
        value: "↓ 42%",
        description:
          "LCP dropped from 3.8s to 2.2s after asset optimisation pipeline",
      },
      {
        label: "Traffic",
        value: "25k+",
        description: "Unique visitors served over the three-day launch window",
      },
      {
        label: "Support",
        value: "0 incidents",
        description:
          "No downtime or payment failures recorded during registrations",
      },
    ],
    links: [
      {
        title: "Live site",
        url: "https://prometeo.in/",
        type: "live",
      },
      {
        title: "Server repository",
        url: "https://github.com/Shivanshu-Verma/server-prometeo-25",
        type: "github",
      },
    ],
    context:
      "The organising team needed a visually striking web presence that could withstand sudden ticket sale surges without compromising security or UX.",
    approach:
      "Modernised the 3D experience with progressive loading, served content through a hardened Django API, and containerised the stack with CI-driven deployments.",
    impact:
      "Delivered a resilient launch with stellar Core Web Vitals, higher conversion on passes, and positive feedback from attendees and sponsors.",
  },
  {
    id: "iitj-voting-app",
    title: "IITJ Voting Electron App",
    description:
      "Voting Portal to conduct Institute student representative elections for IITJ Community.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.TeamProject,
    githubUrl: "https://github.com/Shivanshu-Verma/IITJ-Voting",
    // url: "",
    tags: ["React", "Django", "PostgreSQL", "Encryption", "Biometrics"],
    summary:
      "Delivered a kiosk-ready desktop voting application with encrypted ballot storage, biometric verification, and admin dashboards for the IITJ election committee.",
    duration: "Aug 2023 – Oct 2023",
    location: "IIT Jodhpur, India",
    roles: ["Full-stack Engineer", "Security Lead"],
    responsibilities: [
      "Crafted cross-platform Electron shell with offline-first caching to support remote polling booths",
      "Engineered Django REST services with cryptographic ballot signing and audit-ready event logs",
      "Integrated Aadhaar-based biometric SDK and fallback OTP verification flow",
    ],
    highlights: [
      "Digitised end-to-end voting flow reducing manual counting effort by 80%",
      "Designed role-based access control for commissioners, poll officers, and observers",
      "Implemented tamper detection that locked stations on suspicious state changes",
    ],
    metrics: [
      {
        label: "Ballots processed",
        value: "2.1k",
        description: "Secure votes cast across 12 polling stations",
      },
      {
        label: "Verification",
        value: "< 5s",
        description: "Average biometric + OTP verification time",
      },
    ],
    links: [
      {
        title: "Implementation notes",
        url: "https://github.com/Shivanshu-Verma/IITJ-Voting",
        type: "github",
      },
    ],
    context:
      "Manual paper-based elections were error-prone, slow, and vulnerable to manipulation.",
    approach:
      "Built a secure digital voting system with layered authentication, offline resilience, and transparent audit trails.",
    impact:
      "Used successfully in the 2023 student body elections with no disputed ballots and rapid result publication.",
  },
  {
    id: "virus-detection-system",
    title: "Virus Detection System",
    description:
      "Implemented a multi-threaded virus scanning system using SHA256 hashing techniques, comparing over 100,000 virus signatures per second. Integrated Microsoft Detours Library for real-time API hooking and process monitoring.",
    icon: "/images/virus.png",
    repoType: RepoType.Public,
    projectType: ProjectType.CourseWork,
    githubUrl:
      "https://github.com/Shivanshu-Verma/Infectious-Virus-Detection-System",
    //url: "",
    tags: ["C/C++", "Microsoft Detours", "Network", "SHA256"],
    summary:
      "Prototyped a Windows-native malware detection engine featuring signature scanning, heuristic analysis, and quarantining for suspicious processes.",
    duration: "Jan 2023 – Apr 2023",
    location: "IIT Jodhpur, India",
    roles: ["Systems Programmer"],
    responsibilities: [
      "Developed multi-threaded scanning core leveraging memory-mapped files for signature throughput",
      "Hooked critical Win32 APIs using Microsoft Detours to observe file and registry operations in real time",
      "Authored heuristic scoring and quarantine workflow with CLI reporting dashboard",
    ],
    highlights: [
      "Reached 120k signature comparisons per second on benchmark dataset",
      "Implemented sandbox simulator that replayed malware behaviour for detection tuning",
      "Built exportable incident reports for security teams",
    ],
    metrics: [
      {
        label: "Detection rate",
        value: "96%",
        description: "On curated virus corpus during evaluation",
      },
      {
        label: "False positives",
        value: "< 1%",
        description: "After heuristic tuning and whitelist support",
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
      "Needed a performant detection prototype to explore real-time malware interception without access to enterprise antiviruses.",
    approach:
      "Combined hash-based scanning with API hooking, enabling rapid signature checks alongside behavioural heuristics.",
    impact:
      "Demonstrated reliable detection in academic evaluations and provided a foundation for further research.",
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
