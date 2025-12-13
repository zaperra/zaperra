import { FEATURES } from "@/lib/data";
import { Download, CheckCircle, Infinity, Layers, Star, RefreshCw } from "lucide-react";

const iconMap = {
  Download,
  CheckCircle,
  Infinity,
  Layers,
  Star,
  RefreshCw,
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Why Choose Zaperra?
          </h2>
          <p className="text-muted-foreground">
            Everything you need to supercharge your automation workflow
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group relative glass-card rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
