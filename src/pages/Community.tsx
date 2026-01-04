import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';

export default function Community() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-ionized-cyan/10 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              A global network united by curiosity about the cosmos
            </p>
          </motion.div>
        </section>

        {/* Global Reach */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { stat: '50+', label: 'Partner Institutions' },
                { stat: '30+', label: 'Countries Represented' },
                { stat: '500+', label: 'Active Researchers' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-5xl md:text-6xl text-primary mb-2">{item.stat}</div>
                  <div className="text-muted-foreground font-body">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 px-8 md:px-16 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-12 text-center text-foreground"
            >
              Resources
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Student Hub', desc: 'Resources for aspiring astronomers' },
                { title: 'Mentorship', desc: 'Connect with experienced researchers' },
                { title: 'DEI Initiatives', desc: 'Building an inclusive scientific community' },
                { title: 'Member Directory', desc: 'Find collaborators worldwide' },
              ].map((resource, i) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-5 text-center relative"
                >
                  <span className="absolute top-2 right-2 text-[10px] uppercase tracking-wider text-primary/70 bg-primary/10 px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                  <h3 className="font-display text-lg mb-2 text-foreground">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{resource.desc}</p>
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
