const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">Bliss-Tone</h3>
            <p className="text-background/80 leading-relaxed">
              Premium interior design partners for villa and apartment builders. Creating elegant living spaces that blend luxury with livability.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Villa Interiors</li>
              <li>Apartment Projects</li>
              <li>Custom Furniture</li>
              <li>Builder Partnerships</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>Get in touch to discuss your project</p>
              <p>Premium interior solutions for developers</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Bliss-Tone. All rights reserved. Premium Interior Design Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;