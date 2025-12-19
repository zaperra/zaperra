import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClasses = (path: string) =>
    isActive(path)
      ? "px-4 py-1.5 text-xs font-medium rounded-md bg-secondary text-foreground"
      : "px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors";

  const navLinkPrefixClasses = (path: string) =>
    isActive(path) ? "text-muted-foreground mr-1 font-mono" : "text-muted-foreground/50 mr-1 font-mono";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-4 left-4 right-4 z-50 border border-border/50 bg-background/90 backdrop-blur-md rounded-xl shadow-lg shadow-black/5"
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center border border-border rounded-lg px-1 py-1 bg-card">
              <Link to="/" className={navLinkClasses("/")}>
                <span className={navLinkPrefixClasses("/")}>HOM</span> Home
              </Link>
              <Link to="/marketplace" className={navLinkClasses("/marketplace")}>
                <span className={navLinkPrefixClasses("/marketplace")}>MKT</span> Marketplace
              </Link>
              <Link to="/pricing" className={navLinkClasses("/pricing")}>
                <span className={navLinkPrefixClasses("/pricing")}>PRC</span> Pricing
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="text-xs font-mono">
                Log in
              </Button>
            </Link>
            <Link to="/auth?signup=true">
              <Button variant="minimal" size="sm" className="text-xs">
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
                <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono">
                  Marketplace
                </Link>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono">
                  Pricing
                </Link>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono">
                  Features
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono">
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
