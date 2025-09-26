import Image from "next/image";

import womanImg from "@/public/assets/banner-woman2.webp";

export const Hero = () => {
  return (
    <section
      className="py-32 lg:py-0 lg:h-screen flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat overflow-hidden"
      id="home"
    >
      <div className="container h-full">
        <div className="h-full pt-8 flex items-center">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="mb-6 text-lg text-accent">Hey, I&apos;m Jane 👋</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[44px] md:leading-tight lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-120 text-lg text-center lg:text-left">
              I’m a front-end developer and UI/UX designer creating responsive,
              user-friendly websites that blend clean design with seamless
              functionality.
            </p>
            <button type="button" className="btn btn-md md:btn-lg">
              Work with me
            </button>
          </div>
          <div className="hidden h-full lg:flex flex-1 items-end justify-end">
            <Image src={womanImg} alt="Avatar of Jane Wilson" />
          </div>
        </div>
      </div>
    </section>
  );
};
