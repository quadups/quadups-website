/**
 * @file Home.tsx
 * @description Main home page of the application, handles layout and modal interactions
 * @author Emeka-Iheonu Chimaobi
 * @last_modified 2025
 */

import { NavBar } from "@/components/Layout/NavBar"; // Navigation bar component
import { Band } from "../components/Home/Band"; // Band section component
import { Delivering } from "../components/Home/Delivering"; // Delivering section component
import { Hero } from "../components/Home/Hero"; // Hero section component
import ServiceOptions from "@/components/Home/ServiceOptions"; // Service options section component
import { useState } from "react"; // useState hook for managing modal state
import Modal from "@/components/ui/Modal"; // Modal component for contact form
import { Contact } from "@/components/ContactPage.tsx/ContactPage";
import { SEO } from "@/components/SEO/SEO";

/**
 * Home component, serves as the landing page for the application
 * Contains the hero section, service details, and a modal for contacting
 * 
 * @component
 * @returns {JSX.Element} Rendered Home page with hero, band, delivering, and service options sections
 */
export const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  return (
    <>
      <SEO
        title="Quadups Ltd - Custom Software Development & Digital Solutions | UK & Nigeria"
        description="Transform your business with Quadups - Leading software development company in UK and Nigeria. We build custom web apps, mobile apps, AI/ML solutions, and provide startup-as-a-service. Get your MVP to market faster."
        keywords="software development UK, software development Nigeria, custom software development London, web development Lagos, mobile app development, AI development, machine learning, startup development, MVP development, Web3 development, blockchain development, UI/UX design, e-commerce solutions, digital transformation UK, tech consulting Nigeria, software house London, tech startup Lagos"
        url="https://quadups.com"
        type="website"
      />
      <div className="w-screen">
        {/* Navigation bar with a callback to open the contact modal */}
        <NavBar onContactClick={() => setModalOpen(true)} />

        {/* Hero section with a full-screen background image */}
        <div className="relative hero w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/homeBg.jpg')" }}>
          <Hero />
        </div>

        {/* Band section, showcasing additional information or content */}
        <Band />

        {/* Delivering section, showing key service features */}
        <Delivering />

        {/* Service options section, where users can explore different services offered */}
        <ServiceOptions />

        {/* Modal component to show the contact form when triggered */}
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <Contact onClose={() => setModalOpen(false)} />
        </Modal>
      </div>
    </>
  );
};
