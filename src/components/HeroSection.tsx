import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";

const WorkflowNode = ({ x, y, delay, label }: { x: number; y: number; delay: number; label: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div className="relative">
      <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center">
        <div className="w-6 h-6 rounded bg-primary/20 border border-primary/40" />
      </div>
      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-mono whitespace-nowrap">
        {label}
      </span>
    </div>
  </motion.div>
);

const ConnectionLine = ({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) => (
  <motion.svg
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ overflow: 'visible' }}
  >
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="hsl(var(--primary) / 0.3)"
      strokeWidth="1"
      strokeDasharray="4 4"
    />
  </motion.svg>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Top Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm"
      >
        <div className="container-tight flex items-center justify-between h-10 text-xs font-mono">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              CONNECTED
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="text-primary">⬡</span>
              2048 WORKFLOWS
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="text-primary">◈</span>
              MARKETPLACE READY
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

      {/* Main Content */}
      <div className="container-tight pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border bg-card mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-muted-foreground">READY TO AUTOMATE</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 tracking-tight"
            >
              Premium n8n
              <br />
              <span className="text-primary">Workflow Marketplace</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 text-xs font-mono tracking-widest text-muted-foreground mb-6"
            >
              <span className="w-4 h-px bg-primary" />
              AUTOMATION & INTEGRATION TEMPLATES
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              Access 2000+ production-ready automation workflows. From simple integrations to complex enterprise solutions — deploy with confidence.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-8 mb-10"
            >
              {[
                { value: "2000+", label: "WORKFLOWS" },
                { value: "50+", label: "CATEGORIES" },
                { value: "4.9", label: "RATING" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl font-bold text-primary font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/marketplace">
                <Button variant="minimal" size="lg" className="group">
                  Browse Marketplace
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/auth?signup=true">
                <Button variant="minimal-outline" size="lg" className="group">
                  <Users className="w-4 h-4" />
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Workflow Visualization */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative h-[500px] corner-brackets"
            >
              {/* Nodes */}
              <WorkflowNode x={10} y={20} delay={0.8} label="Trigger" />
              <WorkflowNode x={40} y={10} delay={1.0} label="HTTP" />
              <WorkflowNode x={70} y={20} delay={1.2} label="Transform" />
              <WorkflowNode x={25} y={50} delay={1.1} label="Filter" />
              <WorkflowNode x={55} y={45} delay={1.3} label="AI Model" />
              <WorkflowNode x={85} y={55} delay={1.5} label="Output" />
              <WorkflowNode x={15} y={80} delay={1.4} label="Webhook" />
              <WorkflowNode x={50} y={75} delay={1.6} label="Database" />

              {/* Connections */}
              <ConnectionLine x1={16} y1={25} x2={40} y2={15} delay={1.5} />
              <ConnectionLine x1={46} y1={15} x2={70} y2={25} delay={1.6} />
              <ConnectionLine x1={16} y1={25} x2={30} y2={52} delay={1.7} />
              <ConnectionLine x1={31} y1={55} x2={55} y2={50} delay={1.8} />
              <ConnectionLine x1={61} y1={50} x2={85} y2={58} delay={1.9} />
              <ConnectionLine x1={76} y1={25} x2={85} y2={55} delay={2.0} />
              <ConnectionLine x1={21} y1={82} x2={50} y2={78} delay={2.1} />
              <ConnectionLine x1={56} y1={78} x2={85} y2={60} delay={2.2} />

              {/* Status Panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-48 space-y-3"
              >
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground mb-4">
                  WORKFLOW STATUS
                </div>
                {[
                  { label: "NODES", value: "8", status: "active" },
                  { label: "CONNECTIONS", value: "7", status: "active" },
                  { label: "COMPLEXITY", value: "HIGH", status: "warning" },
                  { label: "STATUS", value: "READY", status: "success" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-[10px] font-mono text-muted-foreground">{item.label}</span>
                    <span className={`text-xs font-mono ${
                      item.status === 'success' ? 'text-green-500' :
                      item.status === 'warning' ? 'text-primary' :
                      'text-foreground'
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

      {/* Bottom Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm"
      >
        <div className="container-tight flex items-center justify-between h-12 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-primary">◎</span>
            PLATFORM: ZAPERRA
          </div>
          <div className="hidden sm:block text-muted-foreground">
            BROWSE MODE: ACTIVE
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
