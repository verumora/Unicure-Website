import React from 'react';
import { VALUES } from '../constants';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16 md:pt-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Dedicated to Life, <br /><span className="text-medical-600 dark:text-medical-400">Driven by Science.</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Pharmaceutical India Pvt Ltd is a premier pharmaceutical company based in Noida, dedicated to providing high-quality and affordable medicines to improve global health standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white dark:bg-slate-900 py-20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Legacy</h2>
              <div className="prose prose-slate dark:prose-invert text-slate-600 dark:text-slate-300">
                <p className="mb-4">
                  Established with a vision to bridge the gap between advanced medical science and patient accessibility, Pharmaceutical India has grown into a trusted name in the pharmaceutical landscape.
                </p>
                <p className="mb-4">
                  Located in the industrial hub of Noida, our facility is designed to meet evolving market demands. We pride ourselves on an organizational culture that values team coordination, staff welfare, and ethical business practices, as echoed by industry veterans and medical professionals alike.
                </p>
                <p>
                  We specialize in a diverse portfolio of formulations, ensuring that we cater to a wide spectrum of therapeutic areas.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/400/500?random=20" alt="Facility" className="rounded-2xl w-full h-64 object-cover shadow-md" />
              <img src="https://picsum.photos/400/500?random=21" alt="Team" className="rounded-2xl w-full h-64 object-cover shadow-md mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Sustainability */}
      <section className="py-24 bg-medical-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Sustainability & CSR</h2>
            <p className="text-slate-600 dark:text-slate-400">We believe that business growth goes hand in hand with social responsibility and environmental stewardship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-medical-100 dark:border-slate-800 text-center transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-100 dark:bg-slate-800 text-medical-600 dark:text-medical-400 rounded-full mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Brief */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
            <div className="bg-slate-900 dark:bg-black rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Leadership & Vision</h2>
                    <p className="text-slate-300 text-lg mb-8">
                        "Pharmaceutical India Pvt Ltd is a very good company... Dr Raman, famous Neuro physician has high regard for the staff and the management."
                    </p>
                    <div className="flex items-center">
                        <div className="w-12 h-1 bg-medical-500 rounded mr-4"></div>
                        <span className="font-semibold tracking-wide uppercase text-sm">Endorsed by Industry Experts</span>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                    <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.8,33.4C59.6,44.7,48.7,54.1,36.4,61.2C24.1,68.3,10.4,73.1,-2.2,76.9C-14.8,80.7,-26.3,83.5,-37.1,79.5C-47.9,75.5,-58,64.7,-66.3,52.4C-74.6,40.1,-81.1,26.3,-82.2,12.1C-83.3,-2.1,-79,-16.7,-71.1,-29.1C-63.2,-41.5,-51.7,-51.7,-39.3,-59.5C-26.9,-67.3,-13.5,-72.7,0.7,-73.9C14.8,-75.1,29.7,-72.1,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
