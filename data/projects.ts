import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Piko",
    slug: "piko",

    description:
      "A game made for the 2026 Game dev fireside jam. This game was done in under a week, In a team of two people, and I was responsible for the programming and game design. The game is a 2D platformer where you play as a small creature that can jump and throw mass. The game is set inside a notebook and filled with puzzles and obstacles.",

    image: "/piko.png",

    technologies: ["Unity", "C#"],

    githubUrl: "https://github.com/hotdogwithdog/FiresideJam2026",

    itchUrl: "https://hotdogwithdog.itch.io/piko",

    featured: true,

    status: "Completed",
  },

  {
    title: "Tanks roguelike",
    slug: "tanks",

    description:
      "A simple tank battle roguelike game made with Unity.",

    image: "/vid1.gif",

    technologies: ["Unity", "C#"],

    githubUrl: "https://github.com/Kaizzendev/Tanks",

    itchUrl: "https://kaizzendev.itch.io/tanksdemo",

    featured: true,

    status: "Prototype",
  },

    {
    title: "Tube wars",
    slug: "tube-wars",

    description:
      "An rts game where you control a faction and command your troops to conquer the tube system.",

    image: "/testPlay.gif",

    technologies: ["Unity", "C#"],

    githubUrl: "https://github.com/Kaizzendev/Tube-Wars",

    featured: true,

    status: "Prototype",
  },
];