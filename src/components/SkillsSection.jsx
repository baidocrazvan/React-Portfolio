import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { ChevronRight } from "lucide-react";
const mobileBreakpoint = 640;

export const SkillsSection = ({ skills, categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileBreakpoint
  );
  const prevIsMobile = useRef(isMobile);
  const [flippedCard, setFlippedCard] = useState(null);
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Only reset when crossing from desktop to mobile
    if (!prevIsMobile.current && isMobile) {
      setFlippedCard(null);
    }
    prevIsMobile.current = isMobile;
  }, [isMobile]);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              aria-current={activeCategory === category ? "true" : undefined}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "relative h-30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card rounded-lg",
                skill.note ? "cursor-pointer" : "cursor-default"
              )}
              role={skill.note ? "button" : undefined}
              tabIndex={skill.note ? 0 : undefined}
              aria-pressed={skill.note ? flippedCard === key : undefined}
              aria-label={
                skill.note
                  ? `${skill.name}, click to ${
                      flippedCard === key ? "close" : "open"
                    } details`
                  : skill.name
              }
              onKeyDown={(e) =>
                skill.note &&
                (e.key === "Enter" || e.key === " ") &&
                setFlippedCard(flippedCard === key ? null : key)
              }
              onClick={() =>
                skill.note && setFlippedCard(flippedCard === key ? null : key)
              }
            >
              {/* Front Card */}
              <div
                className={cn(
                  "absolute inset-0 bg-card p-6 rounded-lg shadow-xs card-hover",
                  "backface-hidden transition-transform duration-500 ease-in-out",
                  flippedCard === key ? "rotate-y-180" : "rotate-y-0"
                )}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-primary font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-3"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${skill.name} : ${skill.level}%`}
                >
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                {skill.note && (
                  <div className="flex items-center justify-end mt-2">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Back Card - only visible if note exists */}
              {skill.note && (
                <div
                  className={`
              absolute inset-0 bg-card p-4 rounded-lg shadow-xs
              backface-hidden transition-transform duration-500 ease-in-out
              ${flippedCard === key ? "rotate-y-0" : "rotate-y-180"}
            `}
                >
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
