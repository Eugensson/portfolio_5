import { Variants, Transition } from "framer-motion";

export const circleVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 180,
    transition: { type: "spring", stiffness: 160, damping: 60 } as Transition,
  },
};

export const ulVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.1 } as Transition },
};
