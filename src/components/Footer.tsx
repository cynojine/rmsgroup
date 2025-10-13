const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">RMS GROUP</h3>
              <p className="text-primary-foreground/80">
                Forward, Insightful & Progressive
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Commodities Sourcing</li>
                <li>Commodities Financing</li>
                <li>Processing & Logistics</li>
                <li>Import & Export</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Markets</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Mining</li>
                <li>Manufacturing</li>
                <li>Agriculture</li>
                <li>Construction & Energy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} RMS Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
