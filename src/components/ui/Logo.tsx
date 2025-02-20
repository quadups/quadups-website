import { Link } from "react-router-dom"


interface LogoProps {
    /** Callback function triggered when Contact button is clicked */
    isServicePage: boolean
  }

  export const Logo = ({ isServicePage }: LogoProps) => {
  return (
    //  {/* Company Logo/Brand - Links to homepage */}
     <Link
     to="/"
     className={`text-lg sm:text-xl md:text-2xl font-extrabold tracking-wider  ${isServicePage ? "text-black" : "text-white"}`}
   >
     CompanyName
   </Link>
  )
}
