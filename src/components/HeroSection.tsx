import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { STATS } from "@/lib/data";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-glow" />
          <span className="text-sm text-muted-foreground">2000+ Automation Workflows Available</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in animation-delay-100">
          The Marketplace for
          <br />
          <span className="gradient-text">n8n Workflows</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-200">
          Buy, download, and automate your business in minutes. Premium automation workflows at your fingertips.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-300">
          <Link to="/marketplace">
            <Button variant="hero" size="xl" className="group">
              Browse Marketplace
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="#features">
            <Button variant="hero-secondary" size="xl" className="group">
              <Play className="w-5 h-5" />
              How It Works
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in animation-delay-400">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Floating Cards Preview */}
        <div className="relative mt-20 max-w-4xl mx-auto animate-fade-in animation-delay-500">
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">GPT Content Generator</h3>
                  <p className="text-sm text-muted-foreground">AI & ML • High Complexity</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">5 Credits</span>
                </div>
              </div>
              <div className="h-48 rounded-xl bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 animate-pulse" />
                  <div className="w-24 h-2 rounded bg-accent/20 animate-pulse animation-delay-100" />
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 animate-pulse animation-delay-200" />
                  <div className="w-16 h-2 rounded bg-purple-500/20 animate-pulse animation-delay-300" />
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 animate-pulse animation-delay-400" />
                </div>
              </div>
            </div>

            {/* Floating Side Cards */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block animate-float">
              <div className="glass-card rounded-xl p-4 shadow-md w-48">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 mb-2" />
                <div className="h-2 w-3/4 rounded bg-muted mb-2" />
                <div className="h-2 w-1/2 rounded bg-muted" />
              </div>
            </div>

            <div className="absolute -right-8 top-1/3 hidden lg:block animate-float animation-delay-200">
              <div className="glass-card rounded-xl p-4 shadow-md w-48">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-2" />
                <div className="h-2 w-3/4 rounded bg-muted mb-2" />
                <div className="h-2 w-1/2 rounded bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
