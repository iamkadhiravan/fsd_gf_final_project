import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import heroImage from '@/assets/hero-farm.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Agricultural farm with shade nets and polyhouse structures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
            🌱 Premium Agricultural Solutions
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Grow Better with{' '}
            <span className="relative">
              Green Farmly
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Your trusted partner for premium shade nets, polyfilm, and agricultural protection solutions. 
            We help farmers protect and enhance crop yields with quality products.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">UV Protected</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Truck className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Best Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
