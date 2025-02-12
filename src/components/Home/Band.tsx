import { Asterisk } from "lucide-react";


export const Band = () => {
  return (
    <div style={{  overflow: 'hidden' }} className="p-3 bg-[rgb(27,0,45)]">
      <div className="marquee">

      <ul className="flex capitalize text-white text-lg whitespace-nowrap tracking-wide">
        {
 [
  'UI/UX Designs',
   'Web app developments',
   'software consultations',
    'mobile app developments',
     'business brandings' 
    ].map((service) => {
  return <>
  <li className="mx-16">{service} </li>
  <Asterisk />

  </>
})
        }
       
      </ul>
   
      </div>
    </div>
  );
};
