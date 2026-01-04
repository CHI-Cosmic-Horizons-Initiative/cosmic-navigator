import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ValuesSection from '@/components/ValuesSection';
import DomainsSection from '@/components/DomainsSection';
import ResearchSection from '@/components/ResearchSection';
import CommunitySection from '@/components/CommunitySection';
import ProgramsSection from '@/components/ProgramsSection';
import CTASection from '@/components/CTASection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = 'Cosmic Horizons Initiative | International Astronomy & Space Science';
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* 3D Star Field Background */}
      <StarField />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-cosmic pointer-events-none z-[1]" />
      <div className="fixed inset-0 bg-gradient-nebula pointer-events-none z-[1]" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <div id="values">
          <MissionSection />
        </div>
        <ValuesSection />
        <div id="domains">
          <DomainsSection />
        </div>
        <div id="research">
          <ResearchSection />
        </div>
        <div id="community">
          <CommunitySection />
        </div>
        <div id="programs">
          <ProgramsSection />
        </div>
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Cosmic Horizons Initiative. All rights reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            Exploring the universe together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
