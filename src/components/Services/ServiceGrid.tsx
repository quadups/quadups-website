import { ServiceCard } from "./ServiceCard";
import { Code, Database, Smartphone, Globe } from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Crafting interactive user interfaces with modern tools like React and Next.js.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building robust and scalable server-side solutions using Node.js and Prisma.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating seamless mobile experiences for iOS and Android platforms.",
    },
    {
      icon: Globe,
      title: "Web3 Solutions",
      description: "Developing decentralized applications (dApps) with Ethereum and Solidity.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};
