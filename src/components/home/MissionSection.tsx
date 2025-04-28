
import { Recycle, Leaf, Sprout, Scissors } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-gray-600">
            We believe in a world where fashion can be both beautiful and sustainable. 
            By upcycling pre-loved clothing, we're reducing waste while creating unique pieces
            that make a statement and make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-rewear-green/10 p-4 inline-block rounded-full mb-4">
              <Recycle className="h-8 w-8 text-rewear-green" />
            </div>
            <h3 className="text-xl font-medium mb-2">Upcycled Fashion</h3>
            <p className="text-gray-600 text-sm">
              Every piece is created from pre-loved clothing that would otherwise end up in landfills.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-rewear-green/10 p-4 inline-block rounded-full mb-4">
              <Scissors className="h-8 w-8 text-rewear-green" />
            </div>
            <h3 className="text-xl font-medium mb-2">Artisan Support</h3>
            <p className="text-gray-600 text-sm">
              We partner with skilled artisans worldwide, providing fair wages and sustainable livelihoods.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-rewear-green/10 p-4 inline-block rounded-full mb-4">
              <Leaf className="h-8 w-8 text-rewear-green" />
            </div>
            <h3 className="text-xl font-medium mb-2">Eco-friendly</h3>
            <p className="text-gray-600 text-sm">
              Our process saves water, reduces carbon emissions, and keeps clothing out of landfills.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-rewear-green/10 p-4 inline-block rounded-full mb-4">
              <Sprout className="h-8 w-8 text-rewear-green" />
            </div>
            <h3 className="text-xl font-medium mb-2">Community Impact</h3>
            <p className="text-gray-600 text-sm">
              A portion of every purchase goes to supporting education initiatives in underserved communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
