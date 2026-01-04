import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const regions = [
  { name: 'North America', x: 22, y: 40, members: '2,400+' },
  { name: 'Europe', x: 48, y: 35, members: '3,100+' },
  { name: 'Asia', x: 72, y: 42, members: '2,800+' },
  { name: 'South America', x: 30, y: 70, members: '1,200+' },
  { name: 'Africa', x: 52, y: 58, members: '900+' },
  { name: 'Oceania', x: 82, y: 72, members: '600+' },
];

export default function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <section className="cosmic-section min-h-screen py-32 relative z-10">
      {/* Earth glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            A Shared Cosmic Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Global <span className="text-gradient">Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Researchers, students, philosophers, and engineers united across continents
            in the pursuit of cosmic understanding.
          </p>
        </motion.div>

        {/* Interactive globe representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto aspect-[2/1] mb-16"
        >
          {/* World map outline (simplified) */}
          <div className="absolute inset-0 glass-panel rounded-3xl overflow-hidden">
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              {[...Array(8)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={`${(i + 1) * 12.5}%`}
                  x2="100%"
                  y2={`${(i + 1) * 12.5}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
              {[...Array(12)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={`${(i + 1) * 8.33}%`}
                  y1="0"
                  x2={`${(i + 1) * 8.33}%`}
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
            </svg>

            {/* Connection lines between regions */}
            <svg className="absolute inset-0 w-full h-full">
              {regions.map((region, i) =>
                regions.slice(i + 1).map((otherRegion) => (
                  <motion.line
                    key={`${region.name}-${otherRegion.name}`}
                    x1={`${region.x}%`}
                    y1={`${region.y}%`}
                    x2={`${otherRegion.x}%`}
                    y2={`${otherRegion.y}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeOpacity={0.15}
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                ))
              )}
            </svg>

            {/* Region markers */}
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="absolute cursor-pointer group"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setActiveRegion(region.name)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  style={{ width: 16, height: 16, margin: '-8px' }}
                />
                
                {/* Core dot */}
                <div className={`
                  w-4 h-4 rounded-full transition-all duration-300
                  ${activeRegion === region.name ? 'bg-primary scale-150' : 'bg-primary/70 scale-100'}
                `} />

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: activeRegion === region.name ? 1 : 0,
                    y: activeRegion === region.name ? 0 : 10
                  }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap glass-panel px-3 py-2 rounded-lg text-sm z-20"
                >
                  <div className="font-semibold text-foreground">{region.name}</div>
                  <div className="text-primary text-xs">{region.members} researchers</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '11,000+', label: 'Researchers' },
            { value: '85', label: 'Countries' },
            { value: '400+', label: 'Institutions' },
            { value: '50+', label: 'Languages' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
