import { IceCream2Icon, Star } from 'lucide-react';

interface ServiceDetailProps {
    title: string;
    details: string[];
}

const Service = ({ title, details }: ServiceDetailProps) => {
    return (
        <div className="service relative border-[.5px] rounded-lg p-6 border-gray-500 w-full h-auto m-6 bg-white shadow-md">
            <div className="title font-semibold text-xl flex items-center">
                <IceCream2Icon className="text-[rgb(135,10,129)]" />
                <h2 className="px-2">{title}</h2>
            </div>

            <div className="items">
                <ul>
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-center p-1 pl-6">
                            <Star className="px-1 text-[rgb(135,10,129)]" />
                            <p className="px-1">{detail}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="absolute design ml-auto p-1 bg-[rgb(38,0,63)] rounded-tl-lg rounded-br-lg w-8 h-6 -right-0 bottom-0"></div>
        </div>
    );
};

export default Service;
