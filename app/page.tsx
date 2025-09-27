import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Brands } from "@/components/brands";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
