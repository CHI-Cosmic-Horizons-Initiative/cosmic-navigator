import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import nebulaHero from '@/assets/nebula-hero.jpg';
import blackHoleDisk from '@/assets/black-hole-disk.jpg';
import quasar from '@/assets/quasar.png';
import blackHoleJet from '@/assets/black-hole-jet.jpeg';

const discoverItems = [
  {
    type: 'Big Question',
    title: 'What do black holes look like?',
    image: blackHoleDisk,
    link: '#'
  },
  {
    type: 'Meet the Scientist',
    title: 'Dr. Stellar Dynamics',
    image: null,
    link: '#'
  },
  {
    type: 'Current Night Sky',
    title: 'Tonight\'s Highlights',
    image: null,
    link: '#',
    isSpecial: true
  },
  {
    type: 'Featured News',
    title: 'New Observations Reveal Planetary Formation',
    image: quasar,
    link: '#'
  },
  {
    type: 'Research Project',
    title: 'Astrophysics Data System',
    image: null,
    link: '#'
  },
  {
    type: 'Research Project',
    title: 'YouthAstroNet',
    image: null,
    link: '#'
  },
  {
    type: 'Meet the Scientist',
    title: 'Dr. Galaxy Evolution',
    image: null,
    link: '#'
  },
  {
    type: 'Amazing Discovery',
    title: 'Planets Form in Organic Soups',
    image: nebulaHero,
    link: '#',
    isLarge: true
  },
  {
    type: 'Featured News',
    title: 'Magnetic Fields in Galactic Bones',
    image: blackHoleJet,
    link: '#'
  },
  {
    type: 'Opportunities',
    title: 'Fellowship Programs',
    image: null,
    link: '#',
    isHighlight: true
  },
  {
    type: 'Big Question',
    title: 'What happened in the early universe?',
    image: quasar,
    link: '#'
  }
];

export default function DiscoverSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl font-medium text-foreground mb-12"
        >
          Discover the Cosmic Horizons Initiative
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {discoverItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`
                group relative overflow-hidden rounded-lg
                ${item.isLarge ? 'col-span-2 row-span-2' : ''}
                ${item.isSpecial ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-card'}
                ${item.isHighlight ? 'bg-primary/10 border border-primary/30' : ''}
                ${item.image ? 'aspect-square' : 'aspect-square flex flex-col justify-between p-4 md:p-6'}
              `}
            >
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <span className="text-xs text-primary/80 uppercase tracking-wider block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-sm md:text-base font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-xs text-primary/80 uppercase tracking-wider">
                    {item.type}
                  </span>
                  <div>
                    <h3 className="text-sm md:text-base font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground mt-2 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
