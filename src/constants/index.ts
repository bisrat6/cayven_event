export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

import portfolioBoho from '../assets/portfolio-boho.jpg';
import portfolioGala from '../assets/portfolio-gala.jpg';
import portfolioMoroccan from '../assets/portfolio-moroccan.jpg';

// New local portfolio images
import BirthDay1 from '../assets/BirthDay1.PNG';
import BirthDay2 from '../assets/BirthDay2.PNG';
import BirthDay3 from '../assets/BirthDay3.JPG';
import BirthDay4 from '../assets/BirthDay4.PNG';
import BirthDay5 from '../assets/BirthDay5.PNG';
import BirthDay6 from '../assets/BirthDay6.PNG';
import BirthDay7 from '../assets/BirthDay7.PNG';
import Cultural1 from '../assets/Cultural1.PNG';
import cultural2 from '../assets/cultural2.PNG';
import Engagment1 from '../assets/Engagment1.PNG';
import engagment2 from '../assets/engagment2.PNG';
import family1 from '../assets/family1.PNG';
import family2 from '../assets/family2.PNG';
import wedding1 from '../assets/wedding1.JPG';
import wedding2 from '../assets/wedding2.PNG';

export const SERVICES_HIGHLIGHT = [
  {
    title: 'Wedding Decoration',
    description: 'Breathtaking designs for your special day, from floral arrangements to stage setups.',
    image: portfolioBoho,
  },
  {
    title: 'Corporate Events',
    description: 'Professional and elegant decor for conferences, galas, and corporate gatherings.',
    image: portfolioGala,
  },
  {
    title: 'Special Celebrations',
    description: 'Creative and fun decorations for birthdays, baby showers, and cultural events.',
    image: portfolioMoroccan,
  },
];

export const PORTFOLIO_ITEMS = [
  // Wedding & Engagement
  { id: 2, category: 'wedding and engagment', src: Engagment1, title: 'Engagement Styling' },
  { id: 3, category: 'wedding and engagment', src: engagment2, title: 'Engagement Reception' },
  { id: 14, category: 'family and cultural', src: cultural2, title: 'Cultural Event 2' },
  { id: 4, category: 'wedding and engagment', src: wedding1, title: 'Wedding Stage' },
  
  // Birthday
  { id: 6, category: 'Birthday', src: BirthDay1, title: 'Birthday Decor 1' },
  { id: 7, category: 'Birthday', src: BirthDay3, title: 'Birthday Decor 3' },
  { id: 8, category: 'Birthday', src: BirthDay2, title: 'Birthday Decor 2' },
  { id: 9, category: 'Birthday', src: BirthDay4, title: 'Birthday Decor 4' },
  { id: 10, category: 'Birthday', src: BirthDay5, title: 'Birthday Decor 5' },
  { id: 11, category: 'Birthday', src: BirthDay6, title: 'Birthday Decor 6' },
  { id: 12, category: 'Birthday', src: BirthDay7, title: 'Birthday Decor 7' },
  
  { id: 5, category: 'wedding and engagment', src: wedding2, title: 'Wedding Details' },
  // Family & Cultural
  { id: 13, category: 'family and cultural', src: Cultural1, title: 'Cultural Event 1' },
  { id: 15, category: 'family and cultural', src: family1, title: 'Family Celebration 1' },
  { id: 16, category: 'family and cultural', src: family2, title: 'Family Celebration 2' },

];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Cayven Event turned our vision into a fairytale. The floral ceiling installation was absolutely breathtaking, and every detail was perfection. Our guests are still talking about it!",
    author: "Selamawit & Dawit",
    event: "Luxury Wedding",
    rating: 5,
  },
  {
    id: 2,
    quote: "The team was professional, creative, and an absolute pleasure to work with. They handled our annual corporate gala flawlessly, impressing all our stakeholders.",
    author: "Bekele Gebremichael",
    event: "Tech Company Gala",
    rating: 5,
  },
  {
    id: 3,
    quote: "From the balloon decor to the stunning stage setup for my daughter's birthday, everything was perfect. They truly listened to our ideas and exceeded our expectations.",
    author: "Hana Tesfaye",
    event: "Birthday Celebration",
    rating: 5,
  },
];

export const PRICING_PACKAGES = [
    {
        name: 'Starter',
        price: '$1,500',
        description: 'Perfect for intimate gatherings and small events.',
        features: ['Consultation & Mood Board', 'Basic Floral Arrangements', 'Standard Lighting', 'Setup & Teardown'],
    },
    {
        name: 'Premium',
        price: '$4,500',
        description: 'Our most popular package for weddings and large celebrations.',
        features: ['Everything in Starter', 'Custom Floral Designs', 'Advanced Lighting & Effects', 'Themed Props & Decor', 'Day-of-Coordination'],
        popular: true,
    },
    {
        name: 'Luxury',
        price: '$10,000+',
        description: 'A bespoke, all-inclusive experience for the ultimate event.',
        features: ['Everything in Premium', 'Full Event Planning & Management', 'Bespoke Stage & Venue Design', 'Luxury Furniture & Linens', 'Vendor Management'],
    },
];
