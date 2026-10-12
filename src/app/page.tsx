import About from "@/components/About";
import Apps from "@/components/Apps";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Personal from "@/components/Personal";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Personal />
        <Apps />
        <Services />
      </main>
      <Contact />
    </>
  );
}
