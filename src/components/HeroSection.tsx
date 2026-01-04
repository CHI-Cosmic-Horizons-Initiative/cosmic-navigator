import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import nebulaHero from '@/assets/nebula-hero.jpg';
import blackHoleDisk from '@/assets/black-hole-disk.jpg';
import quasar from '@/assets/quasar.png';
import blackHoleJet from '@/assets/black-hole-jet.jpeg';

const heroSlides = [
  {
    image: nebulaHero,
    title: "Revealing the Hidden Universe Through Multi-Wavelength Astronomy",
    description: "Our researchers have captured stunning new imagery of stellar nurseries, revealing the complex processes of star formation across cosmic scales.",
    link: "#research"
  },
  {
    image: blackHoleDisk,
    title: "New X-ray Observations Reveal Black Hole Growth Dynamics",
    description: "Precision measurements of supermassive black holes are reshaping our understanding of how these cosmic giants feed and evolve.",
    link: "#research"
  },
  {
    image: quasar,
    title: "Distant Quasars Illuminate the Early Universe",
    description: "Using the most powerful telescopes on Earth and in space, we're peering back to the dawn of cosmic time.",
    link: "#research"
  },
  {
    image: blackHoleJet,
    title: "Gravitational Wave Astronomy Opens New Windows",
    description: "Multi-messenger observations are revolutionizing how we study the most violent events in the cosmos.",
    link: "#research"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden lg:pl-64">
      {/* Background Slides with Enhanced Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.15, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1.05, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1, filter: 'blur(4px)' }}
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
            animate={{ scale: [1.05, 1.1] }}
            transition={{ duration: 8, ease: 'linear' }}
          />
          {/* Multi-layer gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Content with Cinematic Entrance */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Glass Panel Container */}
            <motion.div 
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Glowing accent line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: 'top' }}
              />
              
              <div className="pl-6 md:pl-8">
                <motion.h1
                  initial={{ y: 30, opacity: 0, filter: 'blur(4px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed font-body"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.a
                  href={heroSlides[currentSlide].link}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group glass-panel px-5 py-3"
                >
                  <span className="uppercase tracking-widest">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-3 h-3 rounded-full transition-all duration-500"
          >
            <span className={`absolute inset-0 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? 'bg-primary scale-100'
                : 'bg-foreground/20 scale-75 hover:bg-foreground/40'
            }`} />
            {currentSlide === index && (
              <motion.span
                layoutId="slideIndicator"
                className="absolute inset-0 rounded-full border border-primary"
                initial={false}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 lg:left-[calc(50%+8rem)] -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 group"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Progress bar for slide duration */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/20 z-20 lg:left-64">
        <motion.div
          key={currentSlide}
          className="h-full bg-primary/50"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 8, ease: 'linear' }}
        />
      </div>
    </section>
  );
}