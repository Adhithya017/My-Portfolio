// Portfolio Data — All personal info, experience, projects, skills, education, certifications
// Edit this file to update your portfolio content

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  date: string;
  tech: string[];
  bullets: string[];
  github?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  logo: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Adithya Acharya",
  firstName: "Adithya",
  lastName: "Acharya",
  initials: "AA",
  title: "Java Full-Stack Developer",
  email: "adithyaacharya054@gmail.com",
  phone: "+91 74833 84532",
  location: "Bangalore, Karnataka, India",
  profileImage: "/profile.jpg",
  resumePdf: "/Adithya_Acharya_Resume.pdf",
  summary:
    "Java Full-Stack Developer with hands-on experience in Spring Boot, React.js, and MySQL. Skilled in building REST APIs, responsive web applications, and database-driven systems. Passionate about developing secure, scalable, and efficient software solutions with a focus on clean architecture and real-world impact.",
  subtitles: [
    "Java Full-Stack Developer",
    "Spring Boot Specialist",
    "React.js Engineer",
    "Problem Solver",
  ],
  tagline:
    "Building secure, scalable, and efficient software solutions with clean architecture.",
} as const;

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Adhithya017",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/adithyaacharya-",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:adithyaacharya054@gmail.com",
    icon: "mail",
  },
  {
    name: "Phone",
    url: "tel:+917483384532",
    icon: "phone",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Java Full-Stack Developer Intern",
    company: "Tap Academy",
    location: "Bangalore, Karnataka",
    duration: "Feb 2026 – Present",
    bullets: [
      "Developing full-stack web applications using Java, Spring Boot, React.js, and MySQL in an agile team environment.",
      "Building secure backend services and RESTful APIs with role-based JWT authentication for multiple application modules.",
      "Creating responsive user interfaces using React.js, HTML, and CSS, ensuring cross-browser compatibility.",
      "Designing and managing MySQL databases with optimized schema design and complex queries handling 1000+ records.",
      "Using Git and GitHub for version control, collaboration, and maintaining code quality across team branches.",
    ],
  },
  {
    role: "Python Full-Stack Developer Intern",
    company: "VrishankSoft Pvt Ltd",
    location: "Belgaum, Karnataka",
    duration: "Feb 2026 – May 2026",
    bullets: [
      "Developed full-stack web applications using Python, FastAPI, React.js, and MySQL in an agile development environment.",
      "Built secure backend services and RESTful APIs for user management, attendance tracking, assignments, and analytics modules.",
      "Created responsive and interactive user interfaces using React.js, HTML, CSS, and Tailwind CSS, ensuring smooth user experience across devices.",
      "Implemented AI-based student performance prediction and at-risk student analysis using Machine Learning concepts such as Random Forest.",
      "Designed and managed MySQL databases with optimized schema design, relational tables, and efficient query handling.",
      "Used Git and GitHub for version control, debugging, collaboration, and maintaining project code quality.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "NeuroCart",
    date: "Feb 2026",
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "JWT",
      "REST APIs",
      "Git",
    ],
    bullets: [
      "Developed a full-stack e-commerce web application supporting product browsing, cart management, and secure checkout.",
      "Implemented secure REST APIs with JWT authentication for user login, session management, and role-based access control.",
      "Designed a normalized MySQL schema with 8+ tables and integrated a responsive React.js frontend with Spring Boot backend.",
    ],
    github: "https://github.com/Adhithya017/Neuro-Cart",
  },
  {
    title: "Autonomous Research Agent",
    date: "Mar 2026",
    tech: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "Groq API",
      "Tavily API",
      "SSE",
    ],
    bullets: [
      "Built a full-stack AI research agent that autonomously searches the web, analyzes articles, and generates structured research reports with citations.",
      "Integrated Groq Llama 3.3 70B for AI-powered report generation and Tavily Search API for real-time multi-source web search across 10+ sources per query.",
      "Implemented real-time agent step streaming using Server-Sent Events (SSE) to push live updates from the Spring Boot backend to a React dashboard.",
    ],
    github: "https://github.com/Adhithya017/Autonomous-Research-Agent",
  },
  {
    title: "Blood Donation Management System",
    date: "Aug 2025 – Sep 2025",
    tech: ["PHP", "HTML", "CSS", "MySQL", "XAMPP"],
    bullets: [
      "Built a web-based system for managing blood donor records, requests, and inventory.",
      "Implemented role-based access for admin, donors, and recipients with secure login.",
      "Designed a MySQL backend for storing donor information and handling 500+ records efficiently.",
    ],
    github: "https://github.com/Adhithya017/Blood-Donation-Management-system",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Yenepoya Institute of Technology",
    degree: "B.E. in Computer Science",
    duration: "2022 – 2026",
    grade: "CGPA 8.55 / 10.0",
  },
  {
    institution: "S.D.P.T P U College, Udupi",
    degree: "Pre-University (PCMB)",
    duration: "2020 – 2022",
    grade: "83.33%",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    logo: "ibm",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    logo: "ibm",
  },
  {
    title: "Amazon Aurora MySQL & Amazon RDS MySQL",
    issuer: "AWS",
    logo: "aws",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "PHP"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Server-Sent Events",
    ],
  },
  {
    category: "Databases",
    skills: [
      "MySQL",
      "MongoDB",
      "JDBC",
      "Spring Data JPA",
      "Hibernate ORM",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "XAMPP",
      "Maven",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 8.55, label: "CGPA", suffix: "", decimals: 2 },
  { value: 3, label: "Projects Built", suffix: "+", decimals: 0 },
  { value: 3, label: "Certifications", suffix: "", decimals: 0 },
  { value: 1000, label: "Records Handled", suffix: "+", decimals: 0 },
];
