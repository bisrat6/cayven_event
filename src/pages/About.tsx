import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

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

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-20 bg-brand-blush text-center">
        <h1 className="text-5xl md:text-6xl font-serif">Our Story</h1>
        <p className="mt-4 text-lg text-gray-700">Crafting celebrations with passion and precision.</p>
      </div>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Hulet Events Team" className="rounded-lg shadow-2xl" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-serif">Welcome to Hulet Events</h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Founded on a passion for creating unforgettable moments, Hulet Events has grown into a premier event design and management company. We believe that every event has a story to tell, and our mission is to tell it beautifully.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our team of creative designers, meticulous planners, and skilled artisans work in harmony to bring your vision to life. From the grandest gestures to the smallest details, we pour our hearts into making your celebration truly magical and uniquely yours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">Why Choose Us?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">Our commitment to excellence sets us apart.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.1 }} variants={itemVariants} className="p-8 bg-white rounded-lg shadow-lg">
              <div className="inline-block p-4 bg-brand-blush rounded-full">
                <Heart className="h-8 w-8 text-brand-gold" />
              </div>
              <h3 className="mt-4 text-2xl font-serif">Passionate Creativity</h3>
              <p className="mt-2 text-gray-600">We blend artistic flair with your personal style to create designs that are both stunning and meaningful.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }} variants={itemVariants} className="p-8 bg-white rounded-lg shadow-lg">
              <div className="inline-block p-4 bg-brand-blush rounded-full">
                <Target className="h-8 w-8 text-brand-gold" />
              </div>
              <h3 className="mt-4 text-2xl font-serif">Meticulous Execution</h3>
              <p className="mt-2 text-gray-600">Our planning is flawless, ensuring a stress-free experience and an event that runs like clockwork.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.3 }} variants={itemVariants} className="p-8 bg-white rounded-lg shadow-lg">
              <div className="inline-block p-4 bg-brand-blush rounded-full">
                <Eye className="h-8 w-8 text-brand-gold" />
              </div>
              <h3 className="mt-4 text-2xl font-serif">Attention to Detail</h3>
              <p className="mt-2 text-gray-600">We believe perfection lies in the details, from the texture of the linens to the placement of each candle.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
