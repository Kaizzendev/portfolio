import { Project } from "@/types/project";

export const projects: Project[] = [

  {
    title: "Frenzy Tanks",
    slug: "tanksv2",

    description:
      "A tank battle roguelike game where you build your tank and progress throughout a challenging procedural generated map made with Unity.",

    shortDescription: "A tank battle roguelike game where you build your tank and progress throughout a challenging procedural generated map made with Unity.",

    image: "/frenzy-tanks.png",

    technologies: ["Unity", "C#"],

    githubUrl: "https://github.com/Kaizzendev/Tanks/tree/develop",

    featured: true,

    status: "In Progress",
  },

  {
    title: "Tanks API",
    slug: "tanks-api",

    description:
      "A REST API made for the Frenzy Tanks game to store player data, login information, progress and leaderboard information.",

    shortDescription: "A REST API made for the Frenzy Tanks game to store player data, login information, progress and leaderboard information.",

    image: "/net-core-logo.svg",

    technologies: [".Net core", "C#"],

    githubUrl: "https://github.com/Kaizzendev/TanksAPI",

    featured: true,

    status: "Completed",
  },

  {
    title: "Piko",
    slug: "piko",

    description:
      "A game made for the 2026 Game dev fireside jam. This game was done in under a week, In a team of two people, and I was responsible for the programming, art, sound effects and game design. The game is a 2D platformer where you play as a small creature that can jump and throw mass. The game is set inside a notebook and filled with puzzles and obstacles.",

    shortDescription: "A 2D platformer game made for the 2026 Game dev fireside jam.",

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
      "A simple tank wave battle game made with Unity.",

    shortDescription: "A simple tank wave battle game made with Unity.",

    image: "/tanks.gif",

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

    shortDescription: "An rts game where you control a faction and command your troops to conquer the tube system.",

    image: "/tube-wars.gif",

    technologies: ["Unity", "C#"],

    githubUrl: "https://github.com/Kaizzendev/Tube-Wars",

    featured: true,

    status: "Prototype",
  },

  {
    title: "Minesweeper",
    slug: "minesweeper",

    description:
      "A classic minesweeper game made for android implemented in Godot.",

    shortDescription: "A classic minesweeper game made for android implemented in Godot.",

    image: "/minesweeper.png",

    technologies: ["Godot", "GDScript"],

    githubUrl: "https://github.com/Kaizzendev/minesweeper",

    featured: true,

    status: "Completed",
  },

  {
    title: "Asteroids",
    slug: "asteroids",

    description:
      "A classic asteroids game implemented in Godot.",

    shortDescription: "A classic asteroids game implemented in Godot.",

    image: "/asteroids.gif",

    technologies: ["Godot", "GDScript"],

    githubUrl: "https://github.com/Kaizzendev/Asteroids",

    itchUrl: "https://kaizzendev.itch.io/asteroidsplus",

    featured: true,

    status: "Completed",
  },

  {
    title: "Portfolio",
    slug: "portfolio",

    description:
      "This website! My personal portfolio website made with Next.js and TailwindCSS.",

    shortDescription: "My personal portfolio website made with Next.js and TailwindCSS.",

    image: "/logo.png",

    technologies: ["Next.js", "TailwindCSS"],

    githubUrl: "https://github.com/Kaizzendev/Portfolio",

    featured: true,

    status: "Completed",
  },
];