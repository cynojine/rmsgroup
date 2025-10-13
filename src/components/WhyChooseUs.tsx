import { Shield, Clock, Network, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Reliability & Trust",
      description:
        "Proven track record of delivering on commitments with transparent operations and ethical business practices across all transactions.",
    },
    {
      icon: Network,
      title: "Extensive Network",
      description:
        "Deep-rooted connections with suppliers, manufacturers, and logistics partners across Africa, ensuring seamless supply chain operations.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Efficient multi-modal logistics management ensures your commodities arrive on schedule, every time, minimizing operational disruptions.",
    },
    {
      icon: Sparkles,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes and international standards compliance ensure you receive only the highest quality commodities.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose RMS Group</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for commodities trading excellence in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <advantage.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
