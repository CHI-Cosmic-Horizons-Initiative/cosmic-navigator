import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Send, Sparkles } from 'lucide-react';

export default function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the cosmos!",
      description: "You'll receive our newsletter at " + formData.email,
    });
    setFormData({ firstName: '', lastName: '', email: '' });
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-background/80 backdrop-blur-sm overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      <motion.div 
        className="container mx-auto px-6 lg:px-16 relative" 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              Newsletter
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
          >
            The whole universe,
            <span className="text-gradient block">delivered to your inbox.</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-10 max-w-lg mx-auto font-body"
          >
            Sign up for our newsletter to share in the excitement of advancing humanity's understanding of the universe. Our subscriber network gets the first look at exclusive content.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  required
                  className="w-full px-4 py-3.5 glass-panel text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  required
                  className="w-full px-4 py-3.5 glass-panel text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </motion.div>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="w-full px-4 py-3.5 glass-panel text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full md:w-auto px-8 gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe to Newsletter
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>

          <motion.p
            variants={itemVariants}
            className="text-xs text-muted-foreground mt-8"
          >
            By subscribing, you agree to our Privacy Policy and Terms of Use.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}