import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-accent selection:text-white relative">
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
