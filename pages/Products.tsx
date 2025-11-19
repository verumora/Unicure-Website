import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Product Portfolio</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Comprehensive healthcare solutions across multiple therapeutic categories, manufactured with precision.</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-800 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-medical-700 dark:text-medical-400 uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">{product.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">{product.description}</p>
                <button className="w-full py-2 border border-medical-600 dark:border-medical-500 text-medical-600 dark:text-medical-500 rounded-lg font-medium hover:bg-medical-600 dark:hover:bg-medical-500 hover:text-white transition-colors text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;