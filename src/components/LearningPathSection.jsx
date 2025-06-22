import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

export const LearningPathSection = ({ learningPath }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="learning-path" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Learning Path</span>
        </h2>
        <div className="flex flex-col gap-6">
          {learningPath.map((course) => (
            <div
              key={course.id}
              className={cn(
                "bg-card rounded-lg shadow-xs border border-border overflow-hidden transition-all duration-300 ease-in-out",
                openId === course.id ? "max-h-[1200px]" : "max-h-[220px]"
              )}
            >
              <button
                className="w-full flex flex-col sm:flex-row items-center p-4 gap-4 focus:outline-none"
                onClick={() => toggle(course.id)}
                aria-expanded={openId === course.id}
              >
                <img
                  src={course.image}
                  alt={course.provider}
                  className="w-24 h-18 object-contain rounded bg-background border border-border"
                />

                <span className="flex-1 text-center font-semibold text-lg md:text-left">
                  {course.title}
                </span>
                <span
                  className={`text-primary transition-transform duration-300 ${
                    openId === course.id ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <ChevronRight />
                </span>
              </button>
              {openId === course.id && (
                <div className="px-6 pb-6 pt-2 animate-fade-in">
                  <div className="mb-2">
                    <a
                      href={course.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline font-medium inline-flex items-center gap-1 text-lg"
                    >
                      {course.title} <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground mb-6">
                    <span className="font-medium">{course.provider}</span>{" "}
                    &middot; {course.instructor} &middot; {course.year} &middot;{" "}
                    {course.length}
                  </div>
                  <p className="mb-6 text-left">{course.description}</p>
                  {course.diploma && (
                    <div className="flex justify-center mb-6">
                      <a
                        href={course.diplomaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          src={course.diploma}
                          alt={`${course.title} diploma`}
                          className="w-full max-w-xs sm:max-w-lg rounded shadow-md border border-border mx-auto"
                        />
                      </a>
                    </div>
                  )}
                  {course.finalProjects && course.finalProjects.length > 0 && (
                    <div className="flex flex-col gap-2 mt-2">
                      {course.finalProjects.map((project, key) => (
                        <div
                          key={key}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mx-auto w-fit"
                        >
                          Final Project:&nbsp;
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline inline-flex items-center gap-1"
                          >
                            {project.name} <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
