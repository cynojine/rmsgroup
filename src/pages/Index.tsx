import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Markets from "@/components/Markets";
import FeaturedCommodities from "@/components/FeaturedCommodities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <Markets />
      <FeaturedCommodities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
