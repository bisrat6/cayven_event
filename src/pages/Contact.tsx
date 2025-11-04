import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

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

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-20 bg-brand-blush text-center">
        <h1 className="text-5xl md:text-6xl font-serif">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-700">Let's start planning your magical event.</p>
      </div>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} className="bg-brand-gray p-8 rounded-lg">
              <h2 className="text-3xl font-serif mb-6">Send Us a Message</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold" required />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold" required />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event-date" className="sr-only">Event Date</label>
                    <input type="date" name="event-date" id="event-date" placeholder="Event Date" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                  </div>
                  <div>
                    <label htmlFor="budget" className="sr-only">Budget</label>
                    <input type="text" name="budget" id="budget" placeholder="Estimated Budget" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={4} placeholder="Tell us about your event..." className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold" required></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full px-8 py-3 text-sm font-semibold text-white uppercase bg-brand-gold rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <h2 className="text-3xl font-serif mb-6">Contact Information</h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                  <span>123 Elegance Ave, Celebration City, 12345</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                  <a href="mailto:contact@huletevents.com" className="hover:text-brand-gold">contact@huletevents.com</a>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-brand-gold">+1 (555) 123-4567</a>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-serif mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.219525233155!2d-73.98825078459393!3d40.75797487932691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c64801b9%3A0x4d4c3d5e0a7a2e3!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1633387399488!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Map of Hulet Events Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
