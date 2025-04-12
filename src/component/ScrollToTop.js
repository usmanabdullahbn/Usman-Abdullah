import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = Math.min(scrollTop / scrollHeight, 1);
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);

      // Detect background color dynamically
      const element = document.elementFromPoint(
        window.innerWidth - 50,
        window.innerHeight - 50
      ); // Get element under the button

      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        setBackgroundColor(bgColor);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to invert color
  const invertColor = (rgb) => {
    if (!rgb.startsWith("rgb")) return "black"; // Default fallback
    const values = rgb.match(/\d+/g);
    if (!values) return "black";
    const [r, g, b] = values.map(Number);
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  };

  const invertedColor = invertColor(backgroundColor);
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference * (1 - scrollProgress);

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative flex items-center justify-center w-12 h-12 rounded-full focus:outline-none bg-transparent"
        aria-label="Scroll to top"
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="black"
            stroke='white'
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 20 20)"
            className="transition-all duration-200"
          />
        </svg>
        <div className="absolute inset-0.5 rounded-full flex items-center justify-center">
          <ChevronUp className="w-6 h-6" style={{ color: invertedColor }} />
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
