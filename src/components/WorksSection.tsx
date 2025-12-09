import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import QuotationModal from '@/components/QuotationModal';

import greenhouse from '@/assets/greenhouse.jpg';
import polyhouse from '@/assets/polyhouse.jpg';
import hydroponic from '@/assets/hydroponic.jpg';

const works = [
  {
    id: 1,
    title: 'Greenhouse Setup',
    description: 'Complete greenhouse construction with climate control systems, polyfilm covering, and irrigation setup for year-round cultivation.',
    image: greenhouse,
    category: 'Infrastructure',
  },
  {
    id: 2,
    title: 'Polyhouse Installation',
    description: 'Custom polyhouse structures with shade net covering, designed for specific crop requirements and local climate conditions.',
    image: polyhouse,
    category: 'Infrastructure',
  },
  {
    id: 3,
    title: 'Hydroponic Systems',
    description: 'Modern soilless farming solutions with NFT and DWC systems for efficient vegetable and herb production.',
    image: hydroponic,
    category: 'Technology',
  },
];

const WorksSection = () => {
  const [quotationModal, setQuotationModal] = useState({ isOpen: false, productName: '' });

  const handleWorkQuote = (workTitle: string) => {
    setQuotationModal({ isOpen: true, productName: workTitle });
  };

  return (
    <section id="works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects We're Proud Of
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From greenhouses to hydroponic systems, we deliver complete agricultural solutions that transform farming operations.
          </p>
        </div>

        {/* Works Grid - Bento Style */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Large Featured Card */}
          <Card variant="work" className="group cursor-pointer animate-fade-up lg:row-span-2">
            <div className="relative h-full min-h-[400px]">
              <img
                src={works[0].image}
                alt={works[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-4">
                  {works[0].category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
                  {works[0].title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 max-w-md">
                  {works[0].description}
                </p>
                <Button 
                  variant="hero" 
                  size="sm" 
                  onClick={() => handleWorkQuote(works[0].title)}
                  className="gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Quotation
                </Button>
              </div>
            </div>
          </Card>

          {/* Smaller Cards */}
          {works.slice(1).map((work, index) => (
            <Card key={work.id} variant="work" className="group cursor-pointer animate-fade-up" style={{ animationDelay: `${(index + 1) * 0.15}s` }}>
              <div className="relative h-72">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                    {work.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                    {work.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2 mb-3">
                    {work.description}
                  </p>
                  <Button 
                    variant="hero" 
                    size="sm" 
                    onClick={() => handleWorkQuote(work.title)}
                    className="gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get Quotation
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '10+', label: 'Years Experience' },
            { value: '1000+', label: 'Happy Farmers' },
            { value: '50+', label: 'Acres Covered' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <QuotationModal
        isOpen={quotationModal.isOpen}
        onClose={() => setQuotationModal({ isOpen: false, productName: '' })}
        productName={quotationModal.productName}
      />
    </section>
  );
};

export default WorksSection;
