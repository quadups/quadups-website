import AboutHero from '@/components/About/AboutHero';
import { Mission } from '@/components/About/Mission';
import { Contact } from '@/components/ContactPage.tsx/ContactPage';
import { FooterBand } from '@/components/ui/FooterBand';
import Modal from '@/components/ui/Modal';
import { useState } from 'react';

export const About = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="div w-screen">
      <AboutHero />
      <Mission />
      <FooterBand onContactClick={() => setModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};
