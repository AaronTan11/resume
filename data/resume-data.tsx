import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tan Wei Hup",
  initials: "WH",
  location: "APU, Bukit Jalil, Kuala Lumpur, Malaysia",
  locationLink: "https://maps.app.goo.gl/NgbD3gTB2pQQbTQQ7",
  about: "Full Stack Engineer, Helping Community, Buidling @GDSCAPU & @APUBCC & @DevvibeSolutions",
  summary:
    "Studying at Asia Pacific University, Malaysia. I am a Full Stack Engineer, Web2.5 buidler",
  avatarUrl: "/profilephoto.jpeg",
  personalWebsiteUrl: "https://weihup.dev",
  contact: {
    email: "tanweihup@gmail.com",
    tel: "+601112415634",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AaronTan11",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tan-wei-hup/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/_weihup",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Asia Pacific University of Technology & Innovation",
      degree: "Diploma ICT in Software Engineering",
      start: "2021",
      end: "2023",
    },
    {
      school: "Asia Pacific University of Technology & Innovation",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Devvibe Solutions",
      link: "",
      badges: ["Remote"],
      title: "Partner",

      start: "2023",
      end: "-",
      description: "Building Devvibe Solutions",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "PHP",
    "Python",
    "Solidity",
    "Java",
  ],
  projects: [
    {
      title: "",
      techStack: [],
      description: "",

      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
