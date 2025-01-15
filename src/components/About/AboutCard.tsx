import { motion } from "framer-motion";

interface AboutCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const AboutCard = ({ icon, title, description }: AboutCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className=" bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-xl text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};