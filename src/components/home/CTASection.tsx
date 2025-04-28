
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-rewear-green text-white">
      <div className="container-padding text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the ReWear Movement</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Be part of the sustainable fashion revolution. Shop consciously, donate your pre-loved 
          clothes, and make an impact with every style choice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-rewear-green hover:bg-gray-100">
            <Link to="/shop">Shop Collection</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/donate">Donate Clothes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
