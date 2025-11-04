import React from 'react';
import { motion } from 'framer-motion';
import { Check, Gem, PartyPopper, Briefcase } from 'lucide-react';
import { PRICING_PACKAGES } from '../constants';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Services: React.FC = () => {
  const serviceItems = [
    { icon: <Gem className="h-10 w-10 text-brand-gold" />, title: 'Wedding Decoration', description: 'From intimate ceremonies to grand receptions, we create romantic and timeless atmospheres.' },
    { icon: <PartyPopper className="h-10 w-10 text-brand-gold" />, title: 'Birthdays & Baby Showers', description: 'Fun, creative, and personalized themes to celebrate life’s happiest milestones.' },
    { icon: <Briefcase className="h-10 w-10 text-brand-gold" />, title: 'Corporate & Cultural Events', description: 'Sophisticated and professional decor for galas, conferences, and cultural festivals.' },
  ];

  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-20 bg-brand-blush text-center">
        <h1 className="text-5xl md:text-6xl font-serif">Our Services</h1>
        <p className="mt-4 text-lg text-gray-700">Comprehensive solutions for any event.</p>
      </div>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {serviceItems.map((item, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="text-center p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center text-gray-700">
            <h3 className="text-2xl font-serif mb-4">Including...</h3>
            <p className="max-w-3xl mx-auto">Stage Setups, Balloon Decor, Floral Arrangements, Custom Lighting, Themed Props, Furniture Rentals, and more.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">Pricing Packages</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">Transparent pricing for every need and budget.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'border-2 border-brand-gold' : 'border'}`}
              >
                {pkg.popular && (
                  <div className="bg-brand-gold text-center py-1 text-white text-sm font-semibold">MOST POPULAR</div>
                )}
                <div className="p-8 bg-white flex-grow">
                  <h3 className="text-2xl font-semibold font-sans uppercase text-brand-gold">{pkg.name}</h3>
                  <p className="mt-4 text-gray-600">{pkg.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold font-sans text-brand-dark">{pkg.price}</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="flex-shrink-0 h-6 w-6 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-gray-50">
                  <a
                    href="/contact"
                    className="block w-full text-center px-6 py-3 text-sm font-semibold text-white uppercase bg-brand-dark rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
