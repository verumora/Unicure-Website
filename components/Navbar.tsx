import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS, COMPANY_DETAILS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-medical-700 dark:bg-medical-900 text-white py-2 text-xs md:text-sm hidden md:block transition-colors duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-2" /> {COMPANY_DETAILS.address}</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-2" /> {COMPANY_DETAILS.phone}</span>
          </div>
          <div className="flex items-center space-x-4">
             <span>ISO 9001:2015 Certified</span>
             <span>GMP Compliance</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <div className="w-10 h-10 bg-medical-600 dark:bg-medical-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 group-hover:bg-medical-700 dark:group-hover:bg-medical-600 transition-colors">
              U
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-800 dark:text-white leading-tight tracking-tight transition-colors">UNICURE</span>
              <span className="text-xs text-medical-600 dark:text-medical-400 font-medium tracking-widest uppercase transition-colors">India Pvt Ltd</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <div className="flex space-x-8">
                {NAV_ITEMS.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 flex items-center ${
                    isActive(item.path) 
                        ? 'text-medical-600 dark:text-medical-400 border-b-2 border-medical-600 dark:border-medical-400' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 border-b-2 border-transparent'
                    } h-8`}
                >
                    {item.label}
                </Link>
                ))}
            </div>
            
            <div className="flex items-center space-x-4 ml-6 border-l border-slate-200 dark:border-slate-700 pl-6">
                <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
                >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <Link 
                to="/contact" 
                className="bg-medical-600 hover:bg-medical-700 dark:bg-medical-500 dark:hover:bg-medical-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                >
                Get in Touch
                </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden space-x-4">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={toggleMenu} className="text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 focus:outline-none transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-100 dark:border-slate-800 animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium px-2 py-1 rounded-md transition-colors ${
                    isActive(item.path) 
                      ? 'bg-medical-50 dark:bg-slate-800 text-medical-700 dark:text-medical-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium px-2 py-1 rounded-md text-medical-600 dark:text-medical-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                  Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;