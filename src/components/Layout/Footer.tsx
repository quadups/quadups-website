import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact";

const Footer = () => {
  return (
    <div>
      <HomeContact />
      <footer className="bg-white flex justify-between px-24 border-t border-gray-700 p-4 ">

        <div className=" text-center  text-[17px] text-gray-700">
          &copy; CompanyName, {new Date().getFullYear()}
        </div>
        <div className="flex justify-evenly space-x-5 text-center text-[17px] text-gray-700">
          <Link to={'https://unscart.com/extension/color-picker/'} className="text-[rgb(135,10,129)]"><Github /></Link>
          <Link to={'https://unscart.com/extension/color-picker/'} className="text-[rgb(135,10,129)]"><Linkedin /></Link>
          <Link to={'https://unscart.com/extension/color-picker/'} className="text-[rgb(135,10,129)]"><Twitter /></Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
