import { Asterisk } from "lucide-react";


export const Band = () => {
  return (
    <div style={{ overflow: 'hidden' }} className="p-3 bg-[rgb(27,0,45)]">
      <div className="marquee">

        <ul className="flex capitalize text-white text-lg whitespace-nowrap tracking-wide">
          {
            [
              'UI/UX Design',
              'Web App Development', 
              'Software Consultations',
              'Mobile App Development',
              'Business Branding',
              'Smart Contract Development',
              'DApp Development',
              'Web3 Integration'
            ].map((service) => {
              return <>
                <li className="mx-16" key={service} >{service} </li>
                <Asterisk />

              </>
            })
          }

        </ul>

      </div>
    </div>
  );
};
