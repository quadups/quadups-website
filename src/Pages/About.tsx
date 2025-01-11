import { AboutCard } from '@/components/About/AboutCard';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target } from 'lucide-react';

export const About = () => {
  const aboutDetails = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: 'Our Mission',
      description:
        'To deliver cutting-edge software solutions that empower businesses to achieve their goals and exceed expectations.',
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Our Team',
      description:
        'A group of talented professionals dedicated to innovation, creativity, and delivering outstanding results.',
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: 'Our Vision',
      description:
        'To be a global leader in providing innovative and sustainable tech solutions for a better tomorrow.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/bg2.jpg')` }} 
    >
      <div className="mx-auto px-6 py-16">
        {/* Section Title */}
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          About Us 💁🏿‍♂️
        </motion.h1>

        {/* Description Section */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center text-lg text-white max-w-2xl mx-auto mb-10"
        >
          At <span className="font-bold text-indigo-600">TechNovo Solutions</span>, we specialize in creating
          innovative and sustainable tech solutions that transform ideas into impactful realities. Discover who we are
          and what drives us forward.
        </motion.p>

        {/* Central Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-full max-w-3xl h-80 md:h-96 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/meeting.png" // Ensure this path points to your public folder or correct image path
              alt="Team Meeting"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutDetails.map((detail, index) => (
            <AboutCard
              key={index}
              icon={detail.icon}
              title={detail.title}
              description={detail.description}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
