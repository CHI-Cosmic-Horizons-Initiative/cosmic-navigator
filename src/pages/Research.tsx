import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';

const activeProjects = [
  {
    title: 'Multi-Messenger Black Hole Survey',
    status: 'Active',
    field: 'High-Energy Astrophysics',
    description: 'Combining X-ray, optical, and gravitational wave data to study black hole populations.'
  },
  {
    title: 'Exoplanet Atmosphere Characterization',
    status: 'Active',
    field: 'Exoplanets',
    description: 'Using spectroscopy to analyze the chemical composition of distant worlds.'
  },
  {
    title: 'Dark Matter Mapping Initiative',
    status: 'Active',
    field: 'Cosmology',
    description: 'Creating detailed maps of dark matter distribution through gravitational lensing.'
  },
  {
    title: 'Stellar Evolution Models',
    status: 'Ongoing',
    field: 'Stellar Astrophysics',
    description: 'Developing next-generation computational models of stellar life cycles.'
  },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Research
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Pushing the boundaries of human knowledge through rigorous investigation
            </p>
          </motion.div>
        </section>

        {/* Active Projects */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-12 text-foreground"
            >
              Active Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {activeProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-primary px-2 py-1 bg-primary/10 rounded">
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.field}</span>
                  </div>
                  <h3 className="font-display text-xl mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data & Simulations */}
        <section className="py-20 px-8 md:px-16 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-6 text-foreground"
            >
              Data & Simulations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg font-body mb-8"
            >
              Access our publicly available datasets and computational resources.
            </motion.p>
            <p className="text-sm text-muted-foreground/60">
              Data portal coming soon.
            </p>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
