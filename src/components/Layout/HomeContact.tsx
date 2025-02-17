import { Link } from "react-router-dom"

const HomeContact = () => {
  return (
    <div className="p-12 flex justify-between px-32">
        <div className="text-lg w-1/2 px-12">
        <strong>Company Name</strong> is helping businesses & startups build, scale, and thrive in the digital world.
        From developing powerful software solutions to creating impactful brands, we combine innovation and strategy to bring ideas to life.
        </div>
        <div className="caption font-semibold text-2xl">Have a project in mind? <Link to='contactus' className="bg-[rgb(135,10,129)] text-white text-[18px] p-2 rounded-full">Contact us</Link></div>
    </div>
  )
}

export default HomeContact