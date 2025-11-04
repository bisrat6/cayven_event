import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white">Hulet Events</h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Creating magical moments and unforgettable experiences. We are a premium event decoration and management company dedicated to bringing your vision to life with elegance and style.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0 text-brand-gold" />
                <a href="mailto:contact@huletevents.com" className="hover:text-brand-gold">contact@huletevents.com</a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0 text-brand-gold" />
                <a href="tel:+15551234567" className="hover:text-brand-gold">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hulet Events. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
