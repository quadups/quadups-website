import {  ArrowUpRight, IceCream2Icon, Star } from "lucide-react"
import { Link } from "react-router-dom"


const ServiceOptions = () => {
  return (
    <div className='bg-[rgb(248,248,248)] p-20 px-28 '>
        <div className="w-full flex justify-start pb-10">
            <div className="main w-[60%]">
                <div className="text w-[63%] py-6">
                <h1 className="text-4xl font-bold p-3 pl-0 capitalize">Explore unique software <br/> solutions</h1>
                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, reprehenderit totam, optio dolore esse minima nostrum consectetur facilis aliquam soluta quos molestias adipisci veritatis aperiam voluptate consequuntur sunt mollitia aspernatur!</p>
                </div>
            <div className="services py-2">
                <Service />
                <Service />
            </div>
            </div>
            <div className="side w-[30%]">
            <Service />
            <Service />
            </div>
        </div>
        <div className="mx-auto flex justify-center">
            <Link className="p-3 text-sm bg-[rgb(38,0,63)] text-white rounded-full " to={'/services'}> View All Services <ArrowUpRight className="inline"/></Link>
        </div>
      
    </div>
  )
}

const Service = () => { 
return (
    // <div className="service inline-block border border-4 rounded-lg p-6 border-[rgb(135,10,129)]">
    <div className="service relative inline-block border-[.5px] rounded-lg p-6 border-gray-500 w-[19rem] h-[12rem] m-6">

        <div className="title font-[600] text-xl flex">
            <IceCream2Icon className="text-[rgb(135,10,129)]" />
            <h2 className="px-2">UI/UX Design</h2>
        </div>

        <div className="items">
            <ul>
                <li className="flex p-1 pl-6"><Star className="px-1 text-[rgb(135,10,129)]" /> <p className="px-1">Lorem, ipsum dolor.</p></li>
                <li className="flex p-1 pl-6"><Star className="px-1 text-[rgb(135,10,129)]" /> <p className="px-1">Lorem ipsum dolor sit.</p></li>
                <li className="flex p-1 pl-6"><Star className="px-1 text-[rgb(135,10,129)]" /> <p className="px-1">Lorem ipsum dolor sit.</p></li>
            </ul>
        </div>
        <div className="absolute design ml-auto p-1 bg-[rgb(38,0,63)] rounded-tl-lg rounded-br-lg w-8 h-6 -right-0 bottom-0">

        </div>
    </div>
)
}

export default ServiceOptions