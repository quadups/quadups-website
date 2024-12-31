import { Band } from "../components/Home/Band"
import { Delivering } from "../components/Home/Delivering"
import { Hero } from "../components/Home/Hero"


export const Home = () => {
  return (
    <div className=" w-screen bg-black">
      <Hero />
      <Band />
      <Delivering />
    </div>
  )
}
