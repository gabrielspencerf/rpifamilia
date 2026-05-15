import React, { useCallback, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const VISIBLE_DESKTOP = 3;

const REVIEWS = [
  {
    name: "Karolyna Konzen",
    time: "Avaliação no Google",
    text: "Ambiente de trabalho excelente, ótimo atendimento, extremamente profissional, com um grau de conhecimento alto. Atendimento personalizado e disponível sempre que preciso. Recomendo muito.",
    initial: "K"
  },
  {
    name: "Priscilla Lima",
    time: "Avaliação no Google",
    text: "Atendimento diferenciado. Equipe extremamente comprometida e responsável. Trabalho de qualidade. Recomendo com prazer.",
    initial: "P"
  },
  {
    name: "Elias Paulino da Silva",
    time: "Local Guide",
    text: "Atendimento super profissional e humanizado. Recomendo.",
    initial: "E"
  },
  {
    name: "Daniel Rochadel",
    time: "Local Guide",
    text: "Investimento que vale cada centavo. Excelentes profissionais.",
    initial: "D"
  }
] as const;

const ReviewsSection: React.FC = () => {
  const total = REVIEWS.length;
  const [startIndex, setStartIndex] = useState(0);

  const visibleDesktop = useMemo(
    () => Array.from({ length: VISIBLE_DESKTOP }, (_, i) => REVIEWS[(startIndex + i) % total]),
    [startIndex, total]
  );

  const goPrev = useCallback(() => {
    setStartIndex((s) => (s - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setStartIndex((s) => (s + 1) % total);
  }, [total]);

  const renderCard = (review: (typeof REVIEWS)[number], key: React.Key) => (
    <div
      key={key}
      className="bg-white text-navy-950 p-5 md:p-7 rounded-lg shadow-xl relative transform transition-transform hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="absolute top-6 right-6 text-gray-200" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="w-6 h-6 opacity-20" fill="currentColor">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.147 7.96-3.24 2.053-2.053 2.627-5.333 2.627-8.24 0-.827-.08-1.48-.253-1.6h-10.334z" />
        </svg>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-navy-900 text-gold-500 rounded-full flex items-center justify-center font-bold text-lg border-2 border-gold-500/20 shrink-0">
          {review.initial}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-base text-navy-900">{review.name}</h4>
          <span className="text-xs text-gray-600 font-medium uppercase">{review.time}</span>
        </div>
      </div>
      <div className="flex text-gold-500 mb-4 gap-0.5" aria-label="5 de 5 estrelas">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <p className="text-sm text-gray-700 italic leading-relaxed flex-1">&quot;{review.text}&quot;</p>
    </div>
  );

  return (
    <section className="py-14 md:py-20 bg-navy-950 text-white border-t border-navy-900" aria-label="Depoimentos de Clientes">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/5 rounded-full border border-white/10 shadow-glow animate-fade-in">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.147 7.96-3.24 2.053-2.053 2.627-5.333 2.627-8.24 0-.827-.08-1.48-.253-1.6h-10.334z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">O que dizem nossos clientes</h2>
          <div className="flex justify-center items-center gap-2 mt-4 text-gold-500" aria-label="Avaliação geral 5.0 de 5 estrelas">
            <span className="text-3xl font-bold text-white">5.0</span>
            <div className="flex gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="currentColor" className="text-gold-500" />
              ))}
            </div>
            <span className="text-sm text-gray-300 ml-2">baseado em 98 avaliações</span>
          </div>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos em carrossel"
        >
          <div className="md:hidden mb-6" aria-live="polite">
            {renderCard(REVIEWS[startIndex], `mobile-${startIndex}`)}
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mb-6" aria-live="polite">
            {visibleDesktop.map((review, i) =>
              renderCard(review, `${startIndex}-${(startIndex + i) % total}`)
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-gold-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="flex gap-2" aria-label="Posição no carrossel">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStartIndex(i)}
                  className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 ${
                    i === startIndex ? "w-8 bg-gold-500" : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1} de ${total}`}
                  aria-current={i === startIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-gold-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
