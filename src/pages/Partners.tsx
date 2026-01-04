import { motion } from 'framer-motion';
import { ExternalLink, Handshake } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';
import stellarisLogo from '@/assets/stellaris-logo.svg';

const partners = [
  {
    name: 'Stellaris EUI',
    logo: stellarisLogo,
    linkedIn: 'https://www.linkedin.com/company/102915591',
    description: [
      'We are proud to announce our partnership with Stellaris EUI, a university club dedicated to astronomy and space science. This collaboration marks a significant milestone for the Cosmic Horizon Initiative, and we are truly honored to begin this journey together.',
      'Engaging with university students and space enthusiasts from leading academic institutions is at the heart of our mission. We firmly believe that student-driven communities play a vital role in shaping the future of scientific exploration and innovation.',
      'Stellaris EUI is the first university club to partner with the Cosmic Horizon Initiative. Together, we aim to inspire curiosity, foster collaboration, and build meaningful connections across the global space and astronomy community.',
    ],
    isFirst: true,
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Handshake className="w-6 h-6 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Our Partners
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Building meaningful connections with passionate students and academic communities worldwide
            </p>
          </motion.div>
        </section>

        {/* Partners List */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 md:p-12 mb-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Logo */}
                  <motion.div 
                    className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <h2 className="font-display text-2xl md:text-3xl text-foreground">
                        {partner.name}
                      </h2>
                      {partner.isFirst && (
                        <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                          First Partner
                        </span>
                      )}
                      <a 
                        href={partner.linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    {partner.description.map((para, j) => (
                      <p key={j} className="text-muted-foreground font-body leading-relaxed mb-4 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* More Partners Coming Soon */}
        <section className="py-20 px-8 md:px-16 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12"
            >
              <span className="inline-block text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                Coming Soon
              </span>
              <h2 className="font-display text-2xl mb-4 text-foreground">More Partnerships</h2>
              <p className="text-muted-foreground font-body">
                We are actively expanding our network of collaborations with universities, research institutions, and space enthusiast communities worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}