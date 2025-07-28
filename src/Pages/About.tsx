import AboutHero from '@/components/About/AboutHero';
import { Mission } from '@/components/About/Mission';
import { Testimonials } from '@/components/About/Testimonials';
import { Contact } from '@/components/ContactPage.tsx/ContactPage';
import { FooterBand } from '@/components/ui/FooterBand';
import Modal from '@/components/ui/Modal';
import { useState } from 'react';

export const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-screen overflow-x-hidden">
      <AboutHero />
      <Mission />
      <Testimonials />
      <FooterBand onContactClick={() => setModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};
