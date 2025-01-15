import TeamMember from '@/components/Team/TeamMember ';
import { motion } from 'framer-motion';

export const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: '/team/john.jpg',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'johndoe@example.com',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: '/team/jane.jpg',
      linkedin: 'https://linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" mx-auto px-6 py-16 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/bg2.jpg)' }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative">
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center text-white mb-6 relative"
        >
          Meet Our Team 👷🏿👷🏿‍♀️
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 0.5 }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-lg text-gray-200 mb-16 max-w-3xl mx-auto"
        >
          Behind every great idea is a dedicated team. Our professionals bring passion, innovation, and experience to
          every project, ensuring the best outcomes for our clients.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
