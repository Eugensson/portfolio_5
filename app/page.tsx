import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Brands } from "@/components/brands";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Brands />
      <About />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
