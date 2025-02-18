import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavBarProps {
  /** Callback function triggered when Contact button is clicked */
  onContactClick: () => void;
}

/**
 * Navigation bar component that adapts to scroll position and screen size
 * Features smooth animations, mobile responsiveness, and dynamic styling
 *
 * @component
 * @param {NavBarProps} props - Component props
 * @returns {JSX.Element} Rendered NavBar component
 */
export const NavBar: React.FC<NavBarProps> = ({ onContactClick }) => {
  // Track scroll position to adjust navbar styling
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine if the current route is /services
  const isServicesPage = location.pathname === "/services";


  // Add scroll event listener to handle navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sheet when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) { // 1024px is the lg breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(20,0,33, .7)", boxShadow: "none" }}
      animate={{
        backgroundColor: isServicesPage
          ? scrolled
            ? "rgba(255,255,255, .9)"
            : "rgba(255,255,255, 1)"
          : scrolled
          ? "rgba(20,0,33, .9)"
          : "rgba(20,0,33, 0)",
        boxShadow: scrolled ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full px-4 sm:px-6 md:px-8 lg:px-40 py-4 flex items-center justify-between"
    >
      {/* Company Logo/Brand - Links to homepage */}
      <Link
        to="/"
        className={`text-lg sm:text-xl md:text-2xl font-extrabold tracking-wider  ${isServicesPage ? "text-black" : "text-white"}`}
      >
        CompanyName
      </Link>

      {/* Desktop Navigation Links - Hidden on mobile */}
      <ul className="hidden lg:flex items-center space-x-6 xl:space-x-14">
        {/* Primary Navigation Items with Hover Effects */}
        {["About", "Services"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className={`text-sm md:text-base tracking-wider capitalize relative whitespace-nowrap ${isServicesPage ? "text-black" : "text-white"}`}
            >
              <motion.span
                className="relative"
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.span>
              {/* Animated underline effect on hover */}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-white"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.li>
        ))}
        {/* Contact Button */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <button
            onClick={onContactClick}
            className={`text-sm md:text-base tracking-wider whitespace-nowrap ${isServicesPage ? "text-black" : "text-white"}`}
          >
            Contact
          </button>
        </motion.li>
      </ul>

      {/* CTA Button - Hidden on mobile */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="hidden sm:block"
      >
        <Link
          className="text-white text-sm md:text-base tracking-wider bg-[#870a81] px-4 sm:px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-[#9c1396] whitespace-nowrap"
          to={"startaproject"}
          target="_blank"
        >
          Start a Project
        </Link>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="lg:hidden">
          <Menu className="w-6 h-6 text-white" />
        </SheetTrigger>
        {/* Mobile Menu Panel */}
        <SheetContent side="right" className="w-[80vw] sm:w-[300px] bg-gray-900">
          <SheetHeader />
          {/* Mobile Navigation Links with Animated Entry */}
          <ul className="flex flex-col space-y-6 p-4 sm:p-6 mt-8">
            {["About", "Team", "Services"].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-white text-base sm:text-lg font-semibold uppercase tracking-wider hover:opacity-80 transition-all duration-300 block"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            {/* Mobile Contact Button */}
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <button
                onClick={onContactClick}
                className="text-white text-base sm:text-lg font-semibold uppercase tracking-wider hover:opacity-80 transition-all duration-300"
              >
                Contact
              </button>
            </motion.li>
            {/* Mobile CTA Button - Only visible on smallest screens */}
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="sm:hidden"
            >
              <Link
                to="startaproject"
                className="text-white text-base font-semibold uppercase tracking-wider hover:opacity-80 transition-all duration-300 bg-[#870a81] px-4 py-2 rounded-full block text-center"
              >
                Start a Project
              </Link>
            </motion.li>
          </ul>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};

