import profile from "../images/profile.jpeg";
import rentalsImg from "../images/projects/rentals.png";
import bookstockImg from "../images/projects/bookstock.png";
import weatherImg from "../images/projects/weather.png";

export const aboutData = {
  name: "Lama",
  role: "Full Stack Developer · 19 years old",
  bio: "I craft clean, performant web experiences from front to back. Passionate about building things that are both beautiful and functional. I enjoy building projects that combine strong logic, clean structure, and modern user experience.",
  tags: ["React", "JavaScript", "Python", "PostgreSQL", "Docker"],
  profileImage: profile,
};

export const projectsData = [
  {
    id: 1,
    title: "Rentals App",
    description:
      "A platform for renting objects and services between users. Includes authentication, CRUD operations, and real-time updates.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: rentalsImg,
    github: "https://github.com/yourusername/rentals-app",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "BookStock",
    description:
      "A library management system for borrowing and returning books with inventory tracking, user dashboards, and structured backend logic.",
    tech: ["Python", "PostgreSQL", "APIs"],
    image: bookstockImg,
    github: "https://github.com/yourusername/bookstock",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A real-time weather forecasting app using external APIs with location search, current weather, and daily forecasts.",
    tech: ["React", "API", "JavaScript"],
    image: weatherImg,
    github: "https://github.com/yourusername/weather-app",
    live: "",
    featured: false,
  },
];

export const skillsData = [
  { name: "React", type: "Frontend", icon: "⚛️" },
  { name: "JavaScript", type: "Language", icon: "🟨" },
  { name: "Python", type: "Language", icon: "🐍" },
  { name: "PostgreSQL", type: "Database", icon: "🐘" },
  { name: "Docker", type: "DevOps", icon: "🐳" },
  { name: "REST APIs", type: "Backend", icon: "🔗" },
  { name: "Git", type: "Tools", icon: "🌿" },
  { name: "CSS", type: "Frontend", icon: "🎨" },
];

export const contactData = {
  intro: "Got a project idea or just want to say hi? I'd love to hear from you.",
  email: "lama.dev@email.com",
  status: "Available for freelance",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};