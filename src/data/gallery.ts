// Gallery Data for completed projects
import greenhouse from '@/assets/greenhouse.jpg';
import polyhouse from '@/assets/polyhouse.jpg';
import hydroponic from '@/assets/hydroponic.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  area: string;
  completedDate: string;
  image: string;
  products: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Commercial Greenhouse Complex',
    description: 'A large-scale greenhouse facility with climate control systems and automated irrigation for year-round vegetable production.',
    category: 'Greenhouse',
    location: 'Karnataka',
    area: '2 Acres',
    completedDate: 'March 2024',
    image: greenhouse,
    products: ['UV Polyfilm', 'Insect Net', 'UV Rope'],
  },
  {
    id: 2,
    title: 'Polyhouse for Floriculture',
    description: 'Custom designed polyhouse structure with shade net covering for commercial flower cultivation.',
    category: 'Polyhouse',
    location: 'Maharashtra',
    area: '1.5 Acres',
    completedDate: 'January 2024',
    image: polyhouse,
    products: ['Green Shade Net', 'UV Polyfilm', 'Bird Net'],
  },
  {
    id: 3,
    title: 'Hydroponic Vegetable Farm',
    description: 'State-of-the-art NFT hydroponic system setup for leafy greens and herbs production.',
    category: 'Hydroponic',
    location: 'Tamil Nadu',
    area: '5000 sq ft',
    completedDate: 'November 2023',
    image: hydroponic,
    products: ['Insect Net', 'White Shade Net', 'UV Polyfilm'],
  },
  {
    id: 4,
    title: 'Vegetable Polyhouse',
    description: 'Tunnel-style polyhouse for protected vegetable cultivation with drip irrigation system.',
    category: 'Polyhouse',
    location: 'Gujarat',
    area: '1 Acre',
    completedDate: 'February 2024',
    image: project1,
    products: ['UV Polyfilm', 'Insect Net', 'UV Rope'],
  },
  {
    id: 5,
    title: 'Open Field Shade Net Installation',
    description: 'Large-scale shade net installation for vegetable farming with 50% shade coverage.',
    category: 'Shade Net',
    location: 'Andhra Pradesh',
    area: '3 Acres',
    completedDate: 'December 2023',
    image: project2,
    products: ['Green Shade Net', 'UV Rope', 'Bird Net'],
  },
  {
    id: 6,
    title: 'Plant Nursery Setup',
    description: 'Complete nursery infrastructure with propagation beds and mist irrigation system.',
    category: 'Greenhouse',
    location: 'Kerala',
    area: '8000 sq ft',
    completedDate: 'October 2023',
    image: project3,
    products: ['White Shade Net', 'Insect Net', 'UV Polyfilm'],
  },
  {
    id: 7,
    title: 'Fruit Orchard Protection',
    description: 'Bird and hail protection netting installation for a mango orchard.',
    category: 'Protection',
    location: 'Uttar Pradesh',
    area: '5 Acres',
    completedDate: 'September 2023',
    image: project4,
    products: ['Bird Net', 'UV Rope'],
  },
  {
    id: 8,
    title: 'Commercial Greenhouse Farm',
    description: 'Multi-span greenhouse facility for high-value crop production with advanced climate control.',
    category: 'Greenhouse',
    location: 'Telangana',
    area: '4 Acres',
    completedDate: 'August 2023',
    image: project5,
    products: ['UV Polyfilm', 'Insect Net', 'White Shade Net', 'UV Rope'],
  },
  {
    id: 9,
    title: 'Tomato Cultivation Unit',
    description: 'Insect-proof polyhouse for disease-free tomato production using integrated pest management.',
    category: 'Polyhouse',
    location: 'Punjab',
    area: '1.2 Acres',
    completedDate: 'July 2023',
    image: project6,
    products: ['Insect Net', 'UV Polyfilm', 'UV Rope'],
  },
];

export const getGalleryByCategory = (category: string): GalleryItem[] => {
  if (category === 'All') return galleryItems;
  return galleryItems.filter(item => item.category === category);
};

export const getAllGalleryCategories = (): string[] => {
  return ['All', ...new Set(galleryItems.map(item => item.category))];
};
