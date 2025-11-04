import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { SERVICES_HIGHLIGHT, PORTFOLIO_ITEMS, TESTIMONIALS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const Home: React.FC = () => {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10 p-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white">
            Creating Magical Moments
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-sans">
            Exquisite event decoration and management for life's most cherished celebrations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-8 py-3 text-sm font-semibold text-white uppercase bg-brand-gold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 text-sm font-semibold text-white uppercase border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-brand-dark"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 lg:py-32 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-serif">Our Expertise</motion.h2>
          <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 max-w-2xl mx-auto text-gray-600">
            We specialize in a range of events, ensuring each one is unique and memorable.
          </motion.p>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_HIGHLIGHT.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="group overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-serif">Featured Events</motion.h2>
          <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 max-w-2xl mx-auto text-gray-600">
            A glimpse into the magical moments we've created.
          </motion.p>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {PORTFOLIO_ITEMS.slice(0, 4).map((item, index) => (
              <motion.div key={item.id} variants={itemVariants} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
            <Link to="/portfolio" className="inline-flex items-center text-brand-gold font-semibold group">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-brand-blush">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-serif">Words From Our Clients</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-brand-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <p className="mt-6 font-bold text-brand-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.event}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
