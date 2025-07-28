import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesData from "@/data/services.json";

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animations for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceComponent = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full mx-auto py-16 bg-white relative pt-36 sm:pt-56 px-4 sm:px-8 md:px-16 lg:px-32 dark:bg-[#1E1E1E]"
      >
        <motion.div
          className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Section */}
          <motion.div
            className="w-full sm:w-full md:w-1/2 text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-black mb-4 dark:text-white"
            >
              Proffering Solutions Tailored <br />
              for Your Digital Success
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mb-8 dark:text-white"
            >
              From custom software to standout branding, we help you build,
              scale, and thrive in the digital world.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full sm:w-full md:w-1/2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.img
              src="/services-img-1.avif"
              alt="Service Image"
              className="rounded-lg shadow-lg w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Service Sections */}
      {servicesData.map((service) => (
        <motion.section
          key={service.id}
          className={`flex ${
            service.layout === "imageLeft"
              ? "flex-col-reverse sm:flex-row"
              : "flex-col sm:flex-row"
          } items-center justify-between ${
            service.backgroundColor
          } p-6 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-12`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div 
            className={`w-full sm:w-full md:w-1/2 ${
              service.layout === "imageRight" ? "order-last" : ""
            }`} 
            variants={itemVariants}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto object-cover"
              whileHover={{ scale: 1.05 }}
              initial={{ 
                opacity: 0, 
                x: service.layout === "imageLeft" ? -50 : 50 
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full sm:w-full md:w-1/2 text-left space-y-4 md:space-y-6"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white"
            >
              {service.title}
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-white"
            >
              {service.description}
            </motion.p>

            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="block mt-4"
            >
              <Link
                to="/startaproject"
                className="inline-block py-3 px-6 md:px-8 bg-[#870A81] text-white font-semibold rounded-full shadow-lg hover:bg-[#442042] transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-lg"
              >
                {service.buttonText}
              </Link>
            </motion.span>
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
};

export default ServiceComponent;
