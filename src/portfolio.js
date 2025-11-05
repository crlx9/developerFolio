/* Enhanced Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting Section - Enhanced with more dynamic content
const greeting = {
  username: "Carlos Salinas",
  title: "Hi, I'm Carlos Salinas",
  subTitle: emoji(
    "A passionate UI/UX Designer & Frontend Developer 🚀 crafting beautiful, intuitive web and mobile experiences with JavaScript, React, Node.js, and modern design tools. I transform ideas into pixel-perfect reality."
  ),
  resumeLink: "./Carlos Francisco D. Salinas_Resume.pdf",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/carlx9",
  linkedin: "", // Add your LinkedIn here
  gmail: "cfsalinas619@gmail.com",
  facebook: "https://www.facebook.com/carlos.salinas.92505956",
  display: true
};

// Skills Section - Enhanced descriptions
const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE UI/UX DESIGNER & FRONTEND DEVELOPER EXPLORING EVERY DESIGN TOOL & TECHNOLOGY",
  skills: [
    emoji("⚡ Design and develop highly interactive, responsive user interfaces for web and mobile applications"),
    emoji("⚡ Create intuitive user experiences with modern design principles and accessibility standards"),
    emoji("⚡ Build Progressive Web Applications (PWA) using modern JavaScript frameworks and SPA architecture"),
    emoji("⚡ Integrate third-party services including Firebase, AWS, Supabase, and cloud deployment platforms"),
    emoji("⚡ Collaborate effectively in agile teams, leading projects from concept to deployment")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true
};

// Education Section - Enhanced with better formatting
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National University Dasmariñas",
      logo: require("./assets/images/NU.webp"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2022 - Present",
      desc: "Currently pursuing my degree in Information Technology with a strong academic record. Actively engaged in various tech projects, extracurricular activities, and successfully completed Capstone Project in 2025.",
      descBullets: [
        "Specialized in web and mobile application development using modern frameworks and technologies",
        "Developed strong teamwork and project management skills through collaborative group assignments",
        "Demonstrated leadership capabilities by leading development team for capstone project",
        "Gained hands-on experience with agile methodologies and version control systems"
      ]
    },
    {
      schoolName: "STI College Bacoor",
      logo: require("./assets/images/STI.png"),
      subHeader: "Information Communication Technology",
      duration: "2019 - 2021",
      desc: "Studied programming fundamentals and core ICT concepts, building a strong foundation for software development.",
      descBullets: [
        "Learned programming fundamentals using C#, C++, Java, and problem-solving methodologies",
        "Developed strong communication and presentation skills through various academic activities",
        "Built foundational knowledge in computer systems, networking, and software development"
      ]
    }
  ]
};

// Tech Stack - Enhanced with more realistic percentages
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "UI/UX Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "45%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects Section - Enhanced descriptions
const bigProjects = {
  title: "Featured Projects",
  subtitle: "SHOWCASE OF MY ACADEMIC AND PROFESSIONAL WORK",
  projects: [
    {
      image: require("./assets/images/Mind.png"),
      projectName: "Mind Connect",
      projectDesc: "A comprehensive mental health platform connecting patients with licensed therapists for professional online counseling and support services.",
      descBullets: [
        "Full-stack mobile and web application providing mental health resources, therapy sessions, and self-help tools",
        "Features include appointment booking system, secure video consultations, and extensive library of mental health articles",
        "Built with React.js for web interface, Flutter for mobile app, Supabase for backend, and deployed on Vercel",
        "Implemented real-time chat, appointment notifications, and user progress tracking"
      ],
      footerLink: [
        {
          name: "View Project",
          url: "" // Add project URL if available
        }
      ]
    },
    {
      image: require("./assets/images/Time.png"),
      projectName: "ProfConnect",
      projectDesc: "An intelligent appointment management system enabling students to seamlessly schedule consultations with professors.",
      descBullets: [
        "Flutter-based mobile application with intuitive UI for viewing professor availability and booking appointments",
        "Real-time notification system for appointment confirmations, reminders, and schedule changes",
        "Complete appointment history tracking with analytics and calendar integration",
        "Powered by Supabase for secure authentication, database management, and real-time updates"
      ],
      footerLink: [
        {
          name: "View Project",
          url: "" // Add project URL if available
        }
      ]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my complete resume to learn more about my experience and qualifications",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Get In Touch ☎️"),
  subtitle: "Have a project in mind or just want to connect? I'm always open to discussing new opportunities and collaborations.",
  number: "+63 995-595-7630",
  email_address: "cfsalinas619@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false // Set to true if you have Twitter
};


const isHireable = true; // Set to true since you're looking for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};