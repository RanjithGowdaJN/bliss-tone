import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import heroImage from '@/assets/hero-interior.jpg';
import apartmentBedroom from '@/assets/apartment-bedroom.jpg';
import villaDining from '@/assets/villa-dining.jpg';
import villaKitchen from '@/assets/villa-kitchen.jpg';
import apartmentLiving from '@/assets/apartment-living.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      image: heroImage,
      title: "Luxury Villa Living Room",
      type: "Villa Interior",
      description: "Premium living space with olive green accents and warm wood elements"
    },
    {
      image: villaKitchen,
      title: "Modern Villa Kitchen",
      type: "Villa Interior",
      description: "Contemporary kitchen design with brass hardware and natural stone"
    },
    {
      image: villaDining,
      title: "Elegant Villa Dining",
      type: "Villa Interior",
      description: "Sophisticated dining room with premium furniture and lighting"
    },
    {
      image: apartmentBedroom,
      title: "Luxury Apartment Bedroom",
      type: "Apartment Project",
      description: "Serene bedroom design with muted tones and premium finishes"
    },
    {
      image: apartmentLiving,
      title: "Modern Apartment Living",
      type: "Apartment Project",
      description: "Contemporary living space with modular furniture and brass accents"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-6">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest premium interior projects for villas and apartments
          </p>
        </div>

        <div className="max-w-6xl mx-auto fade-in">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover hover-zoom"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-playfair font-semibold text-card-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;