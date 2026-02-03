export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role?: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: 'Wedding' | 'Birthday' | 'Corporate' | 'Catering';
  title: string;
}

export enum ServiceType {
  CAKES = 'cakes',
  DELIVERY = 'delivery',
  VOUCHER = 'voucher',
}

export interface CakeCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}