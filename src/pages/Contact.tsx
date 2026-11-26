import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  MessageCircle, 
  ArrowUpRight, 
  User, 
  Sparkles, 
  CheckCircle2, 
  Navigation as NavigationIcon,
  ShieldCheck,
  Headphones,
  Compass
} from 'lucide-react';

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@vlmedspa',
    description: 'Follow our daily transformations & skincare education',
    href: 'https://instagram.com/vlmedspa',
    icon: InstagramIcon,
    accentColor: 'hover:border-[#E1306C]/60 hover:bg-[#E1306C]/5 text-[#E1306C]',
  },
  {
    name: 'WhatsApp Concierge',
    handle: '+234 704 808 5536',
    description: 'Direct instant messaging & rapid appointment booking',
    href: 'https://wa.me/2347048085536?text=Hello%20VL%20MedSpa,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
    icon: MessageCircle,
    accentColor: 'hover:border-[#25D366]/60 hover:bg-[#25D366]/5 text-[#25D366]',
  },
  {
    name: 'Facebook',
    handle: 'VL Medspa Lagos',
    description: 'Community reviews, treatments showcase & wellness articles',
    href: 'https://facebook.com/vlmedpsa',
    icon: FacebookIcon,
    accentColor: 'hover:border-[#1877F2]/60 hover:bg-[#1877F2]/5 text-[#1877F2]',
  },
  {
    name: 'X (Twitter)',
    handle: '@vlmedspa',
    description: 'Latest clinic announcements & luxury wellness updates',
    href: 'https://x.com/vlmedspa',
    icon: XIcon,
    accentColor: 'hover:border-[#d8617c]/60 hover:bg-[#fceef2] text-[#d8617c]',
  },
  {
    name: 'Direct Phone',
    handle: '+234 704 808 5536',
    description: 'Speak directly with our clinic front desk & specialists',
    href: 'tel:+2347048085536',
    icon: Phone,
    accentColor: 'hover:border-[#d8617c]/60 hover:bg-[#fceef2] text-[#d8617c]',
  },
];

