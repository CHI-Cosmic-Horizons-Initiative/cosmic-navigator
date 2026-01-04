import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll respond soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation />
      
      <main className="lg:pl-64 pt-20 lg:pt-0">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stellar-gold/10 via-background to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-8"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Get in touch with the Cosmic Horizons Initiative
            </p>
          </motion.div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl mb-6 text-foreground">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2 font-body">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full glass-panel px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2 font-body">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full glass-panel px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2 font-body">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full glass-panel px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2 font-body">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={5}
                      className="w-full glass-panel px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="cosmic" size="lg">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl mb-6 text-foreground">Get Involved</h2>
                <div className="space-y-8">
                  <div className="glass-panel p-6">
                    <h3 className="font-display text-lg mb-2 text-foreground">Join as a Researcher</h3>
                    <p className="text-muted-foreground text-sm font-body">
                      Collaborate with our global network of astrophysicists and contribute to groundbreaking discoveries.
                    </p>
                  </div>
                  <div className="glass-panel p-6">
                    <h3 className="font-display text-lg mb-2 text-foreground">Student Opportunities</h3>
                    <p className="text-muted-foreground text-sm font-body">
                      Explore fellowships, internships, and educational programs for aspiring astronomers.
                    </p>
                  </div>
                  <div className="glass-panel p-6">
                    <h3 className="font-display text-lg mb-2 text-foreground">Partner Institutions</h3>
                    <p className="text-muted-foreground text-sm font-body">
                      Build collaborative relationships with the Cosmic Horizons Initiative.
                    </p>
                  </div>
                  <div className="glass-panel p-6">
                    <h3 className="font-display text-lg mb-2 text-foreground">Support Our Science</h3>
                    <p className="text-muted-foreground text-sm font-body">
                      Learn how you can contribute to advancing our understanding of the universe.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
