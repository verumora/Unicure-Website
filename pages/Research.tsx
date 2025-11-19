import React from 'react';
import { FlaskConical, Microscope, Dna, Atom } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Research & Development</h1>
            <div className="h-1 w-20 bg-medical-500 rounded mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
              Innovation is at the heart of Unicure India. Our R&D division focuses on developing complex generics and improving existing formulations to enhance patient compliance and efficacy.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
             <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                    <Microscope className="w-6 h-6 text-medical-600 dark:text-medical-400 mr-3" />
                    Core Capabilities
                </h3>
                <ul className="space-y-4">
                    {[
                        "Formulation Development (NDDS)",
                        "Analytical Method Validation",
                        "Bio-equivalence Studies",
                        "Stability Testing as per ICH Guidelines",
                        "Process Optimization"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm transition-colors">
                             <div className="w-2 h-2 mt-2 rounded-full bg-medical-500 mr-3 shrink-0"></div>
                             <span className="text-slate-700 dark:text-slate-300">{item}</span>
                        </li>
                    ))}
                </ul>
             </div>
             <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px]">
                 <img src="https://picsum.photos/800/600?random=50" alt="Lab" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                     <p className="text-white font-medium text-lg">State-of-the-art Laboratories in Noida</p>
                 </div>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center p-8 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-lg transition-all">
                 <FlaskConical className="w-12 h-12 text-medical-500 mx-auto mb-6" />
                 <h4 className="text-lg font-bold mb-2 dark:text-white">Generic Formulations</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">Cost-effective solutions for global markets.</p>
             </div>
             <div className="text-center p-8 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-lg transition-all">
                 <Dna className="w-12 h-12 text-medical-500 mx-auto mb-6" />
                 <h4 className="text-lg font-bold mb-2 dark:text-white">Novel Drug Delivery</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">Enhanced bioavailability and targeted delivery.</p>
             </div>
             <div className="text-center p-8 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-lg transition-all">
                 <Atom className="w-12 h-12 text-medical-500 mx-auto mb-6" />
                 <h4 className="text-lg font-bold mb-2 dark:text-white">Process Innovation</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">Sustainable and efficient manufacturing processes.</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Research;