import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, Mic, Lightbulb } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: "Fellowships",
    description: "Supporting emerging astronomers with funding, mentorship, and research opportunities at leading institutions.",
    features: ["PhD & Postdoc funding", "International exchanges", "Career development"]
  },
  {
    icon: Mic,
    title: "Conferences & Workshops",
    description: "Hosting premier scientific gatherings that bring together researchers from across disciplines and borders.",
    features: ["Annual symposium", "Regional workshops", "Virtual colloquia"]
  },
  {
    icon: Users,
    title: "Public Outreach",
    description: "Bringing the wonders of the cosmos to communities worldwide through education and engagement.",
    features: ["School programs", "Public lectures", "Citizen science"]
  },
  {
    icon: Lightbulb,
    title: "Think Labs",
    description: "Interdisciplinary research incubators where unconventional ideas can flourish and mature.",
    features: ["Cross-field collaboration", "Rapid prototyping", "Innovation grants"]
  }
];

export default function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cosmic-section min-h-screen py-32 relative z-10">
      {/* Floating space stations visual */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] opacity-20 pointer-events-none">
        <motion.div
          className="absolute w-8 h-8 rounded bg-primary/30"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ left: '50%', top: '30%' }}
        />
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-secondary/30"
          animate={{ 
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ left: '30%', top: '50%' }}
        />
        <motion.div
          className="absolute w-4 h-4 rounded bg-accent/30"
          animate={{ 
            x: [0, 10, 0],
            y: [0, 20, 0],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ left: '70%', top: '60%' }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Pathways to Discovery
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Programs & <span className="text-gradient">Initiatives</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Structured opportunities for researchers, students, and curious minds
            to engage with the cosmos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel p-8 rounded-2xl group hover:bg-card/80 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
