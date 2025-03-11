import { LucideIcon, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  title: string;
  details: string[];
  icon: LucideIcon;
}

const Service = ({ title, details, icon: Icon }: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      className="relative border border-gray-300 rounded-lg p-6 bg-white shadow-md w-full dark:text-black dark:bg-[#2A2A2A]"
    >
      {/* Title */}
      <div className="flex items-center font-semibold text-lg sm:text-2xl">
        <motion.div whileHover={{ rotate: 10 }}>
          <Icon className="text-[#870A81]" size={24} />
        </motion.div>
        <h2 className="px-2 dark:text-white">{title}</h2>
      </div>

      {/* Service Details */}
      <ul className="mt-3 space-y-2">
        {details.map((detail, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center text-md sm:text-base dark:text-white"
          >
            <CheckCircle className="text-[#870A81] mr-2" size={16} />
            <p>{detail}</p>
          </motion.li>
        ))}
      </ul>

      {/* Decorative Design Element */}
      <div className="absolute bg-[rgb(38,0,63)] rounded-tl-lg rounded-br-lg w-8 h-6 -right-0 bottom-0"></div>
    </motion.div>
  );
};

export default Service;
