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
  },
  {
    id: "IITJ Voting App",
    title: "IITJ Voting Electron App",
    description:
      "Voting Portal to conduct Institute student representative elections for IITJ Community.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.TeamProject,
    githubUrl: "https://github.com/Shivanshu-Verma/IITJ-Voting",
    // url: "",
    tags: ["React", "Django", "PostgreSQL", "Encryption", "Biometrics"],
  },
  {
    id: "virus-detection-system",
    title: "Virus Detection System",
    description:
      "Implemented a multi-threaded virus scanning system using SHA256 hashing techniques, comparing over 100,000 virus signatures per second. Integrated Microsoft Detours Library for real-time API hooking and process monitoring.",
    icon: "/images/virus.png",
    repoType: RepoType.Public,
    projectType: ProjectType.CourseWork,
    githubUrl: "https://github.com/Shivanshu-Verma/Infectious-Virus-Detection-System",
    //url: "",
    tags: ["C/C++", "Microsoft Detours", "Network", "SHA256"],
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
