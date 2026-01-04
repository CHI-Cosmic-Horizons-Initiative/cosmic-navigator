import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';
import galacticGas from '@/assets/galactic-gas.webp';
import supernovaHand from '@/assets/supernova-hand.jpg';
import tidalDisruption from '@/assets/tidal-disruption.jpg';
import stellarisLogo from '@/assets/stellaris-logo.svg';

const newsItems = [
  {
    title: 'Cosmic Horizon Initiative Partners with Stellaris EUI',
    date: 'January 4, 2026',
    category: 'Partnership',
    image: stellarisLogo,
    excerpt: 'We are proud to announce our partnership with Stellaris EUI, a university club dedicated to astronomy and space science. This marks the beginning of a growing network of academic collaborations.'
  },
  {
    title: 'New Hubble Observations Reveal Galactic Gas Dynamics',
    date: 'January 2, 2026',
    category: 'Research',
    image: galacticGas,
    excerpt: 'Stunning new imagery of NGC 4388 shows the complex processes of gas stripping in cluster environments.'
  },
  {
    title: 'X-ray Telescope Captures Cosmic Hand Nebula',
    date: 'December 28, 2025',
    category: 'Discovery',
    image: supernovaHand,
    excerpt: 'Multi-wavelength observations of MSH 15-52 reveal the intricate structure of pulsar wind nebulae.'
  },
  {
    title: 'Record-Breaking Tidal Disruption Event Observed',
    date: 'December 15, 2025',
    category: 'Research',
    image: tidalDisruption,
    excerpt: 'Astronomers witness a star being torn apart by a supermassive black hole in unprecedented detail.'
  },
  {
    title: 'Graduate Fellowship Applications Now Open',
    date: 'December 1, 2025',
    category: 'Announcement',
    excerpt: 'Apply now for our 2026-2027 graduate research fellowships. Deadline: March 1, 2026.'
  },
  {
    title: 'Annual Symposium Dates Announced',
    date: 'November 20, 2025',
    category: 'Event',
    excerpt: 'Join us June 15-19, 2026 for our annual symposium on frontiers in astrophysics.'
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              News & Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              The latest discoveries, announcements, and stories from our community
            </p>
          </motion.div>
        </section>

        {/* News Grid */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="holographic-card overflow-hidden">
                    {item.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    {!item.image && (
                      <div className="h-32 bg-gradient-to-br from-card to-muted" />
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-primary uppercase tracking-wider">{item.category}</span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-display text-lg mb-2 text-foreground group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-body line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
