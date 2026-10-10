import mirajPhoto from '../assets/miraj.jpg.jpeg';

export const portfolioData = {
  hero: {
    name: "Miraj Hossain",
    title: "Software Engineer | Full-Stack & AI Developer",
    intro: "Computer Science & Engineering graduate focused on clean, secure backend code and deep learning at the edge.",
    portrait: {
      image: mirajPhoto,
      fallbackInitials: 'MH',
      chip1: 'OPEN TO INTERNSHIPS',
      chip2: 'Hello World 😊'
    }
  },
  about: {
    summary: "Computer Science & Engineering graduate (AI & Information Systems). I build full-stack web applications with React, PHP, and MySQL, including REST APIs, secure authentication, and role-based access control. I also deploy low-latency deep learning models on edge hardware using Python and OpenCV. Comfortable with Git, Linux, and Node.js, and eager to write clean, testable, secure backend code.",
    location: "Gazipur, Dhaka, Bangladesh",
    resumeLink: "#" // TODO: Add resume link
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "PHP", "SQL", "HTML5", "CSS3", "R"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "RESTful API design", "microservice architecture", "Redis", "authentication", "role-based access control", "data validation"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "responsive web design", "UX fundamentals"]
    },
    {
      category: "Databases",
      items: ["MySQL", "RDBMS", "PL/SQL", "schema design"]
    },
    {
      category: "Tools & Practices",
      items: ["Git", "Docker", "Linux", "performance optimization"]
    },
    {
      category: "AI & Computer Vision",
      items: ["OpenCV", "MobileNetV3", "YOLO (v8, v9, v11)", "deep learning", "Edge AI", "AI API integration"]
    },
    {
      category: "Hardware & IoT",
      items: ["Raspberry Pi", "ESP32-CAM", "IoT sensors"]
    }
  ],
  contact: {
    email: "mirajh417@gmail.com",
    phone: "+880 1813-609364",
    address: "Gazipur, Dhaka 1230, Bangladesh",
    socials: {
      github: "https://github.com/MIRAJHOSSAIN-afk",
      linkedin: "https://www.linkedin.com/in/miraj-hossain-075590257"
    },
    socialNetworks: [
      { name: 'GitHub', url: 'https://github.com/MIRAJHOSSAIN-afk', icon: 'github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/miraj-hossain-075590257', icon: 'linkedin' },
      { name: 'Facebook', url: 'https://www.facebook.com/share/1DojQrFgY9/', icon: 'facebook' },
      { name: 'Instagram', url: 'https://www.instagram.com/mirajh417?srtk=NDdyNGMyOXl2MXhu', icon: 'instagram' },
      { name: 'Twitter/X', url: 'https://x.com/HMiraj183', icon: 'twitter' },
      { name: 'WhatsApp', url: 'https://wa.me/8801813609364', icon: 'whatsapp' },
      { name: 'Discord', url: 'https://discord.com/users/1005893539089100810', icon: 'discord' }
    ]
  },
  projects: [
    {
      id: 1,
      title: "EcoRise: Full-Stack Sustainability & Eco-Audit Platform",
      tags: ["React", "PHP", "MySQL", "REST API"],
      description: "Built a full-stack sustainability web app backed by 10+ relational database schemas and dynamic user views. Designed responsive REST API endpoints and state management workflows that reduced client-side payload latency on the reporting dashboard. Integrated React components with PHP server logic across multi-step audit forms, validating input on both client and server. Implemented secure authentication and role-based access control.",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "AgriBot: Edge AI Crop Disease Diagnostic & Web Advisory System",
      tags: ["Python", "OpenCV", "MobileNetV3", "Raspberry Pi"],
      description: "Deployed MobileNetV3 on a Raspberry Pi for low-latency classification of 38 crop condition classes. Built an OpenCV pipeline that filtered redundant and motion-blurred frames, cutting redundant downstream computation by over 50%. Added automated leaf ROI extraction and white-background normalization to reduce field-background domain shift before classification. Integrated a web interface with an external AI API (REST) to log edge telemetry and generate structured treatment guidance.",
      github: "#",
      demo: "#"
    }
  ],
  education: [
    {
      id: 1,
      degree: "BSc in Computer Science & Engineering",
      institution: "American International University-Bangladesh",
      period: "2022 – 2026",
      details: "CGPA 3.31. Major: Information Systems & Artificial Intelligence. Coursework: Data Structures and Algorithms, Database Management Systems, Web Technologies, Artificial Intelligence."
    },
    {
      id: 2,
      degree: "HSC",
      institution: "Uttara Model College, Dhaka",
      period: "2019 – 2021",
      details: "GPA 5.00"
    },
    {
      id: 3,
      degree: "SSC",
      institution: "Rayerdia High School, Kaligonj",
      period: "2015 – 2019",
      details: "GPA 4.50"
    }
  ],
  publications: [
    {
      id: 1,
      title: "Development and Implementation of an IoT-Based Autonomous Agribot for Precision Farming",
      conference: "Proceedings of the 6th Annual Paper Meet (IEB-EE APM2025)",
      location: "Dhaka, Bangladesh",
      date: "Dec 2025",
      description: "Co-authored peer-reviewed paper on an autonomous agricultural diagnostic robot integrating ESP32-CAM video streaming with multi-sensor telemetry."
    }
  ]
};
