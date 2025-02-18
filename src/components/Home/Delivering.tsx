export const Delivering = () => {
  return (
    <div className="text-black p-10 pt-24 bg-white">

      <div className="max-w-screen-xl mx-auto ">
        {/* title Section */}
        <div className="lg:w-full text-center">
          <h1 className="text-3xl lg:text-3xl font-[600]" style={{ lineHeight: '8.rem' }}>
            We create <span className="bg-[rgb(135,10,129)] text-white px-3 py-1 rounded-full">digital Solutions</span> that <br />
            <div className="mt-3"></div>
             help <span className="bg-[rgb(135,10,129)] text-white px-3 py-1 rounded-full">brands</span> and <span className="bg-[rgb(135,10,129)] text-white px-3 py-1 rounded-full">businesses</span> stand out and grow
          </h1>

          {/* text sect */}
          <div className="p-14 pb-0 flex justify-start w-full ">
            <div className="main-img m-4 mb-0 w-[28%] h-96 ">
              <img className="w-full h-full object-cover rounded-2xl" src="/home-img-1.jpeg" alt="Background Image" />

            </div>
            <div className="pair flex-1 m-4 mb-0 w-[60%]">
              <div className="writ-up text-left text-sm p-6 w-5/6 ">
                We build digital solutions that make businesses more visible and successful. From websites and mobile apps to user-friendly designs and branding, we help companies create a strong online presence. Our goal is to turn ideas into real solutions that improve efficiency, connect with audiences, and drive growth in today’s digital world.              </div>
              <div className="mini-img p-6 pb-0 w-[49%] h-56 ml-auto">
                <img className="w-full h-full object-cover rounded-2xl" src="/home-img-2.png" alt="Background Image" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};