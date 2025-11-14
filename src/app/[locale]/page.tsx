import Hero from "@/components/home/hero";
import Video from "@/components/home/video";
import Partners from "@/components/home/partners";
import Services from "@/components/home/services";
import About from "@/components/home/about";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import CTASection from "@/components/home/cta-section";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Partners />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}

