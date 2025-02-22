import { Button } from "../ui/button";

interface ButtonProps {
  /** Callback function triggered when Contact button is clicked */
  onContactClick: () => void;
}

const HomeContact: React.FC<ButtonProps> = ({ onContactClick }) => {
  return (
    <div className="bg-white p-8 sm:p-12 dark:bg-[#1E1E1E]">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Company Description */}
        <div className="text-lg text-black font-normal lg:w-1/2 px-4 dark:text-white">
          <span className="font-bold">Company Name</span> is helping businesses & startups build, scale, and thrive in the digital world.
          From developing powerful software solutions to creating impactful brands, we combine innovation and strategy to bring ideas to life.
        </div>

        {/* Contact Section */}
        <div className="caption text-black font-semibold text-xl text-center mt-6 lg:mt-0 lg:text-right">
          <p className="mb-3 dark:text-white">Have a project in mind?</p>
          <Button 
            onClick={onContactClick} 
            className="bg-[rgb(135,10,129)] text-white text-base py-2 px-4 rounded-full"
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
