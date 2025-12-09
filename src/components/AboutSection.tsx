import { Leaf, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We promote sustainable farming practices with eco-friendly products that reduce environmental impact.',
    },
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'Every product undergoes rigorous quality checks to ensure durability and optimal performance.',
    },
    {
      icon: Heart,
      title: 'Farmer First',
      description: 'Our mission is to support farmers with affordable, high-quality solutions for better yields.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Empowering Farmers Since 2014
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Green Farmly is a leading supplier of agricultural protection materials. We understand the challenges 
              farmers face and provide innovative solutions to protect crops from harsh weather, pests, and birds.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to quality and customer satisfaction has made us the trusted choice for farmers, 
              nurseries, and agricultural businesses across the region.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-4 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <div className="h-48 bg-primary rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-primary-foreground p-6">
                  <Leaf className="w-12 h-12 mx-auto mb-3" />
                  <p className="font-display text-xl font-bold">Green</p>
                  <p className="font-display text-xl font-bold">Farmly</p>
                </div>
              </div>
              <div className="h-64 bg-sage rounded-2xl" />
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-terracotta rounded-2xl" />
              <div className="h-48 bg-forest-light rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
