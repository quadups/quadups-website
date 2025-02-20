interface ButtonProps {
  /** Callback function triggered when Contact button is clicked */
  onContactClick: () => void;
}

export const FooterBand: React.FC<ButtonProps> = ({ onContactClick }) => {
  return (
    <div
      style={{ backgroundImage: "url('/bg1.jpg')" }}
      className="relative w-full min-h-[250px] md:min-h-[300px] bg-cover bg-center text-white flex items-center justify-center px-6 md:px-12"
    >
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-[#110029E3] opacity-[89%]"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
          Let’s transform your ideas into an <br className="hidden sm:block" />
          effective software that drives real results
        </h1>
        <div className="mt-6 md:mt-10">
          <button
            onClick={onContactClick}
            className="bg-[#870A81] hover:bg-[#3c1b3a] w-[140px] h-[40px] text-white font-medium rounded-[20px] transition-all duration-300 transform hover:scale-105"
          >
            Reach out to us
          </button>
        </div>
      </div>
    </div>
  );
};
