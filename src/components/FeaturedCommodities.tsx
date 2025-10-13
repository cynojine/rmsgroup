import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const FeaturedCommodities = () => {
  const commodities = [
    {
      category: "Hard Commodities",
      items: [
        {
          name: "Copper Cathodes",
          specs: "Grade A, 99.99% purity",
          applications: "Electronics, Construction, Manufacturing",
        },
        {
          name: "Cobalt",
          specs: "Battery grade, 99.8%+ purity",
          applications: "EV Batteries, Aerospace, Alloys",
        },
        {
          name: "Iron Ore",
          specs: "Fe 62-65%",
          applications: "Steel Production, Construction",
        },
      ],
    },
    {
      category: "Soft Commodities",
      items: [
        {
          name: "Coffee Beans",
          specs: "Arabica & Robusta grades",
          applications: "Food & Beverage Industry",
        },
        {
          name: "Timber",
          specs: "Various hardwoods",
          applications: "Construction, Furniture, Paper",
        },
        {
          name: "Cotton",
          specs: "Premium quality",
          applications: "Textile Manufacturing",
        },
      ],
    },
    {
      category: "Energy & Fuels",
      items: [
        {
          name: "Petroleum Products",
          specs: "Diesel, Petrol, Aviation Fuel",
          applications: "Transportation, Industrial",
        },
        {
          name: "Coal",
          specs: "Thermal & Metallurgical",
          applications: "Energy Generation, Steel Production",
        },
        {
          name: "Natural Gas",
          specs: "LNG & Pipeline",
          applications: "Power Generation, Industrial",
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Commodities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of high-quality physical commodities
            </p>
          </div>

          <div className="space-y-8">
            {commodities.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20 text-base px-4 py-1">
                    {category.category}
                  </Badge>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 bg-card"
                    >
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Specifications</p>
                            <p className="text-sm text-foreground font-medium">{item.specs}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Applications</p>
                            <p className="text-sm text-muted-foreground">{item.applications}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Don't see what you're looking for? We source hundreds of commodity types.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
            >
              Contact us for custom requirements →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCommodities;
