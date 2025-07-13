import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Bliss Tone transformed our entire development. The smart integration was seamless, and buyers immediately understood the value.",
      author: "Sarah Chen",
      role: "Developer, Premium Properties"
    },
    {
      quote: "Every detail was planned perfectly. The homes feel luxurious today and will adapt beautifully to future technology.",
      author: "Michael Rodriguez", 
      role: "Homeowner, Villa Estates"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Join hundreds of discerning homeowners who trust Bliss Tone to craft intelligent, luxurious homes.
          </h2>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 my-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-lg">
                <Quote className="h-8 w-8 text-primary mb-4 mx-auto" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>

          {/* Partner Logos Placeholder */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading builders and technology partners</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="bg-muted px-6 py-2 rounded text-muted-foreground font-medium">Crestron</div>
              <div className="bg-muted px-6 py-2 rounded text-muted-foreground font-medium">Lutron</div>
              <div className="bg-muted px-6 py-2 rounded text-muted-foreground font-medium">Control4</div>
              <div className="bg-muted px-6 py-2 rounded text-muted-foreground font-medium">Sonos</div>
            </div>
          </div>

          {/* Final CTA */}
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium"
          >
            Let's Begin Your Smart Interior Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;