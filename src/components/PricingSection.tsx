import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/data";
import { Check, ArrowRight, Zap, Layers, Cpu } from "lucide-react";
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

        {/* How It Works Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 p-6 border border-border bg-card rounded-xl"
        >
          <div className="text-xs font-mono tracking-widest text-primary mb-5">HOW CREDITS WORK</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-mono text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Buy Credits</h3>
                <p className="text-xs text-muted-foreground">One-time purchase, never expires</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-mono text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Browse & Select</h3>
                <p className="text-xs text-muted-foreground">Find workflows from 50+ categories</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-mono text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Download & Import</h3>
                <p className="text-xs text-muted-foreground">Get JSON, import to n8n instantly</p>
              </div>
            </div>
          </div>

          {/* Credit Costs */}
          <div className="flex flex-wrap gap-3 pt-5 border-t border-border">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-sm">
              <Zap className="w-3.5 h-3.5 text-green-500" />
              <span className="font-mono text-green-500 font-medium">1</span>
              <span className="text-muted-foreground">= Simple</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-sm">
              <Layers className="w-3.5 h-3.5 text-yellow-500" />
              <span className="font-mono text-yellow-500 font-medium">3</span>
              <span className="text-muted-foreground">= Multi-step</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-sm">
              <Cpu className="w-3.5 h-3.5 text-red-500" />
              <span className="font-mono text-red-500 font-medium">5</span>
              <span className="text-muted-foreground">= Advanced + AI</span>
            </div>
          </div>
        </motion.div>

        {/* Free Tier */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 p-5 border border-primary/30 bg-primary/5 rounded-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div>
                <span className="font-medium">Start Free</span>
                <span className="text-muted-foreground mx-2">—</span>
                <span className="text-sm text-muted-foreground">Get <span className="text-primary font-medium">2 free downloads</span> on signup</span>
              </div>
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
              className={`relative p-6 rounded-xl border transition-all ${
                tier.popular
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-primary-foreground text-primary text-[10px] font-mono tracking-wider">
                  POPULAR
                </span>
              )}

              <div className="mb-5">
                <h3 className="font-medium mb-1">{tier.name}</h3>
                <p className={`text-xs ${tier.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-5">
                <span className="text-3xl font-bold font-mono">${tier.price}</span>
                <span className={`text-xs ${tier.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {" "}one-time
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${tier.popular ? "text-primary-foreground/60" : "text-primary"}`} />
                  <span className="text-sm font-medium">{tier.credits} credits</span>
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
      </div>
    </section>
  );
};

export default PricingSection;