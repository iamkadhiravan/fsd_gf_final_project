// API Configuration for Express/MySQL Backend
// Update this BASE_URL to point to your Express server

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Generic fetch wrapper with error handling
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('API Error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An error occurred' 
    };
  }
}

// Product APIs
export const productApi = {
  getAll: () => fetchApi<Product[]>('/products'),
  getById: (id: number) => fetchApi<Product>(`/products/${id}`),
  getByCategory: (category: string) => fetchApi<Product[]>(`/products/category/${category}`),
};

// Inquiry APIs
export const inquiryApi = {
  submit: (data: InquiryData) => 
    fetchApi<{ id: number }>('/inquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Contact APIs
export const contactApi = {
  submit: (data: ContactData) =>
    fetchApi<{ message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Gallery APIs
export const galleryApi = {
  getAll: () => fetchApi<GalleryProject[]>('/gallery'),
  getByCategory: (category: string) => fetchApi<GalleryProject[]>(`/gallery/category/${category}`),
};

// Types
export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  colors: string[];
  features: string[];
  specifications: Record<string, string>;
  pricePerUnit: number;
  unit: string;
  minOrderQty: number;
  inStock: boolean;
}

export interface InquiryData {
  productId: number;
  productName: string;
  name: string;
  email: string;
  phone: string;
  quantity: number;
  message: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface GalleryProject {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  completedDate: string;
  images: string[];
  products: string[];
}

export { API_BASE_URL };
