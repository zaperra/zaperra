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
    <section id="pricing" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight mb-4">
            Simple, transparent pricing
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
          className="mb-12 p-6 border border-border rounded-lg"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-medium mb-1">Start Free</h3>
              <p className="text-sm text-muted-foreground">
                Sign up and get 2 free downloads of low-complexity workflows.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                tier.popular
                  ? "bg-foreground text-background"
                  : "border border-border hover:border-foreground/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-4 px-3 py-1 bg-background text-foreground text-xs rounded-full">
                  Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-medium mb-1">{tier.name}</h3>
                <p className={`text-xs ${tier.popular ? "text-background/60" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-serif italic">${tier.price}</span>
                <span className={`text-sm ${tier.popular ? "text-background/60" : "text-muted-foreground"}`}>
                  {" "}one-time
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${tier.popular ? "text-background/60" : "text-muted-foreground"}`} />
                  <span className="text-sm">{tier.credits} credits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${tier.popular ? "text-background/60" : "text-muted-foreground"}`} />
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
          <h3 className="font-medium mb-8 text-center">Credit Usage</h3>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { credits: 1, label: "Low complexity" },
              { credits: 3, label: "Medium complexity" },
              { credits: 5, label: "High complexity" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 border border-border rounded-lg">
                <span className="text-2xl font-serif italic block mb-1">{item.credits}</span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
