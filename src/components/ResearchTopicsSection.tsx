import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Atom, Circle, Globe } from 'lucide-react';
import blackHoleJet from '@/assets/black-hole-jet.jpeg';
import blackHoleDisk from '@/assets/black-hole-disk.jpg';
import nebulaHero from '@/assets/nebula-hero.jpg';

const researchTopics = [
  {
    id: 'neutron-stars',
    title: 'Neutron Stars and White Dwarfs',
    icon: Circle,
    image: nebulaHero,
    description: 'When stars die, their fate is determined by how massive they were in life. Stars like our Sun leave behind white dwarfs: Earth-size remnants of the original star\'s core. More massive stars explode as supernovas, while their cores collapse into neutron stars.',
    extended: 'Small as they are, the deaths of these compact objects change the chemistry of the universe. The supernova explosions of white dwarfs and the collisions of neutron stars create new elements on the periodic table.',
    link: '#'
  },
  {
    id: 'black-holes',
    title: 'Black Holes & Extreme Gravity',
    icon: Atom,
    image: blackHoleDisk,
    description: 'Probing the most enigmatic objects where spacetime bends beyond comprehension. Our research includes direct imaging of supermassive black holes and studying their effects on surrounding matter.',
    extended: 'Using radio telescopes spanning the globe, we create Earth-sized virtual observatories capable of imaging the shadows of black holes.',
    link: '#'
  },
  {
    id: 'exoplanets',
    title: 'Exoplanets & Habitability',
    icon: Globe,
    image: blackHoleJet,
    description: 'Searching for worlds beyond our solar system that could harbor life. We study planetary atmospheres, orbital dynamics, and the conditions necessary for life to emerge.',
    extended: 'From hot Jupiters to rocky Earth-like worlds, our catalog of known exoplanets continues to grow, bringing us closer to answering whether we are alone.',
    link: '#'
  }
];

export default function ResearchTopicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTopic, setActiveTopic] = useState(researchTopics[0].id);

  const currentTopic = researchTopics.find(t => t.id === activeTopic) || researchTopics[0];

  return (
    <section id="research" className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-background/80 backdrop-blur-sm">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Science</span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Research Topics
            </h2>
          </div>
          <motion.a 
            href="#" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group glass-panel px-4 py-2"
            whileHover={{ x: 5 }}
          >
            See all research topics
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Topic Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            {researchTopics.map((topic, index) => {
              const Icon = topic.icon;
              const isActive = activeTopic === topic.id;
              
              return (
                <motion.button
                  key={topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={`w-full text-left p-5 rounded-lg transition-all duration-500 relative overflow-hidden ${
                    isActive
                      ? 'glass-panel'
                      : 'hover:bg-muted/30'
                  }`}
                  whileHover={{ x: isActive ? 0 : 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {isActive && (
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isActive ? 'bg-primary/20' : 'bg-muted/50'
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <h3 className={`font-medium transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {topic.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right - Topic Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <motion.div 
                className="aspect-video rounded-lg overflow-hidden relative holographic-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src={currentTopic.image} 
                  alt={currentTopic.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating label */}
                <div className="absolute bottom-4 left-4 glass-panel px-3 py-1.5">
                  <span className="text-xs text-primary uppercase tracking-wider">Active Research</span>
                </div>
              </motion.div>
              
              <h3 className="font-display text-2xl text-foreground">
                {currentTopic.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {currentTopic.description}
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                {currentTopic.extended}
              </p>
              
              <motion.a 
                href={currentTopic.link}
                className="inline-flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group stellar-border px-4 py-2 rounded-lg"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}