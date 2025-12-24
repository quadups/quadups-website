import ServiceComponent from "@/components/Services/ServiceComponent";
import { SEO } from "@/components/SEO/SEO";

/**
 * Services page component
 * Displays all services offered by the company
 * Data is loaded from services.json
 */
const Services = () => {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Custom Software Development",
        "description": "Bespoke software solutions tailored to your business needs",
        "provider": {
          "@type": "Organization",
          "name": "Quadups Ltd"
        }
      },
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Conversion-optimized, scalable websites from MVPs to full-scale platforms",
        "provider": {
          "@type": "Organization",
          "name": "Quadups Ltd"
        }
      },
      {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile applications for iOS and Android",
        "provider": {
          "@type": "Organization",
          "name": "Quadups Ltd"
        }
      },
      {
        "@type": "Service",
        "name": "AI & Machine Learning",
        "description": "Intelligent solutions powered by artificial intelligence and machine learning",
        "provider": {
          "@type": "Organization",
          "name": "Quadups Ltd"
        }
      },
      {
        "@type": "Service",
        "name": "UI/UX Design",
        "description": "User-centered design that drives engagement and conversions",
        "provider": {
          "@type": "Organization",
          "name": "Quadups Ltd"
        }
      },
      {
        "@type": "Service",
        "name": "Web3 & Blockchain Development",
        "description": "Decentralized applications and blockchain solutions",
        "provider": {
          "@type": "Organization",
          "name": "Quadups Ltd"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Our Services - Software Development Solutions | Quadups UK & Nigeria"
        description="Explore Quadups' comprehensive software development services: Custom software, web & mobile apps, AI/ML, UI/UX design, Web3/blockchain, and e-commerce solutions. Serving UK and Nigeria with cutting-edge technology."
        keywords="software development services, web development services UK, mobile app development Nigeria, AI development, machine learning services, UI/UX design, Web3 development, blockchain services, e-commerce development, custom software solutions, SaaS development, MVP development, startup services"
        url="https://quadups.com/services"
        type="website"
        structuredData={servicesStructuredData}
      />
      <div className="w-full">
        <ServiceComponent />
      </div>
    </>
  );
};

export default Services;