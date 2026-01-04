import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
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
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSection = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar Navigation - CfA Style */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col w-64 bg-background/95 backdrop-blur-md border-r border-border/20"
      >
        {/* Logo */}
        <div className="p-6 border-b border-border/20">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="block"
          >
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-1">
              Center for
            </span>
            <span className="font-display text-xl font-semibold text-foreground block border border-foreground/20 px-2 py-1 inline-block">
              COSMIC HORIZONS
            </span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mt-1">
              International Initiative
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6 overflow-y-auto">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-6 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Search */}
        <div className="p-6 border-t border-border/20">
          <div className="flex items-center gap-2 px-3 py-2 border border-border/30 rounded">
            <input 
              type="text" 
              placeholder="Search"
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1"
            />
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="p-6 border-t border-border/20 space-y-2">
          <button className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
            News
          </button>
          <button className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
            Events
          </button>
          <Button variant="outline" size="sm" className="w-full mt-4 text-xs">
            Support Our Science
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-b border-border/20"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col"
          >
            <span className="text-[8px] tracking-[0.2em] text-muted-foreground uppercase">
              Center for
            </span>
            <span className="font-display text-sm font-semibold text-foreground">
              COSMIC HORIZONS
            </span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden pt-16"
          >
            <div className="absolute inset-0 bg-background/98 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="relative h-full overflow-y-auto py-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-4 text-lg text-foreground hover:text-primary hover:bg-muted/20 transition-colors border-b border-border/10"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="px-6 py-6">
                <Button variant="outline" className="w-full">
                  Support Our Science
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
