import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import IntroBody from "@/components/IntroBody";
import Values from "@/components/Values";
import Skills from "@/components/Skills";
import FooterPropganda from "@/components/FooterPropganda";

export default function Home() {
  return (
    <main className="w-full max-w-maxScreen scroll-smooth">
      <IntroBody />
      <AboutSection />
      <Skills />
      <Values />
      <ContactForm />
      <FooterPropganda />
    </main>
  );
}
