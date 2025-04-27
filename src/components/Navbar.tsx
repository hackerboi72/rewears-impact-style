
import { useState } from "react";
import { Link } from "react-router-dom";
import { Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-padding flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-rewear-green">
          <Recycle className="h-6 w-6" />
          <span className="text-xl font-bold">ReWear</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-rewear-green transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-rewear-green transition-colors">
            About Us
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-rewear-green transition-colors">
            Shop
          </Link>
          <Link to="/impact" className="text-gray-700 hover:text-rewear-green transition-colors">
            Impact
          </Link>
          <Link to="/donate" className="text-gray-700 hover:text-rewear-green transition-colors">
            Donate
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-rewear-green transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-padding py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-rewear-green py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-rewear-green py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-rewear-green py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/impact" 
              className="text-gray-700 hover:text-rewear-green py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </Link>
            <Link 
              to="/donate" 
              className="text-gray-700 hover:text-rewear-green py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-rewear-green py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
