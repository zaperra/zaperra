import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail, Lock, User, Zap, Layers, Cpu } from "lucide-react";
import { toast } from "sonner";
import Logo from "@/components/Logo";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isSignup, setIsSignup] = useState(searchParams.get('signup') === 'true');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate auth - will be replaced with Supabase
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (isSignup) {
      toast.success("Account created! You have 2 free credits to get started.");
    } else {
      toast.success("Welcome back!");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header with Back Link and Logo */}
          <div className="flex items-center justify-between mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <Logo size="sm" />
          </div>

          {/* Header */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isSignup
              ? 'Start with 2 free workflow downloads'
              : 'Sign in to access your workflows'
            }
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <label htmlFor="name" className="block text-xs font-mono tracking-widest text-muted-foreground mb-2">
                  FULL NAME
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="pl-10 bg-card border-border rounded-lg"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs font-mono tracking-widest text-muted-foreground mb-2">
                EMAIL
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="pl-10 bg-card border-border rounded-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-mono tracking-widest text-muted-foreground mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="pl-10 bg-card border-border rounded-lg"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <Button type="submit" variant="minimal" className="w-full" disabled={isLoading}>
              {isLoading ? 'Loading...' : isSignup ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          {/* Toggle */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-primary hover:underline font-medium"
            >
              {isSignup ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-card border-l border-border relative overflow-hidden">
        {/* Content */}
        <div className="relative px-12 max-w-lg">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono tracking-widest text-primary">WHY ZAPERRA</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              2000+ Premium
              <br />
              <span className="text-primary">Automation Workflows</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Access production-ready n8n workflows and automate your business in minutes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { value: "2", label: "FREE DOWNLOADS" },
              { value: "∞", label: "CREDIT VALIDITY" },
              { value: "50+", label: "CATEGORIES" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 border border-border rounded-lg bg-background">
                <div className="text-xl font-bold font-mono text-primary">{stat.value}</div>
                <div className="text-[9px] font-mono tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Credit Info */}
          <div className="p-4 border border-border rounded-lg bg-background">
            <div className="text-xs font-mono tracking-widest text-muted-foreground mb-3">CREDIT COSTS</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-green-500" />
                  Simple workflow
                </span>
                <span className="font-mono text-green-500">1 credit</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Layers className="w-3 h-3 text-yellow-500" />
                  Multi-step workflow
                </span>
                <span className="font-mono text-yellow-500">3 credits</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Cpu className="w-3 h-3 text-red-500" />
                  Advanced + AI workflow
                </span>
                <span className="font-mono text-red-500">5 credits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;