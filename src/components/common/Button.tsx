import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'champagne';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  sparkle?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = false,
  sparkle = false,
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs tracking-wider',
    md: 'px-5 py-2.5 text-sm tracking-wider',
    lg: 'px-7 py-3.5 text-base tracking-wider'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#34D399] hover:to-[#059669] text-white font-semibold border border-[#34D399]/30 shadow-[0_4px_24px_rgba(16, 185, 129,0.3)] hover:shadow-[0_8px_32px_rgba(16, 185, 129,0.48)] active:scale-[0.98]',
    glow: 'bg-gradient-to-r from-[#34D399] via-[#059669] to-[#D6B77A] hover:brightness-110 text-[#050506] font-bold border border-[#F5E7CA]/40 shadow-[0_4px_24px_rgba(214,183,122,0.32)] hover:shadow-[0_8px_36px_rgba(214,183,122,0.5)] active:scale-[0.98]',
    champagne: 'bg-gradient-to-r from-[#D6B77A] to-[#C1A05E] hover:from-[#E2C78E] hover:to-[#CFB06E] text-[#050506] font-bold border border-[#F8EED8]/60 shadow-[0_4px_20px_rgba(214,183,122,0.3)] active:scale-[0.98]',
    secondary: 'bg-[#121622]/90 hover:bg-[#181E2E] text-[#F5F3EE] font-medium border border-white/10 hover:border-white/20 shadow-sm active:scale-[0.98]',
    outline: 'bg-transparent hover:bg-white/[0.04] text-[#E0E2EC] hover:text-white font-medium border border-white/15 hover:border-[#34D399]/50 active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-white/[0.05] text-[#B6BAC4] hover:text-[#F5F3EE] font-medium active:scale-[0.98]'
  };

  return (
    <button
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 cursor-pointer select-none font-display overflow-hidden ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Shine sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shine"
      />
      <span className="relative z-10 flex items-center gap-2">
        {sparkle && <Sparkles className="w-4 h-4 text-[#D6B77A] shrink-0" />}
        <span className="whitespace-nowrap">{children}</span>
        {icon && (
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-rotate-12" />
        )}
      </span>
    </button>
  );
};
