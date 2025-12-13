import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding border-t border-border" ref={ref}>
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono tracking-widest text-primary">CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Get in
              <br />
              <span className="text-primary">touch</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Have questions about our workflows or need custom automation solutions? We're here to help.
            </p>

            <div className="space-y-6">
              <div className="p-4 border border-border bg-card">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground mb-2">
                  EMAIL
                </div>
                <a href="mailto:hello@zaperra.com" className="font-medium hover:text-primary transition-colors">
                  hello@zaperra.com
                </a>
              </div>

              <div className="p-4 border border-border bg-card">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground mb-2">
                  RESPONSE TIME
                </div>
                <span className="font-medium">Within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono tracking-widest text-muted-foreground mb-3">
                  NAME
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-card border-border rounded-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-mono tracking-widest text-muted-foreground mb-3">
                  EMAIL
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="bg-card border-border rounded-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono tracking-widest text-muted-foreground mb-3">
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="bg-card border-border rounded-none resize-none"
                />
              </div>

              <Button type="submit" variant="minimal" className="w-full">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
