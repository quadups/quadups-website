import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white flex justify-between px-24 border-t border-gray-700 p-4 ">

        <div className=" text-center  text-[17px] text-gray-700">
          &copy; CompanyName, {new Date().getFullYear()}
        </div>
        <div className="flex justify-evenly space-x-5 text-center text-[17px] text-gray-700">
          <Link to={'https://unscart.com/extension/color-picker/'}><Github /></Link>
          <Link to={'https://unscart.com/extension/color-picker/'}><Linkedin /></Link>
          <Link to={'https://unscart.com/extension/color-picker/'}><Twitter /></Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
