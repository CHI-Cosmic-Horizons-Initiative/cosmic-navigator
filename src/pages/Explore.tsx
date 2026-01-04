import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';

export default function Explore() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-nebula-purple/20 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Explore the Universe
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body mb-8">
              Interactive tools and visualizations to journey through the cosmos
            </p>
            <p className="text-sm text-muted-foreground/60">
              Interactive 3D explorer coming soon.
            </p>
          </motion.div>
        </section>

        {/* Exploration Modes */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-12 text-center text-foreground"
            >
              Choose Your Journey
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Beginner', 
                  desc: 'Guided tours through the solar system and nearby stars',
                  icon: '🌟'
                },
                { 
                  title: 'Advanced', 
                  desc: 'Explore galaxies, nebulae, and cosmic structures',
                  icon: '🌌'
                },
                { 
                  title: 'Research-Grade', 
                  desc: 'Access real datasets and scientific visualizations',
                  icon: '🔭'
                },
              ].map((mode, i) => (
                <motion.div
                  key={mode.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="holographic-card p-8 text-center"
                >
                  <div className="text-4xl mb-4">{mode.icon}</div>
                  <h3 className="font-display text-2xl mb-3 text-foreground">{mode.title}</h3>
                  <p className="text-muted-foreground font-body">{mode.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-8 md:px-16 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-8 text-foreground"
            >
              Start Exploring
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/science" className="glass-panel px-6 py-3 hover:bg-primary/10 transition-colors">
                Science Topics
              </Link>
              <Link to="/research" className="glass-panel px-6 py-3 hover:bg-primary/10 transition-colors">
                Research Projects
              </Link>
              <Link to="/news" className="glass-panel px-6 py-3 hover:bg-primary/10 transition-colors">
                Latest News
              </Link>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
