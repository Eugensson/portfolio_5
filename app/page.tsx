import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Brands } from "@/components/brands";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { BackToTopBtn } from "@/components/back-to-top-btn";

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
      <Footer />
      <BackToTopBtn />
    </main>
  );
};

export default Home;
