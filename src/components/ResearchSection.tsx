import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Network } from 'lucide-react';

const researchAreas = [
  {
    icon: Sparkles,
    title: "Bold Ideas",
    description: "We champion unconventional hypotheses and support researchers willing to challenge established paradigms."
  },
  {
    icon: Zap,
    title: "Early-Stage Exploration",
    description: "Providing resources for nascent research directions before they become mainstream focus areas."
  },
  {
    icon: Network,
    title: "Theory-Observation Bridge",
    description: "Connecting theoretical predictions with observational data and computational simulations."
  }
];

export default function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cosmic-section min-h-screen py-32 relative z-10">
      {/* Animated data streams background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: '-32px'
            }}
            animate={{
              y: ['0vh', '100vh'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Exploring the Unknown
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Research & <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pushing the boundaries of human knowledge through fearless inquiry
            and collaborative discovery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                {/* Orbiting ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/20"
                  style={{ scale: 1.5 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Icon container */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
                  <area.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual representation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="glass-panel rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Gravitational wave animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-primary/10"
                  style={{
                    width: 100 + i * 80,
                    height: 100 + i * 80,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              <h3 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
                Multi-Messenger Astronomy
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Combining electromagnetic radiation, gravitational waves, and cosmic particles
                to unveil the complete story of cosmic events.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
