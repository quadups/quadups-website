import { motion } from "framer-motion";
import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Monye Valerian",
      role: "Chief Technical Officer",
      company: "Kotaz Studios",
      image: "",
      quote:
        "Partnering with Quadupsltd felt like flipping a switch. Suddenly, everything just worked. Their creative approach and tech know-how gave our business the boost it needed. Ideas became reality faster than we imagined. They didn’t just support our growth, they accelerated it.",
    },
    {
      id: 2,
      name: "Aisha Bello",
      role: "Head of Product",
      company: "BrightSpark Labs",
      image: "",
      quote:
        "Quadups brought our vision to life with speed and precision. Their team’s dedication and innovative mindset made the entire process seamless. We saw results almost instantly, and our users love the new platform.",
    },
    {
      id: 3,
      name: "David Mensah",
      role: "Founder",
      company: "Greenbyte Solutions",
      image: "",
      quote:
        "From concept to launch, Quadups was the perfect partner. Their expertise and proactive support helped us overcome every challenge. Our business grew faster than we thought possible, thanks to their commitment.",
    },
    {
      id: 4,
      name: "Fatima Yusuf",
      role: "Lead Engineer",
      company: "Skyware Digital",
      image: "",
      quote:
        "Quadups didn’t just deliver software, they delivered confidence. Their team’s proactive communication and technical depth made our launch smooth and stress-free. We’re excited for future projects together.",
    },
    {
      id: 5,
      name: "Emeka Okafor",
      role: "Operations Manager",
      company: "BluePeak Ventures",
      image: "",
      quote:
        "Working with Quadups was a breath of fresh air. Their solutions were tailored to our needs, and their support was always available. Our workflow is now faster and more reliable than ever.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full py-16 px-5 sm:px-20 bg-gray-50 dark:bg-[#121212]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
          {/* <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-indigo-800 mx-auto mb-6"
          ></motion.div> */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discover how we've helped businesses transform their ideas into successful digital products.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg"
            >
              <div className="relative min-w-[280px] md:w-1/3">
                <div className="absolute -top-4 -left-4 text-4xl text-purple-600 opacity-50">
                  <FaQuoteLeft />
                </div>
                {/* Replace Avatar section with initials fallback only */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-900 shadow-md mb-4 flex items-center justify-center bg-purple-50 dark:bg-purple-900">
                    <span className="text-4xl font-bold text-purple-700 dark:text-purple-300">
                      {testimonials[activeIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-[#2D2D2D] text-purple-700 dark:text-purple-400 shadow hover:bg-purple-50 dark:hover:bg-[#3D3D3D] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-purple-700 dark:bg-purple-500 w-6" 
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-[#2D2D2D] text-purple-700 dark:text-purple-400 shadow hover:bg-purple-50 dark:hover:bg-[#3D3D3D] transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};