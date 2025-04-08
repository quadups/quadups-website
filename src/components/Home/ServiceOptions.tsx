import { ArrowUpRight, Code, Smartphone, Palette, MailQuestion } from 'lucide-react';
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
      title: 'Software Consultation',
      details: ['Technical feasibility analysis', 'project planning and deveopment', 'Custom software design.'],
      icon: MailQuestion
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
    
    // {
    //   title: 'Software Consultation',
    //   details: ['Technical analysis and strategy', 'Development roadmaps and project planning', 'Custom software design'],
    //   icon: MailQuestion
    // }
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

          {/* Services Grid- desktop view */}
          
          <div className="hidden lg:grid sm:grid-cols-2 gap-6 flex-nowrap">
            {services.slice(2).map((service, index) => (
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
{/* Services Grid- mobile view */}
        <div className="overflow-x-auto lg:overflow-x-hidden">
          <div className="flex lg:hidden sm:grid-cols-2 gap-6 flex-nowrap">
            {services.map((service, index) => (
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

          </div>
        </motion.div>

        {/* Sidebar Service Box (First Service) */}
        <motion.div
          className="lg:w-1/3 w-full hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Service title={services[0].title} details={services[0].details} icon={services[0].icon} />
          <Service title={services[1].title} details={services[1].details} icon={services[1].icon} />
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
