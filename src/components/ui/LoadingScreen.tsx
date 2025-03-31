import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#140021] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Quadups
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-[#870a81] mx-auto rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-white text-lg md:text-xl"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen; 