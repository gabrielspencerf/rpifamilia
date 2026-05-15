import React from 'react';
import { Clock, ShieldAlert, Scale, MapPin } from 'lucide-react';

const UrgencySection: React.FC = () => {
   return (
      <section className="py-14 md:py-20 bg-white text-navy-950" aria-label="Nossos Diferenciais">
         <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-14">
               <div>
                  <span className="text-gold-700 font-bold tracking-widest uppercase text-xs mb-3 md:mb-4 block">Direito de Família</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-navy-950 mb-1">
                     Você não precisa enfrentar <br /> esse momento sem <span className="text-gold-700">apoio jurídico.</span>
                  </h2>
               </div>
               <div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-light">
                     Questões familiares envolvem decisões sensíveis, patrimônio, filhos, rotina e futuro. Nossa atuação combina técnica jurídica, escuta responsável e estratégia para orientar você com segurança em cada decisão.
                  </p>
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-xs md:text-sm uppercase tracking-wide bg-gray-50 p-3 rounded-lg border border-gray-200 w-fit">
                     <MapPin className="text-gold-600 w-4 h-4 flex-shrink-0" aria-hidden="true" />
                     Porto Alegre e Região Metropolitana
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
               {/* Card 1 */}
               <div className="p-6 md:p-7 border border-gray-200 bg-gray-50 rounded-xl hover:bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center rounded-lg mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-lg shadow-navy-900/10">
                     <Clock size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-navy-950">Clareza Jurídica</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                     Explicamos seus direitos, riscos e caminhos possíveis de forma objetiva, para que você tome decisões com segurança e sem confusão jurídica.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="p-6 md:p-8 border border-gray-200 bg-gray-50 rounded-xl hover:bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center rounded-lg mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-lg shadow-navy-900/10">
                     <ShieldAlert size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-navy-950">Atuação Estratégica</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                     Cada caso é analisado conforme o contexto familiar, patrimonial e emocional, buscando a solução mais adequada, seja por acordo ou via judicial.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="p-6 md:p-8 border border-gray-200 bg-gray-50 rounded-xl hover:bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center rounded-lg mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-lg shadow-navy-900/10">
                     <Scale size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-navy-950">Atendimento Humano</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                     Entendemos que conflitos familiares exigem cuidado. Atuamos com sigilo, respeito e comunicação transparente durante todo o processo.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default UrgencySection;