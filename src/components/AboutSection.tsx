import { Sparkles, Cog, Building } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl font-playfair leading-relaxed text-foreground mb-8">
              We don't just install interiors—we engineer spaces that evolve with you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              From villa-scale elegance to urban refinement, Bliss Tone ensures your home isn't just beautiful today, but ready for the tech of tomorrow.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Every design, every material, every cable—planned in harmony.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Designed to Impress</h3>
              <p className="text-muted-foreground">Luxury aesthetics that create emotional connections and lasting impressions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Engineered for the Future</h3>
              <p className="text-muted-foreground">Smart technology seamlessly integrated from the ground up</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Built With Builders in Mind</h3>
              <p className="text-muted-foreground">Collaborative approach that ensures flawless project execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;