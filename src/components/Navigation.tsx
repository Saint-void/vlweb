import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone, Clock, MapPin } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Founder', path: '/founder' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative z-10">
                    <img className="w-20 h-20 " src="../assets/image/vllogo-removebg-preview.png" alt="vlmedspa logo" />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl font-serif tracking-[0.18em] md:tracking-[0.2em] text-[#2e1c22] font-medium leading-none">VL<span className="text-base sm:text-lg md:text-xl tracking-[0.25em] md:tracking-[0.3em] text-[#d8617c] font-semibold uppercase mt-0.5">MEDSPA</span></span>
            
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-8 text-xs md:text-sm tracking-widest uppercase text-[#5c4a50] bg-white/85 backdrop-blur-md border border-[#f0d5dd] px-6 md:px-8 py-2.5 md:py-3 rounded-full shadow-[0_4px_20px_rgba(216,97,124,0.08)]">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`transition-colors hover:text-[#d8617c] ${location.pathname === link.path ? 'text-[#d8617c] font-semibold' : 'text-[#5c4a50]'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="flex md:hidden items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#f0d5dd] text-[#2e1c22] hover:text-[#d8617c] hover:border-[#d8617c]/50 transition-all active:scale-95 shadow-md relative z-10"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#ffffff]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between border-b border-[#f0d5dd] pb-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#d8617c] rounded-full flex items-center justify-center p-0.5 sm:p-1 relative shadow-[0_0_15px_rgba(216,97,124,0.2)]">
                  <div className="w-full h-full border border-[#d8617c]/60 rounded-full flex items-center justify-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#d8617c]"></span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-serif tracking-[0.18em] text-[#2e1c22] font-medium leading-none">VL</span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#d8617c] font-semibold uppercase mt-0.5">MEDSPA</span>
                </div>
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigation Menu"
                className="w-11 h-11 rounded-full bg-[#fceef2] border border-[#f0d5dd] text-[#2e1c22] hover:text-[#d8617c] flex items-center justify-center transition-all active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="my-auto py-8 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold mb-4">
                Navigation
              </div>
              <ul className="space-y-4">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * index, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between text-2xl font-serif tracking-wide transition-colors py-2 border-b border-[#fceef2] ${
                          isActive ? 'text-[#d8617c] font-medium' : 'text-[#2e1c22] hover:text-[#d8617c]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                          isActive ? 'text-[#d8617c] opacity-100' : 'opacity-0 group-hover:opacity-100 text-[#d8617c]'
                        }`} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Booking CTA Button */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#d8617c] hover:bg-[#c44f6a] text-white text-xs font-semibold uppercase tracking-[0.2em] py-4 px-6 rounded-xl transition-all shadow-[0_4px_20px_rgba(216,97,124,0.3)] active:scale-95 text-center"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Footer Quick Info in Mobile Menu */}
            <div className="border-t border-[#f0d5dd] pt-6 space-y-3 text-xs text-[#6b585e] font-light">
              <div className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#d8617c] shrink-0" />
                <span>3 Olayiwola St, Charity Rd, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#d8617c] shrink-0" />
                <a href="tel:+2347048085536" className="hover:text-[#d8617c] transition-colors">+234 704 808 5536</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-3.5 h-3.5 text-[#d8617c] shrink-0" />
                <span>Mon – Sat: 10am – 7/8pm | Sun: Closed</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


