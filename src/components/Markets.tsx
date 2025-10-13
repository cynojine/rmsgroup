import { Pickaxe, Factory, Wheat, Building, Zap } from "lucide-react";

const Markets = () => {
  const markets = [
    {
      icon: Pickaxe,
      title: "Mining",
      description: "Supplying essential commodities for mining operations",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Raw materials and components for manufacturing industries",
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description: "Agricultural commodities and supplies",
    },
    {
      icon: Building,
      title: "Construction",
      description: "Construction materials and industrial commodities",
    },
    {
      icon: Zap,
      title: "Energy",
      description: "Energy sector commodities and resources",
    },
  ];

  return (
    <section id="markets" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Market Focus</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving clients across Central and Southern Africa with a focus on key industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {markets.map((market, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <market.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{market.title}</h3>
                <p className="text-sm text-muted-foreground">{market.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
