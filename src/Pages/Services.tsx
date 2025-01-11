import { ServicesGrid } from "@/components/Services/ServiceGrid";
import { motion } from "framer-motion";

const ServicesPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative bg-cover bg-center bg-no-repeat py-16"
    style={{
      backgroundImage: "url('/bg2.jpg')", 
    }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative container mx-auto px-6 py-16">
    <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          Our Services ⚙️
        </motion.h1>
      <p className="text-center text-gray-200 mb-16">
        We offer a range of services tailored to meet your needs.
      </p>
      <ServicesGrid />
    </div>
  </motion.div>
);

export default ServicesPage;
