import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

import nebulaHero from '@/assets/nebula-hero.jpg';
import blackHoleDisk from '@/assets/black-hole-disk.jpg';
import quasar from '@/assets/quasar.png';
import blackHoleJet from '@/assets/black-hole-jet.jpeg';
import galacticGas from '@/assets/galactic-gas.webp';
import supernovaHand from '@/assets/supernova-hand.jpg';
import tidalDisruption from '@/assets/tidal-disruption.jpg';

const heroSlides = [
  {
    image: nebulaHero,
    title: 'Revealing the Hidden Universe Through Multi-Wavelength Astronomy',
    description:
      'Our researchers have captured stunning new imagery of stellar nurseries, revealing the complex processes of star formation across cosmic scales.',
    link: '/research',
  },
  {
    image: galacticGas,
    title: 'Galactic Gas Streams Trace Cosmic Evolution',
    description:
      'New observations of NGC 4388 reveal dramatic gas stripping processes that shape galaxy evolution in dense cluster environments.',
    link: '/science',
  },
  {
    image: supernovaHand,
    title: 'X-ray Observations Capture Cosmic Hand Nebula',
    description:
      'The MSH 15-52 pulsar wind nebula reveals the powerful aftermath of stellar explosions through multi-wavelength imaging.',
    link: '/research',
  },
  {
    image: blackHoleDisk,
    title: 'New X-ray Observations Reveal Black Hole Growth Dynamics',
    description:
      'Precision measurements of supermassive black holes are reshaping our understanding of how these cosmic giants feed and evolve.',
    link: '/science/black-holes',
  },
  {
    image: tidalDisruption,
    title: 'Witnessing Stars Torn Apart by Black Holes',
    description:
      'Tidal disruption events offer unique windows into the extreme physics near supermassive black holes.',
    link: '/research',
  },
  {
    image: quasar,
    title: 'Distant Quasars Illuminate the Early Universe',
    description:
      "Using the most powerful telescopes on Earth and in space, we're peering back to the dawn of cosmic time.",
    link: '/science/cosmology',
  },
  {
    image: blackHoleJet,
    title: 'Gravitational Wave Astronomy Opens New Windows',
    description:
      'Multi-messenger observations are revolutionizing how we study the most violent events in the cosmos.',
    link: '/research',
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const markerRefs = useRef<Array<HTMLDivElement | null>>([]);

  const markers = useMemo(() => heroSlides.map((_, i) => i), []);

  useEffect(() => {
    const nodes = markerRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible marker
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!best?.target) return;
        const idx = Number((best.target as HTMLElement).dataset.index);
        if (Number.isFinite(idx)) setCurrentSlide(clamp(idx, 0, heroSlides.length - 1));
      },
      {
        threshold: [0.35, 0.5, 0.65, 0.8],
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    markerRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToNext = () => {
    const next = clamp(currentSlide + 1, 0, heroSlides.length - 1);
    if (next === currentSlide) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    scrollToSlide(next);
  };

  return (
    <div className="relative">
      {/* Sticky visual layer */}
      <section id="home" className="sticky top-0 h-screen w-full overflow-hidden lg:pl-64">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1.05 : 1.12,
              filter: currentSlide === index ? 'blur(0px)' : 'blur(6px)',
            }}
            transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              animate={{ scale: currentSlide === index ? [1.05, 1.08] : 1.12 }}
              transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          </motion.div>
        ))}

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{ x: Math.random() * 1000, y: Math.random() * 800 + 400, opacity: 0 }}
              animate={{ y: [null, -220], opacity: [0, 0.6, 0] }}
              transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl"
            >
              <motion.div className="relative" initial={{ x: -20 }} animate={{ x: 0 }} transition={{ duration: 0.6 }}>
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  style={{ transformOrigin: 'top' }}
                />

                <div className="pl-6 md:pl-8">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body"
                  >
                    Featured Research
                  </motion.span>

                  <motion.h1
                    initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.08 }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.16 }}
                    className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed font-body"
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>

                  <motion.a
                    href={heroSlides[currentSlide].link}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.24 }}
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

        {/* Slide Indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3 pointer-events-auto">
          {heroSlides.map((slide, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => scrollToSlide(index)}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.92 }}
              className="relative group"
              aria-label={`Go to highlight ${index + 1}: ${slide.title}`}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index ? 'bg-primary scale-125' : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
              />
              {currentSlide === index && (
                <motion.span
                  layoutId="heroSlideIndicator"
                  className="absolute inset-0 rounded-full border border-primary"
                  initial={false}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-foreground/70 bg-background/80 px-2 py-1 rounded pointer-events-none">
                {index + 1} / {heroSlides.length}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="absolute bottom-8 left-1/2 lg:left-[calc(50%+8rem)] -translate-x-1/2 z-30"
        >
          <motion.button type="button" onClick={scrollToNext} className="flex flex-col items-center gap-2 group" whileHover={{ scale: 1.07 }}>
            <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
              {currentSlide < heroSlides.length - 1 ? 'Scroll for next highlight' : 'Continue'}
            </span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
              <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Progress */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/20 z-30 lg:left-64">
          <motion.div className="h-full bg-primary/50" style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }} transition={{ duration: 0.25 }} />
        </div>
      </section>

      {/* Scroll markers (create the 7-screen scroll track + drive slide changes) */}
      <div aria-hidden className="relative">
        {markers.map((i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => {
              markerRefs.current[i] = el;
            }}
            className="h-screen"
          />
        ))}
      </div>
    </div>
  );
}
