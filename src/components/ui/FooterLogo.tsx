import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const FooterLogo = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Observe changes in the class list of the document element (html)
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Link to="/" className="flex items-center">
      <img
        src={
          isDarkMode
            ? "/logo/quadups-full-white.png" // Dark mode version
            : "/logo/quadups-full-black-transparent.png" // Light mode version
        }
        alt="Quadups Logo"
        width={150}
        height={150}
      />
    </Link>
  );
};
