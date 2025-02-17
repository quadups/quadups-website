import { motion } from 'framer-motion';


const AboutHero = () => {
  return (
    <div>
         <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} 
    className="w-full mx-auto  bg-cover bg-center relative h-screen flex items-center justify-center flex-col"
    style={{ backgroundImage: `url('/bg2.jpg')` }} 
  >
    <div className=" mx-auto ">
      {/* Section Title */}
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-white mb-5"
      >
        About Us
      </motion.h1>

      {/* Description Section */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center text-lg text-white max-w-4xl mx-auto mb-10 py-6 px-8 rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[50px]"
        style={{backgroundColor: 'rgba(225,225,225, 0.1)'}}
      >
       We are a technology-driven company dedicated to helping businesses build, scale, and thrive in the digital world. From developing powerful software solutions to creating impactful brands, we combine innovation and strategy to bring ideas to life. Whether it's websites, mobile apps, UI/UX design, or software consultation, we provide solutions that enhance user experience and drive business growth. Our mission is simple-turn your vision into reality with technology that works.
      </motion.p>

      {/* Central Image Section */}
      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-10"
      >
        <div className="relative w-full max-w-3xl h-80 md:h-96 rounded-lg shadow-lg overflow-hidden">
          <img
            src="/meeting.png" // Ensure this path points to your public folder or correct image path
            alt="Team Meeting"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </motion.div> */}

      {/* Info Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutDetails.map((detail, index) => (
          <AboutCard
            key={index}
            icon={detail.icon}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </div> */}
    </div>
  </motion.div>
  </div>
  )
}

export default AboutHero