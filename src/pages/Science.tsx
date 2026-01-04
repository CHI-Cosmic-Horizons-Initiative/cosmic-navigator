import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';
import blackHoleDisk from '@/assets/black-hole-disk.jpg';
import quasar from '@/assets/quasar.png';

const scienceDomains = [
  {
    title: 'Black Holes & Extreme Gravity',
    description: 'Studying the most extreme gravitational environments in the universe',
    image: blackHoleDisk,
    link: '/science/black-holes'
  },
  {
    title: 'Cosmology & the Early Universe',
    description: 'Understanding the origin, evolution, and fate of the cosmos',
    image: quasar,
    link: '/science/cosmology'
  },
  {
    title: 'Stellar Evolution',
    description: 'Following the life cycles of stars from birth to death',
    link: '/science/stellar-evolution'
  },
  {
    title: 'Exoplanets & Habitability',
    description: 'Searching for worlds beyond our solar system',
    link: '/science/exoplanets'
  },
  {
    title: 'Galactic Structure & Dark Matter',
    description: 'Mapping the invisible scaffolding of the universe',
    link: '/science/dark-matter'
  },
  {
    title: 'High-Energy Astrophysics',
    description: 'Observing the universe in X-rays and gamma rays',
    link: '/science/high-energy'
  },
];

export default function Science() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Science
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Exploring the fundamental questions of astrophysics and cosmology
            </p>
          </motion.div>
        </section>

        {/* Science Domains */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scienceDomains.map((domain, i) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={domain.link} className="block group">
                    <div className="holographic-card overflow-hidden">
                      {domain.image && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={domain.image} 
                            alt={domain.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      {!domain.image && (
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                      )}
                      <div className="p-6">
                        <h3 className="font-display text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                          {domain.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-body">
                          {domain.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
