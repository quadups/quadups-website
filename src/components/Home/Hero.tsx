import { NavBar } from "../Layout/NavBar"


export const Hero = () => {
  return (
   
    <div  className=" bg-black w-full h-full bg-cover bg-center "
    style={{ backgroundImage: "url('/bg1.jpg')" }}>
       <div className="fade ">
        <NavBar/>
        <div className="hero text-white flex flex-col items-center h-full justify-center p-20">
          <h1 className="h1 font-bold text-5xl p-3">Innovative Tech products</h1>
          <p className="text-lg pb-6">creating products that whaatever whateveer you need to do Innovative Tech products</p>
          <button className="p-6 rounded-full bg-gradientz space-x-2 font-medium "> LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}
