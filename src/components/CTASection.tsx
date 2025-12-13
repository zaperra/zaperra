import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs font-mono tracking-widest text-primary">GET STARTED</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Ready to automate
            <br />
            <span className="text-primary">your business?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Join thousands of businesses using Zaperra to streamline their operations with production-ready workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth?signup=true">
              <Button variant="minimal" size="lg" className="group">
                Start Free Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="minimal-outline" size="lg">
                Browse Workflows
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
