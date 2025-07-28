import ServiceComponent from "@/components/Services/ServiceComponent";

/**
 * Services page component
 * Displays all services offered by the company
 * Data is loaded from services.json
 */
const Services = () => {
  return (
    <div className="w-full">
      <ServiceComponent />
    </div>
  );
};

export default Services;