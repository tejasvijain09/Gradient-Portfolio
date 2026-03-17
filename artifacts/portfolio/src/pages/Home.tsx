import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
