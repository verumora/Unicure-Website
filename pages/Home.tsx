import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, User } from 'lucide-react';
import { FEATURES, REVIEWS, STATS } from '../constants';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 md:pt-44 md:pb-52 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579165466741-7f35e4755652?q=80&w=2500&auto=format&fit=crop" 
            alt="" 
            className="w-full h-full object-cover opacity-80 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/20 transition-colors duration-300"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="hidden md:inline-block px-4 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-medical-100 dark:border-slate-700 rounded-full text-medical-700 dark:text-medical-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm transition-colors">
              Pharmaceutical Excellence Since 1998
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6 transition-colors">
              Innovating for a <span className="text-medical-600 dark:text-medical-400">Healthier</span> Tomorrow
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium transition-colors">
              Pharmaceutical India Pvt Ltd is committed to manufacturing high-quality, affordable medicines. We combine scientific expertise with a dedication to patient care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products" className="inline-flex justify-center items-center px-8 py-4 bg-medical-600 dark:bg-medical-500 text-white rounded-lg font-semibold hover:bg-medical-700 dark:hover:bg-medical-600 transition-all shadow-lg shadow-medical-200 dark:shadow-none">
                View Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex justify-center items-center px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements - Enhanced Visibility */}
        <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] bg-medical-400 dark:bg-medical-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20 animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-900 -mt-16 relative z-20 shadow-sm border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="text-4xl font-bold text-medical-600 dark:text-medical-400 mb-2">{stat.value}<span className="text-2xl">{stat.suffix}</span></div>
                <div className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Pharmaceutical?</h2>
            <p className="text-slate-600 dark:text-slate-400">We adhere to the highest standards of quality, safety, and efficacy in all our pharmaceutical formulations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-medical-600 dark:text-medical-400 mb-6 group-hover:bg-medical-600 dark:group-hover:bg-medical-500 group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Content Split */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/800/600?random=9" 
                alt="Laboratory Research" 
                className="rounded-2xl shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to Quality <br/><span className="text-medical-400">Without Compromise</span></h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Our manufacturing facilities are equipped with state-of-the-art technology, adhering to GMP and ISO standards. Every product that leaves our facility undergoes rigorous quality control checks.
              </p>
              <ul className="space-y-4 mb-10">
                {['WHO-GMP Compliant Facilities', 'Advanced QC Laboratories', 'Strict Regulatory Adherence'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-medical-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/quality" className="text-white font-semibold border-b-2 border-medical-500 pb-1 hover:text-medical-400 transition-colors">
                Read our Quality Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-medical-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Professionals</h2>
            <p className="text-slate-600 dark:text-slate-400">What our partners and employees say about Pharmaceutical India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-md duration-300">
                
                {/* User Profile Top */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-300 mr-4 shrink-0 shadow-inner border border-white dark:border-slate-600">
                     <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{review.author}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mt-0.5">{review.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 dark:text-slate-300 italic mb-4 flex-grow leading-relaxed">"{review.content}"</p>
                
                {/* Date */}
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-auto pt-4 border-t border-slate-50 dark:border-slate-700">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Partner with Pharmaceutical</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">Whether you are looking for contract manufacturing, distribution opportunities, or institutional supplies, we are ready to serve.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-slate-800 dark:border-slate-600">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
