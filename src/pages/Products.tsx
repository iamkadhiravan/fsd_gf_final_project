import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Eye, Filter } from 'lucide-react';
import { products, getAllCategories } from '@/data/products';
import QuotationModal from '@/components/QuotationModal';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [quotationModal, setQuotationModal] = useState({ isOpen: false, productName: '' });
  const categories = ['All', ...getAllCategories()];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleQuickQuote = (productName: string) => {
    setQuotationModal({ isOpen: true, productName });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Our Products
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Premium quality agricultural protection products with competitive pricing. 
              All products come with UV stabilization and manufacturer warranty.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-muted-foreground">
              Showing {filteredProducts.length} products
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  variant="product" 
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {product.popular && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-accent text-accent-foreground text-xs font-bold rounded">
                        POPULAR
                      </span>
                    )}
                    <span className="absolute top-3 right-3 px-2 py-1 bg-background/90 text-xs font-medium rounded">
                      {product.category}
                    </span>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {product.shortDescription}
                    </p>
                    
                    {/* Price Range */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-primary">
                        ₹{product.pricing[0].price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        / {product.pricing[0].unit}
                      </span>
                    </div>

                    {/* Quick Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2">
                    <Link to={`/products/${product.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="w-4 h-4" />
                        Details
                      </Button>
                    </Link>
                    <Button size="sm" className="flex-1" onClick={() => handleQuickQuote(product.name)}>
                      <MessageCircle className="w-4 h-4" />
                      Quote
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <QuotationModal
        isOpen={quotationModal.isOpen}
        onClose={() => setQuotationModal({ isOpen: false, productName: '' })}
        productName={quotationModal.productName}
      />
    </div>
  );
};

export default Products;
