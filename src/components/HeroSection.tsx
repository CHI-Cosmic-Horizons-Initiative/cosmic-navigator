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

  useEffect(() => {
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
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Slide content */}
            <div className="border-l-2 border-primary/50 pl-6 md:pl-8">
              <motion.h1
                className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              <motion.a
                href={heroSlides[currentSlide].link}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                <span className="uppercase tracking-widest">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-foreground scale-125'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 lg:left-[calc(50%+8rem)] -translate-x-1/2 z-20"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={scrollToContent}
          className="p-2"
        >
          <ChevronDown className="w-8 h-8 text-foreground/50 hover:text-foreground transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
}
