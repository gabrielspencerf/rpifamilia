import React from 'react';
import { Gavel, Lock, Users, FileSearch, ShieldCheck, Scale, FileText, Siren, ArrowUpRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const areas = [
    { title: "Divórcio Consensual", desc: "Quando há acordo entre as partes, orientamos a formalização do divórcio com segurança jurídica, organização documental e menor desgaste possível.", icon: <Users /> },
    { title: "Divórcio Litigioso", desc: "Quando não existe consenso, atuamos de forma estratégica para defender seus direitos patrimoniais e familiares com firmeza, ética e técnica.", icon: <Lock /> },
    { title: "Dissolução de União Estável", desc: "Regularização do encerramento da união estável, com análise de bens, direitos, responsabilidades e regime aplicável ao caso.", icon: <ShieldCheck /> },
    { title: "Guarda e Convivência", desc: "Orientação sobre guarda dos filhos, convivência familiar e definição de rotinas que respeitem os direitos da criança e dos responsáveis.", icon: <FileSearch /> },
    { title: "Pensão Alimentícia", desc: "Atuação em pedido, revisão, exoneração ou execução de alimentos, buscando equilíbrio entre necessidade, possibilidade e segurança jurídica.", icon: <Scale /> },
    { title: "Partilha de Bens", desc: "Análise do patrimônio do casal para divisão adequada conforme o regime de bens, documentação existente e particularidades da relação.", icon: <Gavel /> },
    { title: "Regulamentação de Visitas", desc: "Organização jurídica da convivência entre pais, filhos e familiares, evitando conflitos recorrentes e trazendo previsibilidade à rotina.", icon: <FileText /> },
    { title: "Acordos Familiares", desc: "Elaboração e formalização de acordos para resolver conflitos com mais agilidade, segurança e menor exposição emocional.", icon: <Siren /> },
  ];

  return (
    <section id="services" className="py-14 md:py-20 bg-white text-navy-950" aria-label="Áreas de Atuação">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold-700 font-bold tracking-widest uppercase text-xs mb-3 block">Como podemos ajudar</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Atuação em Direito de Família
            </h2>
            <div className="w-20 h-1 bg-gold-500 mt-5"></div>
          </div>
          <p className="text-gray-700 font-light text-base md:text-lg max-w-md text-left">
            Cuidamos da orientação jurídica, documentação e condução do seu caso com clareza, segurança e estratégia para reduzir conflitos e proteger seus direitos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-7 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-navy-900/5 hover:-translate-y-2 hover:border-gold-500/30 overflow-hidden"
              tabIndex={0}
              role="article"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                <ArrowUpRight className="text-gold-500 w-5 h-5" />
              </div>

              <div className="w-12 h-12 md:w-14 md:h-14 bg-navy-50 text-navy-900 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-navy-950 group-hover:text-gold-500 transition-colors duration-300">
                {React.cloneElement(area.icon as React.ReactElement, { size: 24, strokeWidth: 1.5, "aria-hidden": "true" })}
              </div>

              <h3 className="text-lg font-bold text-navy-950 mb-3 group-hover:text-gold-700 transition-colors">
                {area.title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900">
                {area.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;