import React, { useState } from 'react';
import { ZYNTARA_LOGO_ICON, ZYNTARA_LOGO_EMBLEM } from '../../assets/logo';

interface BrandLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showTagline?: boolean;
  variant?: 'standard' | 'emblem-only' | 'full-emblem' | 'icon';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'standard',
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeMap = {
    xs: { icon: 24, text: 'text-sm', sub: 'text-[8px]', imgSize: 'w-6 h-6' },
    sm: { icon: 30, text: 'text-base', sub: 'text-[9px]', imgSize: 'w-7 h-7' },
    md: { icon: 38, text: 'text-base sm:text-lg tracking-wider', sub: 'text-[10px]', imgSize: 'w-9 h-9' },
    lg: { icon: 48, text: 'text-2xl tracking-wider', sub: 'text-xs', imgSize: 'w-12 h-12' },
    xl: { icon: 64, text: 'text-3xl tracking-widest', sub: 'text-sm', imgSize: 'w-16 h-16' },
    '2xl': { icon: 84, text: 'text-4xl tracking-widest', sub: 'text-base', imgSize: 'w-20 h-20' }
  };

  const currentSize = sizeMap[size];

  if (variant === 'full-emblem') {
    return (
      <div 
        id="zyntara-brand-full-emblem"
        onClick={onClick}
        className={`inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
        role="banner"
        aria-label="Zyntara Technology"
      >
        <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#1C2333] via-[#0E121A] to-[#06080D] border border-[#34D399]/30 group-hover:border-[#D6B77A]/60 shadow-[0_8px_30px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_35px_rgba(45, 212, 191,0.3)] transition-all duration-300 overflow-hidden">
          <img 
            src={ZYNTARA_LOGO_EMBLEM} 
            alt="Zyntara Technology Logo" 
            referrerPolicy="no-referrer"
            className="w-full max-w-[280px] h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  if (variant === 'emblem-only') {
    return (
      <div 
        id="zyntara-brand-emblem-only"
        onClick={onClick}
        className={`relative inline-flex items-center justify-center select-none cursor-pointer group ${className}`}
        style={{ width: currentSize.icon, height: currentSize.icon }}
        role="banner"
        aria-label="Zyntara Technology"
      >
        {/* Outer glowing orbital energy halo */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#34D399]/30 via-[#2DD4BF]/30 to-[#D6B77A]/30 blur-sm group-hover:blur-md opacity-70 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Emblem Image Container */}
        <div className="relative w-full h-full rounded-full bg-[#080A10] border border-[#34D399]/40 group-hover:border-[#D6B77A]/80 overflow-hidden shadow-[0_0_15px_rgba(52, 211, 153,0.4)] flex items-center justify-center">
          {!imageError ? (
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara Logo"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="font-display font-extrabold text-[#D6B77A] text-sm">Z</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      id="zyntara-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      role="banner"
      aria-label="Zyntara Technology"
    >
      {/* Precision Orbital System & Luxury 3D Emblem Container */}
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        {/* Outer subtle orbital ring with blue/champagne shimmer */}
        <div className="absolute -inset-0.5 rounded-full border border-[#34D399]/30 group-hover:border-[#2DD4BF]/60 transition-colors duration-500 animate-[spin_20s_linear_infinite]" />
        
        {/* Orbital celestial particle */}
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2DD4BF] shadow-[0_0_8px_rgba(45, 212, 191,0.9)] group-hover:scale-125 transition-transform" />
        
        {/* Inner geometric core container with logo image */}
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#121622] via-[#080A0E] to-[#1C2030] border border-white/15 group-hover:border-[#34D399]/50 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:shadow-[0_4px_20px_rgba(52, 211, 153,0.35)] transition-all duration-300 overflow-hidden p-0.5">
          {!imageError ? (
            <img 
              src={ZYNTARA_LOGO_ICON} 
              alt="Zyntara Logo"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <svg 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[62%] h-[62%] text-[#F5F3EE] group-hover:text-[#D6B77A] transition-colors duration-300"
            >
              <path 
                d="M7 8H25L13 24H25" 
                stroke="currentColor" 
                strokeWidth="2.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="16" cy="16" r="2" fill="#D6B77A" />
            </svg>
          )}
        </div>
      </div>

      {/* Typography lockup */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold tracking-wider text-[#F5F3EE] group-hover:text-white transition-colors ${currentSize.text}`}>
            ZYNTARA
          </span>
          <span className="font-display font-semibold tracking-widest text-[#D6B77A] text-[9px] px-1.5 py-0.5 rounded-md bg-[#181D2A] border border-[#D6B77A]/30">
            TECHNOLOGY
          </span>
        </div>
        
        {showTagline ? (
          <span className={`font-mono tracking-widest text-[#2DD4BF] uppercase ${currentSize.sub}`}>
            AI • Automation • Systems
          </span>
        ) : (
          <span className={`font-mono tracking-widest text-[#7E8491] group-hover:text-[#A99A7A] uppercase transition-colors ${currentSize.sub}`}>
            Building Intelligent Systems
          </span>
        )}
      </div>
    </div>
  );
};
