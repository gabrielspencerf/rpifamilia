import React from 'react';
import GoldButton from './GoldButton';
import { Shield, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-950 text-white overflow-hidden pt-24 pb-10 md:pt-32 md:pb-14">

      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/images/fachada.webp"
          alt="Escritório Roland, Pessalli & Isidoro"
          className="w-full h-full object-cover"
          style={{ objectPosition: '85% center' }}
        />

        {/* Strong gradient overlay - dark left to transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 from-0% via-navy-950 via-40% via-navy-950/95 via-50% to-transparent to-75%"></div>

        {/* Additional vertical gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/80"></div>

        {/* Overall darkening layer */}
        <div className="absolute inset-0 bg-navy-950/30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-5 md:mb-7 tracking-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Orientação jurídica segura <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 animate-shimmer-hero">
              para momentos delicados da família.
            </span>
          </h1>

          {/* Subheadline */}
          <div className="flex flex-col gap-5 items-start mb-7 md:mb-10 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-600 animate-expand"></div>
            <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
              Atuação humanizada, sigilosa e estratégica em <strong className="text-white font-medium">Direito de Família em Porto Alegre e Região Metropolitana</strong>. Ajudamos você em questões como divórcio, guarda, pensão, convivência, união estável e partilha de bens, conduzindo cada etapa com clareza, segurança e o menor desgaste possível.
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-start w-full sm:w-auto mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <GoldButton className="w-full sm:w-auto">
              Agendar Atendimento
            </GoldButton>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-lg overflow-hidden transition-all duration-300 border border-white/10 hover:border-gold-500/50 bg-white/5 hover:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-navy-950 hover:-translate-y-0.5"
            >
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-300 group-hover:text-gold-400 transition-colors">
                Conhecer Atuação
              </span>
              <ArrowRight className="w-4 h-4 text-gold-500/70 group-hover:text-gold-400 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>

          {/* Footer of Hero */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold border-t border-navy-800/50 pt-5 md:pt-6 w-full md:w-fit">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-gold-600" />
              <span>Atendimento Sigiloso</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div>Orientação Humanizada</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;