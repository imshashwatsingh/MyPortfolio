import {
  githublogo,
  pass1,
  mobile,
  drums,
  dataanalyst,
  backend,
  creator,
  writer,
  hero,
  hero1,
  web,
  sql,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  surveen,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: dataanalyst,
  },
  {
    title: "Backend Developer",
    icon: hero,
  },
  // {
  //   title: "Drummer",
  //   icon: drums,
  // },
  // {
  //   title: "Technical Writer",
  //   icon: writer,
  // },
  // {
  //   title: "Teacher",
  //   icon: backend,
  // },
];

const profiles = [
  {
    id : "github",
    title : "GitHub",
    icon : githublogo,
    src : "https://github.com/imshashwatsingh"
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Tech Head",
    company_name: "Surveen : The Music Society of SGGSCC",
    icon: surveen,
    iconBg: "#383E56",
    date: "Jan 2022 - June 2024",
    points: [
      "Developing and maintaining social media accounts of Surveen using Instagram and Google Suite and other related technologies.",
      "Collaborating with cross-functional teams including musicians, sponsors, and other college socities for organizing events and betterment of Surveen.",
      "Designed posters for college events and organized many inter and intra college events.",
      "Participating in other colleges' Battle of Bands (music-competition) and providing recreational events to other organizations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Currency Converter",
    description:
      "A simple Currency Converter app built with React that allows users to convert between different currencies in real-time. The app uses a free API for currency conversion and displays the result with an intuitive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/imshashwatsingh/Currency-Converter",
  },
  {
    name: "Sum Up !",
    description:
      "AI Content Summarizer is a web-based application built using the PERN stack (PostgreSQL, Express.js, React, Node.js) that allows users to summarize long articles or pieces of content quickly and efficiently using Google's Gemini AI API",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "restAPI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/imshashwatsingh/SumUP",
  },
  {
    name: "Todo List",
    description:
      "A simple todo list made using react local storage and context api",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "reactLocalStorage",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/imshashwatsingh/ToDoReactLocalStorage",
  },
  // {
  //   name: "Password-Generator",
  //   description:
  //     "A simple password generator built with React that allows users to create strong and customizable passwords.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: pass1,
  //   source_code_link: "https://github.com/imshashwatsingh/Password-Generator",
  // },
  // {
  //   name: "Background-Changer",
  //   description:
  //     "A simple and visually appealing background color changer built with React and Tailwind CSS. This project demonstrates the use of React hooks and dynamic styling to create an interactive user interface.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: hero,
  //   source_code_link: "https://github.com/imshashwatsingh/Background-Changer-React-Web-App",
  // },
];

export { services, technologies, experiences, testimonials, projects , profiles};
