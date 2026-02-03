import { NavItem, Testimonial, GalleryItem, CakeCategory } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Startseite', path: '/' },
  { label: 'Über mich', path: '/ueber-mich' },
  { label: 'Leistungen', path: '/leistungen' },
  { label: 'Das Café', path: '/cafe' },
  { label: 'Catering', path: '/catering' },
  { label: 'Galerie', path: '/galerie' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Sophie Müller', text: 'Die Hochzeitstorte war ein absoluter Traum! Geschmacklich wie optisch ein Meisterwerk.', role: 'Braut' },
  { id: 2, name: 'Markus Weber', text: 'Bester Kaffee in der Stadt und die Törtchen sind sündhaft gut.', role: 'Stammgast' },
  { id: 3, name: 'Lisa & Tom', text: 'Vielen Dank für das tolle Catering an unserem Jubiläum.', role: 'Event Kunden' },
];

export const CAKE_CATEGORIES: CakeCategory[] = [
  { id: 'wedding', title: 'Hochzeitstorten', description: 'Elegante, mehrstöckige Träume für Ihren schönsten Tag.', image: 'https://picsum.photos/seed/wedding/400/300' },
  { id: 'birthday', title: 'Geburtstagstorten', description: 'Bunt, kreativ und individuell für Groß und Klein.', image: 'https://picsum.photos/seed/birthday/400/300' },
  { id: 'special', title: 'Thementorten', description: 'Einzigartige Designs für spezielle Anlässe.', image: 'https://picsum.photos/seed/special/400/300' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: 'https://picsum.photos/seed/cake1/600/600', category: 'Wedding', title: 'Romantic Rose' },
  { id: 2, src: 'https://picsum.photos/seed/cake2/600/600', category: 'Birthday', title: 'Dino Adventure' },
  { id: 3, src: 'https://picsum.photos/seed/cake3/600/600', category: 'Corporate', title: 'Company Jubilee' },
  { id: 4, src: 'https://picsum.photos/seed/cake4/600/600', category: 'Catering', title: 'Finger Food Selection' },
  { id: 5, src: 'https://picsum.photos/seed/cake5/600/600', category: 'Wedding', title: 'Gold Leaf Elegance' },
  { id: 6, src: 'https://picsum.photos/seed/cake6/600/600', category: 'Birthday', title: 'Princess Castle' },
  { id: 7, src: 'https://picsum.photos/seed/cake7/600/600', category: 'Wedding', title: 'Floral Cascade' },
  { id: 8, src: 'https://picsum.photos/seed/cake8/600/600', category: 'Catering', title: 'Sweet Table' },
];
