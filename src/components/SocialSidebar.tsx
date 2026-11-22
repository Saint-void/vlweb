import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const SOCIAL_HANDLES = [
  {
    name: 'Instagram',
    label: '@vlmedspa',
    href: 'https://instagram.com/vlmedspa',
    icon: InstagramIcon,
    hoverColor: 'hover:text-[#E1306C] drop-shadow-[0_0_8px_rgba(225,48,108,0.4)]',
  },
  {
    name: 'WhatsApp',
    label: '+234 704 808 5536',
    href: 'https://wa.me/+2348180822222',
    icon: MessageCircle,
    hoverColor: 'hover:text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]',
  },
  {
    name: 'Facebook',
    label: '`VL Medspa Lagos',
    href: 'https://facebook.com/vlmedspa',
    icon: FacebookIcon,
    hoverColor: 'hover:text-[#1877F2] drop-shadow-[0_0_8px_rgba(24,119,242,0.4)]',
  },
  {
    name: 'X (Twitter)',
    label: '@vlmedspa',
    href: 'https://x.com/vlmedspa',
    icon: XIcon,
    hoverColor: 'hover:text-[#d8617c] drop-shadow-[0_0_8px_rgba(216,97,124,0.4)]',
  },
  {
    name: 'Phone',
    label: 'Call +234 704 808 5536',
    href: 'tel:+2347048085536',
    icon: Phone,
    hoverColor: 'hover:text-[#d8617c] drop-shadow-[0_0_8px_rgba(216,97,124,0.4)]',
  },
];

export default function SocialSidebar() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center">
      {/* Container with Outward Curved Fillets attached to left wall */}
      <div className="relative flex flex-col items-center">
        
        {/* TOP OUTWARD CURVE FILLET */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="absolute -top-4 left-0 w-4 h-4 text-white/95 fill-current pointer-events-none"
        >
          <path d="M0,0 C0,8.837 7.163,16 16,16 L0,16 Z" />
        </svg>

        {/* BOTTOM OUTWARD CURVE FILLET */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="absolute -bottom-4 left-0 w-4 h-4 text-white/95 fill-current pointer-events-none"
        >
          <path d="M0,16 C0,7.163 7.163,0 16,0 L0,0 Z" />
        </svg>

        {/* MAIN SIDEBAR PANEL */}
        <div className="bg-white/95 backdrop-blur-md border-r border-y border-[#f0d5dd] rounded-r-2xl py-4 px-3 flex flex-col items-center gap-4 shadow-[0_10px_30px_rgba(216,97,124,0.12)] relative z-10">
          
          {/* Small Decorative Pink Accent Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#d8617c] animate-pulse shadow-[0_0_8px_#d8617c]" />

          {/* Social Icons Stack */}
          <div className="flex flex-col gap-3.5 items-center">
            {SOCIAL_HANDLES.map((social) => {
              const Icon = social.icon;
              return (
                <div
                  key={social.name}
                  className="relative flex items-center"
                  onMouseEnter={() => setActiveTooltip(social.name)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-1.5 text-[#5c4a50] ${social.hoverColor} transition-all duration-300 flex items-center justify-center active:scale-90 hover:scale-110`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>

                  {/* Left Tooltip Popout on Hover */}
                  {activeTooltip === social.name && (
                    <div className="absolute left-11 top-1/2 -translate-y-1/2 bg-white border border-[#f0d5dd] text-[#2e1c22] px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-50 animate-in fade-in slide-in-from-left-2 duration-200 pointer-events-none flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d8617c]" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-[#d8617c] font-semibold">
                          {social.name}
                        </span>
                        <span className="text-xs font-light text-[#5c4a50]">
                          {social.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
