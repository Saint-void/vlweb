import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from 'lucide-react';

const BRANDS = [
  'BIODERMA', 'DERMACEUTIC', 'MESOESTETIC', 'SKINCEUTICALS', 'STURM', 'ZO SKIN HEALTH'
];

export default function About() {
  return (
    <div className="bg-[#faf6f7] min-h-screen text-[#2e1c22] selection:bg-[#f7d0db] selection:text-[#b8435f]">
      
      {/* Navigation */}
      <Navigation />

      {/* ================= HERO BREADCRUMB BANNER ================= */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-4 sm:px-8 lg:px-10 overflow-hidden border-b border-[#f0d5dd] bg-[#fcf4f6]">
        {/* Soft Ambient Pink Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d8617c]/8 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block mb-3">
            Home • About Us
          </span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#2e1c22] font-normal tracking-wide mb-6 leading-tight"
          >
            About Oasis Medspa
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#5c4a50] font-light text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in science-backed, non-invasive aesthetic treatments that smooth, sculpt, and rejuvenate the face and body.
          </motion.p>
        </div>
      </section>


      {/* ================= SECTION 1: ABOUT OASIS CLINIC ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-10 relative overflow-hidden border-b border-[#f0d5dd] bg-[#faf6f7]">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Detail Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block">
              Smooth • Sculpt • Rejuvenate
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] leading-tight font-normal">
              About Oasis Medspa & Wellness Clinic
            </h2>

            <p className="text-[#5c4a50] font-light leading-relaxed text-sm md:text-base">
              Oasis Medspa & Wellness Clinic is a leading Nigerian spa brand based in Ikoyi, Lagos—offering award-winning aesthetic and wellness experiences since 2013. Founded by Freda Francis, we specialize in science-based, non-invasive treatments that smooth, sculpt, and rejuvenate.
            </p>

            <p className="text-[#5c4a50]/80 font-light leading-relaxed text-sm md:text-base">
              From skincare to body contouring, our expert team delivers results in a luxurious, calming space designed for your total relaxation and wellbeing.
            </p>

            <div className="pt-1">
              <Link
                to="/founder"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d8617c] hover:text-[#b8435f] transition-colors group"
              >
                <span>Read More About Our Founder, Freda Francis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Contact Box List - Unboxed */}
            <div className="pt-4 space-y-3 border-t border-[#f0d5dd] text-xs md:text-sm text-[#5c4a50] font-light">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#d8617c] shrink-0" />
                <span className="text-[#2e1c22]">21 Cameron Road, Ikoyi Lagos, Nigeria</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d8617c] shrink-0" />
                <a href="tel:+2348180822222" className="hover:text-[#d8617c] transition-colors text-[#2e1c22]">+234 818 082 2222</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d8617c] shrink-0" />
                <a href="mailto:info@oasismedspang.com" className="hover:text-[#d8617c] transition-colors text-[#2e1c22]">info@oasismedspang.com</a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative h-[400px] sm:h-[480px] md:h-[560px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#f0d5dd] bg-white">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Oasis Medspa Atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ================= SECTION 2: OUR VISION & OPENING HOURS ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-10 bg-[#fcf4f6] relative overflow-hidden border-b border-[#f0d5dd]">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative h-[400px] sm:h-[480px] md:h-[560px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#f0d5dd] bg-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Our Vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Detail: Vision & Info */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block">
              Our Vision
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] leading-tight font-normal">
              Redefining West African Wellness
            </h2>

            <p className="text-[#5c4a50] font-light leading-relaxed text-sm md:text-base">
              To become West Africa’s leading aesthetics and wellness brand—synonymous with innovation, sustainability, and purpose. We aim to deliver unforgettable experiences that inspire transformation, self-discovery, and the best version of you.
            </p>
          </div>

        </div>
      </section>


      {/* ================= SECTION 3: BRAND LOGO STRIP ================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-10 relative overflow-hidden border-b border-[#f0d5dd] bg-white">
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8617c] font-semibold mb-8">
            Trusted Global Skincare Partners
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12 opacity-85">
            {BRANDS.map((brand, idx) => (
              <span key={idx} className="text-xs md:text-sm lg:text-base font-serif tracking-[0.25em] text-[#5c4a50] font-medium hover:text-[#d8617c] transition-colors cursor-pointer">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ================= SECTION 4: OUR MISSION & COUNTER ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-10 bg-[#fcf4f6] relative overflow-hidden border-b border-[#f0d5dd]">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] font-normal leading-tight">
              Creating Lasting Value & Transformation
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-[#5c4a50] font-light leading-relaxed text-sm md:text-base">
              At Oasis Medspa, we are committed to creating lasting value for our clients, partners, and team —built on trust, transparency, and meaningful relationships. With a passion for aesthetics and wellness, we deliver personalized care through cutting-edge technology, expert knowledge, and global standards.
            </p>

            {/* Metrics Counter */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#f0d5dd] text-center sm:text-left">
              <div>
                <span className="text-3xl md:text-5xl font-serif text-[#d8617c] font-medium block">12+</span>
                <span className="text-xs text-[#5c4a50] font-medium uppercase tracking-wider mt-1 block">Years Experience</span>
              </div>

              <div>
                <span className="text-3xl md:text-5xl font-serif text-[#d8617c] font-medium block">300+</span>
                <span className="text-xs text-[#5c4a50] font-medium uppercase tracking-wider mt-1 block">Satisfied Clients</span>
              </div>

              <div>
                <span className="text-3xl md:text-5xl font-serif text-[#d8617c] font-medium block">1</span>
                <span className="text-xs text-[#5c4a50] font-medium uppercase tracking-wider mt-1 block">Ikoyi Location</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SECTION 5: LIFESTYLE CALLOUT ================= */}
      <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-10 relative text-center overflow-hidden border-b border-[#f0d5dd] bg-white">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#d8617c]/6 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2e1c22] font-normal leading-tight">
            It’s more than just an experience, it’s a lifestyle
          </h2>

          <p className="text-[#5c4a50] font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Oasis MedSpa is a haven of beauty and wellness for men and women, offering state-of-the-art solutions for skin, body and mind. We specialise in anti-ageing, skin tightening, body contouring and many other internationally acclaimed treatments.
          </p>

          <div className="pt-2">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#d8617c] hover:bg-[#c44f6a] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(216,97,124,0.35)] active:scale-95 cursor-pointer"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ================= SECTION 6: OUR VALUES ================= */}
      <section className="relative border-b border-[#f0d5dd] bg-[#faf6f7]">
        <div className="relative z-10 max-w-[1800px] mx-auto flex flex-col lg:flex-row">
          {/* Title Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 p-8 sm:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-[#f0d5dd] flex items-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2e1c22]">Our Values</h2>
          </motion.div>
          
          {/* Grid Area */}
          <div className="lg:w-2/3 grid grid-cols-2">
            {[
              { title: "EXCELLENCE & INTEGRITY", desc: "We adhere strictly to internationally recognized medical and aesthetic standards, ensuring safe, effective, and science-backed clinical treatments." },
              { title: "PERSONALIZED CARE", desc: "Every skin and body is unique. We tailor specialized treatment plans aligned precisely with your skin goals and personal journey." },
              { title: "HOLISTIC WELLBEING", desc: "True beauty radiates from within. We integrate state-of-the-art aesthetic science with serene wellness rituals to rejuvenate body and mind." },
              { title: "INNOVATION & EFFICACY", desc: "We continually adopt top-tier global medical technologies and premium skincare formulations to deliver visible, long-lasting results." }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-5 sm:p-8 md:p-12 lg:p-16 border-[#f0d5dd] 
                  ${i % 2 === 0 ? 'border-r' : ''} 
                  ${i < 2 ? 'border-b' : ''}
                  hover:bg-white transition-colors duration-500
                `}
              >
                <h4 className="text-[11px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-[#d8617c] uppercase mb-2.5 sm:mb-4 font-semibold">{value.title}</h4>
                <p className="text-xs sm:text-sm text-[#5c4a50] font-light leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= SECTION 7: JOURNEY TO SERENITY ================= */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-[#f0d5dd]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2e1c22] mb-8 leading-tight">
              Our <span className="italic font-light text-[#d8617c]">journey</span> to<br/>Serenity...
            </h2>
            <p className="text-[#5c4a50] font-light text-sm md:text-base leading-loose max-w-lg">
              Founded with a vision of promoting peace and aesthetic excellence, Oasis Medspa believes in nurturing well-being with compassion and care. Established in Ikoyi, Lagos, our clinic has evolved into a premier sanctuary for aesthetic transformation and holistic health—offering world-class care in an environment of serene luxury.
            </p>
          </motion.div>

          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center"
          >
            {/* Background geometric line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-[#f0d5dd] rounded-full"></div>
            
            <div className="relative w-full h-full flex items-end justify-center">
              {/* Image 1: Towels/Robe */}
              <div className="absolute left-0 bottom-12 w-1/2 h-2/3 z-20 shadow-xl rounded-xl overflow-hidden border border-[#f0d5dd]">
                <img 
                  src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Spa amenities" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2: Dark silhouette */}
              <div className="absolute right-0 bottom-0 w-3/5 h-4/5 z-10 shadow-xl rounded-xl overflow-hidden border border-[#f0d5dd]">
                <img 
                  src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Silhouette" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ================= SECTION 8: OPENING HOURS & REACH US ================= */}
      <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-10 bg-[#fcf4f6] relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block">
              Visit & Connect
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] font-normal">
              Hours & Contact Information
            </h2>
            <div className="w-12 h-0.5 bg-[#d8617c]/40 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            
            {/* Card 1: Opening Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#f0d5dd] p-8 sm:p-10 rounded-2xl flex flex-col justify-between hover:border-[#d8617c]/50 transition-all duration-500 shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fceef2] flex items-center justify-center text-[#d8617c] mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#2e1c22] mb-6">Opening Hours</h3>
                
                <ul className="space-y-3 text-sm text-[#5c4a50] font-light divide-y divide-[#f0d5dd]">
                  <li className="flex justify-between pt-2">
                    <span className="text-[#856b73]">Monday:</span>
                    <span className="text-[#d8617c] font-semibold">Closed</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span className="text-[#856b73]">Tuesday – Thursday:</span>
                    <span className="text-[#2e1c22] font-medium">10am – 7pm</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span className="text-[#856b73]">Friday – Saturday:</span>
                    <span className="text-[#2e1c22] font-medium">10am – 8pm</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span className="text-[#856b73]">Sunday:</span>
                    <span className="text-[#2e1c22] font-medium">3pm – 6:30pm</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Reach Us */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-[#f0d5dd] p-8 sm:p-10 rounded-2xl flex flex-col justify-between hover:border-[#d8617c]/50 transition-all duration-500 shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fceef2] flex items-center justify-center text-[#d8617c] mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#2e1c22] mb-6">Reach Us</h3>
                
                <div className="space-y-5 text-sm font-light">
                  <a 
                    href="mailto:info@oasismedspang.com" 
                    className="flex items-center gap-4 text-[#5c4a50] hover:text-[#d8617c] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#fceef2] flex items-center justify-center shrink-0 group-hover:bg-[#f7d0db] transition-colors">
                      <Mail className="w-4 h-4 text-[#d8617c]" />
                    </div>
                    <span className="font-medium text-[#2e1c22]">info@oasismedspang.com</span>
                  </a>

                  <a 
                    href="tel:+2348180822222" 
                    className="flex items-center gap-4 text-[#5c4a50] hover:text-[#d8617c] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#fceef2] flex items-center justify-center shrink-0 group-hover:bg-[#f7d0db] transition-colors">
                      <Phone className="w-4 h-4 text-[#d8617c]" />
                    </div>
                    <span className="font-medium text-[#2e1c22]">+234 818 082 2222</span>
                  </a>

                  <div className="flex items-start gap-4 text-[#5c4a50] pt-2 border-t border-[#f0d5dd]">
                    <div className="w-8 h-8 rounded-lg bg-[#fceef2] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#d8617c]" />
                    </div>
                    <span className="text-[#2e1c22]">Ikoyi, Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Book Appointment CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-[#d8617c]/40 p-8 sm:p-10 rounded-2xl flex flex-col justify-between hover:border-[#d8617c] transition-all duration-500 shadow-md relative overflow-hidden group col-span-1 md:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8617c]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#d8617c]/20 transition-all"></div>
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fceef2] flex items-center justify-center text-[#d8617c] mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#2e1c22] mb-3">Begin Your Journey</h3>
                <p className="text-xs sm:text-sm text-[#5c4a50] font-light leading-relaxed mb-8">
                  Schedule your personalized consultation with our aesthetic specialists today.
                </p>
              </div>

              <Link 
                to="/contact" 
                className="w-full inline-flex items-center justify-center gap-3 bg-[#d8617c] hover:bg-[#c44f6a] text-white text-xs font-bold uppercase tracking-[0.2em] py-4 px-6 rounded-xl transition-all shadow-[0_4px_20px_rgba(216,97,124,0.35)] active:scale-95 text-center group-hover:shadow-[0_6px_25px_rgba(216,97,124,0.5)]"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>

        </div>
      </section>


      {/* Footer */}
      <Footer />

    </div>
  );
}

