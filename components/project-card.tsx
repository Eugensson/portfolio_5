import Image from "next/image";

import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({
  project: { image, name, category },
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col items-center text-center">
      <div className="mb-8">
        <Image src={image} alt={name} className="rounded-2xl" />
      </div>
      <p className="text-sm text-accent capitalize mb-3">{category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{name}</h3>
    </article>
  );
};
