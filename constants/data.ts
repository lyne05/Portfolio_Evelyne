export const personalInfo = {
  name: "Evelyne Natalie",
  shortName: "Evelyne",
  role: "Portfolio",
  tagline: "Frontend Developer and Mobile App Developer",
  university: "Universitas Multimedia Nusantara",
  batch: "2023",
  gpa: "3.27 / 4.00",
  location: "Tangerang, Indonesia",
  email: "evelyne.natalie2705@gmail.com",
  whatsapp: "https://wa.me/6282181873469",
  github: "https://github.com/lyne05",
  linkedin: "https://linkedin.com/in/evelynenatalie",
  cvUrl:
    "https://drive.google.com/file/d/1QpxoA4AYmXg0wvgHHLUJrVO9PiN7bkgl/view?usp=sharing",
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
        level: 3,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        level: 3,
      },
      {
        name: "Kotlin",
        icon: "https://cdn.simpleicons.org/kotlin/7F52FF",
        level: 3,
      },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      {
        name: "Android Studio",
        icon: "/images/android-studio-icon.webp",
        level: 3,
      },
      {
        name: "React Native",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
        level: 3,
      },
      {
        name: "Expo",
        icon: "https://cdn.simpleicons.org/expo/f7f2f2",
        level: 3,
      },
    ],
  },
  {
    category: "Frontend Web Development",
    items: [
      {
        name: "HTML",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
        level: 4,
      },
      {
        name: "CSS",
        icon: "/images/css-icon.webp",
        level: 4,
      },
      {
        name: "React.js",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
        level: 3,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MySQL",
        icon: "https://cdn.simpleicons.org/mysql/4479A1",
        level: 3,
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase/FFCA28",
        level: 3,
      },
      {
        name: "Supabase",
        icon: "https://cdn.simpleicons.org/supabase/3ECF8E",
        level: 2,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        icon: "/images/visual-studio-code-icon.webp",
        level: 4,
      },
      {
        name: "Figma",
        icon: "/images/figma-icon.webp",
        level: 3,
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/ffffff",
        level: 4,
      },
    ],
  },
];

export const skillAccents = [
  "#7baaab",
  "#e6bd8b",
  "#5990c0",
  "#c68d5d",
  "#cea273",
  "#7baaab",
];

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  link?: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "HCIA-openGauss V1.0 Course",
    issuer: "Huawei ICT Academy",
    year: "2024",
    link: "https://drive.google.com/file/d/1mJgV44hxavNdiGWDWov3E33qGHCVF5k0/view?usp=drive_link",
  },
  {
    id: 2,
    title: "HCIA-AI V3.5 Course",
    issuer: "Huawei ICT Academy",
    year: "2025",
    link: "https://drive.google.com/file/d/1ontRxw2H0ySipFGR6tOzthmHXXLqNus1/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Introduction to Python",
    issuer: "Sololearn",
    year: "2025",
    link: "https://drive.google.com/file/d/1AX5NcPkXovxMPdWoN1Hst73adQLVaLKB/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Python Intermediate",
    issuer: "Sololearn",
    year: "2025",
    link: "https://drive.google.com/file/d/1OoRHId0m86-FZaSgglZOd_5oPiJppX0h/view?usp=drive_link",
  },
];

