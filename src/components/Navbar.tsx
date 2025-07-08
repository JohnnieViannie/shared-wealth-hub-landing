
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="hover:scale-105 transition-transform">
              <img 
                src="/lovable-uploads/e971dbb6-833d-49f1-abcc-b0fccec5f0d6.png" 
                alt="Zillion Capital Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/loans" className="text-gray-600 hover:text-blue-600 transition-colors">Loans</Link>
            <Link to="/investments" className="text-gray-600 hover:text-blue-600 transition-colors">Investments</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
