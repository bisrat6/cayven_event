import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const filters = ['all', 'wedding and engagment', 'Birthday', 'family and cultural'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-20 bg-brand-blush text-center">
        <h1 className="text-5xl md:text-6xl font-serif">Our Work</h1>
        <p className="mt-4 text-lg text-gray-700">A gallery of our proudest moments.</p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="flex gap-2 md:gap-4 mb-12 overflow-x-auto whitespace-nowrap flex-nowrap px-1">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImg(item.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <h3 className="font-serif text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    {item.category && <p className="text-primary font-medium">{item.category}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              layoutId={selectedImg}
              src={selectedImg}
              alt="Enlarged view"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
