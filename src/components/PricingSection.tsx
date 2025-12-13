import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/data";
import { Check, Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Pricing</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Simple Credit-Based Pricing
          </h2>
          <p className="text-muted-foreground">
            Buy credits once, use them forever. No subscriptions, no hidden fees.
          </p>
        </div>

        {/* Free Tier Banner */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier, index) => (
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

        {/* Credit Usage Info */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="font-display font-semibold mb-4">How Credits Work</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4">
              <div className="text-2xl font-bold text-accent mb-1">1</div>
              <div className="text-sm text-muted-foreground">credit for Low complexity</div>
            </div>
            <div className="glass-card rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-500 mb-1">3</div>
              <div className="text-sm text-muted-foreground">credits for Medium complexity</div>
            </div>
            <div className="glass-card rounded-xl p-4">
              <div className="text-2xl font-bold text-pink-500 mb-1">5</div>
              <div className="text-sm text-muted-foreground">credits for High complexity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
