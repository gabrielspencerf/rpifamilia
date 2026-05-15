import React from 'react';

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 md:py-8 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-start">
          <button
            type="button"
            onClick={scrollToTop}
            className="text-left group animate-fade-in-down focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-sm"
            aria-label="Voltar ao início da página"
          >
            <img
              src="/assets/images/rpi-adv-logo.webp"
              alt="Roland, Pessalli & Isidoro"
              className="h-10 md:h-14 transition-all duration-300 group-hover:scale-105"
            />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent animate-shimmer-slow" />
      </div>
    </header>
  );
};

export default Header;
