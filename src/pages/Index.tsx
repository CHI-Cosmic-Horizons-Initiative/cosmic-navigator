import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BigQuestionsSection from '@/components/BigQuestionsSection';
import ResearchTopicsSection from '@/components/ResearchTopicsSection';
import DiscoverSection from '@/components/DiscoverSection';
import NewsletterSection from '@/components/NewsletterSection';
import FooterSection from '@/components/FooterSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = 'Cosmic Horizons Initiative | International Astronomy & Space Science';
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <BigQuestionsSection />
        <ResearchTopicsSection />
        <DiscoverSection />
        <NewsletterSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
