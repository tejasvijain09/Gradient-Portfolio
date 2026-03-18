import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PdfPreview } from "./PdfPreview";

const certifications = [
  {
    title: "ChatGPT, Generative AI & LLM",
    platform: "Infosys Springboard",
    date: "Aug 2025",
    description: "Comprehensive course on ChatGPT-4 prompt engineering, generative AI fundamentals, and large language model applications.",
    platformColor: "bg-orange-500",
    pdf: `${import.meta.env.BASE_URL}certs/chatgpt-ai.pdf`
  },
  {
    title: "GitHub Mastery: From Beginner to Advanced",
    platform: "GeeksForGeeks",
    date: "Jun 2025",
    description: "6-week in-depth course covering Git workflows, branching strategies, collaboration, CI/CD, and advanced GitHub features.",
    platformColor: "bg-green-600",
    pdf: `${import.meta.env.BASE_URL}certs/github-mastery.pdf`
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    platform: "Coursera — IBM",
    date: "Aug 2024",
    description: "IBM-authorized course covering computer hardware components, operating system fundamentals, and system administration basics.",
    platformColor: "bg-blue-600",
    pdf: `${import.meta.env.BASE_URL}certs/hardware-os.pdf`
  },
  {
    title: "Entrepreneurship Learning Pathway",
    platform: "LinkedIn Learning",
    date: "Oct 2023",
    description: "Learning path covering small business management, business planning, and entrepreneurship strategies over 6 hours 55 minutes.",
    platformColor: "bg-[#0077b5]",
    pdf: `${import.meta.env.BASE_URL}certs/entrepreneurship.pdf`
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
            <motion.a
              key={cert.title}
              href={cert.pdf}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer border border-white/5 hover:border-primary/30"
            >
              {/* PDF Preview Area */}
              <div className="relative overflow-hidden h-52">
                <PdfPreview url={cert.pdf} className="h-full w-full" />

                {/* Platform badge top-left */}
                <span className={`absolute top-3 left-3 ${cert.platformColor} text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md z-10`}>
                  {cert.platform.split("—")[0].trim().split(" ")[0]}
                </span>

                {/* Date badge bottom-right */}
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-md z-10">
                  {cert.date}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20">
                  <ExternalLink size={20} className="text-white" />
                  <span className="text-white font-semibold text-sm">Open Certificate</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold font-display text-gradient mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed flex-grow line-clamp-3">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="text-primary text-xs font-medium">{cert.platform}</span>
                  <span className="text-muted-foreground text-xs">{cert.date}</span>
                </div>
              </div>

              {/* Footer hint */}
              <div className="px-5 py-2.5 border-t border-white/5 text-center">
                <span className="text-muted-foreground text-xs">Hover to view details</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
