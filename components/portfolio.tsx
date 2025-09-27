import { ProjectList } from "@/components/project-list";

export const Portfolio = () => {
  return (
    <section className="section min-h-350 bg-primary" id="portfolio">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="w-full mb-8 lg:bg-portfolio lg:bg-center lg:bg-contain lg:bg-no-repeat">
            <h2 className="section-title">My latest work</h2>
          </div>
          <p className="subtitle w-full max-w-200">
            Explore a selection of my latest web development projects, featuring
            modern, responsive, and user-friendly designs. Each portfolio item
            showcases skills in JavaScript, React, and Next.js, with a focus on
            performance, accessibility, and client-driven results.
          </p>
        </div>
        <ProjectList />
      </div>
    </section>
  );
};
