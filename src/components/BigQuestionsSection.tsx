import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import blackHoleDisk from '@/assets/black-hole-disk.jpg';
import quasar from '@/assets/quasar.png';
import nebulaHero from '@/assets/nebula-hero.jpg';
import blackHoleJet from '@/assets/black-hole-jet.jpeg';

const bigQuestions = [
  {
    number: "01",
    question: "Does life exist outside of the solar system?",
    image: nebulaHero,
    link: "#research"
  },
  {
    number: "02",
    question: "How do stars and planets form and evolve?",
    image: quasar,
    link: "#research"
  },
  {
    number: "03",
    question: "What do black holes look like?",
    image: blackHoleDisk,
    link: "#research"
  },
  {
    number: "04",
    question: "What is the universe made of?",
    image: blackHoleJet,
    link: "#research"
  }
];

export default function BigQuestionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="questions" className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-muted/10 backdrop-blur-sm">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <motion.span 
              className="text-xs uppercase tracking-widest text-primary mb-2 block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Explore
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Big Questions
            </h2>
          </div>
          <motion.a 
            href="#research" 
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group glass-panel px-4 py-2"
            whileHover={{ x: 5 }}
          >
            See All The Big Questions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {bigQuestions.map((item, index) => (
            <motion.a
              key={item.number}
              href={item.link}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg holographic-card"
            >
              <motion.img
                src={item.image}
                alt={item.question}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              {/* Multi-layer gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.span 
                  className="text-primary text-sm font-mono mb-2 glow-soft inline-block"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.number}
                </motion.span>
                <h3 className="font-display text-lg text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                  {item.question}
                </h3>
                
                {/* Animated arrow on hover */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}