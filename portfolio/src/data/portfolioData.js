import profile from "../images/profile.jpeg";
import rentalsImg from "../images/projects/rentals.png";
import bookstockImg from "../images/projects/bookstock.png";
import weatherImg from "../images/projects/weather.png";
import ipTrackerImg from "../images/projects/iptracker.png";
import adviceImg from "../images/projects/advice.png";

export const aboutData = {
  name: "Lama",
  role: "Full Stack Developer · 19 years old",
  bio: "I’m a full stack developer who enjoys turning ideas into real, working products. I like building clean interfaces, connecting them to solid backend logic, and creating applications that feel smooth, practical, and well thought out.",
  highlights: [
    "Learned in a 4+ month course from Technion",
    "Built full-stack projects with real functionality",
    "Focused on modern UI + backend architecture",
  ],
  tags: ["React", "JavaScript", "Python", "FastAPI", "PostgreSQL", "Docker"],
  profileImage: profile,
};


export const projectsData = [
  {
    title: "IPTracker",
    summary: "Track and explore IP address details with location-based insights.",
    description:
      "A clean frontend project that lets users search for an IP address or domain and view location details in a polished interface.",
    longDescription:
      "IPTracker is a responsive frontend application built around API integration and clean data presentation. It allows users to search by IP address or domain and instantly see structured information such as location, timezone, and ISP details. This project helped me practice working with external APIs, search handling, component structure, and building a more polished UI experience.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    images: [ipTrackerImg],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Advice App",
    summary: "A minimalist advice generator with a clean interactive card UI.",
    description:
      "A small frontend app that fetches random advice and displays it in a polished responsive interface.",
    longDescription:
      "Advice App is a lightweight frontend project focused on API integration, component structure, and clean visual design. Users can generate new advice with a click and instantly see updated content in a smooth, modern card layout. This project helped me practice working with APIs, state updates, and building elegant UI details.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    images: [adviceImg],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Rentals App",
    summary: "A platform for renting objects and services between users.",
    description:
      "A marketplace-style web app where users can list items or services for rent, browse listings, and manage rental interactions.",
    longDescription:
      "Rentals App is a full-stack platform built for renting objects and services between users. It includes authentication, listing creation, booking flows, profile management, and dynamic updates across the platform. One of the main challenges in this project was handling real-time interactions and keeping the frontend in sync with backend changes in a clean way.",
    tech: ["React", "FastAPI", "PostgreSQL", "Socket.IO", "Docker"],
    images: [rentalsImg],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "BookStock",
    summary: "Library management system with borrowing and return workflows.",
    description:
      "A library management system that allows users to browse, borrow, and return books with role-based dashboards.",
    longDescription:
      "BookStock is a full-stack library management system focused on real functionality, not just design. It includes role-based access for admins and users, borrowing and return logic, inventory tracking, filtering, and live updates. This project helped me practice backend structure, database relationships, and building features that solve real user needs.",
    tech: ["React", "FastAPI", "PostgreSQL", "Socket.IO", "AWS S3"],
    images: [bookstockImg],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Weather App",
    summary: "Real-time weather forecasting with clean UI and search.",
    description:
      "A responsive weather app that shows current conditions, daily forecasts, and location-based weather details.",
    longDescription:
      "This weather app was built around API integration and user experience. It allows users to search for a location and instantly see current weather data, forecast details, and helpful visual information in a clean layout. The project helped me improve frontend structure, API handling, and responsive design.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    images: [weatherImg],
    liveUrl: "",
    githubUrl: "",
  },
];

export const skillsData = [
  { name: "React", type: "Frontend", icon: "⚛" },
  { name: "JavaScript", type: "Language", icon: "JS" },
  { name: "Python", type: "Language", icon: "🐍" },
  { name: "FastAPI", type: "Backend", icon: "⚡" },
  { name: "PostgreSQL", type: "Database", icon: "🗄" },
  { name: "Docker", type: "DevOps", icon: "🐳" },
  { name: "REST APIs", type: "Backend", icon: "🔗" },
  { name: "Socket.IO", type: "Realtime", icon: "📡" },
  { name: "Git", type: "Tools", icon: "🌿" },
  { name: "CSS", type: "Frontend", icon: "🎨" },
];

export const contactData = {
  intro: "Got a project idea or just want to say hi? I’d love to hear from you.",
  email: "lama.dev@email.com",
  status: "Available for freelance and collaboration",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};