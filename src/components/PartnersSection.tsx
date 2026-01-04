import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake, ExternalLink } from 'lucide-react';
import stellarisLogo from '@/assets/stellaris-logo.svg';

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="py-24 lg:py-32 relative z-10 lg:pl-64 bg-background/80 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-6 lg:px-16" 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-5 h-5 text-primary" />
            <span className="text-xs uppercase tracking-widest text-primary">Collaborations</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Our <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Building meaningful connections with passionate students and academic communities worldwide.
          </p>
        </motion.div>

        {/* Stellaris EUI Partner Card */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="glass-panel p-8 md:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo */}
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img 
                  src={stellarisLogo} 
                  alt="Stellaris EUI Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    Stellaris EUI
                  </h3>
                  <a 
                    href="https://www.linkedin.com/company/102915591" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We are proud to announce our partnership with Stellaris EUI, a university club dedicated to astronomy and space science. This collaboration marks a significant milestone for the Cosmic Horizon Initiative, and we are truly honored to begin this journey together.
                </p>
                
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Engaging with university students and space enthusiasts from leading academic institutions is at the heart of our mission. We firmly believe that student-driven communities play a vital role in shaping the future of scientific exploration and innovation.
                </p>

                <p className="text-muted-foreground font-body leading-relaxed">
                  Stellaris EUI is the first university club to partner with the Cosmic Horizon Initiative. Together, we aim to inspire curiosity, foster collaboration, and build meaningful connections across the global space and astronomy community.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
