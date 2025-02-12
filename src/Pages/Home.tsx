import { NavBar } from "@/components/Layout/NavBar"
import { Band } from "../components/Home/Band"
import { Delivering } from "../components/Home/Delivering"
import { Hero } from "../components/Home/Hero"
import Footer from "@/components/Layout/Footer"
import ServiceOptions from "@/components/Home/ServiceOptions"


export const Home = () => {
  return (
    <div className=" w-screen ">
      <div className="relative hero w-full h-screen bg-cover bg-center"  style={{ backgroundImage: "url('/bg1.jpg')" }}>
        <NavBar />
        <Hero />
      </div>
      <Band />
      <Delivering />
      <ServiceOptions />
      <Footer />
    </div>
  )
}
