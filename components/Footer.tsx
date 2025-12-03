import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import { COMPANY_DETAILS, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-medical-500 rounded-md flex items-center justify-center text-white font-bold text-lg mr-2">
                U
              </div>
              <span className="text-xl font-bold text-white">PHARMACEUTICAL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Dedicated to improving health and well-being through innovation, quality manufacturing, and a commitment to excellence in pharmaceuticals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-medical-400 transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" /> {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-sm hover:text-medical-400 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Expertise</h3>
            <ul className="space-y-3 text-sm">
              <li>Pharmaceutical Manufacturing</li>
              <li>Contract Research (CRAMS)</li>
              <li>Quality Assurance</li>
              <li>Regulatory Affairs</li>
              <li>Formulation Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-medical-500 mr-3 mt-0.5 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-medical-500 mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-medical-500 mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
