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
      name: 'John Doe',
      position: 'CEO & Founder',
      image: '/team/john.jpg',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'johndoe@example.com',
    },
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: '/team/john.jpg',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'johndoe@example.com',
    },
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
    // Add more members as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 pl-8 py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg2.jpg)' }} // Change the path to your image
    >
      <motion.h1
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl font-bold text-center text-[#674cc4] mb-10 relative"
>
  Meet Our Team
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.5 }}
    className="absolute bottom-0 left-0 h-1"
  />
</motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </motion.div>
  );
};
