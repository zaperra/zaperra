import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { sendConfirmationEmail } from "@/lib/emailjs";
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
  Star,
  Shield,
  Mail
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
  { value: "500+", label: "WORKFLOWS" },
  { value: "3", label: "COMPLEXITY" },
  { value: "$2", label: "STARTING" },
  { value: "2", label: "FREE DL" }
];

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim().toLowerCase();
    
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ email: trimmedEmail });
      
      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already registered",
            description: "This email is already on the waitlist!",
            variant: "destructive"
          });
        } else {
          throw error;
        }
        setIsSubmitting(false);
        return;
      }
      
      // Send confirmation email (non-blocking)
      sendConfirmationEmail({ to_email: trimmedEmail });
      
      setIsSubmitted(true);
      setEmail("");
      
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Zaperra launches. Check your email for confirmation."
      });
    } catch (error) {
      console.error('Waitlist signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-4 right-4 z-50 border border-border/50 bg-background/80 backdrop-blur-md rounded-b-xl"
      >
        <div className="container-tight flex items-center justify-between h-10 text-xs font-mono">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              BUILDING
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="text-primary">⬡</span>
              WAITLIST OPEN
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="text-primary">◈</span>
              EARLY ACCESS
            </span>
          </div>
          <div className="text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { 
              month: 'short', 
              day: '2-digit', 
              year: 'numeric' 
            }).toUpperCase()}
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        <div className="container-tight pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Logo />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
              >
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-mono tracking-wider text-primary">LAUNCHING SOON</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 tracking-tight"
              >
                Join the
                <br />
                <span className="text-primary">Waitlist</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3 text-xs font-mono tracking-widest text-muted-foreground mb-6"
              >
                <span className="w-4 h-px bg-primary" />
                AUTOMATION REVOLUTION AWAITS
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed"
              >
                Be among the first to access the premier marketplace for n8n workflows. 
                Buy, sell, and discover automation templates that save hours of work.
              </motion.p>

              {/* Email Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-md"
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 pl-12 pr-4 rounded-xl bg-card border-border/50 text-base font-mono placeholder:font-sans"
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-14 rounded-xl text-base font-medium group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-3">
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Joining Waitlist...
                        </span>
                      ) : (
                        <span className="flex items-center gap-3">
                          Join the Waitlist
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-primary/10 border border-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">You're on the waitlist!</p>
                      <p className="text-sm text-muted-foreground">Check your email for confirmation.</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-4 mt-6 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>1,200+ WAITING</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>NO SPAM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Stats & Benefits Preview */}
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative corner-brackets p-8"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="p-6 rounded-xl bg-card border border-border/50 text-center"
                    >
                      <div className="text-3xl font-bold text-primary font-mono mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-mono tracking-widest text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Workflow Preview Panel */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="p-6 rounded-xl bg-card border border-border/50"
                >
                  <div className="text-[10px] font-mono tracking-widest text-muted-foreground mb-4">
                    COMING SOON
                  </div>
                  {[
                    { label: "WORKFLOWS", value: "500+", status: "ready" },
                    { label: "CATEGORIES", value: "25+", status: "ready" },
                    { label: "CREATORS", value: "50+", status: "pending" },
                    { label: "PLATFORM", value: "BUILDING", status: "active" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="text-[10px] font-mono text-muted-foreground">{item.label}</span>
                      <span className={`text-xs font-mono ${
                        item.status === 'ready' ? 'text-green-500' :
                        item.status === 'active' ? 'text-primary' :
                        'text-muted-foreground'
                      }`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 border-t border-border/50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-primary mb-4">
              <span className="w-4 h-px bg-primary" />
              EXCLUSIVE PERKS
              <span className="w-4 h-px bg-primary" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Early Supporter <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join now and unlock exclusive perks that won't be available after launch
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
                className="group corner-brackets p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2 tracking-tight">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-card/30 border-t border-border/50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-primary mb-4">
              <span className="w-4 h-px bg-primary" />
              HOW IT WORKS
              <span className="w-4 h-px bg-primary" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Simple <span className="text-primary">Three-Step</span> Process
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get started with automation in minutes, not hours
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
                <div className="corner-brackets p-8 rounded-xl bg-background border border-border/50 h-full">
                  <span className="absolute top-4 right-6 text-6xl font-bold text-primary/10 font-mono">
                    {item.step}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border/50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to Automate <span className="text-primary">Smarter</span>?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Don't miss out on early access perks. Join the waitlist today and be part of the automation revolution.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-12 pr-4 rounded-xl bg-card border-border/50 font-mono"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-xl text-base font-medium group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      Secure Your Spot
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/10 border border-primary/20">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">You're already on the list!</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bottom Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-4 left-4 right-4 border border-border/50 bg-background/80 backdrop-blur-md rounded-xl z-50"
      >
        <div className="container-tight flex items-center justify-between h-12 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-primary">◎</span>
            PLATFORM: ZAPERRA
          </div>
          <div className="hidden sm:block text-muted-foreground">
            STATUS: BUILDING
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            WAITLIST ACTIVE
          </div>
        </div>
      </motion.div>

      {/* Footer spacing for bottom bar */}
      <div className="h-20" />
    </div>
  );
};

export default Waitlist;
