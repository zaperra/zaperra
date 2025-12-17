import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding border-t border-border" ref={ref}>
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
            <span className="text-xs font-mono tracking-widest text-primary">PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Simple, transparent
            <br />
            <span className="text-primary">credit-based pricing</span>
          </h2>
          <p className="text-muted-foreground">
            Buy credits once, use them forever. No subscriptions.
          </p>
        </motion.div>

        {/* Free Tier */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-6 border border-primary/30 bg-primary/5 rounded-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-medium mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Start Free
              </h3>
              <p className="text-sm text-muted-foreground">
                Sign up and get <span className="text-primary font-medium">2 free downloads</span> of low-complexity workflows.
              </p>
            </div>
            <Link to="/auth?signup=true">
              <Button variant="minimal-outline" size="sm">
                Create Account
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all ${
                tier.popular
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-foreground text-primary text-[10px] font-mono tracking-wider">
                  POPULAR
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-medium mb-1">{tier.name}</h3>
                <p className={`text-xs ${tier.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold font-mono">${tier.price}</span>
                <span className={`text-xs ${tier.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {" "}one-time
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${tier.popular ? "text-primary-foreground/60" : "text-primary"}`} />
                  <span className="text-sm">{tier.credits} credits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${tier.popular ? "text-primary-foreground/60" : "text-primary"}`} />
                  <span className="text-sm">Never expires</span>
                </div>
              </div>

              <Link to="/auth?signup=true" className="block">
                <Button
                  variant={tier.popular ? "secondary" : "minimal-outline"}
                  className={`w-full ${tier.popular ? "text-foreground" : ""}`}
                  size="sm"
                >
                  Get Started
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Credit Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs font-mono tracking-widest text-primary">CREDIT USAGE</span>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { credits: 1, label: "LOW" },
              { credits: 3, label: "MEDIUM" },
              { credits: 5, label: "HIGH" },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center">
                <span className="text-3xl font-bold font-mono text-primary block mb-1">{item.credits}</span>
                <span className="text-[10px] font-mono tracking-widest text-muted-foreground">{item.label} COMPLEXITY</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
