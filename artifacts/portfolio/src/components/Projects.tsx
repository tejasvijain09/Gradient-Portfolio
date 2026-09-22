import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "A full-stack MERN e-commerce application built during internship at MyVirtualTeams. Features user authentication with JWT, product listings, shopping cart, and order management. Follows RESTful API architecture with secure client-server communication.",
    image: "forever-ecommerce.png",
    imagePosition: "object-top",
    imageStyle: {},
    categories: ["Full Stack", "MERN"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://foreverbuy.in/",
    sourceUrl: "https://github.com/tejasvijain09/Forever-"
  },
  {
    id: 2,
    title: "Intelligent CPU Scheduler System",
    description: "An intelligent simulation tool to evaluate and compare 4 CPU scheduling algorithms (FCFS, Round Robin, SJF, Priority). Implements performance visualization using Gantt charts and metric plots, analysing waiting time, turnaround time, and CPU utilization across 10–20 processes.",
    image: "cpu-scheduler.png",
    imagePosition: "object-top",
    imageStyle: {},
    categories: ["Systems", "C++"],
    tech: ["C++", "Matplotlib", "Algorithm Design"],
    liveUrl: "https://tejasvijain09.github.io/Intelligent-CPU-Scheduler-Simulator/",
    sourceUrl: "https://github.com/tejasvijain09/Intelligent-CPU-Scheduler-Simulator"
  },
  {
    id: 3,
    title: "Art Critique Bot",
    description: "An AI-powered system that analyses and critiques digital artworks, generating structured feedback across 3–5 artistic dimensions (composition, colour, style, creativity). Built with GPT-4 and Streamlit UI, deployed via Docker for multi-user cloud access.",
    image: "art-critique-bot-v2.png",
    imagePosition: "object-top",
    imageStyle: { filter: "brightness(0.85) contrast(1.1) saturate(1.2)" },
    categories: ["AI/ML", "Full Stack"],
    tech: ["GPT-4", "LLM", "Streamlit", "Docker", "Python"],
    liveUrl: "https://art-critique-bot-iubu3ncjq9mar7njrxrcx7.streamlit.app",
    sourceUrl: "https://github.com/tejasvijain09/art-critique-bot"
  },
  {
    id: 4,
    title: "Car Rental System",
    description: "A backend-driven car rental system for managing vehicle listings, bookings, and customer records. Includes RESTful services, JDBC and MySQL data operations, availability tracking, rental booking, and customer management with a scalable modular design.",
    image: "car-rental-system.png",
    imagePosition: "object-center",
    imageStyle: { objectFit: "contain" as const, backgroundColor: "#ffffff" },
    categories: ["Full Stack", "Java"],
    tech: ["Java", "Spring Boot", "JDBC", "MySQL"],
    liveUrl: "#",
    sourceUrl: "https://github.com/tejasvijain09/car-rental-system"
  }
];

const filters = ["All Projects", "Full Stack", "MERN", "AI/ML", "Systems", "C++"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = allProjects.filter(project =>
    activeFilter === "All Projects" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">A showcase of my work spanning web applications, systems programming, and AI.</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col hover:border-primary/40 transition-colors duration-500"
              >
                <div className="relative h-52 overflow-hidden bg-secondary">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/${project.image}`}
                    alt={project.title}
                    className={`w-full h-full object-cover ${project.imagePosition} group-hover:scale-110 transition-transform duration-700`}
                    style={project.imageStyle}
                  />
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.categories.map(cat => (
                      <span key={cat} className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-xs font-semibold text-foreground border border-white/10">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
                      onClick={project.liveUrl === "#" ? (e) => e.preventDefault() : undefined}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors border border-white/5 text-sm"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
