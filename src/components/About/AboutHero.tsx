import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full mx-auto bg-cover bg-center relative h-screen flex items-center justify-center flex-col"
        style={{ backgroundImage: `url('/bg2.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#110029E5] opacity-[89%] "></div>

        {/* Content */}
        <div className="relative mx-auto text-center">
          {/* Section Title */}
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-5"
          >
            About Us
          </motion.h1>

          {/* Description Section */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-lg text-white max-w-4xl mx-auto mb-10 py-6 px-8 rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[50px]"
            style={{ backgroundColor: "rgba(225,225,225, 0.1)" }}
          >
            We are a technology-driven company dedicated to helping businesses
            build, scale, and thrive in the digital world. From developing
            powerful software solutions to creating impactful brands, we combine
            innovation and strategy to bring ideas to life. Whether it's
            websites, mobile apps, UI/UX design, or software consultation, we
            provide solutions that enhance user experience and drive business
            growth. Our mission is simple—turn your vision into reality with
            technology that works.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;
