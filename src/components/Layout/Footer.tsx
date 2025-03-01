import { Link } from "react-router-dom";
import HomeContact from "./HomeContact";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import Modal from "../ui/Modal";
import { Contact } from "../ContactPage.tsx/ContactPage";

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1E1E1E]">
      {/* Contact Section */}
      <HomeContact onContactClick={() => setModalOpen(true)} />

      {/* Footer Section */}
    <footer className="border-t border-gray-300 p-6 dark:bg-[#1E1E1E]">xczs
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-700 dark:text-gray-300 space-y-4 md:space-y-0">
          {/* Copyright Section */}
          <div className="text-center text-lg">
            &copy; Quadups Ltd. {new Date().getFullYear()}
          </div>

          {/* Mobile Number */}
          <div className="text-center text-lg">
            📞 <a href="tel:+2347012345678" className="hover:underline">+234 703 763 6323</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-5">
            <Link
              to="https://github.com/solutiontechnov0"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white text-2xl" />
            </Link>

            {/* <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-2xl" />
            </Link> */}

            <Link
              to="https://twitter.com/QuadupsLtd?t=gjOcmXOa4Sy7jUSfLbkLsw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <FaXTwitter className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white text-2xl" />
            </Link>

            <Link
              to="https://threads.net/@quadups"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <FaThreads className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white text-2xl" />
            </Link>

            <Link
              to="https://www.instagram.com/quadups?igsh=eDNhZHBqMWFjYmNs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:scale-110"
            >
              <BsInstagram className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 text-2xl" />
            </Link>
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
