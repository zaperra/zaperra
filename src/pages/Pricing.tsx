import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRICING_TIERS } from "@/lib/data";
import { Check, ArrowRight, Zap, Layers, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-tight">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono tracking-widest text-primary">PRICING</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Buy credits once,
              <br />
              <span className="text-primary">use them forever</span>
            </h1>
            <p className="text-muted-foreground">
              No subscriptions. No hidden fees. Credits never expire.
            </p>
          </motion.div>

          {/* How Credits Work - Explained Better */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 p-6 border border-border bg-card rounded-xl"
          >
            <h2 className="text-sm font-mono tracking-widest text-primary mb-6">HOW IT WORKS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-mono font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Buy Credits</h3>
                  <p className="text-sm text-muted-foreground">One-time purchase. Choose the pack that fits your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-mono font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Browse & Download</h3>
                  <p className="text-sm text-muted-foreground">Each workflow costs 1-5 credits based on complexity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-mono font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Import to n8n</h3>
                  <p className="text-sm text-muted-foreground">Get JSON file instantly. Import with one click.</p>
                </div>
              </div>
            </div>

            {/* Credit Cost Breakdown */}
            <div className="border-t border-border pt-6">
              <h3 className="text-xs font-mono tracking-widest text-muted-foreground mb-4">CREDIT COST BY COMPLEXITY</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-secondary rounded-lg">
                  <Zap className="w-4 h-4 text-green-500" />
                  <span className="text-sm"><span className="font-mono font-bold text-green-500">1</span> credit = Simple workflow</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-secondary rounded-lg">
                  <Layers className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm"><span className="font-mono font-bold text-yellow-500">3</span> credits = Multi-step workflow</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-secondary rounded-lg">
                  <Cpu className="w-4 h-4 text-red-500" />
                  <span className="text-sm"><span className="font-mono font-bold text-red-500">5</span> credits = Advanced + AI workflow</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 p-5 border border-primary/30 bg-primary/5 rounded-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div>
                  <span className="font-medium">Start Free</span>
                  <span className="text-muted-foreground mx-2">—</span>
                  <span className="text-sm text-muted-foreground">Get <span className="text-primary font-medium">2 free downloads</span> of simple workflows on signup</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono tracking-widest text-primary">FAQ</span>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "Do credits expire?",
                  a: "No. Once purchased, credits are yours forever. Use them whenever you need."
                },
                {
                  q: "Can I get a refund?",
                  a: "Credits are non-refundable. We offer 2 free downloads so you can try before buying."
                },
                {
                  q: "How do I download workflows?",
                  a: "Click download on any workflow, then import the JSON file directly into n8n."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards and PayPal through our secure payment system."
                }
              ].map((item, index) => (
                <div key={index} className="p-5 border border-border bg-card rounded-xl">
                  <h3 className="font-medium mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;