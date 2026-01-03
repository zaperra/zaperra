import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import { 
  Zap, 
  Download, 
  CreditCard, 
  ShoppingCart, 
  Gift, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Star
} from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "50 Free Credits",
    description: "Early supporters get 50 credits free on launch day"
  },
  {
    icon: Star,
    title: "Priority Access",
    description: "Be the first to explore and purchase premium workflows"
  },
  {
    icon: CreditCard,
    title: "Lifetime Discount",
    description: "Lock in 20% off all credit purchases forever"
  },
  {
    icon: Sparkles,
    title: "Exclusive Workflows",
    description: "Access to waitlist-only automation templates"
  }
];

const howItWorks = [
  {
    step: "01",
    title: "Browse Workflows",
    description: "Explore our curated marketplace of n8n automation workflows sorted by complexity and category.",
    icon: ShoppingCart
  },
  {
    step: "02",
    title: "Buy Credits",
    description: "Purchase credits starting from just $2 for 10 credits. Use them to unlock workflows.",
    icon: CreditCard
  },
  {
    step: "03",
    title: "Download & Deploy",
    description: "Download workflows as JSON files and import them directly into your n8n instance.",
    icon: Download
  }
];

const stats = [
  { value: "500+", label: "Workflows at Launch" },
  { value: "3", label: "Complexity Levels" },
  { value: "$2", label: "Starting Price" },
  { value: "2", label: "Free Downloads" }
];

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when Zaperra launches. Check your email for confirmation."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">
            <Button variant="outline" className="rounded-xl">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Launching Soon</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Join the{" "}
              <span className="font-serif italic text-primary">Waitlist</span>
              <br />
              for Automation Revolution
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Be among the first to access the premier marketplace for n8n workflows. 
              Buy, sell, and discover automation templates that save hours of work.
            </p>
          </motion.div>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 rounded-xl bg-card border-border/50 text-base"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  className="h-12 px-8 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Join Waitlist
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-primary font-medium">You're on the waitlist! Check your email.</span>
              </div>
            )}
            
            <p className="text-sm text-muted-foreground mt-4">
              <Users className="w-4 h-4 inline mr-1" />
              Join 1,200+ automation enthusiasts already on the list
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-card/50 border-y border-border/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waitlist <span className="font-serif italic text-primary">Perks</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Early supporters get exclusive benefits that won't be available after launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="font-serif italic text-primary">Zaperra</span> Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A simple three-step process to supercharge your automation workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="corner-brackets p-8 rounded-2xl bg-card/50 border border-border/50 h-full">
                  <span className="text-6xl font-bold text-primary/20 absolute top-4 right-6">
                    {item.step}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Smarter?
            </h2>
            <p className="text-muted-foreground mb-8">
              Don't miss out on early access perks. Join the waitlist today and be part of the automation revolution.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 rounded-xl bg-card border-border/50"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  className="h-12 px-8 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Now"}
                </Button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">You're already on the list!</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © 2025 Zaperra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
