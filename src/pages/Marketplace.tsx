import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketplaceGrid from "@/components/MarketplaceGrid";
import { Zap } from "lucide-react";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">2000+ Workflows</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Workflow Marketplace
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Browse our collection of premium n8n automation workflows. Download and import directly into your n8n instance.
            </p>
          </div>

          <MarketplaceGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
