import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
