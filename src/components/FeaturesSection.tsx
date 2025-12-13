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
    <section id="features" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight">
            Everything you need to automate your workflow
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-medium mb-2 tracking-tight">
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
