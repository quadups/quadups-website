import { Button } from "../ui/button"

interface ButtonProps {
  /** Callback function triggered when Contact button is clicked */
  onContactClick: () => void;
}


const HomeContact : React.FC<ButtonProps> = ({ onContactClick }) => {
  
  return (
    <div className="p-12 flex justify-between px-32 bg-white">
      <div className="text-lg w-1/2 px-12 text-black font-normal">
        <span className="font-bold">Company Name</span> is helping businesses & startups build, scale, and thrive in the digital world.
        From developing powerful software solutions to creating impactful brands, we combine innovation and strategy to bring ideas to life.
      </div>
      <div className="caption text-white font-semibold text-2xl">Have a project in mind?
        <Button onClick={onContactClick} className="bg-[rgb(135,10,129)] text-white text-[18px] py-[8px] px-[10px] rounded-[20px] w-[105px] h-[35px]">Contact us</Button></div>
    </div>
  )
}

export default HomeContact