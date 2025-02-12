import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(135,10,129, 0)", boxShadow: "none" }}
      animate={{
        backgroundColor: scrolled ? "rgba(38,0,63, .5)" : "rgba(135,10,129, .0)",
        boxShadow: scrolled ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 z-50 p-5 w-full px-40 flex items-center justify-between  "
    >
     
        {/* Logo */}
        <Link
          to="/"
          className=" text-xl md:text-xl font-extrabold tracking-wider text-white"
        >
          CompanyName
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-14">
          {["About us", "Services", "Contact"].map((item, index) => (
            <li key={index} className="group">
              <Link
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className={`text-white text-sm tracking-wider md:text-md capitalize relative 
                after:content-[''] after:absolute after:w-0 after:h-[2px] 
                after:top-5 after:left-0 after:transition-all after:duration-300 
                group-hover:after:w-full  ${
                  index === 0
                    ? "after:bg-[#ffe500]"
                    : index === 1
                    ? "after:bg-[#fc5185]"
                    : "after:bg-[#7e5afb]"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="link">
          <Link
            className="text-white text-sm tracking-wider bg-[#870a81] p-3 rounded-full"
            to={"startaproject"}
          >
            Start a Project
          </Link>
       

        {/* Mobile Menu (Sheet) */}
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-6 text-white md:hidden" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-gray-800">
            <SheetHeader />
            <ul className="flex flex-col space-y-4 p-6">
              {["About", "Team", "Services", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className={`text-white text-md font-semibold uppercase hover:text-${
                      index === 0
                        ? "[#ffe500]"
                        : index === 1
                        ? "[#fc5185]"
                        : "[#7e5afb]"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};
