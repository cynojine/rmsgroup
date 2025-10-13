import { TrendingUp, Globe2, Users, PackageCheck } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Globe2,
      value: "15+",
      label: "Countries Served",
      description: "Across Central & Southern Africa",
    },
    {
      icon: PackageCheck,
      value: "500+",
      label: "Commodity Types",
      description: "Hard & soft commodities",
    },
    {
      icon: Users,
      value: "200+",
      label: "Active Partners",
      description: "Trusted business relationships",
    },
    {
      icon: TrendingUp,
      value: "$50M+",
      label: "Annual Trade Volume",
      description: "Growing year over year",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90">Delivering excellence across Africa</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-xl font-semibold text-white/90">{stat.label}</div>
                <p className="text-sm text-white/70">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
