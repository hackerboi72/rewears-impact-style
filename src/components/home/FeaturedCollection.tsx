
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturedCollection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest sustainable designs, each one unique and carefully crafted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format"
              alt="Upcycled denim jacket"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg">Upcycled Denim Jacket</h3>
              <p className="text-gray-600 text-sm mb-3">
                Handcrafted from recycled denim with custom embroidery.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-rewear-green">$89.00</span>
                <Button className="bg-rewear-green hover:bg-rewear-green-dark text-white text-sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format"
              alt="Recycled cotton sweater"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg">Recycled Cotton Sweater</h3>
              <p className="text-gray-600 text-sm mb-3">
                Soft, sustainable cotton blend with minimalist design.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-rewear-green">$65.00</span>
                <Button className="bg-rewear-green hover:bg-rewear-green-dark text-white text-sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format"
              alt="Patchwork tote bag"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg">Patchwork Tote Bag</h3>
              <p className="text-gray-600 text-sm mb-3">
                Handmade from fabric scraps, unique and durable.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-rewear-green">$45.00</span>
                <Button className="bg-rewear-green hover:bg-rewear-green-dark text-white text-sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-rewear-blue hover:bg-rewear-blue-dark text-white px-8">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
