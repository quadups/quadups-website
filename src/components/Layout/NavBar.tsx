import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="">
        <ul className="flex p-8 justify-center ">
            <li className="px-10 py-3 uppercase font-semibold text-white text-md">
                <Link to={'/about'}>about us</Link>
            </li>
            <li className="p-10 py-3 uppercase font-semibold text-white text-md">
                <Link to={'/team'}>team</Link>
            </li>
            <li className="px-10 text-gradient text-4xl font-semibold ">
                <Link to={'/'}>TechNovo</Link>
            </li>
            <li className="px-10 py-3 uppercase font-semibold text-white text-md">
                <Link to={'/services'}>services</Link>
            </li>
            <li className="px-10 py-3 uppercase font-semibold text-white text-md">
                <Link to={'/contact'}>contact us</Link>
            </li>
        </ul>
    </div>
  )
}
