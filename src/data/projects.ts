import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "single-sign-on",
    title: "Single Sign On System",
    description:
      "Implmented an SSO system to streamline authentication and authorization processes and enhance security across multiple websites.",
    icon: "/images/sso.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Shivanshu-Verma/SSO",
    // url: "",
    tags: ["React", "Django", "JWT", "Encryption"],
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
    id: "ml-classification-project",
    title: "Image Classifier on CIFAR-10 Dataset",
    description:
      "Developed multiple ML Models using different techniques while working my team. Highest accuracy achieved was 95%",
    icon: "/images/ml.jpg",
    repoType: RepoType.Public,
    projectType: ProjectType.CourseWork,
    githubUrl: "https://github.com/Shivanshu-Verma/Object-Classification",
    //url: "",
    tags: ["Tensorflow", "Numpy", "PyTorch", "Scikit-Learn"],
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
