
import { Link } from "react-router-dom";
import { Recycle, Scissors, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const CSRPartnership = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">CSR Partnership Program</h2>
          <p className="text-gray-600">
            Join leading brands like Adidas and Nike in our mission to create sustainable fashion. 
            Together, we transform unsold inventory into limited-edition eco-friendly collections.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="bg-rewear-green/10 p-4 inline-block rounded-full mb-4">
              <Recycle className="h-8 w-8 text-rewear-green" />
            </div>
            <h3 className="text-xl font-medium mb-3">Sustainable Solutions</h3>
            <p className="text-gray-600">
              Transform unsold or returned products into unique, eco-friendly collections
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="bg-rewear-green/10 p-4 inline-block rounded-full mb-4">
              <Scissors className="h-8 w-8 text-rewear-green" />
            </div>
            <h3 className="text-xl font-medium mb-3">Artisan Craftsmanship</h3>
            <p className="text-gray-600">
              Support local artisans while creating exclusive limited-edition pieces
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="bg-rewear-green/10 p-4 inline-block rounded-full mb-4">
              <Leaf className="h-8 w-8 text-rewear-green" />
            </div>
            <h3 className="text-xl font-medium mb-3">Enhanced CSR Profile</h3>
            <p className="text-gray-600">
              Demonstrate your brand's commitment to sustainability and social impact
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-rewear-green text-rewear-green hover:bg-rewear-green/10">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CSRPartnership;
