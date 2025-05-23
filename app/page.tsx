import About from "@/components/widgets/About";
import Contact from "@/components/widgets/Contact";
import Feature from "@/components/widgets/Feature";
import Hero from "@/components/widgets/Hero";
import Programme from "@/components/widgets/Programme";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <Programme />
      <Contact />
    </main>
  );
}
