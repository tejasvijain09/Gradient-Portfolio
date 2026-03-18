import { motion } from "framer-motion";
import { Route, Lightbulb } from "lucide-react";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaMusic, FaLaptop, FaMicrochip } from "react-icons/fa";

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
            {/* Snapshot — 3 mini stat cards */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-5">— At a Glance</p>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/15">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Location</p>
                    <p className="text-sm font-semibold text-foreground">Punjab, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/15">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <FaGraduationCap size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Education</p>
                    <p className="text-sm font-semibold text-foreground">B.Tech CS @ LPU</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/15">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <FaBriefcase size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">CGPA</p>
                    <p className="text-sm font-semibold text-foreground">8.45 / 10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Off the Clock */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-5">— Off the Clock</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMusic size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Listening to Music</p>
                    <p className="text-xs text-muted-foreground mt-0.5">My go-to reset — helps me focus and unwind between long coding sessions.</p>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaLaptop size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Web Surfing</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Always browsing — whether it's dev blogs, design inspo, or the latest in tech.</p>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMicrochip size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Tech Exploration</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Tinkering with new tools and frameworks just to see what's possible.</p>
                  </div>
                </div>
              </div>
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
