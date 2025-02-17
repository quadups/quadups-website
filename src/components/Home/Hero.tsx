import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const headlines = [
  { title: "Empowering Businesses With Digital Solutions", subtitle: "We streamline processes, boost productivity, and build solutions that drive growth" },
  { title: "Turning Ideas into Digital Success", subtitle: "Unlocking the power of data to transform industries" },
  { title: "Innovating for a Smarter Future", subtitle: "Building technologies that drives progress and simplifies life" },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen bg-cover bg-center flex justify-center items-center relative"
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black opacity-50"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-0 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight">
              {headlines[index].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 tracking-wide px-2 sm:px-4 max-w-[95%] sm:max-w-[90%] md:max-w-[80%]">
              {headlines[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
