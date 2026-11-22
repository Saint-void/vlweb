import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Quote, 
  Award, 
  Heart, 
  Compass, 
  ShieldCheck, 
  ArrowRight, 
  Calendar,
  MessageCircle,
  CheckCircle2,
  Gem,
  Clock
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const MILESTONES = [
  {
    year: '2013',
    title: 'The Inception in Abule-Egba',
    description: 'Freda Francis established VL Medspa in the tranquil heart of Ikoyi, Lagos, with a pioneering mission to bring international clinical aesthetic standards to Nigeria.'
  },
  {
    year: '2016',
    title: 'Pioneering Non-Invasive Aesthetics',
    description: 'Expanded treatment portfolios to introduce cutting-edge laser, radiofrequency, and skin-tightening technologies previously only accessible abroad.'
  },
  {
    year: '2020',
    title: 'Holistic Wellness Integration',
    description: 'Evolved VL Medspa into a comprehensive aesthetics and wellness sanctuary, merging medical-grade skincare with stress-relief body therapies and detox rituals.'
  },
  {
    year: 'Present',
    title: 'West Africa’s Premier Aesthetic Destination',
    description: 'Over 12 years of industry leadership, serving thousands of satisfied clients, international visitors, and setting the gold standard in bespoke skincare care.'
  }
];

const PHILOSOPHY_PILLARS = [
  {
    icon: Gem,
    title: 'Science-Backed Artistry',
    description: 'Every treatment protocol is grounded in clinical evidence, utilizing FDA-approved technologies and world-renowned skincare formulations tailored to individual skin types.'
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Standards',
    description: 'We adhere to the highest international hygiene and clinical protocols, ensuring every client receives safe, effective, and transformative results.'
  },
  {
    icon: Heart,
    title: 'Bespoke Patient Care',
    description: 'We believe no two skin journeys are alike. Consultations are deeply personal, focused on listening, analyzing, and curating customized treatment plans.'
  },
  {
    icon: Compass,
    title: 'Holistic Transformation',
    description: 'True radiance is multi-dimensional. We nurture not only skin clarity and youthful contours, but overall tranquility, mental ease, and self-confidence.'
  }
];

