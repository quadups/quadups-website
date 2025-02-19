interface ButtonProps {
  /** Callback function triggered when Contact button is clicked */
  onContactClick: () => void;
}
export const FooterBand: React.FC<ButtonProps> = ({ onContactClick }) => {
  return (
    <div
      style={{ backgroundImage: "url('/bg1.jpg')" }}
      className="relative w-full h-[300px] bg-cover bg-center text-white flex items-center justify-center"
    >
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-[#110029E3] opacity-[89%]"></div>

      {/* Content */}
      <div className="relative text-center max-w-[800px] px-4">
        <h1 className="font-bold text-[32px] leading-tight">
          Let’s transform your ideas into an <br />
          effective software that drives real results
        </h1>
        <div className="mt-10"></div>
        <button onClick={onContactClick} className="bg-[#870A81] hover:bg-[#3c1b3a] w-[140px] h-[40px] text-white font-medium rounded-[20px]">
          Reach out to us
        </button>
      </div>
    </div>
  );
};
