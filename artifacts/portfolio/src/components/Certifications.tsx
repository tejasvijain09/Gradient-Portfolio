import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Web Development",
    platform: "Coursera",
    date: "May 2024",
    image: "cert-bg.png"
  },
  {
    title: "Data Structures & Algorithms",
    platform: "GeeksForGeeks",
    date: "July 2024",
    image: "cert-bg.png"
  },
  {
    title: "React.js Complete Course",
    platform: "Udemy",
    date: "March 2024",
    image: "cert-bg.png"
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
          <h2 className="text-4xl font-bold font-display mb-4 text-gradient">Certifications</h2>
          <p className="text-muted-foreground text-lg">Professional credentials that validate my technical expertise and continuous learning journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-40 relative overflow-hidden bg-secondary">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${cert.image}`} 
                  alt="Certificate Background" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-primary shadow-lg shadow-black/20">
                    <Award size={32} />
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold font-display text-foreground mb-2 leading-snug">{cert.title}</h3>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="px-3 py-1 rounded-md bg-secondary text-sm font-medium text-muted-foreground border border-white/5">
                    {cert.platform}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={14} className="text-primary" /> {cert.date}
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
