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
          <h1 className="text-5xl font-bold text-white">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300"
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
              className="rounded-xl bg-white px-5 py-3 text-black"
            >
              GitHub
            </a>
          )}

          {project.itchUrl && (
            <a
              href={project.itchUrl}
              target="_blank"
              className="rounded-xl border border-white/20 px-5 py-3 text-white"
            >
              itch.io
            </a>
          )}
        </div>
      </div>
    </main>
  );
}