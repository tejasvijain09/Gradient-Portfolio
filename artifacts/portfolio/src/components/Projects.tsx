import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Forever E-commerce Website",
    description: "A full-stack MERN e-commerce application with user authentication, product listing, shopping cart, and order management. Built with React frontend, Node.js/Express backend, and MongoDB database.",
    image: "project-ecommerce.png",
    categories: ["Full Stack", "MERN"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  // Adding a frontend mock project to populate the filters nicely
  {
    id: 2,
    title: "Portfolio Template",
    description: "A modern, highly responsive portfolio template built with React, Tailwind CSS, and Framer Motion. Features dark mode and premium glassmorphism aesthetics.",
    image: "project-ecommerce.png", // reusing placeholder for brevity
    categories: ["Frontend"],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "#",
    sourceUrl: "#"
  }
];

const filters = ["All Projects", "Full Stack", "Frontend", "MERN"];

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
          <h2 className="text-4xl font-bold font-display mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">A showcase of my work spanning web applications and responsive interfaces.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:border-primary/40 transition-colors duration-500"
              >
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {project.categories.map(cat => (
                      <span key={cat} className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-xs font-semibold text-foreground border border-white/10">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a 
                      href={project.sourceUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors border border-white/5"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github size={18} /> Source Code
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
