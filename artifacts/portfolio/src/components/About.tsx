import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code, BookOpen, Telescope } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-display mb-4 text-gradient">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Facts */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                Quick Facts
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm">India</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Education</p>
                    <p className="text-sm">B.Tech CSE (Pursuing)</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Experience</p>
                    <p className="text-sm">Internship</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold font-display mb-6">When I'm Not Coding</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/5 text-sm font-medium">
                  <Code size={16} className="text-primary" /> Coding
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/5 text-sm font-medium">
                  <BookOpen size={16} className="text-primary" /> Reading
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/5 text-sm font-medium">
                  <Telescope size={16} className="text-primary" /> Tech Exploration
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-display mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Tejasvi Jain, a passionate full-stack developer with a deep love for transforming complex problems into elegant digital solutions. My journey in tech began with curiosity and has evolved into focused expertise in building responsive, user-centered applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I specialize in the modern web stack, utilizing tools like React, Node.js, and advanced cloud technologies to create robust architectures that scale.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-display mb-4 text-accent">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating technology that's not just functional but meaningful. Every line of code I write aims to solve real problems and enhance user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I value clean architecture, collaborative development, and continuous learning as the foundational pillars of great software. Building software is a craft, and I treat every project with the meticulous attention it deserves.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
