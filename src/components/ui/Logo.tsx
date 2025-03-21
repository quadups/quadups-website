import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

interface LogoProps {
  isServicePage: boolean;
}

export const Logo = ({ isServicePage }: LogoProps) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   setIsDarkMode(document.documentElement.classList.contains("dark"));
  // }, []);

  return (
    <Link
      to="/"
      className={`text-xl md:text-2xl font-extrabold tracking-wider ${isServicePage ? "text-black" : "text-white"
        }`}
    >
      <img
        src={
          isServicePage
            ? "/logo/quadups-full-black-transparent.png" // Always use black for service page
            : "/logo/quadups-full-white.png"
        }
        alt="Quadups Logo"
        width={150}
        height={150}
      />
    </Link>
  );
};
