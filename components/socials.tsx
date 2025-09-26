import Link from "next/link";

import { socialList } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="hidden lg:flex items-center gap-x-6">
      {socialList.map(({ icon: Icon, label, href }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors duration-300"
          >
            <Icon size={20} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
