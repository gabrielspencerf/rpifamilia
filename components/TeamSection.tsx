import React from 'react';

const partners = [
  {
    name: "Dra. Jessica Roland",
    role: "Sócia Fundadora",
    specialty: "Direito de Família, mediação de conflitos e orientação jurídica familiar",
    oab: "OAB/RS 109.437",
    image: "/assets/images/jessica.webp",
    bio: "Atuação voltada à orientação jurídica humanizada, com foco em soluções seguras para conflitos familiares, proteção de direitos e condução responsável de casos sensíveis."
  },
  {
    name: "Dr. Alessandro Pessalli",
    role: "Sócio Fundador",
    specialty: "Direito de Família, estratégia processual e demandas patrimoniais",
    oab: "OAB/RS 122.632",
    image: "/assets/images/alessandro.webp",
    bio: "Atuação estratégica na análise de casos familiares, com atenção à segurança jurídica, organização documental e proteção dos interesses do cliente."
  },
  {
    name: "Dra. Adriana Isidoro",
    role: "Sócia Fundadora",
    specialty: "Direito de Família, guarda, alimentos e proteção de direitos",
    oab: "OAB/RS 100.249",
    image: "/assets/images/adriana.webp",
    bio: "Atuação focada na garantia de direitos, orientação clara e condução de demandas familiares com responsabilidade, sensibilidade e firmeza técnica."
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-14 md:py-20 bg-navy-900 text-white border-t border-navy-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-14 items-center">
          <div>
            <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-4 block">Nossa Liderança</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Orientação técnica <br /> para decisões <span className="text-gold-500">familiares</span> importantes
            </h2>
          </div>
          <div className="lg:border-l lg:border-navy-700 lg:pl-8">
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed">
              Nossa atuação é conduzida por advogados com visão estratégica, comunicação clara e compromisso com a proteção dos direitos dos clientes em momentos sensíveis da vida familiar.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="group relative bg-navy-950 rounded-lg overflow-hidden transition-all duration-500 shadow-xl border border-navy-800 hover:border-gold-500/50 hover:shadow-glow">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 p-5 md:p-7 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-gold-500 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-2">{partner.role}</p>
                  <h4 className="text-xl md:text-2xl font-bold mb-1 text-white">{partner.name}</h4>
                  <p className="text-gray-300 text-sm font-medium mb-1">{partner.specialty}</p>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">{partner.oab}</p>

                  {partner.bio && (
                    <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed border-t border-navy-800/50 pt-3 mt-2">
                        {partner.bio}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;