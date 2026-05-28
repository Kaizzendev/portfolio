import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      
      <img
        src={project.image}
        alt={project.title}
        className="mb-10 aspect-video w-full rounded-2xl object-cover"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold primary-text">
            {project.title}
          </h1>

          <p className="mt-4 text-lg paragraph">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="chip"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="rounded-xl bg-black px-5 py-3 text-white"
            >
              GitHub
            </a>
          )}

          {project.itchUrl && (
            <a
              href={project.itchUrl}
              target="_blank"
              className="rounded-xl border-black px-5 py-3 text-white bg-[#da2c49]"
            >
              itch.io
            </a>
          )}
        </div>
      </div>
    </main>
  );
}