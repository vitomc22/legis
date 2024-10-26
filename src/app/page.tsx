// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import CarouselDefault from "./carousel";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselDefault />
      <Feature />
      <MobileConvenience />
      <Testimonials />
      <Footer />
    </>
  );
}
