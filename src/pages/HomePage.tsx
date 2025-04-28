import { Link } from "react-router-dom";
import { Recycle, Leaf, Sprout, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Turn Waste into Style. Turn Style into Impact."
        subtitle="ReWear transforms discarded clothing into stylish, sustainable fashion while supporting artisans and communities worldwide. For every purchase, we donate a new clothing item to a child in need."
        ctaText="Shop Now"
        ctaLink="/shop"
        imageSrc="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1200"
        imageAlt="Person wearing sustainable fashion"
      />

      {/* Mission Section */}
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

      {/* Featured Collection */}
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

      {/* CSR Partnership Program Section */}
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

      {/* Impact Section */}
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

      {/* CTA Section */}
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
    </div>
  );
};

export default HomePage;
