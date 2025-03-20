import { Link } from "react-router-dom";
import HomeContact from "./HomeContact";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { BsInstagram, BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { Contact } from "../ContactPage.tsx/ContactPage";
import { FooterLogo } from "../ui/FooterLogo";

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="bg-white dark:bg-[#1E1E1E]">
      {/* Contact Section */}
      <HomeContact onContactClick={() => setModalOpen(true)} />

      {/* Footer Section */}
      <footer className="border-t border-gray-300 p-6 dark:bg-[#1E1E1E]">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <FooterLogo />
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-left text-sm md:text-lg text-gray-700 dark:text-gray-300">
            &copy; Quadups Ltd. {new Date().getFullYear()}
          </div>

          {/* Mobile Number */}
          <div className="text-center md:text-left text-sm md:text-lg text-gray-700 dark:text-gray-300">
            📞{" "}
            <a
              href="tel:+2347064603807"
              className="hover:underline"
            >
              +234 706 460 3807
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <Link
              to="https://github.com/quadups"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white" />
            </Link>
            <Link
              to="https://twitter.com/QuadupsLtd?t=gjOcmXOa4Sy7jUSfLbkLsw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <FaXTwitter className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white" />
            </Link>
            <Link
              to="https://threads.net/@quadups"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <FaThreads className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white" />
            </Link>
            <Link
              to="https://www.instagram.com/quadups?igsh=eDNhZHBqMWFjYmNs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <BsInstagram className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300" />
            </Link>
          </div>

          {/* Dark Mode Toggle Button */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => setDarkMode(!isDarkMode)}
              className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              {isDarkMode ? (
                <>
                  <BsSun className="text-yellow-500 text-xl" />
                  <span className="text-sm dark:text-gray-300">Light Mode</span>
                </>
              ) : (
                <>
                  <BsMoon className="text-gray-800 dark:text-white text-xl" />
                  <span className="text-sm dark:text-gray-300">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Footer;
