import { Home, Image } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Villa Interiors",
      description: "Complete interior design solutions for luxury villas, from concept to execution with premium finishes and bespoke furniture."
    },
    {
      icon: Image,
      title: "Apartments & Builder Projects",
      description: "Comprehensive interior partnerships with real estate developers, delivering consistent luxury across multiple units."
    },
    {
      icon: Home,
      title: "Premium Modular & Custom Furniture",
      description: "Curated selection of high-end modular furniture and custom-designed pieces tailored to each space's unique requirements."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design services tailored for premium residential projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;