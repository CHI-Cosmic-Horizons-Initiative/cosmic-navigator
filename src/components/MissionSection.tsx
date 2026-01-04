import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Users, Telescope, Atom } from 'lucide-react';

const missionPoints = [
  {
    icon: Lightbulb,
    title: "Nurturing Exploration",
    description: "Encouraging bold ideas and risk-taking in the pursuit of cosmic understanding."
  },
  {
    icon: Users,
    title: "Interdisciplinary Collaboration",
    description: "Bridging astronomy, physics, philosophy, and technology for breakthrough discoveries."
  },
  {
    icon: Telescope,
    title: "Scientific Inquiry",
    description: "Addressing fundamental questions about our place in the universe."
  },
  {
    icon: Atom,
    title: "Philosophical Depth",
    description: "Exploring the profound implications of cosmic discoveries for humanity."
  }
];

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="cosmic-section min-h-screen py-32 relative z-10">
      {/* Background nebula effect */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-secondary/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Why We Exist
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            The Cosmic Horizons Initiative exists to unite humanity in the exploration of the universe,
            fostering discovery that transcends boundaries and inspires generations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-panel p-8 rounded-2xl group hover:bg-card/80 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="font-display text-2xl md:text-3xl italic text-foreground/80 max-w-3xl mx-auto">
            "We are a way for the cosmos to know itself."
          </p>
          <cite className="block mt-4 text-primary/70 text-sm tracking-wide">
            — Carl Sagan
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
