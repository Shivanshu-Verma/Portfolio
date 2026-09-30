import type { IProjectItem } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "kubernetes-orchestration",
    title: "Cost-efficient Kubernetes orchestration",
    kind: "Team project",
    repo: "public",
    year: "2025",
    note: "GCP",
    description:
      "A custom scheduler and hybrid autoscaler that bin-packs mixed workloads onto heterogeneous, preemptible VMs.",
    summary:
      "A custom Kubernetes scheduler and hybrid task autoscaler (HTAS) for GKE that packs microservices and batch jobs onto heterogeneous, preemptible VMs.",
    duration: "Jan — Apr 2025",
    location: "IIT Jodhpur",
    roles: ["Cloud architect", "Systems engineer"],
    tags: ["Kubernetes", "GCP", "Python", "Prometheus"],
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
      "High GKE costs from inefficient default scheduling created the need for custom orchestration tuned for mixed workloads and preemptible resources.",
    approach:
      "A modular Kubernetes extension built on CRDs, with autoscaling driven by real-time resource profiling and integrated with GCP's managed cluster APIs.",
    impact:
      "A cost-conscious orchestration platform with measurable infrastructure savings and better utilisation, informing further cloud infrastructure research at IIT Jodhpur.",
    responsibilities: [
      "Built the scheduler and autoscaler (HTAS) on CRDs with event-driven scaling for GKE clusters.",
      "Designed a Resource Profiler that characterises workloads, and a Task Packer that places them with BFD/TBFD bin-packing.",
      "Benchmarked synthetic and real workloads, tuning placement heuristics for mixed VM sizes.",
    ],
    highlights: [
      "28% lower cost and 35% higher utilisation than the default GKE scheduler.",
      "Fault-tolerant scheduling that stays correct through preemptible VM churn.",
      "Per-pod telemetry in Prometheus for real-time scaling decisions.",
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
      "A 3D landing experience on a cached Django API, with Razorpay ticketing, deployed in containers on AWS.",
    summary:
      "The relaunch of IIT Jodhpur's annual tech fest portal: an immersive 3D landing experience that stayed fast for 25k+ visitors through ticketing peaks.",
    duration: "Oct — Dec 2024",
    location: "IIT Jodhpur",
    roles: ["Full-stack developer", "DevOps"],
    tags: ["Django", "Redis", "Docker", "AWS", "Three.js"],
    lead: { value: "25k+", label: "visitors at launch, zero payment failures" },
    metrics: [
      {
        value: "↓42%",
        label: "Page load",
        description: "LCP dropped from 3.8s to 2.2s after the asset pipeline",
      },
      {
        value: "25k+",
        label: "Visitors",
        description: "Unique visitors over the three-day launch window",
      },
      {
        value: "0",
        label: "Incidents",
        description: "No downtime or payment failures during registrations",
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
      "The organising team needed a visually striking site that could take sudden ticket-sale surges without compromising security or UX.",
    approach:
      "Modernised the 3D experience with progressive loading, served content through a hardened Django API, and containerised the stack with CI-driven deployments.",
    impact:
      "A resilient launch with strong Core Web Vitals, better pass conversion, and positive feedback from attendees and sponsors.",
    responsibilities: [
      "Refined Three.js scene composition and glTF optimisation to keep LCP under 2s on broadband.",
      "Built a stateless Django API with Redis caching and auto-scaling Docker deployment on AWS Fargate.",
      "Integrated Razorpay checkout with webhook validation, CSRF safeguards and encrypted audit logs.",
    ],
    highlights: [
      "Cut the hero scene payload by 38% with mesh decimation, texture compression and route-level code splitting.",
      "Automated CloudFront cache invalidation so content was fresh within 60 seconds of publishing.",
      "Real-time ticket inventory dashboard for the core organising team.",
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
      "A kiosk voting app with signed, encrypted ballots, biometric and OTP verification, and tamper-evident audit logs.",
    summary:
      "A kiosk-ready desktop voting application with encrypted ballot storage, biometric verification and admin dashboards for the IIT Jodhpur election committee.",
    duration: "Aug — Oct 2023",
    location: "IIT Jodhpur",
    roles: ["Full-stack engineer", "Security lead"],
    tags: ["Electron", "React", "Django", "PostgreSQL", "Cryptography"],
    lead: { value: "2.1k", label: "ballots cast across 12 polling stations" },
    metrics: [
      {
        value: "2.1k",
        label: "Ballots processed",
        description: "Secure votes cast across 12 polling stations",
      },
      {
        value: "<5s",
        label: "Verification",
        description: "Average biometric and OTP verification time",
      },
    ],
    links: [],
    context:
      "Manual paper-based elections were error-prone, slow, and open to manipulation.",
    approach:
      "A secure digital voting system with layered authentication, offline resilience and transparent audit trails.",
    impact:
      "Used in the 2023 student body elections with no disputed ballots and fast result publication.",
    responsibilities: [
      "Built a cross-platform Electron shell with offline-first caching for remote polling booths.",
      "Engineered Django REST services with cryptographic ballot signing and audit-ready event logs.",
      "Integrated an Aadhaar-based biometric SDK with a fallback OTP verification flow.",
    ],
    highlights: [
      "Digitised the end-to-end voting flow, cutting manual counting effort by 80%.",
      "Role-based access control for commissioners, poll officers and observers.",
      "Tamper detection that locks a station on suspicious state changes.",
    ],
  },
  {
    id: "virus-detection-system",
    title: "Virus detection engine",
    kind: "Coursework",
    repo: "public",
    year: "2023",
    note: "Windows",
    description:
      "Multi-threaded SHA-256 signature scanning plus Win32 API hooking with Microsoft Detours to watch processes live.",
    summary:
      "A Windows-native malware detection prototype with signature scanning, heuristic analysis and quarantine for suspicious processes.",
    duration: "Jan — Apr 2023",
    location: "IIT Jodhpur",
    roles: ["Systems programmer"],
    tags: ["C/C++", "Microsoft Detours", "SHA-256", "Win32"],
    lead: { value: "96%", label: "detection rate, under 1% false positives" },
    metrics: [
      {
        value: "96%",
        label: "Detection rate",
        description: "On a curated virus corpus during evaluation",
      },
      {
        value: "<1%",
        label: "False positives",
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
      "A fast detection prototype to explore real-time malware interception without access to enterprise antivirus tooling.",
    approach:
      "Hash-based scanning combined with API hooking, so signature checks run alongside behavioural heuristics.",
    impact:
      "Reliable detection in academic evaluation and a foundation for further research.",
    responsibilities: [
      "Developed a multi-threaded scanning core using memory-mapped files for signature throughput.",
      "Hooked critical Win32 APIs with Microsoft Detours to observe file and registry operations in real time.",
      "Wrote the heuristic scoring and quarantine workflow with a CLI reporting dashboard.",
    ],
    highlights: [
      "120k signature comparisons per second on the benchmark dataset.",
      "A sandbox simulator that replays malware behaviour for detection tuning.",
      "Exportable incident reports for security teams.",
    ],
  },
];

export default projects;

export function getProject(id: string): IProjectItem | undefined {
  return projects.find((project) => project.id === id);
}
