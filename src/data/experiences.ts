import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    icon: "/skills/devlup.png",
    designation: "Full Stack Developer",
    company: "DevlUp Labs",
    startDate: "Feb 2024",
    endDate: "",
    isCurrentJob: true,
    location: "Jodhpur, India",
    shortDescription:
      "I am a full stack developer at DevlUp Labs, specializing in the MERN stack, with a deep interest in cybersecurity. Currently, I am working on various projects within the club.",
    description:
      "As a dedicated full stack developer at DevlUp Labs, I leverage my expertise in the MERN stack (MongoDB, Express.js, React, and Node.js) to contribute to and lead various projects. My deep-seated interest in cybersecurity drives me to integrate secure coding practices and ethical hacking techniques into my development work. Through hands-on experience and collaborative projects within the club, I continually enhance my skills in both full stack development and cybersecurity, aiming to create robust and secure applications.",
  },
  {
    icon: "/skills/gdsc.png",
    designation: "Cybersecurity Core Team",
    company: "Google Developer Students Club",
    startDate: "Sep 2023",
    endDate: "Present",
    isCurrentJob: false,
    location: "Remote",
    shortDescription:
      "As a member of the Google Developer Students Club, I specialize in cybersecurity and have experience in various tools like network scanners and reverse-engineering tools.",
    description:
      "I specialize in the field of cybersecurity. My expertise includes a wide array of tools and technologies such as Nmap, Metasploit Framework, Burp Suite, and Wireshark, as well as reverse engineering tools like Ghidra. I actively engage in learning and applying advanced security measures. I contribute to various projects by leveraging these tools, ensuring robust security assessments and implementations. My passion for cybersecurity drives me to continuously expand my knowledge and skills, aiming to create secure and resilient systems.",
  },
  {
    icon: "/skills/InterIIT.png",
    designation: "Cybersecurity PS Participant",
    company: "InterIIT TechMeet 12.0",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    isCurrentJob: false,
    location: "Chennai, India",
    shortDescription:
      "I had the invaluable opportunity to be selected as a participant in InterIIT TechMeet 12.0 held at IIT Madras and to represent my college on a PAN India Scale.",
    description:
      "We developed an innovative solution to address the challenge of identifying and minimizing vulnerabilities in software, programs, and applications. By leveraging the principles of DevSecOps, we created a comprehensive pipeline using Jenkins, integrating SonarQube, OWASP, and Trivy for thorough codebase scans. This ensured the detection and mitigation of security vulnerabilities in real-time code deployment and enhancing the security of our applications. Our approach demonstrated integrating security measures into the development lifecycle, earning us a top 5 position among 21 IITs. ",
  },
];

export default experiences;
