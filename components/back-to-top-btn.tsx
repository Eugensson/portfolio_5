"use client";

import { useEffect, useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";

export const BackToTopBtn = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {show && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-24 right-24 size-12 flex items-center justify-center bg-accent hover:bg-accent-hover transition-colors duration-300 rounded-full cursor-pointer"
        >
          <IoChevronUpOutline size={24} className="text-white" />
        </button>
      )}
    </>
  );
};
