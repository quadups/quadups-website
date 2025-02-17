import  AboutHero  from '@/components/About/AboutHero';
import { Mission } from '@/components/About/Mission';
import { FooterBand } from '@/components/ui/FooterBand';
import Footer from '@/components/Layout/Footer';
import { NavBar } from '@/components/Layout/NavBar';


export const About = () => {
  // const aboutDetails = [
  //   {
  //     icon: <Briefcase className="w-8 h-8 text-blue-600" />,
  //     title: 'Our Mission',
  //     description:
  //       'To deliver cutting-edge software solutions that empower businesses to achieve their goals and exceed expectations.',
  //   },
  //   {
  //     icon: <Users className="w-8 h-8 text-green-600" />,
  //     title: 'Our Team',
  //     description:
  //       'A group of talented professionals dedicated to innovation, creativity, and delivering outstanding results.',
  //   },
  //   {
  //     icon: <Target className="w-8 h-8 text-red-600" />,
  //     title: 'Our Vision',
  //     description:
  //       'To be a global leader in providing innovative and sustainable tech solutions for a better tomorrow.',
  //   },
  // ];

  return (
    <div className="div w-screen">
      <NavBar />
      <AboutHero />
      <Mission />
      <FooterBand />
   
    <Footer />
    </div>
  );
};
