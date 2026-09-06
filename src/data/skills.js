// Each skill maps to a lucide-react icon name (resolved in the Skills component)
export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    skills: [
      { name: "C", icon: "Code2" },
      { name: "Python", icon: "FileCode2" },
      { name: "C++", icon: "Code2" },
      // { name: "Dart", icon: "Gem" },
      { name: "JavaScript", icon: "Braces" },
    ],
  },
  {
    id: "web",
    label: "Web",
    skills: [
      { name: "HTML5", icon: "FileCode" },
      { name: "CSS3", icon: "Palette" },
      { name: "JavaScript", icon: "Braces" },
      { name: "Bootstrap", icon: "LayoutGrid" },
      { name: "Streamlit", icon: "MonitorSmartphone" },
      // { name: "React.js", icon: "Atom" },
    ],
  },
  {
    id: "ai-ml-data",
    label: "AI / ML / Data",
    skills: [
      { name: "Python", icon: "FileCode2" },
      // { name: "RAG", icon: "Network" },
      // { name: "FAISS", icon: "Search" },
      // { name: "Sentence Transformers", icon: "GitBranch" },
      // { name: "Google Gemini", icon: "Sparkles" },
      // { name: "Machine Learning fundamentals", icon: "BrainCircuit" },
      { name: "Data Analysis", icon: "ChartSpline" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: [
      { name: "Flutter", icon: "Smartphone" },
      // { name: "Dart", icon: "Gem" },
      { name: "MIT App Inventor", icon: "AppWindow" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    skills: [
      { name: "Power BI", icon: "ChartColumnBig" },
      { name: "Microsoft Excel", icon: "Table" },
      { name: "Statistical Analysis", icon: "ChartNoAxesCombined" },
      { name: "Mathematics", icon: "Sigma" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [{ name: "MySQL", icon: "Database" }],
  },
  {
    id: "pega",
    label: "Pega",
    skills: [
      { name: "Pega App Studio", icon: "LayoutTemplate" },
      { name: "Pega Infinity", icon: "Infinity" },
      { name: "Pega Blueprint", icon: "Blocks" },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "brand:github" },
      { name: "VS Code", icon: "Terminal" },
    ],
  },
];

export const softSkills = [
  {
    title: "Communication",
    description: "Ability to communicate technical ideas clearly.",
    icon: "MessageCircle",
  },
  {
    title: "Teamwork",
    description: "Comfortable collaborating on team projects and competitions.",
    icon: "Users",
  },
  {
    title: "Problem Solving",
    description: "Enjoys breaking complex problems into manageable solutions.",
    icon: "Puzzle",
  },
  {
    title: "Adaptability",
    description: "Quickly learns new technologies and tools.",
    icon: "Repeat",
  },
  {
    title: "Time Management",
    description: "Balances academics, projects, competitions and learning.",
    icon: "Clock",
  },
  {
    title: "Creativity",
    description: "Enjoys creating practical and visually engaging solutions.",
    icon: "Lightbulb",
  },
  {
    title: "Leadership",
    description: "Experience participating in team-based projects and competitions.",
    icon: "Flag",
  },
  {
    title: "Continuous Learning",
    description: "Actively explores AI, development and emerging technologies.",
    icon: "GraduationCap",
  },
];
