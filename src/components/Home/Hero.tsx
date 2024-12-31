import { NavBar } from "../Layout/NavBar"


export const Hero = () => {
  return (
   
    <div  className=" bg-black w-full bg-cover bg-center "
    style={{ backgroundImage: "url('/bg1.jpg')", height: '85dvh'}}>
       <div className="fade ">
        <NavBar/>
        <div className="hero text-white flex flex-col items-center h-full justify-center p-20">
          <h1 className="h1 font-bold text-5xl p-3">Innovative Software Solutions</h1>
          <p className="text-lg pb-6 px-20">Transforming your ideas into cutting-edge software services.</p>
          <button style={{backgroundColor: ''}} className="p-4 rounded-md border-2 border- border-white space-x-2 font-medium "> LEARN MORE </button>
        </div>
      </div>
    </div>
  )
}
