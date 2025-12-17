import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Browse",
    description: "Explore our curated collection of 2000+ n8n automation workflows across 50+ categories.",
  },
  {
    number: "02",
    title: "Purchase Credits",
    description: "Buy credits starting from just $2. Credits never expire and can be used anytime.",
  },
  {
    number: "03",
    title: "Download & Import",
    description: "Get instant access to your workflow JSON file. Import directly into n8n with one click.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding border-t border-border" ref={ref}>
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
            <span className="text-xs font-mono tracking-widest text-primary">HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Three simple steps to
            <br />
            <span className="text-primary">automation</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-border" />
              )}
              
              <div className="relative p-6 border border-border bg-card rounded-xl hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold font-mono text-primary/30">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <h3 className="text-lg font-medium mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
