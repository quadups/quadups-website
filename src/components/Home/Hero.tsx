import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" w-full h-screen bg-cover bg-center"
     
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

        {/* Hero Content */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col pt-32 items-center justify-center flex-1 text-center text-white "
        >
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="font-black text-xl md:text-xl lg:text-5xl tracking-wide"
          >
            Innovative Software Solutions
          </motion.h1>
          <motion.p
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-md lg:text-lg mt-1 tracking-wide"
          >
            Transforming your ideas into simple, effective software that drives real results.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
