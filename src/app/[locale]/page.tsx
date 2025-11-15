import Hero from "@/components/home/hero";
import Video from "@/components/home/video";
import Partners from "@/components/home/partners";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Video />
      <Partners />
      <Services />
      <Projects />
      <Testimonials />
    </div>
  );
}

