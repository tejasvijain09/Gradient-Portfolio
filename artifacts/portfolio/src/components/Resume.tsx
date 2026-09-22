import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, Phone, Linkedin, Github } from "lucide-react";

const tabs = ["Education", "Training", "Projects", "Certificates", "Achievements"];

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    duration: "Aug '23 – Present",
    score: "CGPA: 8.55",
  },
  {
    institution: "DM Public Senior Secondary School",
    location: "Bathinda, Punjab",
    degree: "Intermediate",
    duration: "Apr '22 – May '23",
    score: "Percentage: 63.6%",
  },
  {
    institution: "KV SLIET Longowal",
    location: "Sangrur, Punjab",
    degree: "Matriculation",
    duration: "Apr '20 – May '21",
    score: "Percentage: 94%",
  },
];

const trainingData = [
  {
    category: "INTERNSHIP",
    title: "E-Commerce Web Application using MERN Stack",
    org: "MyVirtualTeams (IT Services Company)",
    duration: "Jun '23 – Jul '25",
    points: [
      "Acquired comprehensive understanding of full-stack development by mastering the MERN stack and applying end-to-end concepts in a real-world e-commerce project.",
      "Strengthened API integration and authentication expertise by learning RESTful architecture, JWT-based security, and secure client-server communication.",
      "Enhanced problem-solving and debugging capabilities by analysing deployment errors, optimizing code structure, and implementing clean coding practices.",
    ],
    tech: "MongoDB, Express, React, Node.js, JWT",
  },
];

const projectsData = [
  {
    category: "PROJECT",
    title: "Car Rental System",
    org: "Java, Spring Boot, JDBC, MySQL",
    duration: "Nov '25",
    points: [
      "Developed a backend-driven Car Rental System to manage vehicle listings, bookings, and customer records, improving overall system efficiency.",
      "Built RESTful services using Spring Boot for user requests and business logic processing.",
      "Implemented database operations using JDBC and MySQL for efficient data storage, retrieval, and transaction management.",
      "Designed car availability tracking, rental booking, and customer management features with scalable, maintainable OOP-based structure.",
    ],
    tech: "Java, Spring Boot, JDBC, MySQL",
    sourceUrl: "https://github.com/tejasvijain09/car-rental-system",
  },
  {
    category: "PROJECT",
    title: "Art Critique Bot",
    org: "GPT-4, LLM, Streamlit, Docker",
    duration: "Oct '24",
    points: [
      "Designed an AI-powered system to analyse and critique digital artworks, generating structured feedback across 3–5 artistic dimensions (composition, colour, style, creativity).",
      "Built the application using GPT-4 with Streamlit UI, and deployed via Docker to support multi-user access in a cloud environment.",
      "Enabled automated critique generation for multiple artwork styles, reducing manual review effort and improving feedback consistency by standardizing output format.",
    ],
    tech: "GPT-4, LLM, Streamlit, Docker",
    sourceUrl: "https://github.com/tejasvijain09/art-critique-bot",
  },
];

const certificatesData = [
  { title: "ChatGPT, Generative AI & LLM", platform: "Infosys Springboard", date: "Aug '25" },
  { title: "GitHub Mastery", platform: "GeeksForGeeks", date: "Jun '25" },
  { title: "Hardware and Operating Systems", platform: "Coursera IBM", date: "Aug '24" },
  { title: "Entrepreneurship Learning Pathway", platform: "LinkedIn Learning", date: "Oct '23" },
];

const achievementsData = [
  {
    icon: "🏆",
    title: "Pantonix Hackathon",
    description: "Collaborated with a 4-member team to design and develop a Job Search System website, streamlining job listings, applications, and candidate discovery.",
  },
  {
    icon: "⭐",
    title: "4-Star Silver Badge in C++ — HackerRank",
    description: "Earned a 4-star Silver Badge in C++ on HackerRank, demonstrating solid proficiency in core language concepts and effective problem-solving skills.",
  },
  {
    icon: "💻",
    title: "500+ Coding Problems Solved — GeeksForGeeks & LeetCode",
    description: "Solved more than 500 coding problems across platforms including GeeksForGeeks and LeetCode, strengthening data structures, algorithms, and problem-solving skills.",
  },
];

function CardEntry({ category, title, org, duration, points, tech, sourceUrl }: {
  category: string; title: string; org: string; duration: string; points: string[]; tech: string; sourceUrl?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors"
    >
      <p className="text-xs font-bold tracking-widest text-primary/70 mb-2 uppercase">{category}</p>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <h4 className="text-lg font-bold font-display text-foreground">{title}</h4>
        <span className="text-sm font-semibold text-primary shrink-0">{duration}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{org}</p>
      <ul className="space-y-2 mb-4">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <span className="text-primary mt-1 shrink-0">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground">
        <span className="text-foreground font-semibold">Tech:</span> {tech}
      </p>
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <Github size={15} /> View Repository
        </a>
      )}
    </motion.div>
  );
}

export function Resume() {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <section id="resume" className="py-24 bg-card/30 relative">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Contact Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: <Mail size={14} />, label: "jain_tejasvi@icloud.com" },
            { icon: <Phone size={14} />, label: "+91 - 9815408330" },
            { icon: <Linkedin size={14} />, label: "LinkedIn", href: "https://linkedin.com/in/tejasvi-2005y/" },
            { icon: <Github size={14} />, label: "GitHub", href: "https://github.com/tejasvijain09" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href ?? "#"}
              target={item.href ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-white/10 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <span className="text-primary">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {/* Education */}
            {activeTab === "Education" && educationData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h4 className="text-lg font-bold font-display text-primary">{item.institution}</h4>
                  <span className="text-sm font-semibold text-primary/80 shrink-0">{item.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                <p className="text-sm font-semibold text-foreground mb-1">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.score}</p>
              </motion.div>
            ))}

            {/* Training */}
            {activeTab === "Training" && trainingData.map((item, i) => (
              <CardEntry key={i} {...item} />
            ))}

            {/* Projects */}
            {activeTab === "Projects" && projectsData.map((item, i) => (
              <CardEntry key={i} {...item} />
            ))}

            {/* Certificates */}
            {activeTab === "Certificates" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {certificatesData.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="glass-card rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold font-display text-foreground leading-snug">{cert.title}</h4>
                      <span className="text-xs font-semibold text-primary shrink-0 mt-0.5">{cert.date}</span>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                      {cert.platform}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {activeTab === "Achievements" && achievementsData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold font-display text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href={`${import.meta.env.BASE_URL}certs/SpecializedCV_TejasviJain_2026.pdf`}
            download="Tejasvi-Jain-Resume-2026.pdf"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
