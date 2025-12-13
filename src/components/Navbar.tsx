import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container-tight">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl italic">Zaperra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
              Marketplace
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
              Pricing
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
              Features
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="text-sm">
                Log in
              </Button>
            </Link>
            <Link to="/auth?signup=true">
              <Button variant="minimal" size="sm">
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-6 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
                  Marketplace
                </Link>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
                  Pricing
                </Link>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
                  Features
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
                  Contact
                </a>
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Link to="/auth" className="flex-1">
                    <Button variant="ghost" size="sm" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/auth?signup=true" className="flex-1">
                    <Button variant="minimal" size="sm" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
