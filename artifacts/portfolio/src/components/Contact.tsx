import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactInput) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive"
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold font-display mb-4 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Have a question or want to work together? Fill out the form below or reach out directly.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input
                  id="name"
                  {...form.register("name")}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${form.formState.errors.name ? 'border-destructive focus:ring-destructive/20' : 'border-white/10 focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm mt-1.5">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${form.formState.errors.email ? 'border-destructive focus:ring-destructive/20' : 'border-white/10 focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-1.5">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <textarea
                  id="message"
                  {...form.register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${form.formState.errors.message ? 'border-destructive focus:ring-destructive/20' : 'border-white/10 focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200 resize-none`}
                  placeholder="Hello, I'd like to talk about..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1.5">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
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
