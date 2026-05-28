import Link from "next/link";
import { Project } from "@/types/project";

type Props = {
  key: string;
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <article className="group overflow-hidden rounded-2xl border border-[color:var(--border-color)]/50 card transition hover:-translate-y-1 hover:border">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4 p-5">
          <div>
            <h3 className="text-xl font-semibold primary-text">
              {project.title}
            </h3>

            <p className="mt-2 text-sm paragraph">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="chip"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-sm secondary-text">
            {project.status}
          </div>
        </div>
      </article>
    </Link>
  );
}