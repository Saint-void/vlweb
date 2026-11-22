import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface GallerySection {
  id: string;
  title: string;
  subtitle: string;
  images: GalleryItem[];
}

const INITIAL_SECTIONS: GallerySection[] = [
  {
    id: "facials",
    title: "Facials & Clinical Skincare",
    subtitle: "Advanced botanical and medical facials tailored for luminous, radiant skin.",
    images: [
      { id: 101, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1100&q=80", alt: "HydraFacial Glow Therapy" },
      { id: 102, src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80", alt: "Laser Skin Resurfacing" },
      { id: 103, src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80", alt: "Anti-Aging Collagen Facial" },
      { id: 104, src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80", alt: "Botanical Skin Rejuvenation" },
      { id: 105, src: "https://images.unsplash.com/photo-1512290900673-7002fa102462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80", alt: "Deep Cleansing Facial" },
      { id: 106, src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80", alt: "Luminous LED Light Therapy" },
    ]
  },
  {
    id: "massage",
    title: "Massage & Body Rituals",
    subtitle: "Tranquil bodywork and therapeutic massages designed to restore inner peace.",
    images: [
      { id: 201, src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80", alt: "Hot Stone Aromatherapy Massage" },
      { id: 202, src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80", alt: "Deep Tissue Muscle Relief" },
      { id: 203, src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80", alt: "Holistic Wellness Ritual" },
      { id: 204, src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80", alt: "Swedish Relaxation Bodywork" },
      { id: 205, src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1150&q=80", alt: "Exotic Body Scrub & Polish" },
      { id: 206, src: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=950&q=80", alt: "Balinese Organic Ritual" },
    ]
  },
  {
    id: "contouring",
    title: "Body Contouring & Injectables",
    subtitle: "State-of-the-art non-invasive sculpting and subtle aesthetic enhancements.",
    images: [
      { id: 301, src: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1050&q=80", alt: "Dermal Fillers & Injectables" },
      { id: 302, src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80", alt: "CoolSculpting Body Contouring" },
      { id: 303, src: "https://images.unsplash.com/photo-1512290900673-7002fa102462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80", alt: "Targeted RF Skin Tightening" },
      { id: 304, src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80", alt: "Laser Sculpting Therapy" },
      { id: 305, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650&q=80", alt: "Mesotherapy Treatment" },
      { id: 306, src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1100&q=80", alt: "Precision Facial Contouring" },
    ]
  }
];

const MORE_SECTIONS: GallerySection[] = [
  {
    id: "facilities",
    title: "Facilities & VIP Suites",
    subtitle: "Immerse yourself in our serene treatment rooms and private relaxation lounges.",
    images: [
      { id: 401, src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80", alt: "Luxury Private Treatment Suite" },
      { id: 402, src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80", alt: "VIP Relaxation Lounge" },
      { id: 403, src: "https://images.unsplash.com/photo-1512290900673-7002fa102462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=850&q=80", alt: "Aesthetic Consultation Suite" },
    ]
  },
  {
    id: "hydrotherapy",
    title: "Hydrotherapy & Sauna Rituals",
    subtitle: "Detoxify and recharge in our custom infrared sauna and hydrotherapy oasis.",
    images: [
      { id: 501, src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1100&q=80", alt: "Serenity Hydrotherapy Bath" },
      { id: 502, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80", alt: "Infrared Cedar Sauna" },
      { id: 503, src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1150&q=80", alt: "Aromatherapy Steam Room" },
    ]
  }
];

export default function Gallery() {
  const [showMoreSections, setShowMoreSections] = useState(false);

  const displayedSections = showMoreSections 
    ? [...INITIAL_SECTIONS, ...MORE_SECTIONS] 
    : INITIAL_SECTIONS;

  return (
    <div className="min-h-screen bg-[#faf6f7] text-[#2e1c22] selection:bg-[#f7d0db] selection:text-[#b8435f] overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[35vh] sm:h-[45vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
            alt="Gallery Sanctuary" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#faf6f7]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center mt-12 sm:mt-16 px-4"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] text-[#d8617c] uppercase font-semibold block mb-2 sm:mb-3">
            VL Medspa Sanctuary
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-wider uppercase flex items-center justify-center gap-2 sm:gap-4 drop-shadow-sm">
            Visual <span className="text-[#d8617c] italic font-light font-sans lowercase">x</span> Gallery
          </h1>
          <p className="text-white/90 text-xs sm:text-sm font-light max-w-md mx-auto mt-2 sm:mt-3 drop-shadow-sm">
            Explore our state-of-the-art facilities and transformative clinical treatments.
          </p>
        </motion.div>
      </section>

      {/* Grouped Categorized Gallery Sections */}
      <div className="py-8 sm:py-16 px-3 sm:px-8 lg:px-12 max-w-[1800px] mx-auto space-y-12 sm:space-y-20">
        {displayedSections.map((section, sectionIdx) => (
          <motion.section 
            key={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
            className="relative"
          >
            {/* Section Header */}
            <div className="mb-6 sm:mb-10 border-b border-[#f0d5dd] pb-3 sm:pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d8617c]"></span>
                  <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#d8617c] uppercase font-semibold">
                    Section 0{sectionIdx + 1}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#2e1c22] font-medium">
                  {section.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5c4a50] font-light max-w-md">
                {section.subtitle}
              </p>
            </div>

            {/* 2-Column on Mobile, 3-Column on Tablet/Desktop Masonry Grid */}
            <div className="columns-2 md:columns-3 gap-3.5 sm:gap-6 space-y-3.5 sm:space-y-6">
              {section.images.map((item) => (
                <div 
                  key={item.id}
                  className="break-inside-avoid overflow-hidden rounded-xl sm:rounded-2xl border border-[#f0d5dd] shadow-sm bg-white hover:shadow-md transition-shadow"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Load More Sections Button */}
        {!showMoreSections && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-6 sm:pt-10"
          >
            <button
              onClick={() => setShowMoreSections(true)}
              className="inline-flex items-center gap-3 bg-white hover:bg-[#d8617c] text-[#2e1c22] hover:text-white border border-[#f0d5dd] hover:border-[#d8617c] px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md group active:scale-95 cursor-pointer font-medium"
            >
              <Sparkles className="w-4 h-4 text-[#d8617c] group-hover:text-white transition-colors" />
              <span>Load More Sections</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
