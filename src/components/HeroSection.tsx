import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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


export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const reducedMotion = useReducedMotion();

  // Preload all images (and mark loaded when all complete)
  useEffect(() => {
    let loaded = 0;
    const timer = window.setTimeout(() => setImagesLoaded(true), 2500);

    heroSlides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
      img.onload = () => {
        loaded++;
        if (loaded === heroSlides.length) {
          window.clearTimeout(timer);
          setImagesLoaded(true);
        }
      };
      img.onerror = img.onload;
    });

    return () => window.clearTimeout(timer);
  }, []);

  // Track active slide using IntersectionObserver (reliable + scroll-native)
  useEffect(() => {
    const els = heroSlides
      .map((_, i) => document.getElementById(`hero-slide-${i}`))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0];
        if (!top?.target) return;

        const idx = Number((top.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-10% 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const el = document.getElementById(`hero-slide-${index}`);
    if (!el) return;

    // More reliable than scrollIntoView alone across browsers / layouts
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const scrollToNext = useCallback(() => {
    const next = Math.min(activeIndex + 1, heroSlides.length - 1);
    scrollToSlide(next);
  }, [activeIndex, scrollToSlide]);

  return (
    <div className="relative">
      <Helmet>
        {heroSlides.map((s) => (
          <link key={s.image} rel="preload" as="image" href={s.image} />
        ))}
      </Helmet>

      {/* Fixed dot navigation - fully transparent, borderless */}
      <nav
        aria-label="Highlight navigation"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 pointer-events-auto"
      >
        {heroSlides.map((slide, index) => (
          <motion.button
            key={index}
            type="button"
            onClick={() => scrollToSlide(index)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.92 }}
            className="relative group pointer-events-auto"
            aria-label={`Go to highlight ${index + 1}: ${slide.title}`}
          >
            <span
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                activeIndex === index 
                  ? "bg-primary shadow-[0_0_12px_hsl(var(--primary))]" 
                  : "bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
            {activeIndex === index && (
              <motion.span
                layoutId="heroSlideIndicator"
                className="absolute inset-0 rounded-full border border-primary/50"
                initial={false}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Scroll sections: one image per screen (7 total) */}
      {heroSlides.map((slide, index) => (
        <section
          key={index}
          id={`hero-slide-${index}`}
          data-index={index}
          className="relative min-h-screen w-full overflow-hidden lg:pl-64"
        >
          {!imagesLoaded && index === 0 && (
            <div className="absolute inset-0 bg-background/60 animate-shimmer pointer-events-none z-0" />
          )}

          {/* All images stacked for crossfade effect */}
          <div className="absolute inset-0">
            {heroSlides.map((s, i) => (
              <motion.img
                key={i}
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeIndex === i ? 1 : 0,
                  scale: activeIndex === i ? 1 : 1.05
                }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          </div>

          <div className="relative z-10 flex min-h-screen items-center px-8 md:px-16 lg:px-20">
            <motion.article
              initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: reducedMotion ? 0.15 : 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-3xl"
            >
              <motion.div className="relative" initial={{ x: reducedMotion ? 0 : -14 }} whileInView={{ x: 0 }} viewport={{ once: false, amount: 0.5 }}>
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  style={{ transformOrigin: "top" }}
                />

                <div className="pl-6 md:pl-8">
                  <span className="inline-block text-xs font-mono text-primary/60 mb-2">
                    {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                  </span>

                  <span className="block text-xs uppercase tracking-[0.3em] text-primary mb-4 font-body">Featured Research</span>

                  {index === 0 ? (
                    <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
                      {slide.title}
                    </h2>
                  )}

                  <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed font-body">
                    {slide.description}
                  </p>

                  <a
                    href={slide.link}
                    className="inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group glass-panel px-5 py-3"
                  >
                    <span className="uppercase tracking-widest">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.article>
          </div>

          {/* Scroll hint (no text, just the chevron) */}
          {index < heroSlides.length - 1 && (
            <div className="absolute bottom-8 left-1/2 lg:left-[calc(50%+8rem)] -translate-x-1/2 z-20">
              <motion.button type="button" onClick={scrollToNext} className="flex flex-col items-center gap-2 group" whileHover={{ scale: 1.07 }}>
                <motion.div
                  aria-label="Next highlight"
                  animate={reducedMotion ? {} : { y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              </motion.button>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/20 z-20 lg:left-64">
            <div className="h-full bg-primary/50" style={{ width: `${((index + 1) / heroSlides.length) * 100}%` }} />
          </div>
        </section>
      ))}
    </div>
  );
}

