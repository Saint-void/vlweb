import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});

  const validate = () => {
    const newErrors: {name?: string, email?: string, message?: string} = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 lg:p-12 border border-white/10 bg-[#141211] shadow-2xl relative">
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#b39578] flex items-center justify-center text-[#b39578]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif text-white mb-2">Thank You</h3>
          <p className="text-white/60 font-light text-sm">Your message has been received. We will be in touch shortly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif text-white mb-3">Get in Touch</h3>
            <p className="text-white/60 font-light text-sm">Reach out to schedule your personalized session.</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({...formData, name: e.target.value});
                  if (errors.name) setErrors({...errors, name: undefined});
                }}
                className={`w-full bg-transparent border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-[#b39578]'} rounded-none px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1 font-light">{errors.name}</p>}
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: undefined});
                }}
                className={`w-full bg-transparent border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-[#b39578]'} rounded-none px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1 font-light">{errors.email}</p>}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({...formData, message: e.target.value});
                  if (errors.message) setErrors({...errors, message: undefined});
                }}
                className={`w-full bg-transparent border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-[#b39578]'} rounded-none px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors resize-none`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1 font-light">{errors.message}</p>}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-[#b39578] hover:bg-[#a68668] text-white py-4 text-xs tracking-widest uppercase transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
