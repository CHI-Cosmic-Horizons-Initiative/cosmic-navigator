import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import blackHoleJet from '@/assets/black-hole-jet.jpeg';

const researchTopics = [
  {
    id: 'neutron-stars',
    title: 'Neutron Stars and White Dwarfs',
    description: 'When stars die, their fate is determined by how massive they were in life. Stars like our Sun leave behind white dwarfs: Earth-size remnants of the original star\'s core. More massive stars explode as supernovas, while their cores collapse into neutron stars.',
    extended: 'Small as they are, the deaths of these compact objects change the chemistry of the universe. The supernova explosions of white dwarfs and the collisions of neutron stars create new elements on the periodic table.',
    link: '#'
  },
  {
    id: 'black-holes',
    title: 'Black Holes & Extreme Gravity',
    description: 'Probing the most enigmatic objects where spacetime bends beyond comprehension. Our research includes direct imaging of supermassive black holes and studying their effects on surrounding matter.',
    extended: 'Using radio telescopes spanning the globe, we create Earth-sized virtual observatories capable of imaging the shadows of black holes.',
    link: '#'
  },
  {
    id: 'exoplanets',
    title: 'Exoplanets & Habitability',
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
    <section id="research" className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-background">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Research Topics
          </h2>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
          >
            See all research topics
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Topic Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-1"
          >
            {researchTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  activeTopic === topic.id
                    ? 'bg-muted border-l-2 border-primary'
                    : 'hover:bg-muted/50'
                }`}
              >
                <h3 className={`font-medium transition-colors ${
                  activeTopic === topic.id ? 'text-primary' : 'text-foreground'
                }`}>
                  {topic.title}
                </h3>
              </button>
            ))}
          </motion.div>

          {/* Right - Topic Content */}
          <motion.div
            key={activeTopic}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={blackHoleJet} 
                alt={currentTopic.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-2xl text-foreground">
              {currentTopic.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {currentTopic.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {currentTopic.extended}
            </p>
            <a 
              href={currentTopic.link}
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
