import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Service from '../Services/ServiceBox';

const ServiceOptions = () => {
    const services = [
        {
            title: 'Website Design & Development',
            details: ['Building dynamic websites.', 'Custom web solutions.', 'Visually appealing designs.']
        },
        {
            title: 'Mobile App Development',
            details: ['Cross-platform mobile apps.', 'Intuitive user interfaces.', 'Seamless app performance.']
        },
        {
            title: 'UI/UX Design',
            details: ['Intuitive user interfaces.', 'User research insights.', 'Prototyping and wireframing.']
        },
        {
            title: 'Software Consultation',
            details: ['Expert software guidance.', 'Choosing right technologies.', 'Optimizing software architecture.']
        },
        {
            title: 'Blockchain Development & Smart Contracts',
            details: ['Developing dApps solutions.', 'Secure smart contracts.', 'Blockchain integrations globally.']
        }
    ];

    return (
        <div className='bg-[rgb(248,248,248)] p-20 px-28'>
            <div className="w-full flex flex-col lg:flex-row pb-10">
                {/* Main Content */}
                <div className="main lg:w-[60%] w-full">
                    <div className="text w-full lg:w-[63%] py-6">
                        <h1 className="text-4xl font-bold p-3 pl-0 capitalize">
                            Explore unique software <br /> solutions
                        </h1>
                        <p className="text-sm">
                            We build digital solutions that make businesses more visible and successful. 
                            From websites and mobile apps to user-friendly designs and branding, 
                            we help companies create a strong online presence. Our goal is to turn 
                            ideas into real solutions that improve efficiency, connect with audiences, 
                            and drive growth in today’s digital world.
                        </p>
                    </div>

                    {/* Service Boxes in Grid Layout */}
                    <div className="services py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                        {services.slice(1).map((service, index) => (
                            <Service key={index} title={service.title} details={service.details} />
                        ))}
                    </div>
                </div>

                {/* Sidebar Service Box (First Service) */}
                <div className="side lg:w-[30%] w-full">
                    <Service title={services[0].title} details={services[0].details} />
                </div>
            </div>

            {/* View All Services Button */}
            <div className="mx-auto flex justify-center">
                <Link className="p-3 text-sm bg-[rgb(38,0,63)] text-white rounded-full flex items-center gap-2" to={'/services'}>
                    View All Services <ArrowUpRight />
                </Link>
            </div>
        </div>
    );
};

export default ServiceOptions;
