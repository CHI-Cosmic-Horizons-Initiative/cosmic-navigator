import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const values = [
  {
    id: 1,
    title: "Diversity of Thought",
    description: "Every perspective enriches our understanding of the cosmos.",
    position: { x: 20, y: 30 }
  },
  {
    id: 2,
    title: "Global Collaboration",
    description: "United across nations, cultures, and disciplines in shared discovery.",
    position: { x: 75, y: 25 }
  },
  {
    id: 3,
    title: "Open Dialogue",
    description: "Free exchange of ideas powers scientific breakthrough.",
    position: { x: 15, y: 65 }
  },
  {
    id: 4,
    title: "Inclusive Excellence",
    description: "The universe belongs to everyone willing to explore it.",
    position: { x: 80, y: 70 }
  },
  {
    id: 5,
    title: "Ethical Inquiry",
    description: "Responsible exploration guided by wisdom and care.",
    position: { x: 50, y: 50 }
  }
];

export default function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <section className="cosmic-section min-h-screen py-32 relative z-10">
      {/* Connection lines background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200 100% 70%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(270 60% 50%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {values.map((value, i) => 
          values.slice(i + 1).map((otherValue, j) => (
            <motion.line
              key={`${value.id}-${otherValue.id}`}
              x1={`${value.position.x}%`}
              y1={`${value.position.y}%`}
              x2={`${otherValue.position.x}%`}
              y2={`${otherValue.position.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
              transition={{ duration: 2, delay: 0.5 + (i + j) * 0.1 }}
            />
          ))
        )}
      </svg>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            What We Stand For
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Like stars connected by invisible forces, our values form the constellation
            that guides our journey.
          </p>
        </motion.div>

        {/* Interactive star map */}
        <div className="relative h-[500px] md:h-[600px]">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="absolute cursor-pointer group"
              style={{
                left: `${value.position.x}%`,
                top: `${value.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setActiveValue(value.id)}
              onMouseLeave={() => setActiveValue(null)}
            >
              {/* Star glow */}
              <div className={`
                absolute inset-0 rounded-full blur-xl transition-all duration-500
                ${activeValue === value.id ? 'bg-primary/40 scale-150' : 'bg-primary/20 scale-100'}
              `} />
              
              {/* Star core */}
              <div className={`
                relative w-4 h-4 rounded-full transition-all duration-300
                ${activeValue === value.id ? 'bg-primary scale-150' : 'bg-stellar-white scale-100'}
                animate-pulse-slow
              `} />

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: activeValue === value.id ? 1 : 0,
                  y: activeValue === value.id ? 0 : 10
                }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 glass-panel p-4 rounded-xl z-20"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile list fallback */}
        <div className="md:hidden mt-12 space-y-4">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-4 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-primary mb-1">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
