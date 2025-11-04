import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const filters = ['all', 'weddings', 'corporate', 'celebrations'];

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
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-brand-gold text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-brand-gold hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImg(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.title}</p>
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
              className="absolute top-4 right-4 text-white hover:text-brand-gold transition-colors"
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
