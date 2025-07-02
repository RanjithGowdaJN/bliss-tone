import apartmentBedroom from '@/assets/apartment-bedroom.jpg';
import villaDining from '@/assets/villa-dining.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We design interiors that blend luxury with livability. Partnered with top real estate developers, we bring soulful character to every square foot.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our expertise lies in creating timeless spaces that reflect sophistication while maintaining the warmth and comfort that makes a house a home. From concept to completion, we ensure every detail contributes to an elevated living experience.
            </p>
          </div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4 fade-in">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={apartmentBedroom}
                alt="Luxury apartment bedroom design"
                className="w-full h-64 object-cover hover-zoom"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg mt-8">
              <img
                src={villaDining}
                alt="Villa dining room interior"
                className="w-full h-64 object-cover hover-zoom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;