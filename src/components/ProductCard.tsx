
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-rewear-green text-white px-2 py-1 text-xs font-medium rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <p className="text-gray-700 font-semibold mb-3">${price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Link to={`/shop/${id}`} className="text-rewear-blue hover:text-rewear-blue-dark text-sm font-medium">
            View details
          </Link>
          <Button className="bg-rewear-green hover:bg-rewear-green-dark text-white text-sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
