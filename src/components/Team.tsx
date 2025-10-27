import { Users, Award, Target, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const Team = () => {
  const leadership = [
    {
      title: "Experienced Leadership",
      description: "Our management team brings decades of combined experience in commodities trading, logistics, and regional market expertise.",
      icon: Users,
    },
    {
      title: "Expert Network",
      description: "We maintain strong relationships with suppliers, manufacturers, and logistics partners across multiple African markets.",
      icon: Award,
    },
    {
      title: "Strategic Vision",
      description: "Forward-thinking approach to identifying opportunities and creating value for our clients and partners.",
      icon: Target,
    },
    {
      title: "Proven Track Record",
      description: "Successful delivery of thousands of tons of commodities across mining, manufacturing, and construction sectors.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dedicated team of professionals committed to excellence in commodity trading and logistics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
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

export default Team;
