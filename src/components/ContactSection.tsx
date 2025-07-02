import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Thank you for your message!",
      description: "We'll get back to you within 24 hours to discuss your project."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-6">
              Let's Bring Your Space to Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your project with premium interior design? Get in touch with our team to discuss your vision.
            </p>
          </div>

          <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  rows={6}
                  required
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg px-12"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </form>
          </div>

          {/* Trust badges */}
          <div className="text-center mt-12 fade-in">
            <p className="text-muted-foreground text-sm mb-4">
              Trusted by leading real estate developers across the region
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs uppercase tracking-wide font-medium">Premium Partners</div>
              <div className="text-xs uppercase tracking-wide font-medium">Quality Assured</div>
              <div className="text-xs uppercase tracking-wide font-medium">Timely Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;