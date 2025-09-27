"use client";

import { useEffect, useState } from "react";

import { ProjectCard } from "@/components/project-card";

import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { projectsNav, projectList } from "@/lib/data";

export const ProjectList = () => {
  const [active, setActive] = useState(0);
  const [item, setItem] = useState(projectsNav[0]);
  const [projects, setProjects] = useState(projectList);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectList);
    } else {
      setProjects(
        projectList.filter(
          (project) =>
            project.category.toLowerCase().trim() ===
            item.name.toLowerCase().trim()
        )
      );
    }
  }, [item.name]);

  const handleClick = (index: number) => {
    setActive(index);
    setItem(projectsNav[index]);
  };

  return (
    <section>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row items-center justify-evenly text-white">
          {projectsNav.map(({ name }, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleClick(index)}
                className={cn(
                  "m-4 capitalize cursor-pointer",
                  active === index && "active"
                )}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-8">
        {projects.map((project: Project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
