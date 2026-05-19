import { ProjectGrid } from "@/components/projects/project-grid";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold primary-text">
          Projects
        </h1>

        <p className="mt-4 text-lg paragraph">
          A collection of game development projects.
        </p>
      </div>

      <ProjectGrid />
    </main>
  );
}