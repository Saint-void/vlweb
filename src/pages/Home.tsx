import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Pipette, Sparkles, Droplets, Leaf, Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MessageCircle, Send, ArrowUpRight } from 'lucide-react';

const SERVICE_IMAGES = [
  { id: 1, image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Guided Relaxation" },
  { id: 2, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Hot Stone Massage" },
  { id: 3, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Aromatherapy" },
  { id: 4, image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Thermal Baths" },
  { id: 5, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Facial Treatments" },
  { id: 6, image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Holistic Healing" },
  { id: 7, image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Mindfulness Meditation" },
  { id: 8, image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Couples Spa" },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Chidera Okafor",
    role: "Verified Client",
    location: "Lagos, NG",
    rating: 5,
    treatment: "Morpheus8 Pro & Injectables",
    quote: "I’ve visited a few medspas in Lagos, but none compare to VL medspa  . The environment is calming, the equipment is state-of-the-art, and the team really listens. It feels like luxury and expertise in one.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Regular Guest",
    location: "London, UK",
    rating: 5,
    treatment: "Skin Resurfacing & Peels",
    quote: "The personalized attention and clinical precision are unmatched. My complexion has never looked this luminous and clear. Truly a tranquil sanctuary for self-care.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "VIP Member",
    location: "Monaco",
    rating: 5,
    treatment: "Body Sculpting & Cryotherapy",
    quote: "From the ambient aroma to the world-class practitioners, every moment feels curated for pure rejuvenation. The body sculpting results exceeded my expectations.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "Verified Client",
    location: "Dubai, UAE",
    rating: 5,
    treatment: "IV Hydration & Health Drips",
    quote: "The custom IV nutrient therapy restored my vitality completely. Exceptional atmosphere, discrete service, and highly trained staff who guide you with deep warmth.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const SCIENCE_BEAUTY_DATA = [
  {
    id: 'acne-scar',
    label: 'Acne Scar Removal',
    eyebrow: 'SMOOTH. SCULPT. REJUVENATE.',
    mainHeading: 'A place where science & beauty meet',
    description: 'We embrace the amazing advances in modern aesthetics. Collaborating with progressive medical, beauty and wellness professionals, we integrate the very latest in science-based technologies, techniques and products.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Morpheus8 RF Needling', 'Subcision Therapy', 'PRP Growth Factors', 'Custom Chemical Peels'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 'wrinkles',
    label: 'Wrinkles and Fine Lines',
    eyebrow: 'SMOOTH. LIFT. RESTORE.',
    mainHeading: 'Precision age-defying skin therapy',
    description: 'Target subtle expression lines and restore structural firmness with micro-targeted neurotoxins, biostimulatory dermal fillers, and collagen-synthesizing light therapy.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Botox & Dysport Infusion', 'Hyaluronic Hydration', 'LED Phototherapy', 'Peptide Resurfacing'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 'hyperpigmentation',
    label: 'Hyper Pigmentation',
    eyebrow: 'BRIGHTEN. EVEN. ILLUMINATE.',
    mainHeading: 'Radiant tone & luminosity restoration',
    description: 'Dissolve stubborn sun damage and melasma discoloration with customized brightening serums, clinical peels, and high-precision laser toning designed for flawless skin tone.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['IPL Photofacials', 'Melanin Regulation', 'Vitamin C Therapy', 'Cosmelan Peels'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 'body-sculpting',
    label: 'Body Sculpting',
    eyebrow: 'DEFINE. CONTOUR. TONIFY.',
    mainHeading: 'Sculpting beauty through advanced tech',
    description: 'Transform and contour target areas with non-surgical radiofrequency, cryotherapy, and electromagnetic muscle stimulation engineered for immediate tone and lasting definition.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Cryotherapy', 'RF Slimming', 'Emsculpt Neo', 'Lymphatic Massage'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function Home() {
  const [items, setItems] = useState(SERVICE_IMAGES);
  const [activeScienceIdx, setActiveScienceIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [isServicesPaused, setIsServicesPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const rotateServicesNext = () => {
    setItems((prev) => {
      const next = [...prev];
      const first = next.shift();
      if (first) next.push(first);
      return next;
    });
  };

  const rotateServicesPrev = () => {
    setItems((prev) => {
      const next = [...prev];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      rotateServicesNext();
    } else if (diff < -45) {
      rotateServicesPrev();
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    if (isServicesPaused) return;
    const serviceInterval = setInterval(() => {
      rotateServicesNext();
    }, 4000);

    return () => {
      clearInterval(serviceInterval);
    };
  }, [isServicesPaused]);

  useEffect(() => {
    const scienceInterval = setInterval(() => {
      setActiveScienceIdx((prev) => (prev + 1) % SCIENCE_BEAUTY_DATA.length);
    }, 5000);

    return () => {
      clearInterval(scienceInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentScience = SCIENCE_BEAUTY_DATA[activeScienceIdx];
  const currentTestimonial = TESTIMONIALS[testimonialIdx];

  return (
    <div className="min-h-screen bg-[#faf6f7] text-[#2e1c22] selection:bg-[#f7d0db] selection:text-[#b8435f] overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[65vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-end px-4 sm:px-8 lg:px-12 py-12 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="../assets/image/recep.jpg" 
            alt="Person relaxing in water" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/70"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-xl text-right pt-16 sm:pt-20 pb-4 md:pb-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-3 sm:mb-6 leading-tight">
            Pampering<br/>
            <span className="italic font-light text-[#fcdfe6]">Head-quaters.</span>
          </h1>
          <p className="text-white/90 text-xs sm:text-base md:text-xl font-light mb-6 md:mb-10 leading-relaxed max-w-md ml-auto">
            Welcome to VLmedspa, where your journey to tranquility begins. Reconnect with peace, and embrace self-care.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#d8617c] hover:bg-[#c44f6a] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(216,97,124,0.4)] hover:shadow-[0_6px_25px_rgba(216,97,124,0.55)]"
          >
            Book Your Appointment
          </Link>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section 
        id="services" 
        className="py-20 md:py-32 bg-[#faf6f7] relative overflow-hidden border-b border-[#f0d5dd]"
        onMouseEnter={() => setIsServicesPaused(true)}
        onMouseLeave={() => setIsServicesPaused(false)}
      >
        {/* Soft Ambient Pink Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d8617c]/8 rounded-full blur-[180px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-6 mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fceef2] border border-[#f0d5dd] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d8617c]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">
              Curated Treatments
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2e1c22] mb-4">Featured Services</h2>
          <p className="text-[#5c4a50] font-light text-sm md:text-base leading-relaxed">
            Discover bespoke clinical services designed to nurture your complexion and body, from guided relaxation to advanced medical aesthetics.
          </p>
        </motion.div>

        {/* Circular images row with Enlarged Cycle Images & Interactive Scroll/Swipe */}
        <div 
          className="relative w-full max-w-[1800px] mx-auto h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px] select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={rotateServicesPrev}
            aria-label="Previous Service"
            className="absolute left-3 sm:left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-[#d8617c] hover:text-white text-[#2e1c22] border border-[#f0d5dd] hover:border-[#d8617c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={rotateServicesNext}
            aria-label="Next Service"
            className="absolute right-3 sm:right-6 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-[#d8617c] hover:text-white text-[#2e1c22] border border-[#f0d5dd] hover:border-[#d8617c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Carousel Stage */}
          <div className="relative w-full h-full flex items-center justify-center">
            {items.map((item, index) => {
              let x = "0%";
              let scale = 1;
              let opacity = 1;
              let zIndex = 0;
              let isClickable = false;
              let clickHandler: (() => void) | undefined = undefined;

              if (index === 0) {
                x = "-230%";
                scale = 0.35;
                opacity = 0;
                zIndex = 5;
              } else if (index === 1) {
                x = "-160%";
                scale = 0.55;
                opacity = 0.35;
                zIndex = 15;
              } else if (index === 2) {
                x = "-85%";
                scale = 0.78;
                opacity = 0.85;
                zIndex = 25;
                isClickable = true;
                clickHandler = rotateServicesPrev;
              } else if (index === 3) {
                x = "0%";
                scale = 1;
                opacity = 1;
                zIndex = 40;
              } else if (index === 4) {
                x = "85%";
                scale = 0.78;
                opacity = 0.85;
                zIndex = 25;
                isClickable = true;
                clickHandler = rotateServicesNext;
              } else if (index === 5) {
                x = "160%";
                scale = 0.55;
                opacity = 0.35;
                zIndex = 15;
              } else {
                x = "230%";
                scale = 0.35;
                opacity = 0;
                zIndex = 5;
              }

              const isCenter = index === 3;

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{ x, scale, opacity, zIndex }}
                  transition={{ type: "spring", stiffness: 120, damping: 22 }}
                  onClick={clickHandler}
                  className={`absolute w-60 h-60 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px] rounded-full overflow-hidden bg-white transition-shadow duration-500 ${
                    isClickable ? 'cursor-pointer hover:opacity-100 hover:scale-[0.82]' : ''
                  } ${
                    isCenter 
                      ? 'ring-2 sm:ring-4 ring-[#d8617c]/70 ring-offset-4 sm:ring-offset-8 ring-offset-[#faf6f7] shadow-[0_25px_50px_rgba(216,97,124,0.25)]' 
                      : 'border border-[#f0d5dd] shadow-md'
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover select-none transition-transform duration-700" 
                    loading="lazy"
                  />
                  
                  {/* Subtle focus for non-center items */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors duration-300"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Item Title */}
        <div className="text-center mt-6 md:mt-8 flex flex-col items-center px-4">
          <div className="relative h-12 flex items-center justify-center w-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={items[3].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-center"
              >
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d8617c] font-semibold block mb-1">
                  Featured Treatment
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2e1c22] tracking-wide">
                  {items[3].title}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Swipe / Navigation Hint */}
          <div className="mt-4 flex items-center gap-2 text-[#856b73] text-[11px] uppercase tracking-widest">
            <span className="hidden sm:inline">Use arrows or click side cards to navigate</span>
            <span className="sm:hidden flex items-center gap-1.5 text-[#d8617c] font-semibold">
              <span>Swipe left or right to explore</span>
              <span className="animate-pulse">↔</span>
            </span>
          </div>
        </div>
      </section>

      {/* Treatment Categories Section */}
      <section className="py-24 md:py-32 bg-[#ffffff] relative border-t border-[#f0d5dd]">
        <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#d8617c] font-semibold mb-4">Comprehensive Care</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] mb-6">Our Expertise</h2>
            <p className="text-[#5c4a50] font-light text-sm md:text-base leading-relaxed">
              Tailored treatments to enhance your natural beauty, restore your inner balance, and nurture your holistic well-being.
            </p>
          </div>

          <div className="flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 no-scrollbar scroll-smooth">
            
            {/* Injectables */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-[75vw] sm:w-[320px] md:w-auto flex-shrink-0 snap-start relative p-7 sm:p-8 md:p-9 bg-transparent border border-[#f0d5dd] rounded-2xl flex flex-col items-center text-center overflow-hidden"
            >
              <div className="text-[#d8617c] mb-6 sm:mb-8">
                <Pipette className="w-9 h-9 sm:w-10 sm:h-10" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 text-[#2e1c22]">Injectables</h3>
              <p className="text-[#5c4a50] font-light text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                Smooth, lift, and rejuvenate with our expert injectable treatments: Botox, dermal fillers, PDO threads, and PRP.
              </p>
              <Link to="/contact" className="text-xs tracking-[0.2em] uppercase text-[#d8617c] hover:text-[#b8435f] transition-colors duration-300 flex items-center gap-2 font-semibold">
                Discover <span>→</span>
              </Link>
            </motion.div>

            {/* Skin Treatments */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-[75vw] sm:w-[320px] md:w-auto flex-shrink-0 snap-start relative p-7 sm:p-8 md:p-9 bg-transparent border border-[#f0d5dd] rounded-2xl flex flex-col items-center text-center overflow-hidden"
            >
              <div className="text-[#d8617c] mb-6 sm:mb-8">
                <Sparkles className="w-9 h-9 sm:w-10 sm:h-10" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 text-[#2e1c22]">Skin Treatments</h3>
              <p className="text-[#5c4a50] font-light text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                Revive and renew your skin with advanced treatments like chemical peels, mesotherapy, microinfusions, and Dermapen.
              </p>
              <Link to="/contact" className="text-xs tracking-[0.2em] uppercase text-[#d8617c] hover:text-[#b8435f] transition-colors duration-300 flex items-center gap-2 font-semibold">
                Discover <span>→</span>
              </Link>
            </motion.div>

            {/* Body Treatments */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-[75vw] sm:w-[320px] md:w-auto flex-shrink-0 snap-start relative p-7 sm:p-8 md:p-9 bg-transparent border border-[#f0d5dd] rounded-2xl flex flex-col items-center text-center overflow-hidden"
            >
              <div className="text-[#d8617c] mb-6 sm:mb-8">
                <Droplets className="w-9 h-9 sm:w-10 sm:h-10" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 text-[#2e1c22]">Body Treatments</h3>
              <p className="text-[#5c4a50] font-light text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                Sculpt, tone, and restore with cutting-edge body treatments designed to boost results and total body wellness.
              </p>
              <Link to="/contact" className="text-xs tracking-[0.2em] uppercase text-[#d8617c] hover:text-[#b8435f] transition-colors duration-300 flex items-center gap-2 font-semibold">
                Discover <span>→</span>
              </Link>
            </motion.div>

            {/* Wellness & Health */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-[75vw] sm:w-[320px] md:w-auto flex-shrink-0 snap-start relative p-7 sm:p-8 md:p-9 bg-transparent border border-[#f0d5dd] rounded-2xl flex flex-col items-center text-center overflow-hidden"
            >
              <div className="text-[#d8617c] mb-6 sm:mb-8">
                <Leaf className="w-9 h-9 sm:w-10 sm:h-10" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 text-[#2e1c22]">Wellness & Health</h3>
              <p className="text-[#5c4a50] font-light text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                Feel energized and balanced from the inside out with therapies designed to boost hydration and support immunity.
              </p>
              <Link to="/contact" className="text-xs tracking-[0.2em] uppercase text-[#d8617c] hover:text-[#b8435f] transition-colors duration-300 flex items-center gap-2 font-semibold">
                Discover <span>→</span>
              </Link>
            </motion.div>

          </div>

          {/* Swipe Indicator for Mobile */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-[#d8617c] text-[11px] uppercase tracking-widest font-semibold">
            <span>Swipe to explore more</span>
            <span className="animate-pulse">→</span>
          </div>
        </div>
      </section>

      {/* Science & Beauty Section */}
      <section className="py-24 md:py-32 bg-[#fcf4f6] text-[#2e1c22] relative overflow-hidden border-t border-b border-[#f0d5dd]">
        {/* Subtle Ambient Pink Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d8617c]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            {/* Left Image Showcase - Expanded Width (7/12) */}
            <div className="w-full lg:w-7/12 relative">
              <div className="relative aspect-square sm:aspect-auto h-auto sm:h-[540px] md:h-[600px] lg:h-[650px] w-full overflow-hidden rounded-2xl shadow-xl bg-white border border-[#f0d5dd]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentScience.id}
                    src={currentScience.image}
                    alt={currentScience.label}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
                
                {/* Edge Blur Focus */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl backdrop-blur-[2px] [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,transparent_60%,black_100%)]"></div>
              </div>
            </div>

            {/* Right Details Content (5/12) */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScience.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#d8617c] font-semibold mb-3">
                    {currentScience.eyebrow}
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] mb-6 leading-[1.15]">
                    {currentScience.mainHeading}
                  </h2>
                  
                  <p className="text-[#5c4a50] font-light text-sm md:text-base leading-relaxed mb-8">
                    {currentScience.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Static 2x2 Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 my-6">
                {SCIENCE_BEAUTY_DATA.map((item, idx) => {
                  const isActive = idx === activeScienceIdx;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 transition-all duration-500 select-none"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 transition-all duration-500 ${
                        isActive 
                          ? 'border-[#d8617c] text-[#d8617c] bg-[#fceef2]' 
                          : 'border-[#f0d5dd] text-[#856b73] bg-white'
                      }`}>
                        {item.icon}
                      </div>
                      <span className={`text-sm md:text-base font-serif tracking-wide transition-colors duration-500 ${
                        isActive ? 'text-[#2e1c22] font-semibold' : 'text-[#5c4a50]'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Bar */}
              <div className="mt-8 pt-4 flex items-center gap-6">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#d8617c] hover:bg-[#c44f6a] text-white px-8 py-3.5 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 font-semibold cursor-pointer shadow-[0_4px_20px_rgba(216,97,124,0.3)] hover:shadow-[0_6px_25px_rgba(216,97,124,0.45)]"
                >
                  <span>Book Consultation</span>
                  <span>→</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Marquee Strip */}
        <div className="w-full py-6 overflow-hidden relative select-none border-t border-[#f0d5dd]/80 bg-white/60">
          <div className="flex w-max animate-marquee">
            {/* Track 1 */}
            <div className="flex items-center gap-12 pr-12 shrink-0">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 text-xl md:text-2xl lg:text-3xl font-serif text-[#2e1c22]/80 tracking-wide shrink-0">
                  <span>Smooth. Sculpt. Rejuvenate.</span>
                  <span className="text-lg text-[#d8617c]">❄</span>
                </div>
              ))}
            </div>
            {/* Track 2 */}
            <div className="flex items-center gap-12 pr-12 shrink-0" aria-hidden="true">
              {[...Array(6)].map((_, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-12 text-xl md:text-2xl lg:text-3xl font-serif text-[#2e1c22]/80 tracking-wide shrink-0">
                  <span>Smooth. Sculpt. Rejuvenate.</span>
                  <span className="text-lg text-[#d8617c]">❄</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-[#ffffff] text-[#2e1c22] relative overflow-hidden border-b border-[#f0d5dd]">
        {/* Ambient Subtle Pink Lighting Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d8617c]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fceef2] border border-[#f0d5dd] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#d8617c] animate-pulse"></span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">Client Stories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2e1c22] mb-4 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-[#5c4a50] font-light text-sm md:text-base leading-relaxed">
              Real experiences from valued guests who have restored their confidence and radiance with us.
            </p>
          </div>

          {/* Main Clean Text Showcase */}
          <div className="relative w-full mx-auto flex flex-col items-center text-center">
            
            {/* Star Rating */}
            <div className="flex items-center gap-1.5 mb-8">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#d8617c] text-[#d8617c]" />
              ))}
            </div>

            {/* Quote Content with Side Nav Controls & Wide Typography */}
            <div className="relative w-full flex items-center justify-between gap-4 md:gap-8 my-4">
              
              {/* Left Arrow */}
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-2 text-[#856b73] hover:text-[#d8617c] flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 group active:scale-95"
              >
                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 stroke-[1.25] transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              {/* Wide Quote Text */}
              <div className="flex-1 min-h-[140px] sm:min-h-[120px] md:min-h-[100px] flex items-center justify-center px-2 md:px-6">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#2e1c22] leading-relaxed font-light italic w-full"
                  >
                    "{currentTestimonial.quote}"
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-2 text-[#856b73] hover:text-[#d8617c] flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 group active:scale-95"
              >
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12 stroke-[1.25] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Client Info & Avatar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-10 pt-6 border-t border-[#f0d5dd] w-full max-w-xl justify-center"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-md border border-[#f0d5dd]">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2.5">
                    <h4 className="text-lg font-serif text-[#2e1c22] font-medium tracking-wide">{currentTestimonial.name}</h4>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#d8617c] bg-[#fceef2] px-2.5 py-0.5 rounded-full border border-[#f0d5dd] font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-[#d8617c]" />
                      {currentTestimonial.role}
                    </span>
                  </div>
                  <p className="text-xs text-[#5c4a50] font-light mt-1">
                    {currentTestimonial.treatment} • <span className="text-[#856b73]">{currentTestimonial.location}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots Indicator */}
            <div className="flex items-center gap-2.5 mt-8">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === testimonialIdx ? 'w-8 bg-[#d8617c]' : 'w-2 bg-[#f0d5dd] hover:bg-[#d8617c]/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* VL medspa Standard  (Lifestyle & Philosophy) */}
      <section className="py-24 md:py-32 bg-[#faf6f7] text-[#2e1c22] relative overflow-hidden border-b border-[#f0d5dd]">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#d8617c]/6 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Pink Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fceef2] border border-[#f0d5dd] w-fit mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#d8617c]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">
                  VL medspa Standard
                </span>
              </div>

              {/* Tagline / Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2e1c22] leading-[1.12] mb-6">
                It’s more than just an experience, <br className="hidden sm:inline" />
                <span className="italic text-[#d8617c] font-light">it’s a lifestyle</span>
              </h2>

              {/* Exact Description */}
              <p className="text-[#5c4a50] font-light text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                VL MedSpa is a haven of beauty and wellness for men and women, offering state-of-the-art solutions for skin, body and mind. We specialise in anti-ageing, skin tightening, body contouring and many other internationally acclaimed treatments and services.
              </p>

              {/* Curated Service Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {[
                  { title: "Anti-Ageing", desc: "Regenerative clinical therapies" },
                  { title: "Skin Tightening", desc: "Advanced RF & ultrasound" },
                  { title: "Body Contouring", desc: "Sculpting & cryolipolysis" },
                  { title: "Clinical Facials", desc: "HydraGlow & medical peels" },
                  { title: "Laser Systems", desc: "Precision resurfacing" },
                  { title: "Wellness Rituals", desc: "Hydrotherapy & saunas" },
                ].map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#f0d5dd] hover:border-[#d8617c]/60 transition-colors shadow-sm group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d8617c] group-hover:scale-125 transition-transform"></span>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2e1c22] truncate">{pillar.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#856b73] font-light">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              {/* Action Button scrolling to Contact / Booking page */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#d8617c] hover:bg-[#c44f6a] text-white px-8 py-4 rounded-full text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(216,97,124,0.3)] hover:shadow-[0_6px_25px_rgba(216,97,124,0.45)] group cursor-pointer"
                >
                  <span>RESERVE APPOINTMENT</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href="https://wa.me/2348180822222?text=Hello%20VL%20Medspa,%20I%20would%20like%20to%20learn%20more%20about%20your%20lifestyle%20and%20wellness%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white hover:bg-[#fceef2] border border-[#f0d5dd] text-xs uppercase tracking-widest text-[#2e1c22] transition-colors shadow-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat With Us</span>
                </a>
              </div>

            </div>

            {/* Right Visual Sanctuary Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Lifestyle Image */}
                <div className="relative rounded-3xl overflow-hidden border border-[#f0d5dd] shadow-xl aspect-[4/5] bg-white">
                  <img
                    src="../assets/image/semi_recep.jpeg"
                    alt="VL Medspa Sanctuary Lifestyle"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#f0d5dd] shadow-lg">
                    <p className="text-[11px] text-[#d8617c] uppercase tracking-widest font-semibold mb-0.5">International Acclaim</p>
                    <p className="text-xs text-[#5c4a50] font-light">World-class aesthetic excellence & serene sanctuary care in Lagos.</p>
                  </div>
                </div>

                {/* Decorative Offset Image Accent */}
                <div className="hidden sm:block absolute -top-8 -right-8 w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#d8617c]/40 shadow-xl z-20 bg-white">
                  <img
                    src="../assets/image/reception logo.jpeg"
                    alt="Clinical Skincare"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
