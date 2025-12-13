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
    <section id="how-it-works" className="section-padding" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight">
            Three simple steps to automation
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
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
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}
              
              <div className="relative">
                <span className="text-7xl md:text-8xl font-serif italic text-muted-foreground/20 leading-none">
                  {step.number}
                </span>
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
