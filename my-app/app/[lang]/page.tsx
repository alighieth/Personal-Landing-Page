import IntroBody from "@/components/IntroBody";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full">
      <IntroBody />
      <section id="contact" className="w-full h-[20vh]"></section>
    </main>
  );
}
