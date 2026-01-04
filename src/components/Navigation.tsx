import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Science', href: '/science' },
  { label: 'Research', href: '/research' },
  { label: 'Programs', href: '/programs' },
  { label: 'Community', href: '/community' },
  { label: 'Explore', href: '/explore' },
  { label: 'News', href: '/news' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Sidebar Navigation - Transparent & Borderless */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col w-64 backdrop-blur-md transition-colors duration-500 ${
          isScrolled ? 'bg-background/55' : 'bg-background/20'
        }`}
      >
        
        {/* Logo */}
        <motion.div 
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/" className="block group">
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
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex-1 py-6 overflow-y-auto">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <Link
                  to={item.href}
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
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Search */}
        <motion.div 
          className="p-6"
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
          className="p-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link to="/contact" className="block">
            <motion.span 
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: 4 }}
            >
              Contact
            </motion.span>
          </Link>
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
          isScrolled ? 'bg-background/35 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex flex-col">
            <motion.span 
              className="text-[8px] tracking-[0.2em] text-muted-foreground uppercase"
              whileHover={{ scale: 1.02 }}
            >
              Center for
            </motion.span>
            <span className="font-display text-sm font-semibold text-foreground">
              COSMIC HORIZONS
            </span>
          </Link>

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
              className="absolute inset-0 bg-background/50 backdrop-blur-md" 
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
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className="block w-full text-left px-6 py-4 text-lg text-foreground hover:text-primary hover:bg-muted/20 transition-colors border-b border-border/10"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link
                  to="/contact"
                  className="block w-full text-left px-6 py-4 text-lg text-foreground hover:text-primary hover:bg-muted/20 transition-colors border-b border-border/10"
                >
                  Contact
                </Link>
              </motion.div>
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
