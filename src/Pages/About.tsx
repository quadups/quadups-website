import AboutHero from '@/components/About/AboutHero';
import { Mission } from '@/components/About/Mission';
import { Testimonials } from '@/components/About/Testimonials';
import { Contact } from '@/components/ContactPage.tsx/ContactPage';
import { FooterBand } from '@/components/ui/FooterBand';
import Modal from '@/components/ui/Modal';
import { useState } from 'react';
import { SEO } from '@/components/SEO/SEO';

export const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="About Quadups - Your Technology Partner | UK & Nigeria"
        description="Learn about Quadups - A leading software development company serving UK and Nigeria. We're your technical co-founders, helping startups and businesses build innovative digital solutions. Discover our mission, vision, and values."
        keywords="about Quadups, software development company UK, tech company Nigeria, startup development, technical co-founders, software house London, tech consulting Lagos, digital transformation, innovation, technology partner"
        url="https://quadups.com/about"
        type="website"
      />
      <div className="w-screen overflow-x-hidden">
        <AboutHero />
        <Mission />
        <Testimonials />
        <FooterBand onContactClick={() => setModalOpen(true)} />
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <Contact onClose={() => setModalOpen(false)} />
        </Modal>
      </div>
    </>
  );
};