export default function Contact() {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Anti-Ageing & Clinical Facials',
    date: '',
    time: 'Morning (10:00 AM - 1:00 PM)',
    notes: '',
  });

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneTarget = '2347048085536';
    const messageLines = [
      '✨ *VL MEDSPA - APPOINTMENT BOOKING*',
      '----------------------------------------',
      `👤 *Name:* ${bookingForm.name || 'Guest'}`,
      `📞 *Phone / WhatsApp:* ${bookingForm.phone || 'Not specified'}`,
      bookingForm.email ? `✉️ *Email:* ${bookingForm.email}` : '',
      `💆 *Treatment / Service:* ${bookingForm.service}`,
      `📅 *Preferred Date:* ${bookingForm.date || 'Earliest available'}`,
      `⏰ *Preferred Time:* ${bookingForm.time}`,
      bookingForm.notes ? `📝 *Notes / Goals:* ${bookingForm.notes}` : '',
      '----------------------------------------',
      'Please confirm availability. Thank you!'
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(messageLines)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

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
            Home • Contact & Concierge
          </span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#2e1c22] font-normal tracking-wide mb-6 leading-tight"
          >
            Contact & Appointments
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#5c4a50] font-light text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Reserve your bespoke aesthetic treatment, connect with our Ikoyi clinic concierge, or reach out across our official social channels.
          </motion.p>
        </div>
      </section>


      {/* ================= MAIN INTERACTIVE CONTACT & BOOKING HUB ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-10 relative overflow-hidden border-b border-[#f0d5dd] bg-[#faf6f7]">
        
        {/* Subtle Ambient Backdrops */}
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-[#d8617c]/6 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#d8617c]/6 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ================= LEFT COLUMN: CONTACT DETAILS, LOCATION & SOCIALS ================= */}
            <div className="lg:col-span-6 space-y-10">
              
              {/* Introduction Card */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fceef2] border border-[#f0d5dd] w-fit mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d8617c]" />
                  <span className="text-[11px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">
                    Sanctuary Concierge
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2e1c22] leading-tight font-normal mb-4">
                  We Welcome You to VLMEDSPA
                </h2>

                <p className="text-[#5c4a50] font-light text-base leading-relaxed">
                  Located in the prestigious enclave of Abule-Egba, Lagos, our clinic is designed to provide private, tranquil aesthetic and wellness care. Our concierge team is standing by to assist with bookings, treatment plans, and bespoke inquiries.
                </p>
              </div>

              {/* Direct Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Location Card */}
                <div className="p-5 rounded-2xl bg-white border border-[#f0d5dd] hover:border-[#d8617c]/50 transition-colors shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#d8617c] mb-4 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs uppercase tracking-wider text-[#d8617c] font-semibold mb-1">Our Location</h3>
                  <p className="text-sm text-[#2e1c22] font-medium">3 Olayiwola St, Charity Rd, </p>
                  <p className="text-xs text-[#5c4a50] font-light mt-0.5">Abule-Egba, Lagos, Nigeria</p>
                  
                  <a 
                    href="https://maps.google.com/?q=21+Cameron+Road+Ikoyi+Lagos+Nigeria" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#d8617c] hover:text-[#b8435f] mt-3 font-semibold transition-colors"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Direct Phone & WhatsApp Card */}
                <div className="p-5 rounded-2xl bg-white border border-[#f0d5dd] hover:border-[#25D366]/50 transition-colors shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs uppercase tracking-wider text-[#d8617c] font-semibold mb-1">Telephone & WhatsApp</h3>
                  <a href="tel:+2347048085536" className="text-sm text-[#2e1c22] font-medium hover:text-[#d8617c] transition-colors block">
                    +234 704 808 5536
                  </a>
                  <p className="text-xs text-[#5c4a50] font-light mt-0.5">Instant WhatsApp or direct call</p>
                  
                  <a 
                    href="https://wa.me/2347048085536?text=Hello%20VL%20MedSpa,%20I%20would%20like%20to%20connect." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline mt-3 font-semibold transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email Enquiries Card */}
                <div className="p-5 rounded-2xl bg-white border border-[#f0d5dd] hover:border-[#d8617c]/50 transition-colors shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#d8617c] mb-4 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs uppercase tracking-wider text-[#d8617c] font-semibold mb-1">Email Inquiries</h3>
                  <a href="mailto:vlmedspa@gmail.com" className="text-sm text-[#2e1c22] font-medium hover:text-[#d8617c] transition-colors block break-all">
                    vlmedspa@gmail.com
                  </a>
                  <p className="text-xs text-[#5c4a50] font-light mt-0.5">Corporate & treatment inquiries</p>
                  
                  <a 
                    href="mailto:vlmedspa@gmail.com" 
                    className="inline-flex items-center gap-1.5 text-xs text-[#d8617c] hover:text-[#b8435f] mt-3 font-semibold transition-colors"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Operating Hours Card */}
                <div className="p-5 rounded-2xl bg-white border border-[#f0d5dd] hover:border-[#d8617c]/50 transition-colors shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#d8617c] mb-4 group-hover:scale-105 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs uppercase tracking-wider text-[#d8617c] font-semibold mb-1">Operating Hours</h3>
                  <p className="text-xs text-[#2e1c22] font-medium mt-0.5">Monday - Saturday <span className="text-[#d8617c] font-semibold">9:00 AM – 7:00 PM</span></p>
                  <p className="text-[11px] text-[#856b73] font-light mt-1">Sunday: Closed (Private Bookings)</p>
                </div>

              </div>

              {/* ================= SOCIAL & COMMUNITY HUB ================= */}
              <div className="pt-4 border-t border-[#f0d5dd]">
                <div className="mb-5">
                  <h3 className="text-lg md:text-xl font-serif text-[#2e1c22] font-medium">
                    Follow & Connect on Social Media
                  </h3>
                  <p className="text-xs text-[#5c4a50] font-light mt-1">
                    Join our online aesthetic community for treatment previews, skincare tips, and live Q&A sessions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-xl bg-white border border-[#f0d5dd] ${social.accentColor} transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-sm`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-lg bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#5c4a50] group-hover:text-current group-hover:border-current transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#2e1c22] group-hover:text-current transition-colors">
                              {social.name}
                            </p>
                            <p className="text-[11px] text-[#856b73] font-light">
                              {social.handle}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-[#856b73] group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Concierge Promise Badge */}
              <div className="p-5 rounded-2xl bg-white border border-[#f0d5dd] flex items-center gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-full bg-[#fceef2] border border-[#f0d5dd] flex items-center justify-center text-[#d8617c] shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#2e1c22] font-semibold">Bespoke Concierge Response</h4>
                  <p className="text-xs text-[#5c4a50] font-light mt-0.5">
                    WhatsApp bookings and consultations receive prompt confirmation within business hours.
                  </p>
                </div>
              </div>

            </div>


            {/* ================= RIGHT COLUMN: BOOK AN APPOINTMENT FORM ================= */}
            <div className="lg:col-span-6">
              <div className="relative bg-white border border-[#f0d5dd] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_15px_40px_rgba(216,97,124,0.08)]">
                
                {/* Form Header */}
                <div className="mb-6 pb-5 border-b border-[#f0d5dd] flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fceef2] border border-[#f0d5dd] mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#d8617c]" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#d8617c] font-semibold">
                        Instant Reservation
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#2e1c22] font-medium tracking-wide">
                      Book an Appointment
                    </h3>
                    <p className="text-xs text-[#5c4a50] mt-1 font-light">
                      Fill out your preferences to launch a formatted booking directly with our WhatsApp concierge.
                    </p>
                  </div>
                  
                  <div className="hidden sm:flex w-11 h-11 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>

                {/* The Form */}
                <form onSubmit={handleWhatsAppBooking} className="space-y-5">
                  
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5c4a50] font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#856b73]" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Lady Sarah Vance"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                          className="w-full bg-[#faf6f7] border border-[#f0d5dd] focus:border-[#d8617c] focus:bg-white text-[#2e1c22] text-sm rounded-xl pl-10 pr-3.5 py-3.5 outline-none transition-all placeholder:text-[#856b73]/60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5c4a50] font-semibold mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#856b73]" />
                        <input
                          type="tel"
                          required
                          placeholder="+234 800 000 0000"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          className="w-full bg-[#faf6f7] border border-[#f0d5dd] focus:border-[#d8617c] focus:bg-white text-[#2e1c22] text-sm rounded-xl pl-10 pr-3.5 py-3.5 outline-none transition-all placeholder:text-[#856b73]/60"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Optional Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5c4a50] font-semibold mb-1.5">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#856b73]" />
                      <input
                        type="email"
                        placeholder="yourname@example.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full bg-[#faf6f7] border border-[#f0d5dd] focus:border-[#d8617c] focus:bg-white text-[#2e1c22] text-sm rounded-xl pl-10 pr-3.5 py-3.5 outline-none transition-all placeholder:text-[#856b73]/60"
                      />
                    </div>
                  </div>

                  {/* Treatment / Service Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5c4a50] font-semibold mb-1.5">
                      Treatment or Service of Interest *
                    </label>
                    <select
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                      className="w-full bg-[#faf6f7] border border-[#f0d5dd] focus:border-[#d8617c] text-[#2e1c22] text-sm rounded-xl px-3.5 py-3.5 outline-none transition-all cursor-pointer"
                    >
                      <option value="Anti-Ageing & Clinical Facials">Anti-Ageing & Clinical Facials</option>
                      <option value="Skin Tightening & RF Therapy">Skin Tightening & RF Therapy</option>
                      <option value="Body Contouring & CoolSculpting">Body Contouring & CoolSculpting</option>
                      <option value="Laser Skin Resurfacing & Peels">Laser Skin Resurfacing & Peels</option>
                      <option value="Dermal Fillers & Injectables">Dermal Fillers & Injectables</option>
                      <option value="Massage & Body Wellness Rituals">Massage & Body Wellness Rituals</option>
                      <option value="Hydrotherapy & Infrared Sauna">Hydrotherapy & Infrared Sauna</option>
                      <option value="Comprehensive Aesthetic Consultation">Comprehensive Aesthetic Consultation</option>
                    </select>
                  </div>

                  {/* Preferred Date & Time Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5c4a50] font-semibold mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#856b73]" />
                        <input
                          type="date"
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                          className="w-full bg-[#faf6f7] border border-[#f0d5dd] focus:border-[#d8617c] focus:bg-white text-[#2e1c22] text-sm rounded-xl pl-10 pr-3.5 py-3.5 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5c4a50] font-semibold mb-1.5">
                        Preferred Time Slot
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#856b73]" />
                        <select
                          value={bookingForm.time}
                          onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                          className="w-full bg-[#faf6f7] border border-[#f0d5dd] focus:border-[#d8617c] text-[#2e1c22] text-sm rounded-xl pl-10 pr-3.5 py-3.5 outline-none transition-all cursor-pointer"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                          <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5c4a50] font-semibold mb-1.5">
                      Notes, Sensitivities or Specific Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about specific skin conditions, preferred therapists, or questions..."
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full bg-[#faf6f7] border border-[#f0d5dd] focus:border-[#d8617c] focus:bg-white text-[#2e1c22] text-sm rounded-xl px-3.5 py-3 outline-none transition-all placeholder:text-[#856b73]/60 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-[#d8617c] hover:bg-[#c44f6a] text-white py-4 rounded-xl text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(216,97,124,0.35)] hover:shadow-[0_6px_25px_rgba(216,97,124,0.5)] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer group"
                    >
                      <MessageCircle className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
                      <span>BOOK VIA WHATSAPP CONCIERGE</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <div className="mt-3.5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#856b73] gap-2">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                        Direct WhatsApp automated link
                      </span>
                      <span>Concierge: <strong className="text-[#2e1c22] font-semibold">+234 704 808 5536</strong></span>
                    </div>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION: VISIT GUIDANCE & Abule-Egba LOCATION MAP PREVIEW ================= */}
      <section className="py-16 md:py-20 px-4 sm:px-8 lg:px-10 bg-[#ffffff] border-b border-[#f0d5dd]">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Map & Address Block */}
            <div className="lg:col-span-7 bg-[#faf6f7] border border-[#f0d5dd] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#d8617c] font-semibold block mb-1">
                    Location Guide
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-[#2e1c22] font-medium">
                    3 Olayiwola St, Charity Rd, Lagos, Nigeria
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/?q=21+Cameron+Road+Ikoyi+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#fceef2] border border-[#f0d5dd] px-4 py-2 rounded-full text-xs uppercase tracking-wider text-[#d8617c] font-semibold transition-colors shadow-sm"
                >
                  <NavigationIcon className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                </a>
              </div>

              {/* Visual Map Sanctuary Preview */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#f0d5dd] bg-white">
                <img
                  src="../assets/image/outside_full.jpeg"
                  alt="3 Olayiwola St, Charity Rd, Lagos, Nigeria Sanctuary"
                  className="w-full h-full object-cover opacity-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40"></div>
                
                {/* Floating Map Pin Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#d8617c] text-white flex items-center justify-center shadow-[0_0_25px_rgba(216,97,124,0.6)] animate-bounce">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md border border-[#d8617c]/50 text-[11px] font-semibold text-[#2e1c22] whitespace-nowrap shadow-lg">
                    VL MedSpa Clinic
                  </div>
                </div>

                {/* Bottom Address Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#f0d5dd] flex items-center justify-between text-xs shadow-sm">
                  <span className="text-[#5c4a50] font-light">Secure dedicated client parking available on Cameron Road</span>
                  <span className="text-[#d8617c] font-semibold hidden sm:inline">3 Olayiwola St, Charity Rd, Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Client Etiquette & FAQ Tips */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-[#f0d5dd] shadow-sm">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d8617c] mb-2">Arrival & Consultation</h4>
                <p className="text-xs text-[#5c4a50] font-light leading-relaxed">
                  We kindly recommend arriving 10–15 minutes prior to your scheduled treatment time to enjoy a relaxing herbal welcome and complete your skin health profile.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#f0d5dd] shadow-sm">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d8617c] mb-2">Rescheduling & Cancellations</h4>
                <p className="text-xs text-[#5c4a50] font-light leading-relaxed">
                  To ensure personalized practitioner availability, please notify our WhatsApp concierge at least 24 hours in advance should you need to adjust your booking.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#f0d5dd] shadow-sm">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d8617c] mb-2">Bespoke Group & VIP Inquiries</h4>
                <p className="text-xs text-[#5c4a50] font-light leading-relaxed">
                  For private bridal parties, VIP executive days, or custom package curation, please message our concierge directly via WhatsApp or email.
                </p>
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
