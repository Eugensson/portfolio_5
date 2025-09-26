"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export const Logo = () => {
  return (
    <ScrollLink
      smooth
      to="home"
      duration={500}
      delay={50}
      className="cursor-pointer"
    >
      <Image src="/assets/logo.svg" width={150} height={30} alt="Logo" />
    </ScrollLink>
  );
};
