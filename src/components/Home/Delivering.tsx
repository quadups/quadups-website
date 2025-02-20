import { motion } from "framer-motion";

export const Delivering = () => {
  return (
    <div className="text-black p-10 pt-24 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* title Section */}
        <div className="lg:w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-3xl font-[600] leading-relaxed md:leading-[9rem]"
          >
            We create <span className="bg-[rgb(135,10,129)] text-white px-3 py-1 rounded-full">digital Solutions</span> that <br />
            <div className="mt-3"></div>
            help <span className="bg-[rgb(135,10,129)] text-white px-3 py-1 rounded-full">brands</span> and <span className="bg-[rgb(135,10,129)] text-white px-3 py-1 rounded-full">businesses</span> stand out and grow
          </motion.h1>

          {/* text sect */}
          <div className="p-6 md:p-14 pb-0 flex flex-col md:flex-row justify-start w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="main-img m-4 mb-0 w-full md:w-[28%] h-64 md:h-96"
            >
              <img className="w-full h-full object-cover rounded-2xl" src="/coworkers-looking-monitor.jpg" alt="Background Image" />
            </motion.div>
            <div className="pair flex-1 m-4 mb-0 w-full md:w-[60%]">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="writ-up text-left text-sm p-4 md:p-6 w-full md:w-5/6"
              >
                We build digital solutions that make businesses more visible and successful. From websites and mobile apps to user-friendly designs and branding, we help companies create a strong online presence. Our goal is to turn ideas into real solutions that improve efficiency, connect with audiences, and drive growth in today’s digital world.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mini-img p-4 md:p-6 pb-0 w-full md:w-[49%] h-40 md:h-56 ml-auto"
                whileHover={{ scale: 1.05 }}
              >
                <img className="w-full h-full object-cover rounded-2xl" src="/home-img-2.webp" alt="Background Image" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
