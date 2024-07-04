import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build secure and user-friendly websites.",
    description:
      "I integrate secure coding practices and ethical hacking techniques into every project, providing tailored solutions that meet modern web standards. I create solutions that not only enhance your online presence but also ensure top-notch security and performance. Elevate your digital identity with cutting-edge, secure, and user-friendly web applications.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/django.svg",
      "/skills/nodejs.svg",
      "/skills/postman.svg",
      "/skills/postgresql.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "My skill set includes designing and implementing scalable databases, developing RESTful APIs, and ensuring seamless data integration and management. Through hands-on experience with various projects, I have refind my ability to build secure, high-performance backend systems that support dynamic web applications and services.",
  },
  {
    id: 3,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/aws.svg",
      "/skills/sonarqube.svg",
      "/skills/jenkins.svg",
      "/skills/kubernetes.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "My experience includes automating code quality checks, continuous integration, and continuous delivery processes to streamline development workflows. By leveraging cloud services and advanced DevOps tools, I ensure scalable, secure, and high-performance infrastructure.",
  },
  {
    id: 4,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/mongodb.svg",
      "/skills/postgresql.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize database systems to ensure performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Your data will be managed effectively and efficiently with my solutions.",
  },
  {
    id: 5,
    title: "Cybersecurity",
    icons: [
      "/skills/wireshark.svg",
      "/skills/burpsuite.svg",
      "/skills/john.svg",
      "/skills/ghidra.svg",
      "/skills/ettercap.svg",
    ],
    shortDescription: "I am always keen to learn about cybersecurity tools.",
    description:
      "i am always keen to learn more about cybersecurity, I have hands-on experience with diverse tools such as Aircrack-ng for wireless security, Nmap for network scanning, Burp Suite for web application testing, and Ghidra for reverse engineering. Additionally, I use Maltego for threat intelligence, Ettercap for network interception, and John the Ripper for password cracking and analysis.",
  },
  {
    id: 5,
    title: "Embedded Systems",
    icons: [
      "/skills/st.svg",
      "/skills/raspberrypi.svg",
      "/skills/arduino.svg",
      "/skills/keil.png",
      "/skills/cube.svg",
    ],
    shortDescription: "Proficient in embedded systems and IoT, with a focus on ARM Cortex architecture and real-time operating systems.",
    description:
      "I have a comprehensive background in embedded systems and IoT, encompassing a wide range of topics such as the architecture of ARM Cortex M3 processors and embedded multicore architecture. I am skilled in programming embedded processors using assembly and C in Arduino IDE, developing models for program-data flow graphs, and working with real-time operating systems. ",
  },
];

export default services;
