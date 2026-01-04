import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const domains = [
  {
    id: 'astrophysics',
    title: 'Astrophysics & Cosmology',
    description: 'Understanding the fundamental physics governing celestial objects and the universe itself.',
    icon: '🌌',
    color: 'from-primary/20 to-secondary/20'
  },
  {
    id: 'blackholes',
    title: 'Black Holes & Extreme Gravity',
    description: 'Probing the most enigmatic objects where spacetime bends beyond comprehension.',
    icon: '⚫',
    color: 'from-secondary/20 to-primary/20'
  },
  {
    id: 'stellar',
    title: 'Stellar Evolution',
    description: 'Tracing the life cycles of stars from birth in nebulae to spectacular endings.',
    icon: '⭐',
    color: 'from-accent/20 to-primary/20'
  },
  {
    id: 'exoplanets',
    title: 'Exoplanets & Habitability',
    description: 'Searching for worlds beyond our solar system that could harbor life.',
    icon: '🪐',
    color: 'from-primary/20 to-accent/20'
  },
  {
    id: 'galactic',
    title: 'Galactic Structure & Dark Matter',
    description: 'Mapping the unseen architecture that holds galaxies together.',
    icon: '🌀',
    color: 'from-secondary/20 to-accent/20'
  },
  {
    id: 'highenergy',
    title: 'High-Energy Astrophysics',
    description: 'Investigating cosmic rays, gamma bursts, and the most violent phenomena in space.',
    icon: '⚡',
    color: 'from-accent/20 to-secondary/20'
  }
];

export default function DomainsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  return (
    <section className="cosmic-section min-h-screen py-32 relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Fields of Exploration
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Scientific <span className="text-gradient">Domains</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our research spans the breadth of modern astronomy, from the smallest particles
            to the largest cosmic structures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredDomain(domain.id)}
              onMouseLeave={() => setHoveredDomain(null)}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer
                transition-all duration-500 group
                ${hoveredDomain === domain.id ? 'scale-105 z-10' : 'scale-100'}
              `}
            >
              {/* Background gradient */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${domain.color}
                opacity-50 group-hover:opacity-80 transition-opacity duration-500
              `} />
              
              {/* Glass effect */}
              <div className="relative glass-panel p-8 h-full border-0">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {domain.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {domain.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredDomain === domain.id ? '100%' : 0 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-stellar"
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Glow effect on hover */}
              <div className={`
                absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none
                ${hoveredDomain === domain.id ? 'shadow-[0_0_40px_hsl(var(--primary)/0.2)]' : ''}
              `} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
