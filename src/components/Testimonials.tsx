import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "RMS Group has been instrumental in ensuring our mining operations receive high-quality coal on time. Their logistics expertise is unmatched in the region.",
      author: "Mining Operations Manager",
      company: "Major Mining Corporation",
      industry: "Mining Sector",
    },
    {
      quote: "The reliability and quality of commodities provided by RMS Group has helped us maintain consistent production schedules. A truly dependable partner.",
      author: "Procurement Director",
      company: "Manufacturing Facility",
      industry: "Manufacturing",
    },
    {
      quote: "Their understanding of regional markets and ability to source quality materials at competitive prices has made RMS Group our preferred commodities partner.",
      author: "Supply Chain Head",
      company: "Construction Company",
      industry: "Construction",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what our partners say about working with RMS Group
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 bg-card relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="relative z-10">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-primary mt-1">
                      {testimonial.industry}
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

export default Testimonials;
