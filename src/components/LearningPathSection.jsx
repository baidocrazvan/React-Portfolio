const learningPath = [
  {
    id: 1,
    title: "CS50P: Introduction to Programming with Python",
    provider: "Harvard (edX)",
    instructor: "Prof. David J. Malan",
    description:
      "An excellent introduction to programming using Python. David Malan's teaching style made complex concepts approachable and engaging. The course is mainly focused on problem-solving, algorithms, and the fundamentals of computer science, amongst other things like Object-Oriented-Programming and unit tests. I would say it's a perfect entry point for somebody who doesn't want to delve straight into the famously hard(er) CS50x course. Course consists of weekly assignments for each of the 9 problem sets that need to be submitted and graded. A final final project is needed to pass.",
    image: "/certificates/harvard_edx_logo.png",
    diploma: "/certificates/cs50p-diploma.png",
    diplomaLink:
      "https://certificates.cs50.io/9f1e1432-a612-48d1-bc98-6e853dada7d6.pdf?size=letter",
    completed: true,
    length: "9 weeks, 3-9 hours a week",
    courseLink:
      "https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python",
    finalProjects: [
      {
        name: "Natural Language Processing",
        link: "https://www.github.com/baidocrazvan",
      },
    ],
    year: 2024,
  },
  {
    id: 2,
    title: "CS50x: Introduction to Computer Science",
    provider: "Harvard (edX)",
    instructor: "Prof. David J. Malan",
    description:
      "The legendary CS50x course! Covered C, Python, SQL, web development, and more. It was challenging but incredibly rewarding, and gave me a strong foundation in computer science. For this course, prof. David J. Malan lives up to his stellar reputation, teaching with utmost care and passion, he puts so much energy into the lessons that by the end he is usually sweating and out of breath. Course consists of weekly assignments for each of the 10 problem sets that need to be submitted and graded. A final project is needed to pass.",
    image: "/certificates/harvard_edx_logo.png",
    diploma: "/certificates/cs50x-diploma.png",
    diplomaLink:
      "https://certificates.cs50.io/9175b585-17cb-4070-b0d8-8a848fa544bb.pdf?size=letter",
    completed: true,
    length: "11 weeks, 10-20 hours a week",
    courseLink:
      "https://www.harvardonline.harvard.edu/course/cs50-introduction-computer-science",
    finalProjects: [
      {
        name: "Baydock Leatherworks",
        link: "https://www.github.com/baidocrazvan",
      },
    ],
    year: 2025,
  },
  {
    id: 3,
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Udemy",
    instructor: "Dr. Angela Yu",
    description:
      "A comprehensive 70+ hour course covering everything from HTML, CSS, and JavaScript to Node.js, Express, SQL (with postgreSQL), APIs, templating, QA testing and deployment and so much more. Dr. Angela Yu is an amazing instructor that explains everything in detail, making sure nobody is left behind. Currently at 90% completion.",
    image: "/certificates/udemy_logo.jpg",
    diploma: null,
    diplomaLink: null,
    completed: false,
    length: "70+ hours of course material",
    courseLink:
      "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    finalProjects: [],
    year: 2024,
  },
  {
    id: 4,
    title: "Learn React",
    provider: "Scrimba",
    instructor: "Bob Ziroll",
    description:
      "Bob Ziroll's Scrimba course made learning React fun and interactive. I built several projects and learned about components, props, hooks, state management and side-effects. The instructor believes in learning by doing, so each lesson takes place in Scrimba's IDE where you need to stop listening and solve challenges in order to progress the course. At the end, two final projects are needed to pass.",
    image: "/certificates/scrimba_logo.png",
    diploma: "/certificates/scrimba_react_diploma.png",
    diplomaLink:
      "https://scrimba.com/certificate-cert24zAwPPowMrJUVTuq52EGHceev5r5YBy22LRe",
    completed: true,
    length: "15 hours of course material",
    courseLink: "https://scrimba.com/learn-react-c0e",
    finalProjects: [
      { name: "Tenzies", link: "https://www.github.com/baidocrazvan" },
      {
        name: "Assembly: Endgame",
        link: "https://www.github.com/baidocrazvan",
      },
    ],
    year: 2024,
  },
];

import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";

export const LearningPathSection = () => {
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
              className="bg-card rounded-lg shadow-xs border border-border transition-all"
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
                <span className="text-primary">
                  {openId === course.id ? <ChevronDown /> : <ChevronRight />}
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
