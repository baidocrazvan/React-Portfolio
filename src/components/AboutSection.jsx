import { Blocks, Briefcase, Code, Server, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Aspiring Developer & Tech Enthusiast
          </h3>
          <p className="text-muted-foreground">
            My name is Razvan, and I’m from Oradea. Over the past year, I’ve
            focused on mastering the foundations(HTML/CSS/JS) of full-stack web
            development, including backend systems with Node.js and modern
            frontend technologies like React, Next.js, and TailwindCSS. I’m
            currently deepening my expertise in these frameworks while expanding
            my toolkit.
          </p>
          <p className="text-muted-foreground">
            I’ve been a tech enthusiast since childhood—tinkering with
            computers, creating game mods, writing and uploading subtitles to
            video sites, and fixing computer hardware for friends. I have always
            known that I would appreciate the intricacies of software
            development because I have always loved to solve and tackle
            problems, especially in software development, where I thrive on
            tackling challenges and learning new solutions. I do believe these
            characteristics along with my persistance have helped me
            tremendously in my learning journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#learning-path" className="cosmic-button">
              {" "}
              My Learning Path
            </a>

            {/* Link to CV download */}
            <a
              href="https://drive.google.com/file/d/1X1MlsYYhef37ch9iQ4CVzQvDQO-yxXLz/view"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              View CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Core Foundations</h4>
                <p className="text-muted-foreground">
                  {" "}
                  HTML5, CSS, JavaScript (ES6+), Responsive Design, Git
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p className="text-muted-foreground">
                  {" "}
                  Node.js, Express, REST APIs, PostgreSQL, Testing (Vitest), EJS
                  Templating
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Blocks className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Currently Learning</h4>
                <p className="text-muted-foreground">
                  {" "}
                  Working on existing skills while expanding into modern
                  frameworks and tools: React, Next.js, TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
