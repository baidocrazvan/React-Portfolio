import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { skills, categories } from "../data/skillsData";
import { SkillsSection } from "../components/SkillsSection";
import { projects } from "../data/projectData";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { learningPath } from "../data/learningPathData";
import { LearningPathSection } from "../components/LearningPathSection";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";

export const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle isScrolled={isScrolled} />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar isScrolled={isScrolled} />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection skills={skills} categories={categories} />
        <ProjectSection projects={projects} />
        <LearningPathSection learningPath={learningPath} />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
