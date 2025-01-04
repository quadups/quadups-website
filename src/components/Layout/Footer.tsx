import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-8">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#674cc4]">TechNovo Solutions.</h3>
            <p className="mt-3 text-sm text-gray-400">
              Delivering cutting-edge tech solutions with excellence and innovation.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-[#fc5185] text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-[#fc5185] hover:underline transition">About Us</a></li>
              <li><a href="/team" className="hover:text-[#fc5185] hover:underline transition">Team</a></li>
              <li><a href="/services" className="hover:text-[#fc5185] hover:underline transition">Services</a></li>
              <li><a href="/contact-us" className="hover:text-[#fc5185] hover:underline transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="font-semibold text-[#ffe500] text-lg">Contact Us</h4>
            <p className="mt-3 text-sm">Email: info@techservices.com</p>
            <p className="mt-1 text-sm">Phone: +123-456-7890</p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-[#7e5afb] hover:text-[#674cc4] hover:scale-110 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-[#7e5afb] hover:text-[#674cc4] hover:scale-110 transition">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-[#7e5afb] hover:text-[#674cc4] hover:scale-110 transition">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TechNovo Solutions All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
