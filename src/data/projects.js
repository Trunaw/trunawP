// Edit this file to update your project cards.
// status: "capstone" | "in-progress" | "personal"
// links: optional extra repo links shown next to the main GitHub link
// privateRepo: true shows "Private repo" instead of "Repo coming soon"
const projects = [
  {
    id: "gaura-travel",
    title: "Gaura Travel Mobile App",
    status: "capstone",
    statusLabel: "Industry Project · Gaura Travel",
    summary:
      "Cross-platform travel booking app for Gaura Travel — flight search, pricing, passenger details and booking, with Firebase auth (Google/Apple sign-in). I built the in-app AI chatbot: chat UI with guest/saved history, an n8n workflow backed by a self-hosted Ollama model, scoped to Gaura Travel topics, with a \"Book this flight\" action that opens the matching booking page.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "n8n", "Ollama"],
    github: "",
    privateRepo: true,
    demo: "",
  },
  {
    id: "dermaai",
    title: "DermaAI",
    status: "personal",
    statusLabel: "Personal Project",
    summary:
      "Android app that uses the device camera to capture and analyse skin conditions in real time, built with a clean MVVM architecture on top of Jetpack.",
    stack: ["Kotlin", "CameraX", "MVVM", "Jetpack"],
    github: "",
    demo: "",
  },
  {
    id: "budgetai",
    title: "BudgetAI",
    status: "personal",
    statusLabel: "Personal Project",
    summary:
      "Full-stack budgeting app — a Flutter client talking to a Node.js/Express API backed by PostgreSQL, covering auth, expense tracking and spend insights.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "REST API"],
    github: "https://github.com/Trunaw/budgetai",
    links: [{ label: "Backend", url: "https://github.com/Trunaw/budgetai-backend" }],
    demo: "",
  },
  {
    id: "autoaudit",
    title: "AutoAudit",
    status: "capstone",
    statusLabel: "Capstone · SIT378",
    summary:
      "Deakin capstone project on the Compliance Engine team, building an automated compliance auditing platform. Shipped an end-to-end Rego/OPA policy implementing CIS Microsoft 365 Foundations control 1.3.3, with a full unit test suite.",
    stack: ["Rego", "OPA", "Docker", "Node.js"],
    github: "https://github.com/Hardhat-Enterprises/AutoAudit",
    demo: "",
  },
  {
    id: "android-app",
    title: "New Android App",
    status: "in-progress",
    statusLabel: "In Progress",
    summary:
      "A new Android app currently in development, built around Firebase Authentication, Retrofit networking, a Room persistence layer and an MVVM architecture with Jetpack Compose UI.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Retrofit", "Room"],
    github: "",
    demo: "",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    status: "personal",
    statusLabel: "Personal Project",
    summary:
      "The site you're looking at — a single-page portfolio built with React and Vite, with project cards driven from a plain data file.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/Trunaw/trunawP",
    demo: "",
  },
];

export default projects;
