import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Home, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Calendar, 
  Compass, 
  Image as ImageIcon, 
  User
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NotFound() {
  const helpfulLinks = [
    { name: 'Home', path: '/', icon: Home, desc: 'Return to our main portal' },
    { name: 'About Us', path: '/about', icon: Compass, desc: 'Learn about our clinic and vision' },
    { name: 'Our Founder', path: '/founder', icon: User, desc: 'Meet Freda Francis' },
    { name: 'Visual Gallery', path: '/gallery', icon: ImageIcon, desc: 'Explore treatments & facilities' },
    { name: 'Contact & Book', path: '/contact', icon: Calendar, desc: 'Schedule an appointment' },
  ];

  return (
    <div className="bg-[#faf6f7] min-h-screen text-[#2e1c22] selection:bg-[#f7d0db] selection:text-[#b8435f] flex flex-col justify-between">
      
      {/* Navigation Bar */}
      <Navigation />

      {/* Main 404 Container */}
      <main className="flex-1 pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-8 lg:px-10 relative overflow-hidden flex items-center justify-center">
        
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d8617c]/8 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-3xl w-full mx-auto text-center relative z-10 space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fceef2] border border-[#f0d5dd]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d8617c]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">
              Error 404 • Lost in Serenity
            </span>
          </motion.div>

          {/* Large Stylized 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative select-none"
          >
            <span className="text-8xl sm:text-9xl md:text-[13rem] font-serif font-light text-[#f3d9e1] tracking-widest leading-none block">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2e1c22] font-normal tracking-wide">
                Page Not Found
              </h1>
            </div>
          </motion.div>

          {/* Descriptive Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#5c4a50] font-light text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            The sanctuary page or destination you are seeking does not exist, has been moved, or is temporarily unavailable.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d8617c] hover:bg-[#c44f6a] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(216,97,124,0.35)] active:scale-95 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fceef2] border border-[#f0d5dd] text-[#2e1c22] text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#d8617c]" />
              <span>Contact Support</span>
            </Link>
          </motion.div>

          {/* Helpful Navigation Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 border-t border-[#f0d5dd] text-left"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#d8617c] font-semibold text-center mb-6">
              Or Explore Popular Destinations
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {helpfulLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className="p-4 rounded-xl bg-white border border-[#f0d5dd] hover:border-[#d8617c] hover:shadow-md transition-all group flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#fceef2] flex items-center justify-center text-[#d8617c] shrink-0 group-hover:bg-[#d8617c] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-serif font-medium text-[#2e1c22] group-hover:text-[#d8617c] transition-colors">
                          {item.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#5c4a50] group-hover:text-[#d8617c] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-xs text-[#5c4a50] font-light truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
