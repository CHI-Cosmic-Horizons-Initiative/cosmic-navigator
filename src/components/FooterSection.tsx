import { motion } from 'framer-motion';

const footerLinks = {
  research: [
    { label: 'Big Questions', href: '#questions' },
    { label: 'Research Topics', href: '#research' },
    { label: 'Publications', href: '#' },
    { label: 'Data Resources', href: '#' },
  ],
  community: [
    { label: 'People', href: '#community' },
    { label: 'Institutions', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Events', href: '#' },
  ],
  opportunities: [
    { label: 'Fellowships', href: '#programs' },
    { label: 'Careers', href: '#' },
    { label: 'Internships', href: '#' },
    { label: 'Volunteer', href: '#' },
  ],
  about: [
    { label: 'Our Mission', href: '#about' },
    { label: 'Leadership', href: '#' },
    { label: 'Facilities', href: '#domains' },
    { label: 'Contact', href: '#' },
  ]
};

export default function FooterSection() {
  return (
    <footer className="py-16 lg:py-24 relative z-10 lg:pl-64 bg-card border-t border-border/20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-1">
                Center for
              </span>
              <span className="font-display text-lg font-semibold text-foreground block">
                COSMIC HORIZONS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block">
                International Initiative
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing humanity's understanding of the universe through collaborative research and discovery.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs uppercase tracking-wider text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Cosmic Horizons Initiative. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
