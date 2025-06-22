export const skills = [
  // Frontend
  { name: "HTML/CSS/SCSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  {
    name: "React",
    level: 40,
    category: "frontend",
    note: "Built portfolio SPA | Scrimba Course",
  },
  {
    name: "TailwindCSS",
    level: 30,
    category: "frontend",
    note: "Used for portfolio site",
  },

  // Backend
  { name: "Node.js (Express)", level: 70, category: "backend" },
  {
    name: "PostgreSQL",
    level: 60,
    category: "backend",
    note: "Designed schemas, optimized queries, and managed sessions for e-commerce app",
  },
  {
    name: "Server-Side Templating",
    level: 60,
    category: "backend",
    note: "Implemented UIs, partials, and conditional rendering for e-commerce app",
  },
  {
    name: "Python (Flask + SQLite)",
    level: 30,
    category: "backend",
    note: "Built Flask/SQLite web apps for CS50 coursework (Week 9)",
  },

  // Tools
  { name: "Git/Github", level: 60, category: "tools" },
  {
    name: "Docker",
    level: 30,
    category: "tools",
    note: "Containerized demo for deployment on Render",
  },
  {
    name: "Testing (Vitest)",
    level: 50,
    category: "tools",
    note: "Wrote unit/integration tests for e-commerce project",
  },
  {
    name: "Postman",
    level: 30,
    category: "tools",
    note: "Debugged auth flows and API endpoints during development",
  },
];

export const categories = ["all", "frontend", "backend", "tools"];
