import Image from "next/image";

import { skillsList } from "@/lib/data";

export const Skills = () => {
  return (
    <section className="py-12 bg-tertiary">
      <ul className="container mx-auto grid grid-cols-8 md:grid-flow-row">
        {skillsList.map(({ image, label }) => (
          <li key={label} className="flex items-center justify-center">
            <Image src={image} alt={label} />
          </li>
        ))}
      </ul>
    </section>
  );
};
