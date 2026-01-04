import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';
import ziadImage from '@/assets/ziad-mekawy.jpg';

const teamMembers = [
  {
    name: 'Ziad Mekawy',
    role: 'Director, Cosmic Horizon Initiative',
    bio: 'Undergrad Student Researcher in Quantum Computing, Cosmology & Astrophysics',
    image: ziadImage,
    isDirector: true,
  },
];

export default function People() {
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
              Our People
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Meet the minds behind the Cosmic Horizon Initiative
            </p>
          </motion.div>
        </section>

        {/* Leadership */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-12 text-center text-foreground"
            >
              Leadership
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 text-center"
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 stellar-border">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm font-body">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Coming Soon */}
        <section className="py-20 px-8 md:px-16 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-6 text-foreground"
            >
              Team Members
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12"
            >
              <span className="inline-block text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                Coming Soon
              </span>
              <p className="text-muted-foreground font-body">
                Additional team member profiles will be added here. Each person will have their own configurable profile with photo, role, and biography.
              </p>
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}