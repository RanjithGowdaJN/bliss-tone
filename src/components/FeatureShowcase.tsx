import React, { useState } from 'react';
import { Lightbulb, Wind, Volume2, Shield } from 'lucide-react';

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Shield,
      title: "Invisible Security That Protects",
      description: "The safest luxury is the one you don't see."
    },
    {
      icon: Lightbulb,
      title: "Mood-Shifting False Ceilings",
      description: "Ceilings that don't just cover, they create emotion."
    },
    {
      icon: Wind,
      title: "Gesture-Responsive Wardrobes", 
      description: "Walk in. It lights up. Slide your hand, it opens."
    },
    {
      icon: Volume2,
      title: "The Bed That Adjusts to You",
      description: "Rest becomes a ritual, not just routine."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            When Design Meets Intelligence
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-primary/10 border-2 border-primary/20 shadow-lg' 
                      : 'bg-card hover:bg-card/80 border-2 border-transparent hover:border-border'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeFeature === index ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                    } transition-colors duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${
                  activeFeature === 0 ? 'from-yellow-400 to-yellow-600' :
                  activeFeature === 1 ? 'from-blue-400 to-blue-600' :
                  activeFeature === 2 ? 'from-purple-400 to-purple-600' :
                  'from-green-400 to-green-600'
                } flex items-center justify-center transition-all duration-500`}>
                  {React.createElement(features[activeFeature].icon, { 
                    className: "h-10 w-10 text-white" 
                  })}
                </div>
                <h4 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                  {features[activeFeature].title}
                </h4>
                <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;