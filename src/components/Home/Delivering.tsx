import { Rocket, CheckCircle2 } from "lucide-react";

export const Delivering = () => {
  return (
    <div className="bg-[#1c1b1baa] text-white p-10 lg:p-20">
    {/* <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 lg:p-20"> */}
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Welcome to <span className="text-yellow-400">Technovo Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            We deliver works that exceed your expectations with innovative technology solutions, precision, and excellence.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="text-purple-300 w-6 h-6" />
              <span>Custom tech solutions tailored to your needs.</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="text-pink-400 w-6 h-6" />
              <span>High-quality deliverables on time, every time.</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="text-yellow-400 w-6 h-6" />
              <span>Experienced team with a customer-first approach.</span>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/body_img.png"
              alt="Delivering Excellence"
              className="rounded-lg shadow-lg max-w-md"
            />
            <div className="absolute -top-4 -right-4 bg-pink-500 rounded-full p-4">
              <Rocket className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};