import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { NavBar } from "./NavBar"

const AppLayout = () => {
  return (
    <div className="bg-black">
      <NavBar />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout