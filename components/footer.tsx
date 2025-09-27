import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <section className="py-12 bg-tertiary">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <Socials />
          <Logo />
          <p>&copy; 2025 Jane Wilson. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
