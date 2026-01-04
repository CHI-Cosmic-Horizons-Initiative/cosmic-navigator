import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const footerLinks = {
  research: [
    { label: 'Big Questions', href: '/science' },
    { label: 'Research Topics', href: '/research' },
    { label: 'Publications', href: '/research' },
    { label: 'Data Resources', href: '/explore' },
  ],
  community: [
    { label: 'People', href: '/community' },
    { label: 'Institutions', href: '/community' },
    { label: 'Partners', href: '/community' },
    { label: 'Events', href: '/news' },
  ],
  opportunities: [
    { label: 'Fellowships', href: '/programs' },
    { label: 'Careers', href: '/programs' },
    { label: 'Internships', href: '/programs' },
    { label: 'Volunteer', href: '/contact' },
  ],
  about: [
    { label: 'Our Mission', href: '/about' },
    { label: 'Leadership', href: '/about' },
    { label: 'Facilities', href: '/explore' },
    { label: 'Contact', href: '/contact' },
  ]
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/CHICOSMIC', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function FooterSection() {
  return (
    <footer className="py-16 lg:py-24 relative z-10 lg:pl-64 bg-card/80 backdrop-blur-sm border-t border-border/20">
      {/* Top glow accent */}
      <div className="absolute top-0 left-64 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="font-display text-lg font-semibold text-foreground block">
                COSMIC HORIZON
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block">
                Initiative
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">
              Advancing humanity's understanding of the universe through collaborative research and discovery.
            </p>
            <p className="text-sm text-muted-foreground mb-6 font-body">
              <a href="mailto:chicosmicinitiative@gmail.com" className="hover:text-primary transition-colors">
                chicosmicinitiative@gmail.com
              </a>
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 glass-panel hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-xs uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                {category}
                <span className="w-8 h-px bg-border" />
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.div whileHover={{ x: 4 }}>
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Cosmic Horizons Initiative. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                className="hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
