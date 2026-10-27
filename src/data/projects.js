// Edit this file to update your project cards.
// status: "capstone" | "in-progress" | "personal"
const projects = [
  {
    id: "dermaai",
    title: "DermaAI",
    status: "personal",
    statusLabel: "Personal Project",
    summary:
      "Android app that uses the device camera to capture and analyse skin conditions in real time, built with a clean MVVM architecture on top of Jetpack.",
    stack: ["Kotlin", "CameraX", "MVVM", "Jetpack"],
    github: "https://github.com/yourusername/dermaai",
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
    github: "https://github.com/yourusername/budgetai",
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
];

export default projects;
