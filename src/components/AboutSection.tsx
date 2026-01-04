import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-background/80 backdrop-blur-sm">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-6 lg:px-16" 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Main content */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary">International Research</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Cosmic Horizons
              <span className="text-gradient block">Initiative</span>
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                How can we expand the limits of human knowledge further into the unknown? The Cosmic Horizons Initiative is an international collaboration designed to ask big questions about the universe, build the tools needed to answer them, and share the resulting discoveries with the world.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Our researchers span six continents, united in the pursuit of understanding cosmic phenomena from the smallest particles to the largest structures in the observable universe.
              </p>
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/30"
              variants={itemVariants}
            >
              {[
                { value: '200+', label: 'Researchers' },
                { value: '6', label: 'Continents' },
                { value: '50+', label: 'Institutions' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="text-2xl md:text-3xl font-display text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Director Quote with Glass Panel */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div 
              className="glass-panel p-8 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <blockquote className="relative">
                <div className="text-6xl font-display text-primary/20 absolute -top-4 -left-2">"</div>
                <p className="text-muted-foreground italic leading-relaxed mb-8 pt-6 font-body text-lg">
                  The coming decade will be an extremely exciting time for astrophysics with the next generation of space- and ground-based telescopes coming online. Our initiative's strength lies in the expertise of our scientists across the full electromagnetic spectrum. Together, we're developing a strategic plan to answer some of astronomy's biggest questions.
                </p>
                <footer className="flex items-center gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center stellar-border"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-xl font-display text-primary">DR</span>
                    </div>
                  </motion.div>
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}