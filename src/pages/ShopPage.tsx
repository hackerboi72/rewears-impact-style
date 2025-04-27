
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

// Mock product data
const PRODUCTS = [
  {
    id: 1,
    name: "Upcycled Denim Jacket",
    price: 89,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format",
    category: "Outerwear"
  },
  {
    id: 2,
    name: "Recycled Cotton Sweater",
    price: 65,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format",
    category: "Tops"
  },
  {
    id: 3,
    name: "Patchwork Tote Bag",
    price: 45,
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Upcycled Midi Skirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1551163943-3f7a521a1cb3?w=500&auto=format",
    category: "Bottoms"
  },
  {
    id: 5,
    name: "Repurposed Shirt Dress",
    price: 75,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format",
    category: "Dresses"
  },
  {
    id: 6,
    name: "Eco-friendly Sneakers",
    price: 95,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format",
    category: "Footwear"
  },
  {
    id: 7,
    name: "Upcycled Linen Shirt",
    price: 60,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format",
    category: "Tops"
  },
  {
    id: 8,
    name: "Patchwork Jeans",
    price: 85,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format",
    category: "Bottoms"
  },
  {
    id: 9,
    name: "Eco Canvas Backpack",
    price: 70,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format",
    category: "Accessories"
  }
];

const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories", "Footwear"];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  
  const filteredProducts = PRODUCTS.filter(product => 
    selectedCategory === "All" ? true : product.category === selectedCategory
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0; // Featured - keep original order
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-rewear-green mb-6">Shop Collection</h1>
            <p className="text-xl text-gray-600">
              Each piece tells a story of sustainability and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16">
        <div className="container-padding">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-rewear-green hover:bg-rewear-green-dark text-white"
                      : "text-gray-700"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
          
          {/* No products found */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sustainability Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Sustainably Made</h2>
              <p className="text-gray-600 mb-6">
                Every ReWear piece is created with the planet in mind. Our process saves water, 
                reduces waste, and gives new life to materials that would otherwise end up in landfills.
              </p>
              <p className="text-gray-600">
                By choosing ReWear, you're not just getting a unique piece of clothing – you're making 
                a statement about the kind of world you want to live in.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format"
                alt="Sustainable fashion production"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
