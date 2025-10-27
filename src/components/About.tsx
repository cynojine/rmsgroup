import { Target, Eye, Award } from "lucide-react";
import { Card } from "./ui/card";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our business dealings",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously enhancing our processes, services, and product offerings",
    },
    {
      icon: Eye,
      title: "Sustainability",
      description: "Promoting environmentally responsible practices in sourcing and logistics",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Vision */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To be the leading provider of high-quality physical commodities in Central and Southern Africa,
              fostering sustainable growth through innovative sourcing and logistics solutions.
            </p>
          </div>

          {/* Mission with Team Photo */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Rohi Moat Sadae Commodities, our mission is to facilitate the efficient trade of physical
                commodities by offering exceptional sourcing, financing, and logistics services. We are committed
                to building long-lasting relationships with our partners and clients, contributing to the economic
                development of the regions we operate in.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Delivering excellence in commodity trading across Central and Southern Africa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Providing reliable sourcing and logistics solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Building sustainable partnerships that drive regional growth</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] h-[400px]">
              <img 
                src={teamPhoto} 
                alt="RMS Group Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground text-center">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
