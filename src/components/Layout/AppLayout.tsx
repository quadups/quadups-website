import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
// import { NavBar } from "./NavBar"

const AppLayout = () => {
  return (
    <div>
      {/* <NavBar /> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout