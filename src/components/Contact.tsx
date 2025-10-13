import { Mail, MapPin, Building2 } from "lucide-react";
import { Card } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your commodities sourcing and logistics?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Zambia Office */}
            <Card className="p-8 space-y-6 bg-card shadow-[var(--shadow-elegant)]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Zambia Office</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Rohi Moat Sadae Commodities Limited</p>
                    <p className="text-muted-foreground">Registration No: 120251028008</p>
                    <p className="text-muted-foreground">Tax ID: 2003804856</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* South Africa Office */}
            <Card className="p-8 space-y-6 bg-card shadow-[var(--shadow-elegant)]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">South Africa Office</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Rohi Moat Sadae Commodities (Pty) Ltd</p>
                    <p className="text-muted-foreground">Registration No: 2025/605611/07</p>
                    <p className="text-muted-foreground">Tax ID: 9948089199</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">For inquiries and partnerships</p>
            <a
              href="mailto:info@rmsgroup.com"
              className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors text-lg font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>info@rmsgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
