import { ArrowUpRight, Code, Smartphone, Palette, Lightbulb, BitcoinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Service from '../Services/ServiceBox';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ServiceOptions = () => {
  const services = [
    {
      title: 'Website Design & Development',
      details: ['Building dynamic websites.', 'Custom web solutions.', 'Visually appealing designs.'],
      icon: Code
    },
    {
      title: 'Mobile App Development',
      details: ['Cross-platform mobile apps.', 'Intuitive user interfaces.', 'Seamless app performance.'],
      icon: Smartphone
    },
    {
      title: 'UI/UX Design',
      details: ['Intuitive user interfaces.', 'User research insights.', 'Prototyping and wireframing.'],
      icon: Palette
    },
    {
      title: 'Software Consultation',
      details: ['Expert software guidance.', 'Choosing right technologies.', 'Optimizing software architecture.'],
      icon: Lightbulb
    },
    {
      title: 'Blockchain Development & Smart Contracts',
      details: ['Developing dApps solutions.', 'Secure smart contracts.', 'Blockchain integrations globally.'],
      icon: BitcoinIcon
    }
  ];

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={fadeInUp} 
      className="bg-gray-100 px-6 py-16 sm:px-10 md:px-20 lg:px-28 dark:text-black dark:bg-[#3A3A3A]"
    >
      <div className="w-full flex flex-col lg:flex-row pb-10 gap-10 ">
        {/* Main Content */}
        <motion.div 
          className="lg:w-2/3 w-full" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="text py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize leading-snug dark:text-white">
              Explore unique software <br className="hidden sm:block" /> solutions
            </h1>
            <p className="text-md sm:text-base leading-relaxed mt-2 dark:text-white">
              We build digital solutions that make businesses more visible and
              successful. From websites and mobile apps to user-friendly
              designs and branding, we help companies create a strong online
              presence. Our goal is to turn ideas into real solutions that
              improve efficiency, connect with audiences, and drive growth in
              today’s digital world.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.slice(1).map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Service title={service.title} details={service.details} icon={service.icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar Service Box (First Service) */}
        <motion.div 
          className="lg:w-1/3 w-full" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <Service title={services[0].title} details={services[0].details} icon={services[0].icon} />
        </motion.div>
      </div>

      {/* View All Services Button */}
      <motion.div 
        className="flex justify-center" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Link
          className="p-3 text-sm bg-[#870A81] text-white rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          to={'/services'}
        >
          View All Services <ArrowUpRight />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceOptions;
