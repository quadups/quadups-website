import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";
import {
  BsInstagram,
  BsSun,
  BsMoon,
} from "react-icons/bs";

import HomeContact from "./HomeContact";
import Modal from "../ui/Modal";
import { Contact } from "../ContactPage.tsx/ContactPage";
import { FooterLogo } from "../ui/FooterLogo";

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/quadups",
    color: "text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white",
  },
  {
    icon: <FaXTwitter />,
    url: "https://twitter.com/QuadupsLtd?t=gjOcmXOa4Sy7jUSfLbkLsw&s=08",
    color: "text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white",
  },
  {
    icon: <FaThreads />,
    url: "https://threads.net/@quadups",
    color: "text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white",
  },
  {
    icon: <BsInstagram />,
    url: "https://www.instagram.com/quadups?igsh=eDNhZHBqMWFjYmNs",
    color: "text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300",
  },
  {
    icon: <FaFacebookF />,
    url: "https://web.facebook.com/profile.php?id=61574737907803",
    color: "text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/quadups",
    color: "text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300",
  },
];

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="bg-white dark:bg-[#1E1E1E] text-gray-700 dark:text-gray-300">
      <HomeContact onContactClick={() => setModalOpen(true)} />

      <footer className="border-t border-gray-300 py-10 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center">
            <FooterLogo />
          </div>

          {/* Contact Info & Copyright */}
          <div className="space-y-3">
            <p>&copy; Quadups Ltd. {new Date().getFullYear()}</p>
            <p>
              📞{" "}
              <a href="tel:+447350156560" className="hover:underline">
                +44 7350 156560
              </a>
            </p>
            <p>
              📞{" "}
              <a href="tel:+2347064603807" className="hover:underline">
                +234 706 460 3807
              </a>
            </p>
          </div>

          {/* Social + Dark Mode Toggle */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            <div className="flex space-x-4 text-2xl">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-transform duration-300 hover:scale-110 ${link.color}`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!isDarkMode)}
              className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105"
            >
              {isDarkMode ? (
                <>
                  <BsSun className="text-yellow-500 text-xl" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <BsMoon className="text-gray-800 dark:text-white text-xl" />
                  <span>Dark Mode</span>
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
