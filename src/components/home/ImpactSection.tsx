
import { Link } from "react-router-dom";
import { Recycle, Scissors, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Making a Real Impact</h2>
            <p className="text-gray-600 mb-6">
              Every purchase you make contributes to positive change. From reducing waste to 
              supporting artisans and funding education, your style choices matter.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-rewear-green/10 p-2 rounded-full mt-1">
                  <Recycle className="h-4 w-4 text-rewear-green" />
                </div>
                <div>
                  <h3 className="font-medium">12,000+ Garments Saved</h3>
                  <p className="text-gray-600 text-sm">
                    Clothes diverted from landfills and given new life.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-rewear-green/10 p-2 rounded-full mt-1">
                  <Scissors className="h-4 w-4 text-rewear-green" />
                </div>
                <div>
                  <h3 className="font-medium">145 Artisans Supported</h3>
                  <p className="text-gray-600 text-sm">
                    Skilled craftspeople receiving fair wages and opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-rewear-green/10 p-2 rounded-full mt-1">
                  <Sprout className="h-4 w-4 text-rewear-green" />
                </div>
                <div>
                  <h3 className="font-medium">500+ Children Educated</h3>
                  <p className="text-gray-600 text-sm">
                    Students supported through our education initiatives.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-rewear-green hover:bg-rewear-green-dark text-white">
                <Link to="/impact">Learn More About Our Impact</Link>
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format"
              alt="Artisans working"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
