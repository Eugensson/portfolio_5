"use client";

import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "@/lib/data";

export const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-x-8">
        {navLinks.map(({ path, name }) => (
          <li
            key={name}
            className="text-white hover:text-accent cursor-pointer transition-colors duration-300"
          >
            <ScrollLink
              spy
              smooth
              to={path}
              duration={500}
              offset={-70}
              className="capitalize"
              activeClass="active"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
