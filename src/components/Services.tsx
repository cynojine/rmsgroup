import { Package, DollarSign, Cog, Truck, Globe } from "lucide-react";
import { Card } from "./ui/card";
import servicesBg from "@/assets/services-bg.jpg";
import truckImage from "@/assets/truck-real.jpg";
import vehicleImage from "@/assets/vehicle.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Physical Commodities Sourcing",
      description:
        "Sourcing a wide range of physical hard and soft commodities tailored to the needs of various industries, particularly in the general and mining sectors.",
    },
    {
      icon: DollarSign,
      title: "Commodities Financing",
      description:
        "Providing financial solutions to facilitate commodity transactions, ensuring liquidity and reducing risk for our partners.",
    },
    {
      icon: Cog,
      title: "Commodities Processing",
      description:
        "Processing raw materials to add value before they reach the end consumer, ensuring compliance with international standards.",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description:
        "Managing multi-modal logistics section that effectively handles various freight modes including road, rail, air, and maritime transport.",
    },
    {
      icon: Globe,
      title: "Import & Export Services",
      description:
        "Facilitating international trade in commodities, including regulatory compliance and customs clearance services.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Business Segments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your commodity trading needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Fleet Images */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={truckImage} 
                alt="RMS Group Fleet - Scania Transport Truck" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={vehicleImage} 
                alt="RMS Group Fleet Vehicle" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
