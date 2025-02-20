/**
 * @file Footer.tsx
 * @description Global footer component containing copyright information and social media links
 * @author Quadups Development Team
 * @last_modified 2025
 */

import { Link } from "react-router-dom";
import HomeContact from "./HomeContact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6"; 
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import Modal from "../ui/Modal";
import { Contact } from "../ContactPage.tsx/ContactPage";

const Footer = () => {
    const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <HomeContact onContactClick={() => setModalOpen(true)} />
      <footer className="bg-white flex justify-between px-24 border-t border-gray-700 p-4 ">
        {/* Copyright section */}
        <div className=" text-center  text-[17px] text-gray-700">
          &copy; CompanyName, {new Date().getFullYear()}
        </div>

        {/* Social media links container */}
        <div className="flex justify-evenly space-x-5 text-center text-[17px] text-gray-700">
          {/* GitHub - Version control and open source presence */}
          <Link to={'https://unscart.com/extension/color-picker/'}>
            <FaGithub className="text-gray-800 hover:text-gray-600 text-2xl" />
          </Link>

          {/* LinkedIn - Professional network presence */}
          <Link to={'https://unscart.com/extension/color-picker/'}>
            <FaLinkedin className="text-blue-600 hover:text-blue-500 text-2xl" />
          </Link>

          {/* Twitter/X - Social media updates and announcements */}
          <Link to={'https://unscart.com/extension/color-picker/'}>
            <FaXTwitter className="text-gray-800 hover:text-gray-600 text-2xl" />
          </Link>

          {/* Threads - Community engagement */}
          <Link to={'https://unscart.com/extension/color-picker/'}>
            <FaThreads className="text-gray-800 hover:text-gray-600 text-2xl" />
          </Link>

          {/* Instagram - Visual content and company culture */}
          <Link to={'https://unscart.com/extension/color-picker/'}>
            <BsInstagram className="text-pink-600 hover:text-pink-500 text-2xl" />
          </Link>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
      </footer>
    </div>
    
  );
};

export default Footer;
