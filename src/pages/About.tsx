import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';

export default function About() {
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
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Inspiring curiosity, fostering exploration, and igniting scientific innovation
            </p>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                To be a global beacon of astronomical discovery, where humanity's deepest questions about the cosmos are explored with rigor, creativity, and an unwavering commitment to open science.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                The Cosmic Horizons Initiative unites researchers, students, and thinkers from around the world to advance our understanding of the universe through cutting-edge observation, theoretical innovation, and interdisciplinary collaboration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-8 md:px-16 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-12 text-center text-foreground"
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Diversity of Thought', desc: 'Embracing perspectives from all backgrounds and disciplines' },
                { title: 'Open Knowledge', desc: 'Sharing discoveries freely for the benefit of all humanity' },
                { title: 'Ethical Science', desc: 'Conducting research with integrity and responsibility' },
                { title: 'Global Collaboration', desc: 'Working across borders to tackle cosmic questions' },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6"
                >
                  <h3 className="font-display text-xl mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-6 text-foreground"
            >
              Governance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg font-body mb-8"
            >
              Our initiative is guided by an international advisory board of leading scientists, educators, and institutional partners.
            </motion.p>
            <p className="text-sm text-muted-foreground/60">
              Leadership profiles coming soon.
            </p>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
