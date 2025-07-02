import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-interior.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 fade-in-up">
          Bliss-Tone
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto fade-in-up">
          Premium Interior Spaces Curated for Elegant Living
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-gold text-gold-foreground hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg fade-in-up"
        >
          Let's Connect
        </Button>
        <p className="text-white/70 text-sm mt-8 fade-in">
          Interior partners to leading villa & apartment builders
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;