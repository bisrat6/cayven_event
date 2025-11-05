import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Instagram, Music2, Phone, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white"><span className="text-primary">Cayven</span> Event</h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Creating magical moments and unforgettable experiences. We are a premium event decoration and management company dedicated to bringing your vision to life with elegance and style.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://t.me/cayven_event_decor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors"><Send size={20} /></a>
              <a href="https://www.instagram.com/cayven__event_decor?igsh=dnJiYmFmdnBzMXFw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@cayven_event" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors"><Music2 size={20} /></a>
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
                <a href="mailto:kalebatilabachew@gmail.com" className="hover:text-brand-gold">kalebatilabachew@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0 text-brand-gold" />
                <a href="tel:+15551234567" className="hover:text-brand-gold">+251 968 152 728</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cayven Event. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
