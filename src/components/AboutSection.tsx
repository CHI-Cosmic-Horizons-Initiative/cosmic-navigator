import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-background">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-2">
              Cosmic Horizons Initiative
            </h2>
            <h3 className="text-xl text-primary mb-8">
              International Research Collaboration
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              How can we expand the limits of human knowledge further into the unknown? The Cosmic Horizons Initiative is an international collaboration designed to ask big questions about the universe, build the tools needed to answer them, and share the resulting discoveries with the world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our researchers span six continents, united in the pursuit of understanding cosmic phenomena from the smallest particles to the largest structures in the observable universe.
            </p>
          </motion.div>

          {/* Right - Director Quote */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <blockquote className="relative pl-6 border-l-2 border-primary/30">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "The coming decade will be an extremely exciting time for astrophysics with the next generation of space- and ground-based telescopes coming online. Our initiative's strength lies in the expertise of our scientists across the full electromagnetic spectrum. Together, we're developing a strategic plan to answer some of astronomy's biggest questions."
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden flex items-center justify-center">
                  <span className="text-2xl font-display text-primary">DR</span>
                </div>
                <div>
                  <cite className="text-foreground font-medium not-italic block">
                    Dr. Research Director
                  </cite>
                  <span className="text-sm text-muted-foreground">
                    Cosmic Horizons Initiative
                  </span>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
