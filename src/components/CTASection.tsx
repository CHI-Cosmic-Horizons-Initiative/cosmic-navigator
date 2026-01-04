import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cosmic-section min-h-screen py-32 relative z-10">
      {/* Cosmic expansion effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/5"
            style={{
              left: '50%',
              top: '50%',
              width: 200 + i * 200,
              height: 200 + i * 200,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.05, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-8"
          >
            Embark on the Journey
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight"
          >
            Together, let's explore the <span className="text-gradient">cosmos</span>,
            kindle curiosity, and shape the future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Through collaborative discovery, we illuminate the darkness
            and inspire generations to look upward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="hero" size="xl" className="group">
              <span>Join the Initiative</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ✦
              </motion.span>
            </Button>
            <Button variant="cosmic" size="lg">
              Collaborate With Us
            </Button>
            <Button variant="glow" size="lg">
              Contact
            </Button>
          </motion.div>

          {/* Footer quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            className="pt-16 border-t border-border/30"
          >
            <p className="font-display text-lg italic text-foreground/60 mb-4">
              "Somewhere, something incredible is waiting to be known."
            </p>
            <p className="text-primary/50 text-sm">— Carl Sagan</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
