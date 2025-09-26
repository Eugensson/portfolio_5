"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

import { Socials } from "@/components/socials";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { ulVariants, circleVariants } from "@/lib/variants";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="lg:hidden relative">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <HiMenuAlt3 size={32} />
      </button>
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="fixed top-0 right-0 size-4 rounded-full bg-accent"
      />
      <motion.div
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={cn(
          "fixed top-0 bottom-0 w-full flex items-center justify-center transition-all duration-300 overflow-hidden",
          isOpen ? "right-0" : "-right-full"
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-2 cursor-pointer text-white"
        >
          <IoCloseOutline size={44} />
        </button>
        <ul className="flex flex-col items-center justify-center gap-y-8">
          {navLinks.map(({ path, name }) => (
            <li
              key={name}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <ScrollLink
                spy
                smooth
                to={path}
                duration={500}
                offset={-70}
                className="text-2xl capitalize"
                activeClass="text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <Socials />
      </motion.div>
    </nav>
  );
};
