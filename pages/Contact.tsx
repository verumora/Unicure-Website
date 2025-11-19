import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div>
             <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8 transition-colors">
                 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
                 <div className="space-y-6">
                     <div className="flex items-start">
                         <MapPin className="w-6 h-6 text-medical-600 dark:text-medical-400 mt-1 mr-4 shrink-0" />
                         <div>
                             <h4 className="font-semibold text-slate-900 dark:text-white">Address</h4>
                             <p className="text-slate-600 dark:text-slate-400">{COMPANY_DETAILS.address}</p>
                         </div>
                     </div>
                     <div className="flex items-start">
                         <Phone className="w-6 h-6 text-medical-600 dark:text-medical-400 mt-1 mr-4 shrink-0" />
                         <div>
                             <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>
                             <p className="text-slate-600 dark:text-slate-400">{COMPANY_DETAILS.phone}</p>
                         </div>
                     </div>
                     <div className="flex items-start">
                         <Mail className="w-6 h-6 text-medical-600 dark:text-medical-400 mt-1 mr-4 shrink-0" />
                         <div>
                             <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                             <p className="text-slate-600 dark:text-slate-400">{COMPANY_DETAILS.email}</p>
                         </div>
                     </div>
                     <div className="flex items-start">
                         <Clock className="w-6 h-6 text-medical-600 dark:text-medical-400 mt-1 mr-4 shrink-0" />
                         <div>
                             <h4 className="font-semibold text-slate-900 dark:text-white">Business Hours</h4>
                             <p className="text-slate-600 dark:text-slate-400">{COMPANY_DETAILS.hours}</p>
                         </div>
                     </div>
                 </div>
             </div>
             
             {/* Map Embed */}
             <div className="relative w-full h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group">
                <iframe 
                  src="https://maps.google.com/maps?q=Unicure+India+Pvt+Ltd%2C+C-22%2623%2C+Block+C%2C+Noida+Sector+3&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Unicure India Pvt Ltd Location"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <a 
                  href={COMPANY_DETAILS.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-medical-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 opacity-90 hover:opacity-100"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Maps
                </a>
             </div>
          </div>

          {/* Form Side */}
          <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-medical-500 focus:ring-1 focus:ring-medical-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" placeholder="John" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-medical-500 focus:ring-1 focus:ring-medical-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" placeholder="Doe" />
                      </div>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-medical-500 focus:ring-1 focus:ring-medical-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" placeholder="john@example.com" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-medical-500 focus:ring-1 focus:ring-medical-500 outline-none transition-all">
                          <option>General Inquiry</option>
                          <option>Product Information</option>
                          <option>Partnership Opportunity</option>
                          <option>Career</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                      <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-medical-500 focus:ring-1 focus:ring-medical-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-medical-600 dark:bg-medical-500 text-white font-bold rounded-lg hover:bg-medical-700 dark:hover:bg-medical-600 transition-colors shadow-lg hover:shadow-xl">
                      Send Message
                  </button>
              </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;