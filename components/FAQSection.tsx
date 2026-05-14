import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo demora um divórcio?",
      answer: "Depende se existe acordo entre as partes. Quando há consenso e a documentação está organizada, o processo costuma ser mais rápido. Em casos com conflito, filhos menores, partilha de bens ou divergências, o prazo pode variar conforme a complexidade do caso."
    },
    {
      question: "Posso me divorciar mesmo se a outra pessoa não concordar?",
      answer: "Sim. O divórcio é um direito e não depende da concordância da outra parte para acontecer. Quando não há acordo, o caso pode seguir pela via judicial, com orientação jurídica para proteger seus direitos."
    },
    {
      question: "Preciso estar junto do meu ex para resolver a separação?",
      answer: "Não necessariamente. Em muitos casos, a comunicação pode ser feita por meio dos advogados, especialmente quando há conflito, desgaste emocional ou dificuldade de diálogo entre as partes."
    },
    {
      question: "Como funciona a guarda dos filhos?",
      answer: "A guarda é definida considerando o melhor interesse da criança ou adolescente. O caso pode envolver guarda compartilhada, convivência, responsabilidades dos pais e definição de rotina familiar."
    },
    {
      question: "A pensão alimentícia pode ser revisada?",
      answer: "Sim. A pensão pode ser revista quando há mudança na necessidade de quem recebe ou na condição financeira de quem paga. Cada caso precisa ser analisado com base em documentos e contexto atual."
    },
    {
      question: "A separação pode ser resolvida online?",
      answer: "Sim, parte do atendimento e da organização documental pode ser feita online. A possibilidade de concluir todo o procedimento dessa forma depende do tipo de caso, existência de acordo e exigências legais aplicáveis."
    },
    {
      question: "Quanto custa um processo de família?",
      answer: "O valor depende da complexidade do caso, da existência de acordo, da quantidade de temas envolvidos e das medidas necessárias. Após a análise inicial, os honorários são apresentados de forma clara e formalizados por contrato."
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-white text-navy-950 border-t border-gray-100" aria-labelledby="faq-title">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-gold-700 font-bold tracking-widest uppercase text-xs mb-3 block">Suporte</span>
          <h2 id="faq-title" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 transition-all duration-300 hover:border-gold-500/50 hover:bg-white hover:shadow-md">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-4 focus:ring-gold-500/30 focus:ring-inset transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-btn-${index}`}
              >
                <span className={`font-bold text-sm md:text-base pr-4 ${openIndex === index ? 'text-gold-800' : 'text-navy-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gold-700 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                )}
              </button>

              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-200 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;