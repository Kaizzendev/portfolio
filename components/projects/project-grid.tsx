import { projects } from "@/data/projects";
import { ProjectCard } from "./projects-card";

export function ProjectGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </section>
  );
}