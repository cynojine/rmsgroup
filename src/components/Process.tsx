import { Search, HandshakeIcon, Truck, CheckCircle } from "lucide-react";
import excavatorImage from "@/assets/excavator-night.jpg";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Assessment",
      description:
        "We begin by understanding your specific commodity needs, volume requirements, and delivery timelines to provide tailored solutions.",
    },
    {
      icon: HandshakeIcon,
      title: "Sourcing & Negotiation",
      description:
        "Leveraging our extensive network, we identify the best suppliers, negotiate favorable terms, and ensure quality compliance.",
    },
    {
      icon: Truck,
      title: "Logistics & Processing",
      description:
        "Our multi-modal logistics team coordinates transportation, handles processing if needed, and manages customs clearance.",
    },
    {
      icon: CheckCircle,
      title: "Delivery & Support",
      description:
        "We ensure timely delivery to your location and provide ongoing support to maintain long-term partnerships.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures seamless commodity trading from start to finish
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-xl p-6 space-y-4 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto border-4 border-card shadow-lg">
                        <step.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground text-center">{step.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operations Image */}
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] mt-12">
            <img 
              src={excavatorImage} 
              alt="RMS Group Operations - Mining and Commodities Processing" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
