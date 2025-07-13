import { Sparkles, Cog, Building } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl font-playfair leading-relaxed text-foreground mb-8">
              We don't just design interiors—we choreograph experiences for the future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From villa-scale elegance to tech-lit urban apartments, every space at Bliss Tone is built to look exquisite and grow smarter over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Designed to Impress</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Engineered for Evolution</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Built for Builder Workflow</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;