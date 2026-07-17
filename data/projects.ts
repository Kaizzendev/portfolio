import { Project } from "@/types/project";

export const projects: Project[] = [
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
      "A simple tank battle roguelike game made with Unity.",

    shortDescription: "A simple tank battle roguelike game made with Unity.",

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
    title: "Metroidvania prototype",
    slug: "metroidvania-prototype",

    description:
      "A metroidvania game I am working on.",

    shortDescription: "A metroidvania game I am working on.",

    image: "/wip.jpg",

    technologies: ["Unity", "C#"],

    githubUrl: "https://github.com/Kaizzendev/https://github.com/Kaizzendev/Metroidvania-Month-32-game-jam-",

    itchUrl: "",

    featured: true,

    status: "In Progress",
  },
];