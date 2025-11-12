import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";
import Services from "@/components/home/services";
import About from "@/components/home/about";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}