export interface Project {
  id: number;
  title: string;
  tag: string;
  year: string;
  desc: string;
  image?: string;
  tools: string[];
  ongoing?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MyBaBel",
    tag: "Website",
    year: "2024",
    desc: "A tourism website that introduces the culture, traditions, and attractions of Bangka Belitung through an responsive web experience. The project was developed collaboratively using modern web technologies as part of a web development learning journey.",
    image: "/images/project/Project1.png",
    tools: ["HTML", "CSS", "JavaScript"],
    ongoing: false,
    featured: true,
  },
  {
    id: 2,
    title: "Xdemia Website Revamp",
    tag: "UI/UX",
    year: "2025",
    desc: "Redesigned the existing Xdemia website with a cleaner visual direction and a more intuitive user experience. Developed collaboratively as a UI/UX team project using Figma to enhance user engagement and improve overall platform usability.",
    image: "/images/project/Project2.png",
    tools: ["Figma"],
    ongoing: false,
  },
  {
    id: 3,
    title: "Bitecheck",
    tag: "Mobile App",
    year: "2025",
    desc: "A mobile application that helps users understand the nutritional content of the foods they consume every day. Developed collaboratively as a hands-on mobile app development project, it focuses on making nutrition information more accessible and easier to understand.",
    tools: ["Kotlin", "Firebase"],
    image: "/images/project/wop.png",
    ongoing: false,
    featured: true,
  },
  {
    id: 4,
    title: "Aurealisse",
    tag: "Mobile App",
    year: "2026",
    desc: "A perfume shopping application that allows users to browse and discover a variety of fragrances. The project explores mobile commerce concepts through intuitive navigation, product discovery, and a visually appealing interface.",
    image: "/images/project/Project4.png",
    tools: ["React Native", "Expo"],
    ongoing: false,
  },
  {
    id: 5,
    title: "GatherHub",
    tag: "Mobile App",
    year: "2026",
    desc: "An event management application that enables users to browse events, purchase tickets, and manage their bookings directly from their mobile devices. Built as a collaborative project, it focuses on providing a simple and convenient event ticketing experience.",
    image: "/images/project/Project5.png",
    tools: ["React Native", "Expo", "Supabase"],
    ongoing: false,
    featured: true,
  },
];

export const projectTags = ["All", ...new Set(projects.map((p) => p.tag))];

export interface ProjectDetail {
  id: number;
  title: string;
  role: string;
  detail: string;
  link?: string;
  githubLink?: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: "MyBaBel",
    role: "Frontend Developer",
    detail:
      "In the development of the MyBaBel project, I was responsible for establishing the initial project structure and developing the homepage as the foundation of the application. I also contributed to improving key UI components such as the navbar and footer to ensure a more consistent and intuitive user experience. Additionally, I helped optimize pages while supporting testing and debugging to maintain stability and reduce issues.",
    link: "https://mybabel24.vercel.app/",
    githubLink: "https://github.com/lyne05/MyBaBel",
  },
  {
    id: 2,
    title: "Xdemia Website Revamp",
    role: "UI/UX Designer",
    detail:
      "In the Xdemia revamp project, I worked on the Scholarships section, focusing on functionality and user experience. I resolved UI issues, including missing images and layout misalignments, by improving element placement, sizing, and spacing. I refined the scholarship detail view to better align with the original design, improve information structure, and add sorting functionality for a better user experience.",
    link: "https://www.figma.com/proto/dXb8mw5SgRNWv0s6o8c9cl/XDEMIA-REVAMP?node-id=758-2066&p=f&t=hPovzgzZn0Dr7kef-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=142%3A4063&show-proto-sidebar=1",
  },
  {
    id: 3,
    title: "Bitecheck",
    role: "Mobile Developer",
    detail:
      "Throughout the Bitecheck project, I worked on developing multiple pages and ensuring their functionality ran smoothly and as intended. I integrated Firebase for database management and connected the machine learning model to enable the application's AI functionality. I also contributed to the interface design and supported testing and debugging to maintain the overall stability of the application.",
    githubLink: "https://github.com/lyne05/Bitecheck",
  },
  {
    id: 4,
    title: "Aurealisse",
    role: "Mobile Developer",
    detail:
      "In the Aurealisse project, I developed and improved the navigation flow and overall UI/UX to deliver a smoother and more intuitive mobile commerce experience across devices. The system featured core e-commerce functionality, including cart management, wishlist, and order history with quantity control, supporting a complete shopping flow. A dark and light mode system was also included to enhance user preference and accessibility.",
    githubLink: "https://github.com/lyne05/Aurealisse",
  },
  {
    id: 5,
    title: "GatherHub",
    role: "Mobile Developer",
    detail:
      "As part of the GatherHub project, I helped build and design several pages while ensuring that their functionality worked smoothly and as intended. I also assisted with integrating Supabase for data management and supported testing and debugging to identify issues across different pages. Through these contributions, I helped maintain a functional and consistent user experience throughout the application.",
    githubLink: "https://github.com/highlysoul/GatherHub",
  },
];
