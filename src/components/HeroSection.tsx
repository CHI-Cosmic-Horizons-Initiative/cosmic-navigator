import { AnimatePresence, motion, useReducedMotion, useTransform, MotionValue, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Continuous slide position driven by scroll
  const slideFloat = useMotionValue(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const trackTop = rect.top + window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = heroSlides.length * windowHeight;

      // How far we've scrolled into the track
      const scrolledInto = window.scrollY - trackTop;
      // Progress from 0 to (slides - 1)
      const progress = scrolledInto / windowHeight;
      const slide = clamp(progress, 0, heroSlides.length - 1);
      
      slideFloat.set(slide);

      const idx = clamp(Math.round(slide), 0, heroSlides.length - 1);
      setActiveIndex((prev) => (prev === idx ? prev : idx));
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [slideFloat]);

  // Preload all images
  useEffect(() => {
    let loaded = 0;
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        loaded++;
        if (loaded === heroSlides.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === heroSlides.length) setImagesLoaded(true);
      };
    });
  }, []);

  // Scroll to specific slide using anchor segments
  const scrollToSlide = useCallback((index: number) => {
    const segment = document.getElementById(`hero-seg-${index}`);
    if (segment) {
      segment.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToNext = useCallback(() => {
    if (activeIndex < heroSlides.length - 1) {
      scrollToSlide(activeIndex + 1);
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex, scrollToSlide]);

  const transitionDuration = reducedMotion ? 0.2 : 0.7;

  return (
    <div ref={trackRef} className="relative">
      {/* Anchor segments - these create the scroll distance */}
      {heroSlides.map((_, index) => (
        <div
          key={index}
          id={`hero-seg-${index}`}
          className="h-screen w-full"
          aria-hidden="true"
        />
      ))}

      {/* Sticky visual layer - pinned over all segments */}
      <section 
        id="home" 
        className="sticky top-0 h-screen w-full overflow-hidden lg:pl-64"
        style={{ marginTop: `-${heroSlides.length * 100}vh` }}
      >
        {/* Loading shimmer */}
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-background animate-shimmer z-50" />
        )}

        {/* Background Slides with scroll-linked interpolation */}
        {heroSlides.map((slide, index) => (
          <SlideImage
            key={index}
            slide={slide}
            index={index}
            slideFloat={slideFloat}
            reducedMotion={reducedMotion}
          />
        ))}

        {/* Floating Particles */}
        {!reducedMotion && (
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
        )}

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : -10 }}
              transition={{ duration: reducedMotion ? 0.15 : 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl"
            >
              <motion.div className="relative" initial={{ x: reducedMotion ? 0 : -20 }} animate={{ x: 0 }} transition={{ duration: 0.6 }}>
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  style={{ transformOrigin: 'top' }}
                />

                <div className="pl-6 md:pl-8">
                  {/* Slide counter */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-block text-xs font-mono text-primary/60 mb-2"
                  >
                    {String(activeIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="block text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body"
                  >
                    Featured Research
                  </motion.span>

                  <motion.h1
                    initial={{ y: reducedMotion ? 0 : 24, opacity: 0, filter: reducedMotion ? 'blur(0px)' : 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: reducedMotion ? 0.2 : 0.7, delay: 0.08 }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6"
                  >
                    {heroSlides[activeIndex].title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: reducedMotion ? 0 : 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: reducedMotion ? 0.2 : 0.6, delay: 0.16 }}
                    className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed font-body"
                  >
                    {heroSlides[activeIndex].description}
                  </motion.p>

                  <motion.a
                    href={heroSlides[activeIndex].link}
                    initial={{ y: reducedMotion ? 0 : 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: reducedMotion ? 0.2 : 0.6, delay: 0.24 }}
                    whileHover={reducedMotion ? {} : { x: 5 }}
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
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3">
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
                  activeIndex === index ? 'bg-primary scale-125' : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
              />
              {activeIndex === index && (
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
              {activeIndex < heroSlides.length - 1 ? 'Scroll for next highlight' : 'Continue'}
            </span>
            <motion.div animate={reducedMotion ? {} : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
              <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Progress */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/20 z-30 lg:left-64">
          <motion.div className="h-full bg-primary/50" style={{ width: `${((activeIndex + 1) / heroSlides.length) * 100}%` }} transition={{ duration: 0.25 }} />
        </div>
      </section>
    </div>
  );
}

// Separate component for scroll-interpolated slide images
interface SlideImageProps {
  slide: { image: string; title: string };
  index: number;
  slideFloat: MotionValue<number>;
  reducedMotion: boolean | null;
}

function SlideImage({ slide, index, slideFloat, reducedMotion }: SlideImageProps) {
  // Calculate opacity based on distance from current position
  const opacity = useTransform(slideFloat, (value: number) => {
    const distance = Math.abs(value - index);
    // Full opacity when active, fade out as we move away
    return clamp(1 - distance * 1.2, 0, 1);
  });

  // Scale: active slide is 1.0, others scale up slightly
  const scale = useTransform(slideFloat, (value: number) => {
    const distance = Math.abs(value - index);
    return 1 + distance * 0.05;
  });

  // Blur: active slide has no blur, others are blurred based on distance
  const blur = useTransform(slideFloat, (value: number) => {
    if (reducedMotion) return 0;
    const distance = Math.abs(value - index);
    return distance * 8;
  });

  // Z-index: highest for most visible slide
  const zIndex = useTransform(slideFloat, (value: number) => {
    const distance = Math.abs(value - index);
    return 10 + Math.round((1 - distance) * 10);
  });

  // Create filter string from blur value
  const filterStyle = useTransform(blur, (b: number) => `blur(${b}px)`);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        scale,
        filter: filterStyle,
        zIndex,
      }}
    >
      <motion.img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
        animate={reducedMotion ? {} : { scale: [1.0, 1.03] }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
    </motion.div>
  );
}
