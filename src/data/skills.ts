import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "C",
        level: SkillLevel.Expert,
        icon: "/skills/c.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Expert,
        icon: "/skills/c++.png",
      },
      {
        title: "Java",
        level: SkillLevel.Expert,
        icon: "/skills/java.svg",
      },
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "R",
        level: SkillLevel.Expert,
        icon: "/skills/r.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Django",
        level: SkillLevel.Expert,
        icon: "/skills/django.svg",
      },
      {
        title: "Socket.io",
        level: SkillLevel.Intermediate,
        icon: "/skills/socket-io.png",
      },
      {
        title: "Postman",
        level: SkillLevel.Intermediate,
        icon: "/skills/postman.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/mysql.svg",
      },
      {
        title: "SQLite",
        level: SkillLevel.Intermediate,
        icon: "/skills/sqlite.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Begginer,
        icon: "/skills/docker.png",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "GCP",
        level: SkillLevel.Intermediate,
        icon: "/skills/gcp.svg",
      },
      {
        title: "Jenkins",
        level: SkillLevel.Intermediate,
        icon: "/skills/jenkins.svg",
      },
      {
        title: "Kubernetes",
        level: SkillLevel.Intermediate,
        icon: "/skills/kubernetes.svg",
      },
      {
        title: "SonarQube",
        level: SkillLevel.Intermediate,
        icon: "/skills/sonarqube.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Operating Systems",
    items: [
      {
        title: "Kali Linux",
        level: SkillLevel.Intermediate,
        icon: "/skills/kali.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
      {
        title: "Windows",
        level: SkillLevel.Intermediate,
        icon: "/skills/windows.svg",
      },
    ],
  },
  {
    title: "Cybersecurity Tools",
    items: [
      {
        title: "Wireshark",
        level: SkillLevel.Intermediate,
        icon: "/skills/wireshark.svg",
      },
      {
        title: "Aircrack-ng",
        level: SkillLevel.Intermediate,
        icon: "/skills/aircrack-ng.svg",
      },
      {
        title: "Burpsuite",
        level: SkillLevel.Intermediate,
        icon: "/skills/burpsuite.svg",
      },
      {
        title: "Metasploit",
        level: SkillLevel.Intermediate,
        icon: "/skills/metasploit.svg",
      },
      {
        title: "Ghidra",
        level: SkillLevel.Intermediate,
        icon: "/skills/ghidra.svg",
      },
      {
        title: "Maltego",
        level: SkillLevel.Intermediate,
        icon: "/skills/maltego.svg",
      },
      {
        title: "Ettercap",
        level: SkillLevel.Intermediate,
        icon: "/skills/ettercap.svg",
      },
      {
        title: "John The Ripper",
        level: SkillLevel.Intermediate,
        icon: "/skills/john.svg",
      },
    ],
  },
  {
    title: "Embedded Systems",
    items: [
      {
        title: "Microcontrollers",
        level: SkillLevel.Intermediate,
        icon: "/skills/st.svg",
      },
      {
        title: "RaspberryPi",
        level: SkillLevel.Intermediate,
        icon: "/skills/raspberrypi.svg",
      },
      {
        title: "Arduino",
        level: SkillLevel.Intermediate,
        icon: "/skills/arduino.svg",
      },
      {
        title: "STM32CubeMX",
        level: SkillLevel.Intermediate,
        icon: "/skills/cube.png",
      },
      {
        title: "Keil µVision 5.0",
        level: SkillLevel.Intermediate,
        icon: "/skills/keil.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
