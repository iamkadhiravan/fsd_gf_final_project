import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

import shadeNetGreen from '@/assets/shade-net-green.jpg';
import polyfilm from '@/assets/polyfilm.jpg';
import uvRope from '@/assets/uv-rope.jpg';
import insectNet from '@/assets/insect-net.jpg';
import birdNet from '@/assets/bird-net.jpg';

const products = [
  {
    id: 1,
    name: 'Shade Net',
    description: 'High-quality shade nets available in multiple colors (green, black, white) with various shade percentages for optimal crop protection.',
    image: shadeNetGreen,
    colors: ['Green', 'Black', 'White', 'Blue'],
    features: ['35%-90% Shade', 'UV Stabilized', 'Durable HDPE'],
  },
  {
    id: 2,
    name: 'Polyfilm',
    description: 'Premium UV-resistant polyfilm sheets for greenhouse and polyhouse covering. Ensures optimal light diffusion and climate control.',
    image: polyfilm,
    colors: ['Transparent', 'Yellow'],
    features: ['UV Resistant', 'Anti-Drip', 'Long Lasting'],
  },
  {
    id: 3,
    name: 'UV Rope',
    description: 'Heavy-duty UV-stabilized ropes for securing shade nets and polyfilm. Resistant to weather conditions and wear.',
    image: uvRope,
    colors: ['Yellow/Green', 'Black'],
    features: ['UV Stabilized', 'High Strength', 'Weather Proof'],
  },
  {
    id: 4,
    name: 'Insect Net',
    description: 'Fine mesh netting to protect crops from harmful insects while allowing air and light penetration.',
    image: insectNet,
    colors: ['White', 'Green'],
    features: ['40-60 Mesh', 'Breathable', 'Pest Control'],
  },
  {
    id: 5,
    name: 'Bird Net',
    description: 'Durable anti-bird netting to protect fruits and vegetables from bird damage without harming wildlife.',
    image: birdNet,
    colors: ['Black', 'Green'],
    features: ['Strong Mesh', 'Lightweight', 'Reusable'],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quality Agricultural Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our range of premium agricultural products designed to protect and enhance your farming operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} variant="product" className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-1">
                  {product.colors.slice(0, 3).map((color) => (
                    <span
                      key={color}
                      className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-md"
                    >
                      {color}
                    </span>
                  ))}
                  {product.colors.length > 3 && (
                    <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-md">
                      +{product.colors.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Request Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
