import Image from "next/image";

import aboutImg from "@/public/assets/about.webp";

export const About = () => {
  return (
    <section className="section bg-secondary " id="about">
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-24">
        <Image
          src={aboutImg}
          alt="About"
          className="h-full w-141.5 md:mx-auto xl:mx-0 rounded-2xl object-cover"
        />
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
          <div className="flex flex-col">
            <div className="lg:bg-about lg:bg-left lg:bg-contain lg:bg-no-repeat">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Jane Wilson
              </h2>
            </div>
            <p className="mb-4 text-accent">Freelance Web Developer</p>
            <hr className="mb-4 opacity-5" />
            <p className="mb-4 text-sm md:text-base">
              Jane Wilson is a freelance web developer creating responsive,
              modern, and user-friendly websites. Skilled in JavaScript, React,
              and Next.js, she delivers high-quality solutions tailored to
              clients.
            </p>
            <p className="mb-8 text-sm md:text-base">
              Passionate about clean code, performance optimization, and
              seamless user experiences, Jane helps businesses and individuals
              build websites that drive engagement and growth.
            </p>
          </div>
          <button type="button" className="btn btn-md">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};
