import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Trigger page loading transition effect
    setIsLoading(true);
    setProgress(20);

    const timer1 = setTimeout(() => setProgress(70), 100);
    const timer2 = setTimeout(() => setProgress(100), 250);
    const timer3 = setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [location.pathname]);

  return (
    <>
      {/* Top Gold Progress Bar */}
      {progress > 0 && (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-black/40 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#b39578] via-[#dfc4a8] to-[#b39578] transition-all duration-300 ease-out shadow-[0_0_12px_#b39578]"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Subtle Luxury Center Loader Overlay on Route Navigation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9990] bg-[#11100e]/70 backdrop-blur-md flex items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Gold Ring Spinner with VL Monogram Icon */}
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-[#b39578]/20 rounded-full" />
                <div className="absolute inset-0 border-2 border-[#b39578] border-t-transparent rounded-full animate-spin" />
                <div className="w-8 h-8 rounded-full bg-[#b39578]/10 border border-[#b39578]/40 flex items-center justify-center text-[#b39578] font-serif font-bold text-xs">
                  VL
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b39578] font-medium animate-pulse">
                VL Medspa
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
