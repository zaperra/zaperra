import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Shield, Infinity, Layers, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Instant Download",
    description: "Get your workflow files immediately after purchase. No waiting, no delays.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every workflow is tested and verified before being listed on our marketplace.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "Your credits never expire. Buy once, use whenever you need.",
  },
  {
    icon: Layers,
    title: "2000+ Templates",
    description: "From simple automations to complex enterprise workflows. Find what you need.",
  },
  {
    icon: Zap,
    title: "Ready to Use",
    description: "Import directly into n8n with one click. No configuration required.",
  },
  {
    icon: Clock,
    title: "Save Hours",
    description: "Skip the building phase. Get production-ready workflows instantly.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding border-t border-border" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs font-mono tracking-widest text-primary">FEATURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Everything you need to
            <br />
            <span className="text-primary">automate your workflow</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 group hover:bg-card transition-colors"
              >
                <div className="w-10 h-10 rounded border border-border flex items-center justify-center mb-5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
