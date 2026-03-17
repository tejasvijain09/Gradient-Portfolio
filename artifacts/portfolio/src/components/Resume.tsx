import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    duration: "Since August 2022",
    location: "Punjab, India",
    score: "CGPA: 8.16*"
  },
  {
    institution: "Intermediate (12th)",
    degree: "High School Education",
    duration: "April 2021 - March 2022",
    location: "India",
    score: "Percentage: 90.4%"
  },
  {
    institution: "Matriculation (10th)",
    degree: "Secondary Education",
    duration: "April 2019 - March 2020",
    location: "India",
    score: "Percentage: 93.3%"
  }
];

export function Resume() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon!",
    });
  };

  return (
    <section id="resume" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display mb-4 text-gradient">My Resume</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-fit"
          >
            <Download size={18} /> Download Resume
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-primary/30 transition-colors">
                    <span className="text-primary font-semibold text-sm mb-1 block">{item.duration}</span>
                    <h4 className="text-lg font-bold font-display text-foreground">{item.degree}</h4>
                    <span className="text-muted-foreground text-sm font-medium mb-3 block">{item.institution}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.location} • <strong className="text-foreground">{item.score}</strong>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground">Experience</h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border-l-4 border-l-accent"
            >
              <span className="text-accent font-semibold text-sm mb-1 block">2024</span>
              <h4 className="text-xl font-bold font-display text-foreground mb-1">Full Stack Developer Intern</h4>
              <p className="text-muted-foreground mb-4">Tech Company</p>
              <p className="text-muted-foreground leading-relaxed">
                Worked actively on MERN stack projects. Responsibilities included building responsive web applications, developing robust RESTful APIs, and collaborating with senior engineers to optimize database queries and frontend state management.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
