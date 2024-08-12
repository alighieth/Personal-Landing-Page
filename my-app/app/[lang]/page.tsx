import AboutSection from "@/components/About";
import ContactForm from "@/components/ContactForm";
import IntroBody from "@/components/IntroBody";
import Values from "@/components/Values";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full max-w-maxScreen scroll-smooth">
      <IntroBody />
      <AboutSection />
      <Skills />
      <Values />
      <ContactForm />
    </main>
  );
}
