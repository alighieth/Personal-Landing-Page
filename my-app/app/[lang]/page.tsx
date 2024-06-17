import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import IntroBody from "@/components/IntroBody";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full max-w-maxScreen scroll-smooth">
      <IntroBody />
      <AboutSection />
      <Skills />
      <ContactForm />
    </main>
  );
}
