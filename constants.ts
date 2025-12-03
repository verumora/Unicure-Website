import { FlaskConical, ShieldCheck, Globe2, Leaf, Users, Stethoscope } from 'lucide-react';
import { NavItem, Review, Feature, Product, Stat } from './types';

export const COMPANY_DETAILS = {
  name: "Pharmaceutical India Pvt Ltd",
  address: "Kartavya Path, India Gate, New Delhi, Delhi 110001",
  phone: "+91 9876543210",
  mapLink: "https://maps.app.goo.gl/vjsHyjWAWt2EEhdX9",
  email: "info@pharmaceuticalindia.com", // Placeholder based on domain pattern
  hours: "09:30 AM - 05:30 PM"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'R&D', path: '/research' },
  { label: 'Quality', path: '/quality' },
  { label: 'Contact', path: '/contact' },
];

export const REVIEWS: Review[] = [
  {
    author: "Gp Capt Prem Vir Singh",
    role: "Client / Partner",
    content: "Pharmaceutical India Pvt Ltd is a very good company and an excellent organisation. Dr Raman, famous Neuro physician has high regard for the staff and the management.",
    rating: 5,
    date: "6 years ago"
  },
  {
    author: "Chandan Vishwakarma",
    role: "Employee / Staff",
    content: "Pharmaceutical India Ltd is one of the best pharmaceutical companies. Here is very good team work and good coordination among all staff.",
    rating: 5,
    date: "1 year ago"
  },
  {
    author: "Dilshan Khan",
    role: "Local Guide",
    content: "Best experience with the organization. Professional and committed.",
    rating: 5,
    date: "1 week ago"
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Research & Development",
    description: "Cutting-edge laboratories dedicated to developing innovative pharmaceutical formulations.",
    icon: FlaskConical
  },
  {
    title: "Quality Assurance",
    description: "Adhering to stringent global regulatory standards to ensure patient safety.",
    icon: ShieldCheck
  },
  {
    title: "Global Presence",
    description: "Delivering high-quality healthcare solutions across international borders.",
    icon: Globe2
  }
];

export const STATS: Stat[] = [
  { label: "Years of Excellence", value: "25", suffix: "+" },
  { label: "Products Manufactured", value: "500", suffix: "+" },
  { label: "Team Strength", value: "200", suffix: "+" },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'CardioCure Plus',
    category: 'Cardiology',
    description: 'Advanced formulation for cardiovascular health maintenance.',
    image: 'https://picsum.photos/400/300?random=101'
  },
  {
    id: 'p2',
    name: 'NeuroCalm Tablet',
    category: 'Neurology',
    description: 'Targeted therapy for neurological balance and support.',
    image: 'https://picsum.photos/400/300?random=102'
  },
  {
    id: 'p3',
    name: 'GastroRelief Suspension',
    category: 'Gastroenterology',
    description: 'Rapid relief formulation for gastric disorders.',
    image: 'https://picsum.photos/400/300?random=103'
  },
  {
    id: 'p4',
    name: 'ImmunoBoost C',
    category: 'General Health',
    description: 'High-potency Vitamin C and Zinc complex.',
    image: 'https://picsum.photos/400/300?random=104'
  },
  {
    id: 'p5',
    name: 'DermaCare Cream',
    category: 'Dermatology',
    description: 'Specialized topical treatment for skin conditions.',
    image: 'https://picsum.photos/400/300?random=105'
  },
  {
    id: 'p6',
    name: 'OrthoFlex Joint',
    category: 'Orthopedics',
    description: 'Comprehensive joint support and pain management.',
    image: 'https://picsum.photos/400/300?random=106'
  }
];

export const VALUES: Feature[] = [
  {
    title: "Sustainability",
    description: "Committed to eco-friendly manufacturing processes and reducing our carbon footprint.",
    icon: Leaf
  },
  {
    title: "Patient Centric",
    description: "Our primary focus remains the health and well-being of the patients we serve.",
    icon: Stethoscope
  },
  {
    title: "Integrity",
    description: "Upholding the highest standards of ethics in every business interaction.",
    icon: Users
  }
];
