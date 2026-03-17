import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "ChatGPT, Generative AI & LLM",
    platform: "Infosys Springboard",
    date: "Aug '25",
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "GitHub Mastery",
    platform: "GeeksForGeeks",
    date: "Jun '25",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Hardware and Operating Systems",
    platform: "Coursera — IBM",
    date: "Aug '24",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Entrepreneurship Learning Pathway",
    platform: "LinkedIn Learning",
    date: "Oct '23",
    color: "from-purple-500 to-violet-500"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">Certifications</h2>
          <p className="text-muted-foreground text-lg">Professional credentials that validate my technical expertise and continuous learning journey.</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              {/* Gradient Header */}
              <div className={`h-36 bg-gradient-to-br ${cert.color} flex items-center justify-center relative`}>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                  <Award size={30} className="text-white" />
                </div>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)" }}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold font-display text-foreground mb-3 leading-snug flex-grow">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                    {cert.platform}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} className="text-primary" /> {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
