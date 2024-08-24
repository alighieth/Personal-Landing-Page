import AboutSection from "@/components/About";
import ContactForm from "@/components/ContactForm";
import IntroBody from "@/components/IntroBody";
import Values from "@/components/Values";
import Skills from "@/components/Skills";

// TODO images for projects
// TODO bug with progress bar on mobile
export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <IntroBody />
      <AboutSection />
      <Skills />
      <Values />
      <ContactForm />
    </main>
  );
}
