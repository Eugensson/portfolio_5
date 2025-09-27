import Link from "next/link";
import Image from "next/image";

import { brandList } from "@/lib/data";

export const Brands = () => {
  return (
    <section className="min-h-40 py-12 flex items-center bg-tertiary">
      <ul className="container flex flex-wrap items-center justify-evenly md:justify-between">
        {brandList.map(({ img, label, href }) => (
          <li key={label} className="flex items-center">
            <Link
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Link to ${label}`}
            >
              <Image src={img} alt={label} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
