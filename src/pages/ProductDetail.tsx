import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Check, 
  Phone, 
  Package,
  Truck,
  Shield,
  MessageCircle
} from 'lucide-react';
import { getProductBySlug, products } from '@/data/products';
import QuotationModal from '@/components/QuotationModal';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [quotationModal, setQuotationModal] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <Link to="/products">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              to="/products" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.colors[selectedColor]?.image || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Color Options */}
              {product.colors.length > 1 && (
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(index)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedColor === index 
                          ? 'border-primary ring-2 ring-primary/30' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {product.category}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {product.shortDescription}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    <Check className="w-3 h-3" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Pricing Table */}
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-3">Select Size & Quantity</h3>
                <div className="space-y-2 mb-4">
                  {product.pricing.map((price, index) => (
                    <button
                      key={price.size}
                      onClick={() => setSelectedPrice(index)}
                      className={`w-full flex justify-between items-center p-3 rounded-lg border transition-all ${
                        selectedPrice === index
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">{price.size}</span>
                      <span className="text-primary font-bold">
                        ₹{price.price.toLocaleString()}/{price.unit}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-muted-foreground">Quantity:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(product.minOrderQty, quantity - 1))}
                      className="px-3 py-2 hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-border font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Min order: {product.minOrderQty}
                  </span>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center py-3 border-t border-border">
                  <span className="text-muted-foreground">Estimated Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{(product.pricing[selectedPrice].price * quantity).toLocaleString()}
                  </span>
                </div>
              </Card>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="flex-1" onClick={() => setQuotationModal(true)}>
                  <MessageCircle className="w-5 h-5" />
                  Get Quotation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('tel:+919876543210', '_self')}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <Package className="w-6 h-6 mx-auto text-primary mb-1" />
                  <p className="text-xs text-muted-foreground">Quality Assured</p>
                </div>
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto text-primary mb-1" />
                  <p className="text-xs text-muted-foreground">Pan India Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto text-primary mb-1" />
                  <p className="text-xs text-muted-foreground">5 Year Warranty</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Specifications */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Product Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Specifications
              </h2>
              <div className="bg-muted/50 rounded-xl overflow-hidden">
                {product.specifications.map((spec, index) => (
                  <div 
                    key={spec.label}
                    className={`flex justify-between p-4 ${
                      index % 2 === 0 ? 'bg-background' : ''
                    }`}
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Related Products
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct) => (
                  <Link key={relProduct.id} to={`/products/${relProduct.slug}`}>
                    <Card variant="product" className="h-full">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold text-foreground mb-1">
                          {relProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relProduct.shortDescription}
                        </p>
                        <p className="mt-2 font-bold text-primary">
                          From ₹{relProduct.pricing[0].price.toLocaleString()}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      
      <QuotationModal
        isOpen={quotationModal}
        onClose={() => setQuotationModal(false)}
        productName={product.name}
      />
    </div>
  );
};

export default ProductDetail;
