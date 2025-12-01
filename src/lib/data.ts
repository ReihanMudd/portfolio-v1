export const personalInfo = {
  name: "Reihan Mudajanto",
  title: "Full-Stack Engineer & Data Strategist",
  headline: "Full-Stack Engineer & Data Automation Specialist",
  subtext:
    "I am a rising Computer Science freshman and Applications Developer. I specialize in engineering scalable backend solutions, automating data pipelines, and teaching the next generation of developers.",
  about:
    "My journey in tech is driven by my deep curiosity and a results-oriented mindset. From architecting automated ETL pipelines that improve efficiency by 25% to managing five-figure budgets for competitive robotics teams, I thrive in environments that demand both technical rigor and collaborative leadership. Currently, I’m looking for new opportunities and working on scalable and new projects while pursuing my CS degree.",
  email: "reihan2007@gmail.com",
  linkedin: "https://www.linkedin.com/in/reihan-mudajanto-b989362b2/",
  github: "https://github.com/ReihanMudd",
  location: "Morris Plains, NJ",
};

export const experience = [
  {
    id: 1,
    role: "Applications Dev. Intern",
    company: "Global Aerospace Inc.",
    location: "Morris Plains, NJ",
    period: "June 2024 - March 2025",
    description: [
      "Engineered and enhanced front-end components for customer-facing broker portals using modern web technologies.",
      "Developed and deployed a back-end rating engine to automate insurance policy calculations, streamlining contract generation.",
      "Architected and implemented an automated ETL pipeline using SQL Server to process and transform policy data, improving reporting efficiency by 25%.",
    ],
    tags: ["SQL Server", "Backend", "ETL", "Web Dev"],
  },
  {
    id: 2,
    role: "Programming Instructor",
    company: "Parsippany Library",
    location: "Parsippany, NJ",
    period: "April 2023 - June 2024",
    description: [
      "Designed and delivered a 10-week foundational coding curriculum covering Python, Java, C++, and Lua.",
      "Fostered an engaging, hands-on learning environment for 15+ middle school students.",
      "Achieved 100% completion rate for final capstone projects.",
    ],
    tags: ["Teaching", "Python", "Java", "Curriculum Design"],
  },
  {
    id: 3,
    role: "Treasurer",
    company: "FIRST Team 8588",
    location: "Denville, NJ",
    period: "September 2021 - May 2024",
    description: [
      "Managed a seasonal budget of over $10,000, allocating funds for hardware, software, and travel.",
      "Coordinated project timelines across mechanical, electrical, and software sub-teams.",
      "Presented financial reports to stakeholders and faculty advisors.",
    ],
    tags: ["Leadership", "Budgeting", "Project Management"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Rating Engine",
    tech: ["Java/C#", "Backend", "SQL"],
    description:
      "Iterated on and deployed a backend rating engine to automate insurance policy calculations, eliminating manual data entry and streamlining contract generation.",
    company: "Global Aerospace Inc.",
  },
  {
    id: 2,
    title: "Automated ETL Pipeline",
    tech: ["SQL Server", "Data Warehousing"],
    description:
      "Architected a complex ETL pipeline to process policy data from multiple sources, ensuring data integrity and boosting reporting efficiency by 25%.",
    company: "Global Aerospace Inc.",
  },
  {
    id: 3,
    title: "STEM Education Curriculum",
    tech: ["Python", "Java", "Education"],
    description:
      "Designed and delivered a 10-week foundational coding curriculum for 15+ students, resulting in a 100% capstone project completion rate.",
    company: "Parsippany Library",
  },
  {
    id: 4,
    title: "FRC Charged Up Robot",
    tech: ["Java", "Robotics", "Electronics"],
    description:
      "Designed and built a robot for the FRC Charged Up game, featuring a 4-wheel drive system and a multi-motor shooter.",
    company: "FIRST Team 8588",
  },
  {
    id: 5,
    title: "Portfolio Website",
    tech: ["Next.js", "Tailwind CSS", "React"],
    description:
      "Designed and built a portfolio website to showcase my projects, skills, and experience.",
    company: "Personal",
  },
];

export const skills = {
  languages: ["Java", "JavaScript", "Python", "C++", "HTML/CSS", "R", "SQL"],
  frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  tools: ["SQL Server", "MySQL", "Git", "GitHub", "Vercel"],
};
