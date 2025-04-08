import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface LogoProps {
  isServicePage: boolean;
}

export const Logo = ({ isServicePage }: LogoProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc = isServicePage
    ? isDarkMode
      ? "/logo/small-logo-white.png"
      : "/logo/quadups-black-small-transparent.png"
    : "/logo/small-logo-white.png";

  return (
    <Link
      to="/"
      className={`text-xl md:text-2xl font-extrabold tracking-wider ${
        isServicePage ? (isDarkMode ? "text-white" : "text-black") : "text-white"
      }`}
    >
      <img
        src={logoSrc}
        alt="Quadups Logo"
        width={35}
        height={35}
      />
    </Link>
  );
};
