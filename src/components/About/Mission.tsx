import { motion } from "framer-motion";

export const Mission = () => {
  return (
    <div className="p-10 sm:p-20 flex items-center justify-center flex-col bg-white dark:bg-[#1E1E1E]">
      <div className="mission p-10 sm:p-16 flex flex-col sm:flex-row justify-between w-full items-center">
        <MotionBox
          color={'rgb(135,10,129)'}
          title={'mission'}
          writeUp="is to empower businesses by creating revolutionary software and strong brands that drive digital growth and lasting impact."
          rotate={8} // Changed from "8deg" to a number
        />
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="title capitalize text-3xl font-semibold flex items-end text-black dark:text-white mt-6 sm:mt-0"
        >
          our mission
        </motion.h1>
      </div>

      <div className="vision p-10 sm:p-16 flex flex-col sm:flex-row justify-between w-full items-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="title capitalize text-3xl font-semibold flex items-end text-black dark:text-white mb-6 sm:mb-0"
        >
          our vision
        </motion.h1>
        <MotionBox
          color={'rgb(56,5,158)'}
          title={'vision'}
          writeUp="is to be a leading force in shaping the digital future, helping businesses thrive through technology and creative brand solutions."
          rotate={-8} // Changed from "-8deg" to a number
        />
      </div>
    </div>
  );
};

interface BoxProps {
  color: string;
  writeUp: string;
  title: string;
  rotate: number;
}

const MotionBox: React.FC<BoxProps> = ({ color, writeUp, title, rotate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: -rotate }} // Rotates in the opposite direction
      className="write-up w-full sm:w-96 py-8 px-4 border-black border-4 text-white shadow-lg"
      style={{ boxShadow: '7px 7px 0px #000', backgroundColor: color }}
    >
      Our <strong className="uppercase">{title}</strong> {writeUp}
    </motion.div>
  );
};
