import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Have a question or want to work together? Reach out directly through any of the channels below.</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Reach Out Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center text-center gap-6 h-full"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25">
              <MessageCircle size={36} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-3">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out — I'll get back to you as soon as possible!
              </p>
            </div>
            <a
              href="mailto:jain_tejasvi@icloud.com"
              className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail size={18} /> Email Me Directly
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold font-display text-foreground mb-8">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                    <a href="mailto:jain_tejasvi@icloud.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      jain_tejasvi@icloud.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+919815408330" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      +91-9815408330
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/tejasvi-2005y" target="_blank" rel="noreferrer" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      linkedin.com/in/tejasvi-2005y
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">GitHub</p>
                    <a href="https://github.com/tejasvijain09" target="_blank" rel="noreferrer" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      github.com/tejasvijain09
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-32 border-t border-white/5 pt-8 pb-8 text-center text-muted-foreground">
        <p className="font-display font-medium text-gradient mb-2">Looking forward to hearing from you!</p>
        <p className="text-sm">© {new Date().getFullYear()} Tejasvi Jain. All rights reserved.</p>
      </footer>
    </section>
  );
}
