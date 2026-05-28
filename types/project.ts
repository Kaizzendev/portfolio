export type Project = {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;

  image: string;

  technologies: string[];

  githubUrl?: string;
  itchUrl?: string;
  liveUrl?: string;

  featured?: boolean;

  status: "Completed" | "In Progress" | "Prototype";
};