import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const skills = ["Java", "React", "JavaScript", "Node.js", "MySQL"];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
            Welcome to my digital space
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-4 text-foreground">
            Hi, I'm <br />
            <span className="text-gradient">Tejasvi Jain</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6 flex items-center gap-2">
            Full Stack Developer
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-8 bg-primary ml-1"
            />
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I craft elegant solutions through code, turning complex problems into immersive, user-centered digital experiences.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-white/5 hover:border-primary/50 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl font-semibold bg-card text-foreground border border-white/10 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-600 animate-[spin_10s_linear_infinite]">
            <div className="w-full h-full rounded-full bg-background overflow-hidden animate-[spin_10s_linear_infinite_reverse]">
              <img 
                src={`${import.meta.env.BASE_URL}images/tejasvi-profile.png`} 
                alt="Tejasvi Jain" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
