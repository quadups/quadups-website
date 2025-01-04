import { motion } from "framer-motion";
import { NavBar } from "../Layout/NavBar";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-black w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black opacity-50"
      />
      {/* Content */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col h-full"
      >
        {/* Navbar */}
        <NavBar />

        {/* Hero Content */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center flex-1 text-center text-white px-6"
        >
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="font-extrabold text-4xl md:text-6xl lg:text-7xl"
          >
            Innovative Software Solutions
          </motion.h1>
          <motion.p
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl"
          >
            Transforming your ideas into cutting-edge software services.
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-8 px-8 py-4 rounded-md border-2 border-white font-medium text-lg hover:bg-white hover:text-black transition"
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
