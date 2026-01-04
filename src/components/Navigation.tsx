import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Big Questions', href: '#questions' },
  { label: 'Research', href: '#research' },
  { label: 'People', href: '#community' },
  { label: 'Facilities', href: '#domains' },
  { label: 'Academics', href: '#programs' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(href.replace('#', ''));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar Navigation - CfA Style */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col w-64 bg-background/95 backdrop-blur-xl border-r border-border/20"
      >
        {/* Animated gradient accent */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        
        {/* Logo */}
        <motion.div 
          className="p-6 border-b border-border/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="block group"
          >
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-1">
              Center for
            </span>
            <motion.span 
              className="font-display text-xl font-semibold text-foreground block border border-foreground/20 px-2 py-1 inline-block group-hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              COSMIC HORIZONS
            </motion.span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mt-1">
              International Initiative
            </span>
          </a>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex-1 py-6 overflow-y-auto">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative block w-full text-left px-6 py-2.5 text-sm transition-all ${
                  isActive 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navActiveIndicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                  <ChevronRight className={`w-3 h-3 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Search */}
        <motion.div 
          className="p-6 border-t border-border/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="flex items-center gap-2 px-3 py-2 glass-panel cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input 
              type="text" 
              placeholder="Search"
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 cursor-pointer"
            />
            <Search className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>

        {/* Bottom Links */}
        <motion.div 
          className="p-6 border-t border-border/20 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button 
            className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: 4 }}
          >
            News
          </motion.button>
          <motion.button 
            className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: 4 }}
          >
            Events
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" size="sm" className="w-full mt-4 text-xs stellar-border">
              Support Our Science
            </Button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/20' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <motion.a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-[8px] tracking-[0.2em] text-muted-foreground uppercase">
              Center for
            </span>
            <span className="font-display text-sm font-semibold text-foreground">
              COSMIC HORIZONS
            </span>
          </motion.a>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden pt-16"
          >
            <motion.div 
              className="absolute inset-0 bg-background/98 backdrop-blur-xl" 
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div 
              className="relative h-full overflow-y-auto py-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-4 text-lg text-foreground hover:text-primary hover:bg-muted/20 transition-colors border-b border-border/10"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div 
                className="px-6 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant="outline" className="w-full stellar-border">
                  Support Our Science
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}