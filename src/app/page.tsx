import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";
import Work from "@/components/Work";
import Writing from "@/components/Writing";

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
        <Work />
        <Services />
        <Writing />
      </main>
      <Contact />
    </>
  );
}
