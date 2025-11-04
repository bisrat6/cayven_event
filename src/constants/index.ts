export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

export const SERVICES_HIGHLIGHT = [
  {
    title: 'Wedding Decoration',
    description: 'Breathtaking designs for your special day, from floral arrangements to stage setups.',
    image: 'https://images.unsplash.com/photo-1595843485129-96808ae7c262?q=80&w=1935',
  },
  {
    title: 'Corporate Events',
    description: 'Professional and elegant decor for conferences, galas, and corporate gatherings.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070',
  },
  {
    title: 'Special Celebrations',
    description: 'Creative and fun decorations for birthdays, baby showers, and cultural events.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070',
  },
];

export const PORTFOLIO_ITEMS = [
  { id: 1, category: 'weddings', src: 'https://images.unsplash.com/photo-1522040817-9998634917fa?q=80&w=1964', title: 'Lakeside Wedding' },
  { id: 2, category: 'corporate', src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974', title: 'Annual Tech Gala' },
  { id    : 3, category: 'celebrations', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162', title: 'Golden Birthday Bash' },
  { id: 4, category: 'weddings', src: 'https://images.unsplash.com/photo-1597986368988-38108167555f?q=80&w=1964', title: 'Garden Ceremony' },
  { id: 5, category: 'weddings', src: 'https://images.unsplash.com/photo-1592247353467-684c514a9518?q=80&w=1964', title: 'Rustic Barn Wedding' },
  { id: 6, category: 'corporate', src: 'https://images.unsplash.com/photo-1511578314322-37996166da26?q=80&w=2070', title: 'Product Launch' },
  { id: 7, category: 'celebrations', src: 'https://images.unsplash.com/photo-1600294038569-745a55593433?q=80&w=1935', title: 'Enchanted Baby Shower' },
  { id: 8, category: 'weddings', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1965', title: 'Elegant Ballroom Reception' },
];

export const TESTIMONIALS = [
    {
        quote: "Hulet Events transformed our venue into a fairytale wonderland. Their attention to detail was impeccable. We couldn't have asked for a more magical wedding day!",
        name: "Jessica & Tom",
        event: "Wedding",
        rating: 5,
    },
    {
        quote: "The team was professional, creative, and an absolute pleasure to work with. They handled our annual corporate gala flawlessly, impressing all our stakeholders.",
        name: "Sarah Chen",
        event: "Corporate Gala",
        rating: 5,
    },
    {
        quote: "From the balloon decor to the stunning stage setup for my daughter's birthday, everything was perfect. They truly listened to our ideas and exceeded our expectations.",
        name: "Maria Rodriguez",
        event: "Birthday Party",
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
