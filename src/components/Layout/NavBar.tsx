import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export const NavBar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-gradient ml-4 text-2xl md:text-3xl font-bold uppercase tracking-wide text-white"
        >
          TechNovo
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {["About", "Team", "Services", "Contact"].map((item, index) => (
            <li key={index} className="group">
              <Link
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className={`text-white font-semibold text-sm md:text-md uppercase relative 
                after:content-[''] after:absolute after:w-0 after:h-[2px] 
                after:bottom-0 after:left-0 after:transition-all after:duration-300 
                group-hover:after:w-full ${
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

        {/* Mobile Menu (Sheet) */}
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-6 text-white md:hidden" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-gray-800">
            <SheetHeader />
            <ul className="flex flex-col space-y-4 p-6">
              {["About Us", "Team", "Services", "Contact Us"].map(
                (item, index) => (
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
                )
              )}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
