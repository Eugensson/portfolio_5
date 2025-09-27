import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Brands } from "@/components/brands";
import { Skills } from "@/components/skills";
import { Portfolio } from "@/components/portfolio";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
