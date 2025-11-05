import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setIsSending(true);
      setStatus(null);
      const formData = new FormData(formRef.current);
      formData.append('service_id', serviceId);
      formData.append('template_id', templateId);
      formData.append('user_id', publicKey);

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Failed');
      formRef.current.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="sr-only">Name</label>
                  <input type="text" name="user_name" id="user_name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-ring focus:border-ring" required />
                </div>
                <div>
                  <label htmlFor="user_email" className="sr-only">Email</label>
                  <input type="email" name="user_email" id="user_email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-ring focus:border-ring" required />
                </div>
                <div>
                  <label htmlFor="phone_number" className="sr-only">Phone</label>
                  <input type="tel" name="phone_number" id="phone_number" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-ring focus:border-ring" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event_date" className="sr-only">Event Date</label>
                    <input type="date" name="event_date" id="event_date" placeholder="Event Date" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-ring focus:border-ring" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={4} placeholder="Tell us about your event..." className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-ring focus:border-ring" required></textarea>
                </div>
                <div>
                  <button type="submit" disabled={isSending} className="w-full px-8 py-3 text-sm font-semibold uppercase bg-primary text-primary-foreground rounded-full shadow-lg transition-transform duration-300 hover:scale-105 disabled:opacity-70">
                    {isSending ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                  {status === 'success' && <p className="mt-2 text-green-600 text-sm">Thanks! Your message has been sent.</p>}
                  {status === 'error' && <p className="mt-2 text-red-600 text-sm">Sorry, something went wrong. Please try again.</p>}
                </div>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <h2 className="text-3xl font-serif mb-6">Contact Information</h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                  <span>Adiss Ababa , Bishoftu , Adama</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                  <a href="mailto:contact@huletevents.com" className="hover:text-brand-gold">kalebatilabachew@gmail.com</a>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-brand-gold">+251 968 152 728</a>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-serif mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998331.490911462!2d38.09979727187439!3d8.960555858066543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5fa8f5d9a1%3A0x6a7a18d4a8a9f3cd!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000000"
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
