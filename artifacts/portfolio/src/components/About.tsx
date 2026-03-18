import { motion } from "framer-motion";
import { Route, Lightbulb } from "lucide-react";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaMusic, FaLaptop, FaMicrochip } from "react-icons/fa";

const quickFacts = [
  {
    icon: <FaMapMarkerAlt size={20} />,
    color: "from-pink-500 to-rose-500",
    label: "Location",
    value: "India",
  },
  {
    icon: <FaGraduationCap size={20} />,
    color: "from-blue-500 to-cyan-500",
    label: "Education",
    value: "Pursuing B.Tech in Computer Science",
  },
  {
    icon: <FaBriefcase size={20} />,
    color: "from-orange-500 to-amber-500",
    label: "Experience",
    value: "Internship",
  },
];

const interests = [
  {
    icon: <FaMusic size={20} />,
    color: "from-pink-500 to-rose-500",
    label: "Listening to Music",
  },
  {
    icon: <FaLaptop size={20} />,
    color: "from-blue-500 to-indigo-500",
    label: "Web Surfing",
  },
  {
    icon: <FaMicrochip size={20} />,
    color: "from-purple-500 to-violet-500",
    label: "Tech Exploration",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Facts Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold font-display mb-5 text-foreground">Quick Facts</h3>
              <ul className="space-y-3">
                {quickFacts.map((fact) => (
                  <li key={fact.label} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${fact.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      {fact.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{fact.label}</p>
                      <p className="text-sm font-medium text-foreground">{fact.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold font-display mb-5 text-foreground">When I'm Not Coding</h3>
              <ul className="space-y-3">
                {interests.map((item) => (
                  <li key={item.label} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/40 border border-white/5 hover:border-primary/30 transition-colors">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* My Journey Card */}
            <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <Route size={18} />
                </div>
                <h3 className="text-2xl font-bold font-display text-primary">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm <span className="text-primary font-semibold">Tejasvi Jain</span>, a B.Tech Computer Science student at LPU with hands-on experience in full-stack development through real-world internships and self-driven projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I chose Full Stack Development because I love owning the entire product — from crafting pixel-perfect UIs to designing robust backend APIs — giving me the ability to bring complete ideas to life independently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to grow as a software engineer who builds scalable, impactful web applications, and eventually contribute to products that solve real-world problems at scale.
              </p>
            </div>

            {/* My Approach Card */}
            <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <Lightbulb size={18} />
                </div>
                <h3 className="text-2xl font-bold font-display text-accent">My Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating technology that's not just functional but meaningful. Every line of code I write aims to solve real problems and enhance user experiences. I value clean architecture, collaborative development, and continuous learning as the foundations of great software.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
