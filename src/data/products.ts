// Product Data with detailed specifications and pricing
import shadeNetGreen from '@/assets/shade-net-green.jpg';
import shadeNetBlack from '@/assets/shade-net-black.jpg';
import shadeNetWhite from '@/assets/shade-net-white.jpg';
import polyfilm from '@/assets/polyfilm.jpg';
import uvRope from '@/assets/uv-rope.jpg';
import insectNet from '@/assets/insect-net.jpg';
import birdNet from '@/assets/bird-net.jpg';

export interface ProductData {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  colors: { name: string; image: string; hex: string }[];
  features: string[];
  specifications: { label: string; value: string }[];
  pricing: { size: string; price: number; unit: string }[];
  minOrderQty: number;
  inStock: boolean;
  popular: boolean;
}

export const products: ProductData[] = [
  {
    id: 1,
    name: 'Green Shade Net',
    slug: 'green-shade-net',
    category: 'Shade Net',
    shortDescription: 'Premium green shade nets for optimal crop protection with UV stabilization.',
    description: 'Our green shade nets are manufactured from high-quality HDPE material with UV stabilizers for extended durability.',
    image: shadeNetGreen,
    images: [shadeNetGreen, shadeNetBlack, shadeNetWhite],
    colors: [
      { name: 'Green', image: shadeNetGreen, hex: '#228B22' },
      { name: 'Black', image: shadeNetBlack, hex: '#1a1a1a' },
      { name: 'White', image: shadeNetWhite, hex: '#f5f5f5' },
    ],
    features: ['UV Stabilized', 'HDPE Material', 'Tear Resistant', 'Easy Installation', '5 Year Warranty'],
    specifications: [
      { label: 'Material', value: 'High-Density Polyethylene (HDPE)' },
      { label: 'Shade Percentage', value: '35%, 50%, 75%, 90%' },
      { label: 'Width', value: '2m, 3m, 4m, 5m' },
      { label: 'Length', value: '50m, 100m' },
      { label: 'GSM', value: '80-180 GSM' },
      { label: 'UV Protection', value: '5 Years' },
    ],
    pricing: [
      { size: '2m x 50m (35%)', price: 2500, unit: 'roll' },
      { size: '3m x 50m (50%)', price: 3800, unit: 'roll' },
      { size: '4m x 50m (75%)', price: 5200, unit: 'roll' },
      { size: '5m x 100m (90%)', price: 12000, unit: 'roll' },
    ],
    minOrderQty: 1,
    inStock: true,
    popular: true,
  },
  {
    id: 2,
    name: 'Black Shade Net',
    slug: 'black-shade-net',
    category: 'Shade Net',
    shortDescription: 'Heavy-duty black shade nets ideal for high temperature regions.',
    description: 'Black shade nets offer maximum heat reduction and are ideal for regions with intense sunlight.',
    image: shadeNetBlack,
    images: [shadeNetBlack, shadeNetGreen],
    colors: [{ name: 'Black', image: shadeNetBlack, hex: '#1a1a1a' }],
    features: ['Maximum Heat Reduction', 'UV Stabilized', 'Heavy Duty', 'Multi-purpose', '5 Year Warranty'],
    specifications: [
      { label: 'Material', value: 'HDPE Monofilament' },
      { label: 'Shade Percentage', value: '50%, 75%, 90%, 95%' },
      { label: 'Width', value: '2m, 3m, 4m, 6m' },
      { label: 'Length', value: '50m, 100m' },
      { label: 'GSM', value: '100-200 GSM' },
    ],
    pricing: [
      { size: '3m x 50m (50%)', price: 3500, unit: 'roll' },
      { size: '4m x 50m (75%)', price: 4800, unit: 'roll' },
      { size: '6m x 100m (90%)', price: 14000, unit: 'roll' },
    ],
    minOrderQty: 1,
    inStock: true,
    popular: false,
  },
  {
    id: 3,
    name: 'UV Polyfilm',
    slug: 'uv-polyfilm',
    category: 'Polyfilm',
    shortDescription: 'Premium UV-resistant polyfilm for greenhouse and polyhouse applications.',
    description: 'Our UV polyfilm is specially designed for greenhouse and polyhouse covering with excellent light transmission.',
    image: polyfilm,
    images: [polyfilm],
    colors: [{ name: 'Transparent', image: polyfilm, hex: '#f0f0f0' }],
    features: ['UV Resistant', 'Anti-Drip Coating', 'High Light Transmission', 'Thermal Properties', '3-5 Year Lifespan'],
    specifications: [
      { label: 'Material', value: 'Low-Density Polyethylene (LDPE)' },
      { label: 'Thickness', value: '150, 200, 250 microns' },
      { label: 'Width', value: '4m, 6m, 8m, 10m, 12m' },
      { label: 'Light Transmission', value: '85-90%' },
    ],
    pricing: [
      { size: '4m x 30m (150 micron)', price: 3200, unit: 'roll' },
      { size: '6m x 50m (200 micron)', price: 7500, unit: 'roll' },
      { size: '12m x 100m (250 micron)', price: 28000, unit: 'roll' },
    ],
    minOrderQty: 1,
    inStock: true,
    popular: true,
  },
  {
    id: 4,
    name: 'UV Rope',
    slug: 'uv-rope',
    category: 'Accessories',
    shortDescription: 'High-strength UV-stabilized ropes for securing nets and films.',
    description: 'Our UV ropes are manufactured from premium quality polypropylene with UV stabilizers for extended outdoor use.',
    image: uvRope,
    images: [uvRope],
    colors: [{ name: 'Yellow/Green', image: uvRope, hex: '#DAA520' }],
    features: ['UV Stabilized', 'High Tensile Strength', 'Weather Resistant', 'Abrasion Proof', 'Long Lasting'],
    specifications: [
      { label: 'Material', value: 'Polypropylene (PP)' },
      { label: 'Diameter', value: '3mm, 4mm, 5mm, 6mm, 8mm' },
      { label: 'Length', value: '200m, 500m, 1000m' },
      { label: 'Breaking Load', value: '50-250 kg' },
    ],
    pricing: [
      { size: '3mm x 200m', price: 350, unit: 'coil' },
      { size: '4mm x 500m', price: 850, unit: 'coil' },
      { size: '6mm x 500m', price: 1400, unit: 'coil' },
    ],
    minOrderQty: 2,
    inStock: true,
    popular: false,
  },
  {
    id: 5,
    name: 'Insect Protection Net',
    slug: 'insect-net',
    category: 'Protection Net',
    shortDescription: 'Fine mesh netting for complete protection against insects and pests.',
    description: 'Our insect protection nets feature ultra-fine mesh construction that effectively blocks harmful insects.',
    image: insectNet,
    images: [insectNet],
    colors: [{ name: 'White', image: insectNet, hex: '#ffffff' }],
    features: ['40-60 Mesh Options', 'Excellent Ventilation', 'Chemical-Free Protection', 'UV Stabilized', 'Reusable'],
    specifications: [
      { label: 'Material', value: 'HDPE Monofilament' },
      { label: 'Mesh Count', value: '40 mesh, 50 mesh, 60 mesh' },
      { label: 'Width', value: '1.5m, 2m, 3m, 4m' },
      { label: 'Hole Size', value: '0.2mm - 0.6mm' },
    ],
    pricing: [
      { size: '2m x 50m (40 mesh)', price: 4500, unit: 'roll' },
      { size: '3m x 50m (50 mesh)', price: 6800, unit: 'roll' },
      { size: '4m x 100m (60 mesh)', price: 15000, unit: 'roll' },
    ],
    minOrderQty: 1,
    inStock: true,
    popular: true,
  },
  {
    id: 6,
    name: 'Bird Protection Net',
    slug: 'bird-net',
    category: 'Protection Net',
    shortDescription: 'Durable netting to protect crops and fruits from bird damage.',
    description: 'Our bird protection nets safeguard your valuable crops from bird attacks. Made from high-quality HDPE.',
    image: birdNet,
    images: [birdNet],
    colors: [{ name: 'Black', image: birdNet, hex: '#1a1a1a' }],
    features: ['Bird Safe', 'UV Stabilized', 'Knotted/Knotless Options', 'Reusable', 'Easy to Install'],
    specifications: [
      { label: 'Material', value: 'HDPE' },
      { label: 'Mesh Size', value: '15mm x 15mm, 20mm x 20mm, 25mm x 25mm' },
      { label: 'Width', value: '4m, 6m, 8m, 10m, 12m' },
      { label: 'GSM', value: '15-30 GSM' },
    ],
    pricing: [
      { size: '4m x 25m (20mm mesh)', price: 1800, unit: 'piece' },
      { size: '6m x 50m (20mm mesh)', price: 4200, unit: 'piece' },
      { size: '10m x 50m (25mm mesh)', price: 6500, unit: 'piece' },
    ],
    minOrderQty: 1,
    inStock: true,
    popular: false,
  },
  {
    id: 7,
    name: 'White Shade Net',
    slug: 'white-shade-net',
    category: 'Shade Net',
    shortDescription: 'Light-colored shade nets ideal for nurseries and sensitive plants.',
    description: 'White shade nets reflect heat while providing gentle shade, making them ideal for nurseries.',
    image: shadeNetWhite,
    images: [shadeNetWhite],
    colors: [{ name: 'White', image: shadeNetWhite, hex: '#f5f5f5' }],
    features: ['Heat Reflective', 'Light Diffusion', 'UV Stabilized', 'Cooler Environment', 'Ideal for Nurseries'],
    specifications: [
      { label: 'Material', value: 'HDPE' },
      { label: 'Shade Percentage', value: '35%, 50%' },
      { label: 'Width', value: '2m, 3m, 4m' },
      { label: 'Length', value: '50m, 100m' },
    ],
    pricing: [
      { size: '2m x 50m (35%)', price: 2800, unit: 'roll' },
      { size: '3m x 50m (50%)', price: 4200, unit: 'roll' },
      { size: '4m x 100m (50%)', price: 10500, unit: 'roll' },
    ],
    minOrderQty: 1,
    inStock: true,
    popular: false,
  },
];

export const getProductBySlug = (slug: string): ProductData | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): ProductData[] => {
  return products.filter(p => p.category === category);
};

export const getPopularProducts = (): ProductData[] => {
  return products.filter(p => p.popular);
};

export const getAllCategories = (): string[] => {
  return [...new Set(products.map(p => p.category))];
};
