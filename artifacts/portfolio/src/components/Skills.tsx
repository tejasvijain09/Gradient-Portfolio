import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allSkills = [
  { name: "Java", icon: "☕", progress: 85, category: "Programming" },
  { name: "C++", icon: "⚙️", progress: 78, category: "Programming" },
  { name: "JavaScript", icon: "🟨", progress: 88, category: "Programming" },
  { name: "HTML", icon: "📄", progress: 92, category: "Frontend" },
  { name: "CSS", icon: "🎨", progress: 85, category: "Frontend" },
  { name: "React.js", icon: "⚛️", progress: 86, category: "Frontend" },
  { name: "Spring Boot", icon: "🌱", progress: 78, category: "Backend" },
  { name: "Node.js", icon: "🟢", progress: 84, category: "Backend" },
  { name: "Express", icon: "🚀", progress: 82, category: "Backend" },
  { name: "REST APIs", icon: "🔗", progress: 84, category: "Backend" },
  { name: "JWT", icon: "🔐", progress: 78, category: "Backend" },
  { name: "MySQL", icon: "🐬", progress: 82, category: "Database" },
  { name: "MongoDB", icon: "🍃", progress: 78, category: "Database" },
  { name: "JDBC", icon: "🔌", progress: 80, category: "Database" },
  { name: "Hibernate", icon: "🗃️", progress: 70, category: "Database" },
  { name: "Git", icon: "🔀", progress: 85, category: "Tools" },
  { name: "GitHub", icon: "🐙", progress: 85, category: "Tools" },
  { name: "Linux", icon: "🐧", progress: 70, category: "Tools" },
  { name: "Data Structures & Algorithms", icon: "🧩", progress: 80, category: "Core" },
  { name: "Problem-Solving", icon: "🧠", progress: 85, category: "Core" },
];

const categories = ["All Skills", "Programming", "Frontend", "Backend", "Database", "Tools", "Core"];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("All Skills");

  const filteredSkills = allSkills.filter(skill => 
    activeFilter === "All Skills" ? true : skill.category === activeFilter
  );

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold font-display mb-4 text-gradient">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">A showcase of technologies I've mastered on my journey as a developer.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="font-bold font-display text-lg text-foreground">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-semibold text-primary">{skill.progress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-[2px]" />
                  </motion.div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4 text-right uppercase tracking-wider">{skill.category}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
