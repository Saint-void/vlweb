import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

// Custom Facebook Icon component matching reference
function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Custom X (Twitter) Icon component matching reference
function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom Instagram Icon component matching reference
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full text-[#2e1c22] bg-[#fcf4f6] selection:bg-[#f7d0db] selection:text-[#b8435f]">
      
      {/* ================= MAIN FOOTER CONTENT ================= */}
      <section className="bg-[#fcf4f6] border-t border-[#f0d5dd] py-16 md:py-20 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          
          {/* Brand & Logo */}
          <div className="flex flex-col items-start max-w-md">
            <div className="flex items-center gap-3">
              {/* Pink Spa Logo Mark */}
                 <img className="w-20 h-20 " src="../assets/image/vllogo-removebg-preview.png" alt="vlmedspa logo" />
              <div className="flex flex-col">
                    <span className="text-base sm:text-lg md:text-xl font-serif tracking-[0.18em] md:tracking-[0.2em] text-[#2e1c22] font-medium leading-none">VL<span className="text-base sm:text-lg md:text-xl tracking-[0.25em] md:tracking-[0.3em] text-[#d8617c] font-semibold uppercase mt-0.5">MEDSPA</span></span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#6b585e] leading-relaxed font-light mt-5">
              VL medspa & Wellness Clinic is a leading Nigerian spa brand based in Abule-Egba, Lagos—offering award-winning aesthetic and wellness experiences since 2013.
            </p>
          </div>

          {/* Essential Contact & Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12 text-xs md:text-sm text-[#5c4a50] font-light">
            {/* Quick Nav Links */}
            <div className="flex flex-col space-y-2 border-b sm:border-b-0 sm:border-r border-[#f0d5dd] pb-4 sm:pb-0 sm:pr-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d8617c] font-semibold">Explore</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <Link to="/" className="hover:text-[#d8617c] transition-colors">Home</Link>
                <Link to="/about" className="hover:text-[#d8617c] transition-colors">About</Link>
                <Link to="/founder" className="hover:text-[#d8617c] transition-colors">Founder</Link>
                <Link to="/gallery" className="hover:text-[#d8617c] transition-colors">Gallery</Link>
                <Link to="/contact" className="hover:text-[#d8617c] font-medium transition-colors text-[#2e1c22]">Contact & Book</Link>
              </div>
            </div>

            <div className="space-y-1.5">
              <p><strong className="font-medium text-[#2e1c22]">Location:</strong>3 Olayiwola St, Charity Rd, Lagos, Nigeria</p>
              <p><strong className="font-medium text-[#2e1c22]">Email:</strong> <a href="mailto:vlmedspa@gmail.com" className="hover:text-[#d8617c] transition-colors">vlmedspa@gmail.com</a></p>
              <p><strong className="font-medium text-[#2e1c22]">Phone:</strong> <a href="tel:+2347048085536" className="hover:text-[#d8617c] transition-colors">+234 704 808 5536</a></p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#5c4a50] border-t sm:border-t-0 sm:border-l border-[#f0d5dd] pt-4 sm:pt-0 sm:pl-8">
              <a href="https://facebook.com/vlmedspa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#f0d5dd] bg-white hover:border-[#d8617c] hover:bg-[#d8617c] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://x.com/vlmedspa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#f0d5dd] bg-white hover:border-[#d8617c] hover:bg-[#d8617c] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm" aria-label="X">
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com/vlmedspa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#f0d5dd] bg-white hover:border-[#d8617c] hover:bg-[#d8617c] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= BOTTOM BAR ================= */}
      <section className="bg-[#faeef2] border-t border-[#f0d5dd] py-5 px-4 sm:px-8 lg:px-10 relative">
        <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] md:text-xs text-[#856b73] font-light">
          
          <p>© 2025 VL MedSpa & Wellness Clinic. All Rights Reserved. Powered by Void Enterprises</p>

          <div className="flex items-center gap-6 pr-12 sm:pr-0">
            <a href="#privacy" className="hover:text-[#d8617c] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#faq" className="hover:text-[#d8617c] transition-colors">FAQ</a>
          </div>

        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute right-6 bottom-3.5 w-10 h-10 rounded-full bg-[#d8617c] hover:bg-[#c44f6a] text-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(216,97,124,0.35)] cursor-pointer active:scale-95"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </section>

    </footer>
  );
}