export default function Founder() {
  return (
    <div className="bg-[#faf6f7] min-h-screen text-[#2e1c22] selection:bg-[#f7d0db] selection:text-[#b8435f]">
      
      {/* Navigation Header */}
      <Navigation />

      {/* ================= HERO BREADCRUMB BANNER ================= */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-4 sm:px-8 lg:px-10 overflow-hidden border-b border-[#f0d5dd] bg-[#fcf4f6]">
        {/* Soft Ambient Pink Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d8617c]/8 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block mb-3">
            Home • Founder & Visionary
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#2e1c22] font-normal tracking-wide mb-6 leading-tight"
          >
            Meet Our Founder
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#5c4a50] font-light text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
           Lindiwe Sogolo — Visionary entrepreneur, aesthetic pioneer, and the driving force behind West Africa’s most distinguished wellness sanctuary.
          </motion.p>
        </div>
      </section>


      {/* ================= SECTION 1: EDITORIAL FOUNDER PROFILE ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-10 relative overflow-hidden border-b border-[#f0d5dd] bg-[#faf6f7]">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#f0d5dd] bg-white group">
              <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                <img
                  src="../assets/image/founder.jpeg"
                  alt="Lindiwe Sogolo - Founder of VL Medspa"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Floating Signature Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#f0d5dd] shadow-lg flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-[#2e1c22]">Lindiwe Sogolo</h3>
                  <p className="text-xs uppercase tracking-wider text-[#d8617c] font-semibold mt-0.5">Founder & CEO, VL MedSpa</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#d8617c]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Ambient Backing Deco */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d8617c]/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* Right Column: Biography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fceef2] border border-[#f0d5dd] w-fit">
              <Award className="w-3.5 h-3.5 text-[#d8617c]" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">
                A Decade of Aesthetic Excellence
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] leading-tight font-normal">
              A Passion for Radiant Health and Empowering Confidence
            </h2>

            <p className="text-[#5c4a50] font-light leading-relaxed text-sm md:text-base">
              With a distinct vision to redefine luxury aesthetics in West Africa, <strong className="text-[#2e1c22] font-semibold">Lindiwe Sogolo</strong> founded VL Medspa in 2016. Recognizing the growing demand for safe, clinically certified, and non-surgical aesthetic enhancements, she established a premier sanctuary in Abule-Egba, Lagos that bridges the gap between medical precision and spa indulgence.
            </p>

            <p className="text-[#5c4a50] font-light leading-relaxed text-sm md:text-base">
              Under her visionary leadership, VL MedSpa has grown from a boutique skincare practice into an award-winning clinic celebrated across Nigeria and the diaspora. Lindiwe’s relentless commitment to innovation has brought global dermatological breakthroughs, world-class aesthetic devices, and prestigious skincare partnerships directly to Lagos.
            </p>

            <p className="text-[#5c4a50] font-light leading-relaxed text-sm md:text-base">
              Beyond aesthetic results, Lindiwe is deeply committed to client education and body positivity. Her holistic philosophy treats wellness as an intimate lifestyle—one where radiant skin, inner peace, and self-assurance harmoniously elevate everyday living.
            </p>

            {/* Key Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#f0d5dd]">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#f0d5dd] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#d8617c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2e1c22]">Pioneer in Nigeria</h4>
                  <p className="text-xs text-[#5c4a50] font-light mt-0.5">Introduced advanced non-invasive laser & RF therapies to Lagos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#f0d5dd] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#d8617c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2e1c22]">Global Clinical Alliances</h4>
                  <p className="text-xs text-[#5c4a50] font-light mt-0.5">Partnered with top-tier international skincare laboratories.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-[#d8617c] hover:bg-[#c44f6a] text-white px-7 py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_4px_20px_rgba(216,97,124,0.3)] active:scale-95"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://instagram.com/vlmedspa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#fceef2] border border-[#f0d5dd] text-[#2e1c22] px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-[#d8617c]" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ================= SECTION 2: FOUNDER'S LETTER & QUOTE ================= */}
      <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-10 bg-[#fcf4f6] relative overflow-hidden border-b border-[#f0d5dd]">
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          
          <div className="w-16 h-16 rounded-full bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#d8617c] mx-auto shadow-sm">
            <Quote className="w-8 h-8 fill-current" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2e1c22] font-normal leading-relaxed italic">
            “True beauty begins with radiant health and deep self-assurance. At VL Medspa, our mission is never to change who you are, but to illuminate your natural brilliance through science, art, and serene wellness.”
          </h3>

          <div className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8617c]">Lindiwe Sogolo</p>
            <p className="text-xs text-[#5c4a50] font-light mt-1">Founder & CEO, VL MedSpa & Pampering headquaters</p>
          </div>

        </div>
      </section>


      {/* ================= SECTION 3: FOUNDING PHILOSOPHY PILLARS ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-10 bg-white relative overflow-hidden border-b border-[#f0d5dd]">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] font-normal">
              The Guiding Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#5c4a50] font-light">
              The foundational standards that shape every treatment, practitioner protocol, and patient interaction at VL Medspa.
            </p>
            <div className="w-12 h-0.5 bg-[#d8617c]/40 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#faf6f7] border border-[#f0d5dd] hover:border-[#d8617c]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#d8617c] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif text-[#2e1c22] font-medium mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5c4a50] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= SECTION 4: THE VL MEDSPA JOURNEY TIMELINE ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-10 bg-[#faf6f7] relative overflow-hidden border-b border-[#f0d5dd]">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#d8617c] font-semibold block">
              Evolution & Milestones
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] font-normal">
              Building West Africa's Beauty Benchmark
            </h2>
            <div className="w-12 h-0.5 bg-[#d8617c]/40 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-white border border-[#f0d5dd] shadow-sm flex flex-col justify-between group hover:border-[#d8617c]/50 transition-colors"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#d8617c] block mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-base font-serif text-[#2e1c22] font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5c4a50] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#f0d5dd] mt-6 flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#d8617c] font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Milestone Achieved</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 5: CTA BANNER ================= */}
      <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-10 bg-white relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fceef2] border border-[#f0d5dd] w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#d8617c]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">
              Experience the VL Medspa Difference
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2e1c22] font-normal leading-tight">
            Begin Your Personalized Aesthetic Journey
          </h2>

          <p className="text-[#5c4a50] font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Experience the bespoke clinical care, soothing atmosphere, and transformative results conceptualized by Freda Francis.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d8617c] hover:bg-[#c44f6a] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(216,97,124,0.35)] active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>

            <a 
              href="https://wa.me/2348180822222?text=Hello%20VL%20Medspa,%20I%20would%20like%20to%20inquire%20about%20a%20consultation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fceef2] border border-[#f0d5dd] text-[#2e1c22] text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
