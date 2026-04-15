import profile from "../images/profile.jpeg";
import rentalsImg from "../images/projects/rentals.png";
import bookstockImg from "../images/projects/bookstock.png";
import weatherImg from "../images/projects/weather.png";

export const aboutData = {
  name: "Lama",
  role: "Full Stack Developer · 19 years old",
  bio: "I craft clean, performant web experiences from front to back. Passionate about building products that are both beautiful and functional.",
  highlights: [
    "Learned in a 4+ month course from Technion",
    "Projects completed: 7+",
  ],
  tags: ["React", "JavaScript", "Python", "PostgreSQL", "Docker"],
  profileImage: profile,
};

export const projectsData = [
  {
    title: "iPtRACKER",
    summary: "Workout and progress tracker with analytics dashboards.",
    description:
      "A fitness tracker that helps users log workouts, monitor progress over time, and visualize performance with smart charts and milestones.",
    details: [
      "Exercise logging with custom plans",
      "Progress timeline and performance metrics",
      "Dashboard for weekly and monthly insights",
    ],
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    images: [
      "https://picsum.photos/seed/iptracker-dashboard/900/600",
      "https://picsum.photos/seed/iptracker-workout/900/600",
      "https://picsum.photos/seed/iptracker-profile/900/600",
    ],
  },
  {
    title: "Rentals App",
    summary: "Platform for renting objects and services between users.",
    description:
      "A marketplace-like app where people can list items or services for rent. Includes secure auth, booking flows, and live status updates.",
    details: [
      "Full CRUD for listings and bookings",
      "User authentication and profile management",
      "Real-time availability updates",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    images: [
      "https://picsum.photos/seed/rentals-home/900/600",
      "https://picsum.photos/seed/rentals-listing/900/600",
    ],
  },
  {
    id: 2,
    title: "BookStock",
    summary: "Library management system with inventory tracking.",
    description:
      "A library system for borrowing and returning books with role-based dashboards for users and admins.",
    details: [
      "Inventory and lending workflow",
      "Admin dashboard for overdue tracking",
      "Search and category filtering",
    ],
    tech: ["Python", "PostgreSQL", "REST API"],
    images: ["https://picsum.photos/seed/bookstock-admin/900/600"],
  },
  {
    id: 3,
    title: "Weather App",
    summary: "Real-time forecasting with smart location search.",
    description:
      "A weather app powered by external APIs with current conditions, hourly forecast, and daily planning cards.",
    details: [
      "Location autocomplete",
      "Current and 7-day forecast",
      "Responsive weather cards",
    ],
    tech: ["React", "API", "JavaScript"],
    images: [
      "https://picsum.photos/seed/weather-main/900/600",
      "https://picsum.photos/seed/weather-week/900/600",
    ],
  },
  {
    title: "TaskFlow",
    summary: "Team task planner with board and timeline views.",
    description:
      "Collaborative project board with drag-and-drop task states, priorities, and sprint tracking.",
    details: [
      "Kanban board interface",
      "Task priority and labels",
      "Sprint planning summary",
    ],
    tech: ["React", "Firebase", "CSS"],
    images: ["https://picsum.photos/seed/taskflow-board/900/600"],
  },
  {
    title: "Cafe Orders API",
    summary: "Backend API for menu, orders, and order status.",
    description:
      "A backend service for a cafe app with menu CRUD, order creation, and basic role-based access control.",
    details: [
      "JWT authentication",
      "Order lifecycle endpoints",
      "Postman API test collection",
    ],
    tech: ["Node.js", "Express", "PostgreSQL"],
    images: ["https://picsum.photos/seed/cafe-api/900/600"],
  },
  {
    title: "Portfolio Website",
    summary: "Personal brand website with interactive sections.",
    description:
      "A polished personal portfolio that showcases projects, skills, and contact details with smooth interaction and clean visuals.",
    details: [
      "Interactive hero experience",
      "Project explorer with image gallery",
      "Responsive design system",
    ],
    tech: ["React", "Vite", "CSS"],
    images: [
      "https://picsum.photos/seed/portfolio-main/900/600",
      "https://picsum.photos/seed/portfolio-project/900/600",
    ],
  },
];

export const skillsData = [
  { name: "React", type: "Frontend" },
  { name: "JavaScript", type: "Language" },
  { name: "Python", type: "Language" },
  { name: "Node.js", type: "Backend" },
  { name: "PostgreSQL", type: "Database" },
  { name: "MongoDB", type: "Database" },
  { name: "Docker", type: "DevOps" },
  { name: "REST APIs", type: "Backend" },
  { name: "Git", type: "Tools" },
  { name: "CSS", type: "Frontend" },
];

export const contactData = {
  intro: "Got a project idea or just want to say hi? I'd love to hear from you.",
  email: "lama.dev@email.com",
  status: "Available for freelance",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
