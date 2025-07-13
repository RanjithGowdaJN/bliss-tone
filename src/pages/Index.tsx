import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureShowcase from '@/components/FeatureShowcase';
import AboutSection from '@/components/AboutSection';
import SocialProofSection from '@/components/SocialProofSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureShowcase />
      <AboutSection />
      <SocialProofSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
