import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
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

  return (
    <section id="questions" className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Big Questions
          </h2>
          <a 
            href="#research" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
          >
            See All The Big Questions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bigQuestions.map((item, index) => (
            <motion.a
              key={item.number}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.question}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-sm font-mono mb-2">
                  {item.number}
                </span>
                <h3 className="font-display text-lg text-foreground leading-snug group-hover:text-primary transition-colors">
                  {item.question}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
