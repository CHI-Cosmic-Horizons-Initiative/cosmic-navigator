import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import nebulaHero from '@/assets/nebula-hero.jpg';
import blackHoleDisk from '@/assets/black-hole-disk.jpg';
import quasar from '@/assets/quasar.png';
import blackHoleJet from '@/assets/black-hole-jet.jpeg';

const discoverItems = [
  {
    type: 'Big Question',
    title: 'What do black holes look like?',
    image: blackHoleDisk,
    link: '#',
    span: 'default'
  },
  {
    type: 'Meet the Scientist',
    title: 'Dr. Stellar Dynamics',
    image: null,
    link: '#',
    span: 'default'
  },
  {
    type: 'Current Night Sky',
    title: 'Tonight\'s Highlights',
    image: null,
    link: '#',
    isSpecial: true,
    span: 'default'
  },
  {
    type: 'Featured News',
    title: 'New Observations Reveal Planetary Formation',
    image: quasar,
    link: '#',
    span: 'default'
  },
  {
    type: 'Research Project',
    title: 'Astrophysics Data System',
    image: null,
    link: '#',
    span: 'default'
  },
  {
    type: 'Research Project',
    title: 'YouthAstroNet',
    image: null,
    link: '#',
    span: 'default'
  },
  {
    type: 'Meet the Scientist',
    title: 'Dr. Galaxy Evolution',
    image: null,
    link: '#',
    span: 'default'
  },
  {
    type: 'Amazing Discovery',
    title: 'Planets Form in Organic Soups',
    image: nebulaHero,
    link: '#',
    span: 'large'
  },
  {
    type: 'Featured News',
    title: 'Magnetic Fields in Galactic Bones',
    image: blackHoleJet,
    link: '#',
    span: 'default'
  },
  {
    type: 'Opportunities',
    title: 'Fellowship Programs',
    image: null,
    link: '#',
    isHighlight: true,
    span: 'default'
  },
  {
    type: 'Big Question',
    title: 'What happened in the early universe?',
    image: quasar,
    link: '#',
    span: 'default'
  }
];

export default function DiscoverSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-muted/10 backdrop-blur-sm">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.01] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Browse</span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Discover the Cosmic Horizons Initiative
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {discoverItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className={`
                group relative overflow-hidden rounded-lg holographic-card
                ${item.span === 'large' ? 'col-span-2 row-span-2' : ''}
                ${item.isSpecial ? 'bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20' : ''}
                ${item.isHighlight ? 'stellar-border' : ''}
                ${item.image ? 'aspect-square' : 'aspect-square flex flex-col justify-between p-4 md:p-6'}
              `}
            >
              {item.image ? (
                <>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <motion.span 
                      className="text-xs text-primary uppercase tracking-wider block mb-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      {item.type}
                    </motion.span>
                    <h3 className="text-sm md:text-base font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  {/* Animated background for non-image cards */}
                  <div className="absolute inset-0 opacity-30">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-xs text-primary uppercase tracking-wider flex items-center gap-2">
                      {item.type}
                      {item.isHighlight && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-300 mb-3">
                      {item.title}
                    </h3>
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </>
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}