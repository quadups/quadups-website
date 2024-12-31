

export const Band = () => {
  return (
    <div style={{  overflow: 'hidden' }} className="p-2 border-y-4">
      <div className="marquee">
        <ul className="flex uppercase font-black text-white text-3xl whitespace-nowrap">
          <li className="mx-12">UI/UX DESIGNS .</li>
          <li className="mx-12">WEB APP DEVELOPMENTS .</li>
          <li className="mx-12">MOBILE APP DEVELOPMENTS .</li>
          <li className="mx-12">BUSINESS BRANDING .</li>
          {/* with time we can add more services we offer or anything we want there ... i dnnno */}
        </ul>
      </div>
    </div>
  );
};
