import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  variant?: 'solid' | 'outline';
}

const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  onClick,
  className = '',
  fullWidth = false,
  variant = 'solid',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (window.openTypebot) {
      window.openTypebot();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        relative overflow-hidden group py-4 px-8 rounded-lg font-bold tracking-widest uppercase text-xs md:text-sm transition-all duration-300 transform flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-gold-500/50 active:scale-[0.98]
        ${
          variant === 'solid'
            ? 'bg-gold-500 hover:bg-gold-400 text-navy-950 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/50 hover:-translate-y-0.5 border border-transparent animate-pulse-glow'
            : 'border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950 bg-transparent hover:shadow-lg hover:shadow-gold-500/20'
        }
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
      aria-label={typeof children === 'string' ? children : 'Ação do botão'}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </button>
  );
};

export default GoldButton;
