"use client";

import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { MobileNav } from "@/components/mobile-nav";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [bg, setBg] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-10 w-full flex items-center transition-all duration-300 text-white",
        bg ? "h-20 bg-tertiary" : "h-24 bg-transparent"
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <Logo />
        <Nav />
        <MobileNav />
        <Socials />
      </div>
    </header>
  );
};
