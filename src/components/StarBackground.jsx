import { useState, useEffect } from "react";

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
  }, []);

  // Generate stars based on the size of the window
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000 // Star density
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Generate different pixel sizes of stars (1px-4px)
        x: Math.random() * 100, // Anywhere in viewport between 0%-100%
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // Set opacity between 50%(faint stars) and 1
        animationDuration: Math.random() * 4 + 2, // Pulsating animation duration (2s-6s)
      });
    }

    setStars(newStars);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
