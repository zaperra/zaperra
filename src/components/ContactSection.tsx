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
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight mb-6">
              Get in touch
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Have questions about our workflows or need custom automation solutions? We're here to help.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Email
                </div>
                <a href="mailto:hello@zaperra.com" className="font-medium hover:underline">
                  hello@zaperra.com
                </a>
              </div>

              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Response Time
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
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-background border-border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="bg-background border-border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="bg-background border-border rounded-md resize-none"
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
