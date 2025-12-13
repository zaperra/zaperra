import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRICING_TIERS } from "@/lib/data";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Pricing</span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground">
              Buy credits once, use them forever. No subscriptions, no hidden fees.
            </p>
          </div>

          {/* Free Tier */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="glass-card rounded-2xl p-6 border-accent/30 border-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Start Free</h3>
                  <p className="text-sm text-muted-foreground">
                    Sign up and get <span className="text-accent font-medium">2 free downloads</span> of low-complexity workflows. No credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-6 hover-lift ${
                  tier.popular
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-semibold text-lg mb-2">{tier.name}</h3>
                  <p className={`text-sm ${tier.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">${tier.price}</span>
                  <span className={`text-sm ${tier.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {' '}one-time
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${tier.popular ? 'text-accent' : 'text-accent'}`} />
                    <span className="text-sm">{tier.credits} credits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${tier.popular ? 'text-accent' : 'text-accent'}`} />
                    <span className="text-sm">Never expires</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${tier.popular ? 'text-accent' : 'text-accent'}`} />
                    <span className="text-sm">Instant download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${tier.popular ? 'text-accent' : 'text-accent'}`} />
                    <span className="text-sm">Email support</span>
                  </div>
                </div>

                <Link to="/auth?signup=true">
                  <Button
                    variant={tier.popular ? 'hero-secondary' : 'hero'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Credit Usage */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-center mb-8">How Credits Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Low Complexity</h3>
                <p className="text-sm text-muted-foreground">Simple workflows with basic integrations</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Medium Complexity</h3>
                <p className="text-sm text-muted-foreground">Multi-step workflows with conditions</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-red-600">5</span>
                </div>
                <h3 className="font-semibold mb-2">High Complexity</h3>
                <p className="text-sm text-muted-foreground">Advanced workflows with AI & complex logic</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto mt-20">
            <h2 className="font-display text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-2">Do credits expire?</h3>
                <p className="text-sm text-muted-foreground">No! Once you purchase credits, they're yours forever. Use them whenever you need.</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-2">Can I get a refund?</h3>
                <p className="text-sm text-muted-foreground">Credits are non-refundable, but we offer 2 free downloads so you can try before you buy.</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-2">How do I download workflows?</h3>
                <p className="text-sm text-muted-foreground">After purchasing, simply click download on any workflow. You'll receive a JSON file to import into n8n.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
