import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-cover bg-center relative min-h-[80vh] md:min-h-screen flex items-center justify-center flex-col px-6 sm:px-12"
        style={{ backgroundImage: `url('/colleagues-working.jpg')` }}
      >
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.89 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-[#110029]"
        ></motion.div>

        {/* Content */}
        <div className="relative text-center max-w-4xl">
          {/* Section Title */}
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            About Us
          </motion.h1>

          {/* Description Section */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="text-base md:text-lg text-white max-w-3xl mx-auto p-6 md:p-8 rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[50px] leading-relaxed"
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
