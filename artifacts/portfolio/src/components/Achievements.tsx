import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🥉",
    title: "2-Star Bronze Badge in Python — HackerRank",
    date: "July 2025",
    description: "Secured a 2-Star Bronze Badge in Python on HackerRank, showcasing strong command over Python language fundamentals and ability to solve competitive programming challenges."
  },
  {
    icon: "⭐",
    title: "4-Star Silver Badge in C++ — HackerRank",
    date: "April 2025",
    description: "Earned a 4-star Silver Badge in C++ on HackerRank, demonstrating solid proficiency in core language concepts, problem-solving skills, and algorithmic thinking."
  },
  {
    icon: "🏆",
    title: "Pantonix Hackathon",
    date: "March 2024",
    description: "Collaborated with a 4-member team to design and develop a Job Search System website, streamlining job listings, applications, and candidate discovery for seamless hiring."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">Achievements</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 flex items-center justify-center text-3xl shadow-inner">
                {item.icon}
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold font-display text-foreground">{item.title}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
