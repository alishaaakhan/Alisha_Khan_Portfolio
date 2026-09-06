// githubUrl / liveDemoUrl left empty until real links are provided — never invent URLs.
// image can point to /public/projects/<file> once real screenshots are added.
export const projects = [
  {
    id: "travel-management-support",
    title: "Movie Ticket Booking Management System",
    category: "Pega / Application Development",
    filterTags: ["pega"],
    technologies: ["Pega", "Pega Infinity", "Pega App Studio", "Pega Blueprint"],
    description:
      "A customer support application developed as part of Pega training/internship work.",
    problem:
      "Travel customer support teams need a structured, case-driven way to manage and resolve customer requests.",
    solution:
      "Built a case-management style customer support application in Pega, covering the core workflow from request intake to resolution.",
    features: [
      "Case-driven customer support workflow",
      "Built with Pega App Studio and Pega Infinity",
      "Modeled with Pega Blueprint",
    ],
    image: "/NIPMovie.png",
    githubUrl: "",
    liveDemoUrl: "/NIP_MovieTicket_Alisha_Khan.mp4",
    demoLabel: "Live Demo",
    detailsOnly: true,
  },
  {
    id: "wildmed-ai",
    title: "WildMed AI",
    category: "AI / ML",
    filterTags: ["ai-ml"],
    technologies: ["React.js, JavaScript","Supabase (PostgreSQL)" ," HTML, CSS","AI/ML"],
    description:
      "An offline-first first-aid and diagnostic assistant concept designed to provide useful guidance in situations with limited connectivity.",
    problem:
      "In remote or low-connectivity situations, people often can't access reliable first-aid guidance when they need it most.",
    solution:
      "WildMed AI explores an offline-first assistant concept that can provide first-aid and diagnostic guidance without depending on a constant network connection.",
    features: [
      "Offline-first design approach",
      "First-aid guidance concept",
      "Lightweight diagnostic assistant logic",
    ],
    image: "/WildMed.png",
    githubUrl: "",
    demoLabel: "Live Demo",
    liveDemoUrl: "WildMedAI.mp4",
  },
  {
id: "mit-app-inventor-project",
title: "SMARTCLASS AI",
category: "Mobile Development",
filterTags: ["mobile"],
technologies: ["MIT App Inventor", "MIT App Inventor Blocks"],
description:
"A mobile application developed using MIT App Inventor, focused on creating a practical and user-friendly solution through visual programming.",
problem:
"Many everyday problems can be addressed through simple mobile applications, but traditional app development can have a steep learning curve for beginners.",
solution:
"Designed and developed a functional Android application using MIT App Inventor's visual programming environment and block-based logic.",
features: [
"Interactive mobile application interface",
"Block-based application logic",
"User-friendly design",
"Functional Android application",
],
image: "/SmartClass.png",
githubUrl: "",
liveDemoUrl: "/MITApp.mp4",
demoLabel: "Live Demo",
},
  {
    id: "mediverse-ai",
    title: "MediCare AI",
    category: "AI / Data Science",
    filterTags: ["ai-ml", "data-science"],
    technologies: ["Python", "Streamlit", "Google Gemini", "FAISS", "Sentence Transformers", "RAG"],
    description:
      "An AI-powered medical FAQ application using Retrieval-Augmented Generation to provide contextual answers from a curated knowledge base.",
    problem:
      "Finding trustworthy, contextual answers to medical questions quickly is hard when information is scattered across long documents.",
    solution:
      "MediCare AI retrieves the most relevant passages from a curated knowledge base with FAISS and sentence embeddings, then uses Google Gemini to generate a grounded, contextual answer.",
    features: [
      "Retrieval-Augmented Generation pipeline",
      "Semantic search over a curated knowledge base with FAISS",
      "Sentence-Transformer embeddings for contextual matching",
      "Streamlit interface for interactive Q&A",
    ],
    image: "/MediCare AI.png",
    githubUrl: "",
    demoLabel: "Live Demo",
    liveDemoUrl: "",
  },
  {
    id: "findora",
    title: "Findora",
    category: "Mobile Development",
    filterTags: ["mobile"],
    technologies: ["Flutter", "Dart"],
    description:
      "(Founder & Developer — Alisha Khan) A lost-and-found mobile application designed to help users report, discover and recover lost items.",
    problem:
      "Reporting and recovering lost items is usually informal and disorganized, making it hard to reconnect people with their belongings.",
    solution:
      "Findora gives users a structured way to report lost or found items and browse listings, built as a cross-platform Flutter app.",
    features: [
      "Report lost or found items",
      "Browse and search listings",
      "Cross-platform Flutter app for Android and iOS",
    ],
    image: "/Findora.png",
    githubUrl: "",
    liveDemoUrl: "/findoraa.mp4",
    demoLabel: "Live Demo",
  },
  {
id: "portfolio-website",
title: "Personal Portfolio Website",
category: "Web Development",
filterTags: ["web"],
technologies: ["HTML5", "JavaScript", "Tailwind", "React.js"],
description:
"A modern, responsive personal portfolio website showcasing my skills, projects, achievements, and experience through an interactive and visually engaging interface.",
problem:
"Presenting technical skills and projects in a professional way can be difficult when information is scattered across different platforms.",
solution:
"Designed and developed a responsive portfolio website that brings together my profile, technical skills, projects, achievements, and contact information in one polished digital experience.",
features: [
"Fully responsive design",
"Interactive project showcase",
"Skills and technology sections",
"Smooth animations and modern UI",
"Working contact section",
"Social media and GitHub integration",
],
image: "/Portfolio.png",
githubUrl: "YOUR_GITHUB_REPOSITORY_URL",
liveDemoUrl: "/Portfolioo.mp4",
demoLabel: "Live Demo",
},
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "data-science", label: "Data Science" },
  { id: "pega", label: "Pega" },
];
