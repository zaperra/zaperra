import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-display font-bold text-xl">Zaperra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Marketplace
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Pricing
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link to="/auth?signup=true">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Marketplace
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Pricing
              </Link>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Contact
              </a>
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Link to="/auth" className="flex-1">
                  <Button variant="ghost" size="sm" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/auth?signup=true" className="flex-1">
                  <Button variant="hero" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
