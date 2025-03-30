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
            ? "/logo/quadups-black-small-transparent.png" // Always use black for service page
            : "/logo/small-logo-white.png"
        }
        alt="Quadups Logo"
        width={35}
        height={35}
      />
    </Link>
  );
};
