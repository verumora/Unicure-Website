import React from 'react';
import { ShieldCheck, FileCheck, Award, CheckSquare } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-3 bg-medical-100 dark:bg-slate-800 rounded-full text-medical-700 dark:text-medical-400 mb-4">
                <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Quality & Compliance</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">Quality is not just a department at Unicure; it is a culture embedded in every step of our manufacturing process.</p>
        </div>

        {/* Regulatory Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mb-12 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                        <FileCheck className="w-6 h-6 text-medical-600 dark:text-medical-400 mr-3" />
                        Regulatory Affairs
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        Our regulatory team ensures strict compliance with national and international guidelines. We maintain rigorous documentation and adhere to Good Manufacturing Practices (GMP) to ensure our products are safe, effective, and of the highest quality.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-sm font-medium">GMP Certified</div>
                        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-sm font-medium">ISO 9001:2029</div>
                    </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 h-64 md:h-auto relative">
                     <img src="https://picsum.photos/600/600?random=80" alt="Documentation" className="w-full h-full object-cover opacity-90" />
                </div>
            </div>
        </div>

        {/* QA Processes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Raw Material Analysis", icon: CheckSquare, desc: "Stringent testing of all active ingredients and excipients before production." },
                { title: "In-Process Controls", icon: ShieldCheck, desc: "Continuous monitoring at every stage of the manufacturing cycle." },
                { title: "Finished Product Testing", icon: Award, desc: "Comprehensive analysis of final products ensuring purity and potency." }
            ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-medical-200 dark:hover:border-medical-500 transition-colors">
                    <item.icon className="w-10 h-10 text-medical-500 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
