import { motion } from "framer-motion";

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
    <div className="w-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full mx-auto py-16 bg-white relative sm:pt-56 pt-40 px-6 sm:px-32"
      >
        <motion.div
          className="mx-auto flex justify-between items-center flex-col sm:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Section on Left */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            variants={itemVariants}
          >
            <motion.h1
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-3xl sm:text-4xl font-bold text-black mb-2 sm:mb-4"
            >
              Proffering Solutions Tailored 
              for Your Digital Success
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text:lg sm:text-xl text-gray-700 mb-8"
            >
              From custom software to standout branding, we help you build,
              scale, and thrive in the digital world.
            </motion.p>
          </motion.div>

          {/* Image Section on Right */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.img
              src="/woman-server-hub.jpg"
              alt="Service Image"
              className="rounded-lg shadow-lg"
              width={500}
              whileHover={{ scale: 1.05 }}
              height={300}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Simple Section Below Hero */}
      <motion.section
        className="flex items-center justify-between bg-[#DADADA] p-6 sm:p-12 flex-col-reverse sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image on Left */}
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <motion.img
            src="/computer-code.jpg"
            alt="Service Description"
            className="rounded-lg shadow-lg"
            width={500}
            height={300}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Text on Right */}
        <motion.div
          className="w-full md:w-1/2 text-left ml-6 flex flex-col gap-3"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-black mb-2"
            variants={itemVariants}
          >
            Website Design & Development
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-4"
            variants={itemVariants}
          >
            We design and develop high-performing, responsive websites customized
            to your business needs. From corporate sites to e-commerce platforms,
            we create visually stunning and functional websites that drive
            engagement and conversions.
          </motion.p>

          {/* Call to Action Button */}
          <motion.a
            href="startaproject"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="py-2 px-[24px] items-center sm:mt-8 mt-2 mb-10 sm:mb-0 bg-[#870A81] w-72 sm:w-[400px] h-[40px] text-white font-semibold rounded-[20px] shadow-lg hover:bg-[#442042] flex justify-center"
          >
            Start a Web Project
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="flex items-center sm:justify-between justify-center bg-[#ECECEC] flex-col sm:flex-row sm:p-12 py-12 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text on Left */}
        <motion.div
          className="w-full md:w-1/2 text-left flex flex-col gap-3 sm:ml-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-black mb-2"
            variants={itemVariants}
          >
            Mobile Development
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-4"
            variants={itemVariants}
          >
            We build feature-rich, user-friendly, and scalable mobile
            applications that enhance customer experience and business efficiency.
            Reach your audience on the go with custom mobile apps for iOS and
            Android.
          </motion.p>

          {/* Call to Action Button */}
          <motion.a
            href="startaproject"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="py-2 px-[24px] items-center sm:mt-8 mb-8 bg-[#870A81] w-[400px] h-[40px] text-white font-semibold rounded-[20px] shadow-lg hover:bg-[#442042] flex justify-center"
          >
            Start a Mobile Development Project
          </motion.a>
        </motion.div>

        {/* Image on Right */}
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <motion.img
            src="/hand-holding-sm.jpg"
            alt="Service Description"
            className="rounded-lg shadow-lg sm:ml-14"
            width={500}
            whileHover={{ scale: 1.05 }}
            height={300}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="flex items-center justify-between bg-[#DADADA] sm:p-12 p-6 flex-col-reverse sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image on Left */}
        <motion.div className="w-full md:w-1/2 py-6 sm:py-0" variants={itemVariants}>
          <motion.img
            src="/user-experience.jpg"
            alt="Service Description"
            className="rounded-lg shadow-lg sm:ml-14"
            width={500}
            height={300}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Text on Right */}
        <motion.div
          className="w-full md:w-1/2 text-left flex flex-col gap-3 ml-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-black mb-2"
            variants={itemVariants}
          >
            UI/UX Design
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-4"
            variants={itemVariants}
          >
            Great design is more than just looks—it’s about usability. We create
            intuitive, visually compelling interfaces that improve user experience
            and make navigating your digital product effortless and enjoyable.
          </motion.p>

          {/* Call to Action Button */}
          <motion.a
            href="startaproject"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="py-2 px-[24px] items-center mt-8 bg-[#870A81] sm:w-[400px] w-72 h-[40px] text-white font-semibold rounded-[20px] shadow-lg hover:bg-[#442042] flex justify-center"
          >
            Start a UI/UX Project
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        className="flex items-center justify-between bg-[#ECECEC] sm:p-12 p-6 flex-col sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text on Left */}
        <motion.div
          className="w-full md:w-1/2 text-left flex flex-col gap-3 sm:ml-8 ml-0"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-black mb-2"
            variants={itemVariants}
          >
            Branding
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 sm:mb-4"
            variants={itemVariants}
          >
            Your brand is your identity, and we help you shape it. From logo
            design to brand strategy, we craft unique and cohesive branding that
            sets you apart and leaves a lasting impression.
          </motion.p>

          {/* Call to Action Button */}
          <motion.a
            href="startaproject"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="py-2 px-[24px] items-center mt-8 bg-[#870A81] sm:mb-0 mb-8 sm:w-[400px] w-72 h-[40px] text-white font-semibold rounded-[20px] shadow-lg hover:bg-[#442042] flex justify-center"
          >
            Start a Branding Project
          </motion.a>
        </motion.div>

        {/* Image on Right */}
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <motion.img
            src="/map.jpg"
            alt="Service Description"
            className="rounded-lg shadow-lg sm:ml-14"
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
        className="flex items-center justify-between bg-[#DADADA] sm:p-12 p-6 flex-col-reverse sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image on Left */}
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <motion.img
            src="/man-suit.jpg"
            alt="Service Description"
            className="rounded-lg shadow-lg sm:ml-14"
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
          className="w-full md:w-1/2 text-left flex flex-col gap-3 ml-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-black mb-2"
            variants={itemVariants}
          >
            Software Consultation
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-4"
            variants={itemVariants}
          >
            Not sure where to start? We provide expert software consultation to
            help you choose the right technologies, optimize processes, and
            develop a strategy that aligns with your business goals.
          </motion.p>

          {/* Call to Action Button */}
          <motion.a
            href="startaproject"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="py-2 px-[24px] items-center mt-8 mb-8 sma;mb-0 bg-[#870A81] sm:w-[400px] w-72 h-[40px] text-white font-semibold rounded-[20px] shadow-lg hover:bg-[#442042] flex justify-center"
          >
            Start Consultation
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Blockchain Services Section */}
      <motion.section
        className="flex items-center justify-between bg-[#ECECEC] sm:p-12 p-6 flex-col sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text on Right */}
        <motion.div
          className="w-full md:w-1/2 text-left flex flex-col gap-3 sm:ml-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-black mb-2"
            variants={itemVariants}
          >
            Blockchain Development & Smart Contracts
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-4"
            variants={itemVariants}
          >
            Harness the power of blockchain technology to build secure,
            decentralized applications. We offer smart contract development, NFT
            marketplaces, DeFi solutions, and blockchain integrations tailored
            to your business needs.
          </motion.p>

          {/* Call to Action Button ... is there a reason why you used a instead of Link? */}
          <motion.a
            href="startaproject"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="py-2 px-6 items-center mt-8 bg-[#870A81] sm:w-[400px] w-72 text-white font-semibold rounded-[20px] shadow-lg hover:bg-[#442042] flex justify-center text-center"
          >
            Start Blockchain Project
          </motion.a>
        </motion.div>

        {/* Image on Left */}
        <motion.div className="w-full md:w-1/2 flex justify-center mt-6 sm:mt-0" variants={itemVariants}>
          <motion.img
            src="/services-img-7.avif"
            alt="Blockchain Services"
            className="rounded-lg shadow-lg"
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