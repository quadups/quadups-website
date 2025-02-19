export const Delivering = () => {
  return (
    <div className=" text-black p-10 pt-24">

      <div className="max-w-screen-xl mx-auto ">
        {/* title Section */}
        <div className="lg:w-full text-center">
          <h1 className="text-3xl lg:text-3xl font-[600]" style={{lineHeight: '3.rem'}}>
            We create brands and <span className="bg-[rgb(135,10,129)] text-white px-3 rounded-full">digital Solutions</span> that <br/> help <span className="bg-[rgb(135,10,129)] text-white px-3 rounded-full">businesses</span> stand out and grow
          </h1>

       {/* text sect */}
        <div className="p-14 pb-0 flex justify-start w-full ">
          <div className="main-img m-4 mb-0 w-[28%] h-96 ">
          <img className="w-full h-full object-cover rounded-2xl" src="/bg1.jpg" alt="Background Image" />

          </div>
          <div className="pair flex-1 m-4 mb-0 w-[60%]">
            <div className="writ-up text-left text-sm p-6 w-5/6 ">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsa suscipit perspiciatis enim quia nisi tempora? Omnis commodi quis in voluptas nemo eligendi doloribus, cumque ducimus laborum error quae neque voluptate culpa provident. <br/> &nbsp; Maiores nam porro harum aperiam et molestiae quas sit assumenda nihil, non consequuntur illum libero ipsa! Perspiciatis debitis, excepturi tenetur illo deleniti nemo quasi rem officia doloremque sapiente corporis perferendis ad quidem quod eaque quis?
            </div>
            <div className="mini-img p-6 pb-0 w-[49%] h-56 ml-auto">
            <img className="w-full h-full object-cover rounded-2xl" src="/bg3.jpg" alt="Background Image" />
            </div>
          </div>
        </div>
         
      </div>
    </div>
  </div>
  );
};