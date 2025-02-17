import { motion } from 'framer-motion';

const ServiceComponent = () => {
    return (
        <div className="w-screen">
            {/* Hero Section with White Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full mx-auto py-16 bg-white relative pt-56 px-32"
            >
                <div className="mx-auto flex justify-between items-center">
                    {/* Text Section on Left */}
                    <div className="w-full md:w-1/2 text-left">
                        <motion.h1
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-black mb-4"
                        >
                            Proffering Solutions Tailored <br />
                            for Your Digital Success
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="text-xl text-gray-700 mb-8"
                        >
                            From custom software to standout branding, we help you build, scale, and
                            thrive in the digital world.
                        </motion.p>
                    </div>

                    {/* Image Section on Right */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Service Image"
                            className="rounded-lg shadow-lg"
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
            </motion.div>

            {/* Simple Section Below Hero */}
            <section className="flex items-center justify-between bg-[#DADADA] p-8">
                {/* Image on Left */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="Service Description"
                        className="rounded-lg shadow-lg"
                        width={500}
                        height={300}
                    />
                </div>

                {/* Text on Right */}
                <div className="w-full md:w-1/2 text-left ml-6">
                    <h2 className="text-2xl font-bold text-black mb-2">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-gray-600">
                        We offer cutting-edge technology solutions tailored to your business needs. With a team of experts, we ensure that your business remains ahead of the curve.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ServiceComponent;
