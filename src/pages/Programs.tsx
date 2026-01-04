import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';

const programs = [
  {
    title: 'Graduate Fellowships',
    category: 'Fellowships',
    description: 'Supporting the next generation of astrophysicists with funding and mentorship.',
    status: 'Applications Open'
  },
  {
    title: 'Postdoctoral Research Program',
    category: 'Fellowships',
    description: 'Two-year positions for early-career researchers pursuing innovative projects.',
    status: 'Rolling Admissions'
  },
  {
    title: 'Annual Symposium',
    category: 'Events',
    description: 'Our flagship conference bringing together researchers from around the world.',
    status: 'Save the Date'
  },
  {
    title: 'Summer Workshops',
    category: 'Workshops',
    description: 'Intensive training sessions on cutting-edge observational and computational techniques.',
    status: 'Coming Soon'
  },
  {
    title: 'Public Lecture Series',
    category: 'Outreach',
    description: 'Free public talks making astrophysics accessible to everyone.',
    status: 'Ongoing'
  },
  {
    title: 'K-12 Education Partnership',
    category: 'Outreach',
    description: 'Bringing the wonder of the cosmos to classrooms worldwide.',
    status: 'Active'
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stellar-gold/10 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Programs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Opportunities to learn, collaborate, and contribute to cosmic discovery
            </p>
          </motion.div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 group hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mb-4">
                    {program.description}
                  </p>
                  <span className="inline-block text-xs text-primary px-2 py-1 bg-primary/10 rounded">
                    {program.status}
                  </span>
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
