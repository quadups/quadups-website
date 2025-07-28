import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-cover bg-center relative min-h-[100vh] md:min-h-[120vh] flex items-center justify-center flex-col px-6 sm:px-12"
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
            At <b>Quadups Limited</b>, we don’t just build software, we build startups.

            We specialize in Startup-as-a-Service (SaaSaaS), a rare model and term which we hope to popularize and own designed to help founders and businesses go from idea to launch with speed, clarity, and technical excellence. Acting as your technical co-founder, product team, and innovation partner, we provide full-stack support across every phase of your journey.

            From validating your idea and designing scalable system architecture to building MVPs, launching products, and iterating toward growth, we handle the tech so you can focus on vision and traction.

            Whether it's web and mobile apps, cloud systems, AI automation, or blockchain solutions, we combine cutting-edge development with strategic insight to turn bold ideas into market-ready products.

            At Quadups, we empower the next wave of founders, by providing the tools, talent, and technology to build startups that scale.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;
