import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animations for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceComponent = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full mx-auto py-16 bg-white relative pt-56 px-4 sm:px-8 md:px-16 lg:px-32 dark:bg-[#1E1E1E]"
      >
        <motion.div
          className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Section */}
          <motion.div
            className="w-full sm:w-full md:w-1/2 text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-black mb-4 dark:text-white"
            >
              Proffering Solutions Tailored <br />
              for Your Digital Success
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mb-8 dark:text-white"
            >
              From custom software to standout branding, we help you build,
              scale, and thrive in the digital world.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full sm:w-full md:w-1/2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.img
              src="/services-img-1.avif"
              alt="Service Image"
              className="rounded-lg shadow-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Web Development Section */}
      <motion.section
        className="flex flex-col sm:flex-row items-center justify-between bg-[#DADADA] p-6 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-12 dark:bg-[#2E2E2E]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div className="w-full sm:w-full md:w-1/2" variants={itemVariants}>
          <motion.img
            src="/services-img-2.avif"
            alt="Web Development"
            className="rounded-lg shadow-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full sm:w-full md:w-1/2 text-left space-y-4 md:space-y-6"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white"
          >
            Website Design & Development
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-white"
          >
            We design and develop high-performing, responsive websites customized
            to your business needs. From corporate sites to e-commerce platforms,
            we create visually stunning and functional websites that drive
            engagement and conversions.
          </motion.p>

          <Link
            to="/startaproject"
            className="inline-block py-3 px-6 md:px-8 bg-[#870A81] text-white font-semibold rounded-full shadow-lg hover:bg-[#442042] transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-lg"
          >
            Start a Web Project
          </Link>
        </motion.div>
      </motion.section>

      {/* Mobile Development Section */}
      <motion.section
        className="flex flex-col sm:flex-row items-center justify-between bg-[#ECECEC] p-6 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-12 dark:bg-[#3A3A3A]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <motion.div
          className="w-full sm:w-full md:w-1/2 text-left space-y-4 md:space-y-6"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white"
          >
            Mobile Development
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-white"
          >
            We build feature-rich, user-friendly, and scalable mobile
            applications that enhance customer experience and business efficiency.
            Reach your audience on the go with custom mobile apps for iOS and
            Android.
          </motion.p>

          <Link
            to="/startaproject"
            className="inline-block py-3 px-6 md:px-8 bg-[#870A81] text-white font-semibold rounded-full shadow-lg hover:bg-[#442042] transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-lg"
          >
            Start a Mobile Dev. Project
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div className="w-full sm:w-full md:w-1/2" variants={itemVariants}>
          <motion.img
            src="/service-img-3.avif"
            alt="Mobile Development"
            className="rounded-lg shadow-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.section>

      {/* Section 3 - UI/UX Design */}
      <motion.section
        className="flex flex-col sm:flex-row items-center justify-between bg-[#DADADA] p-6 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-12 dark:bg-[#2E2E2E]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div className="w-full sm:w-full md:w-1/2" variants={itemVariants}>
          <motion.img
            src="/services-img-5.avif"
            alt="UI/UX Design"
            className="rounded-lg shadow-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full sm:w-full md:w-1/2 text-left space-y-4 md:space-y-6"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white"
          >
            UI/UX Design
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-white"
          >
            Great design is more than just looks—it's about usability. We create
            intuitive, visually compelling interfaces that improve user experience
            and make navigating your digital product effortless and enjoyable.
          </motion.p>

          <Link
            to="/startaproject"
            className="inline-block py-3 px-6 md:px-8 bg-[#870A81] text-white font-semibold rounded-full shadow-lg hover:bg-[#442042] transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-lg"
          >
            Start a UI/UX Project
          </Link>
        </motion.div>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        className="flex flex-col sm:flex-row items-center justify-between bg-[#ECECEC] p-8 sm:p-10 md:p-12 dark:bg-[#3A3A3A]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text on Left */}
        <motion.div
          className="w-full sm:w-3/4 md:w-1/2 text-left flex flex-col gap-3 sm:ml-4 md:ml-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white"
            variants={itemVariants}
          >
            Branding
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-white"
            variants={itemVariants}
          >
            Your brand is your identity, and we help you shape it. From logo
            design to brand strategy, we craft unique and cohesive branding that
            sets you apart and leaves a lasting impression.
          </motion.p>

          {/* Call to Action Button */}
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <br />
            <Link
              to="/startaproject"
              className="pinline-block py-3 px-6 md:px-8 bg-[#870A81] text-white font-semibold rounded-full shadow-lg hover:bg-[#442042] transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-lg"
            >
              Start a Branding Project
            </Link>
          </motion.span>
        </motion.div>

        {/* Image on Right */}
        <motion.div className="w-full mr-5 sm:w-3/4 md:w-1/2 mt-8 sm:mt-0" variants={itemVariants}>
          <motion.img
            src="/services-img-4.avif"
            alt="Service Description"
            className="rounded-lg shadow-lg sm:ml-8 md:ml-14 w-full sm:w-[400px] md:w-[500px]"
            width={500}
            height={300}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.section>

      {/* Section 5 */}
      <motion.section
        className="flex flex-col sm:flex-row items-center justify-between bg-[#DADADA] dark:bg-[#2E2E2E] p-8 sm:p-10 md:p-12 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image on Left */}
        <motion.div className="w-full sm:w-1/2 md:w-1/2 p-4" variants={itemVariants}>
          <motion.img
            src="/services-img-6.avif"
            alt="Service Description"
            className="rounded-lg shadow-lg w-full sm:w-[400px] md:w-[500px]"
            width={500}
            whileHover={{ scale: 1.05 }}
            height={300}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Text on Right */}
        <motion.div
          className="w-full sm:w-1/2 md:w-1/2 text-left flex flex-col gap-3 sm:pl-8 md:pl-12 mt-8 sm:mt-0 p-4 mr-4"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white"
            variants={itemVariants}
          >
            Software Consultation
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-white"
            variants={itemVariants}
          >
            Not sure where to start? We provide expert software consultation to
            help you choose the right technologies, optimize processes, and
            develop a strategy that aligns with your business goals.
          </motion.p>

          {/* Call to Action Button */}
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <br />
            <Link
              to="/startaproject"
              className="pinline-block py-3 px-6 md:px-8 bg-[#870A81] text-white font-semibold rounded-full shadow-lg hover:bg-[#442042] transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-lg"
            >
              Start Consultation
            </Link>
          </motion.span>
        </motion.div>
      </motion.section>

      {/* Blockchain Services Section */}
      <motion.section
        className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#ECECEC] dark:bg-[#3A3A3A] p-8 sm:p-10 md:p-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text on Right */}
        <motion.div
          className="w-full sm:w-3/4 md:w-1/2 text-left flex flex-col gap-3 sm:ml-4 md:ml-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white"
            variants={itemVariants}
          >
            Blockchain Development & Smart Contracts
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-white"
            variants={itemVariants}
          >
            Harness the power of blockchain technology to build secure,
            decentralized applications. We offer smart contract development, NFT
            marketplaces, DeFi solutions, and blockchain integrations tailored
            to your business needs.
          </motion.p>

          {/* Call to Action Button */}
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <br />
            <Link
              to="/startaproject"
              className="inline-block py-3 px-6 md:px-8 bg-[#870A81] text-white font-semibold rounded-full shadow-lg hover:bg-[#442042] transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-lg"
            >
              Start Blockchain Project
            </Link>
          </motion.span>
        </motion.div>

        {/* Image on Left */}
        <motion.div className="w-full sm:w-3/4 md:w-1/2 flex justify-center mt-8 sm:mt-0" variants={itemVariants}>
          <motion.img
            src="/services-img-7.avif"
            alt="Blockchain Services"
            className="rounded-lg shadow-lg w-full sm:w-[400px] md:w-[500px]"
            width={500}
            height={300}
            initial={{ opacity: 0, x: -50 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ServiceComponent;