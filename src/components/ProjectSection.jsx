import {
  ArrowRight,
  ExternalLink,
  ExternalLinkIcon,
  Github,
  GithubIcon,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "3D Instax Album",
    description:
      "A visually interesting image gallery featuring scanned physical photos from my own personal collection with minimal technologies: HTML/CSS and JS.",
    image: "/projects/3dGallery.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://baidocrazvan.github.io/Personal-Photo-Gallery/",
    githubUrl: "https://github.com/baidocrazvan/Personal-Photo-Gallery",
  },
  {
    id: 2,
    title: "Baydock Leatherworks",
    description:
      "A stylish, full-featured web store for unique leather crafts. Complete with user authentication, email verification, guest cart and admin dashboard.",
    image: "/projects/baydock.png",
    tags: ["Node.js", "Express", "SCSS"],
    demoUrl: "https://baydock-leatherworks.onrender.com/",
    githubUrl: "https://github.com/baidocrazvan/baydock-leather",
  },
  {
    id: 3,
    title: "Tenzies",
    description:
      "A browser-based version of the classic dice game Tenzies, built with React as part of the final project for the Scrimba 'Learn React' course.",
    image: "/projects/tenzies.png",
    tags: ["React"],
    demoUrl: "https://react-tenzies-livid.vercel.app/",
    githubUrl: "https://github.com/baidocrazvan/React-Tenzies",
  },
  {
    id: 4,
    title: "Assembly: Endgame",
    description:
      "Assembly: Endgame is a React-based word game inspired by Hangman, created as the final project for the Scrimba 'Learn React' course.",
    image: "/projects/assembly.png",
    tags: ["React"],
    demoUrl: "https://assembly-end-game-nu.vercel.app/",
    githubUrl: "https://github.com/baidocrazvan/Assembly-Endgame",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience in
          mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/baidocrazvan"
          >
            Check Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
