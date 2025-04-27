
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, imageSrc, imageAlt }: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="container-padding py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rewear-green mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {subtitle}
            </p>
            <div className="flex items-center gap-2 mb-8">
              <Leaf className="text-rewear-green h-5 w-5" />
              <span className="text-sm text-gray-600">Eco-friendly, sustainable fashion</span>
            </div>
            <Button asChild className="bg-rewear-green hover:bg-rewear-green-dark text-white px-8 py-6 rounded-md">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rewear-green/20 to-rewear-blue/20 rounded-lg blur opacity-50"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
