import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowPrivacy(false);
        setShowTerms(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const Modal = ({ title, content, onClose }: { title: string, content: React.ReactNode, onClose: () => void }) => (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white text-navy-900 rounded-xl w-full max-w-2xl max-h-[80vh] flex flex-col relative shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 id="modal-title" className="text-xl font-bold text-gold-700">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label="Fechar janela"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto modal-scroll text-sm text-gray-700 leading-relaxed space-y-4" tabIndex={0}>
          {content}
        </div>
        <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-navy-900 text-white text-sm font-semibold rounded hover:bg-navy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-900"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-navy-950 text-gray-300 py-12 md:py-14 border-t border-navy-900">
        <div className="container mx-auto px-6 flex flex-col items-center gap-7 md:gap-9">

          {/* Logo */}
          <div className="text-center group select-none">
            <img
              src="/assets/images/rpi-adv-logo.webp"
              alt="Roland, Pessalli & Isidoro"
              className="h-12 md:h-16 mx-auto transition-all duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>

          {/* Links Legais - Large touch targets */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs uppercase tracking-wide font-medium">
            <button
              onClick={() => setShowPrivacy(true)}
              className="py-3 px-2 hover:text-gold-400 transition-colors focus:outline-none focus:text-gold-400 focus:underline"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="py-3 px-2 hover:text-gold-400 transition-colors focus:outline-none focus:text-gold-400 focus:underline"
            >
              Termos de Uso
            </button>
          </div>

          {/* Endereço */}
          <div className="text-center text-xs text-gray-400 space-y-1">
            <p className="font-semibold text-gray-300">Endereço:</p>
            <p>R. Jorge Amado, 844 - Santa Cruz, Gravataí - RS, 94155-030</p>
          </div>

          {/* Copyright & Selo */}
          <div className="text-center space-y-4 md:space-y-6">
            <p className="text-[10px] text-gray-400 max-w-xs mx-auto md:max-w-none">
              &copy; {new Date().getFullYear()} Roland, Pessalli & Isidoro. Todos os direitos reservados.
            </p>

            <div className="inline-flex items-center gap-2 bg-navy-900 px-4 py-1.5 rounded-full border border-navy-800 hover:border-gold-500/30 transition-colors">
              <span className="text-[10px] text-gray-400">Assessoria Digital:</span>
              <a
                href="https://creativelane.io"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold text-white hover:text-gold-500 transition-colors focus:outline-none focus:underline"
                aria-label="Creative Lane Assessoria Digital (abre em nova aba)"
              >
                CREATIVE LANE
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacy && (
        <Modal
          title="Política de Privacidade e LGPD"
          onClose={() => setShowPrivacy(false)}
          content={
            <>
              <p><strong>1. Introdução</strong><br />Esta Política de Privacidade descreve como o escritório Roland, Pessalli & Isidoro coleta, usa e protege suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados — LGPD, Lei nº 13.709/2018.</p>
              <p><strong>2. Coleta de Dados</strong><br />Coletamos apenas dados essenciais fornecidos voluntariamente através de nossos canais de atendimento, como Typebot, WhatsApp, formulário, telefone ou e-mail, para fins de contato profissional, análise preliminar e agendamento de atendimento jurídico.</p>
              <p><strong>3. Uso das Informações</strong><br />As informações são utilizadas estritamente para contato, análise inicial da demanda, organização do atendimento e prestação de orientação jurídica. Todas as informações compartilhadas são tratadas com sigilo profissional.</p>
              <p><strong>4. Compartilhamento</strong><br />Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. Seus dados poderão ser utilizados apenas quando necessário para a prestação dos serviços jurídicos, cumprimento de obrigação legal ou defesa dos seus interesses.</p>
              <p><strong>5. Seus Direitos</strong><br />Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento através de nossos canais de contato oficiais.</p>
            </>
          }
        />
      )}

      {showTerms && (
        <Modal
          title="Termos de Uso"
          onClose={() => setShowTerms(false)}
          content={
            <>
              <p><strong>1. Aceitação</strong><br />Ao acessar este site, você concorda com estes Termos de Uso. O conteúdo disponibilizado possui caráter meramente informativo e não substitui consulta jurídica formal.</p>
              <p><strong>2. Propriedade Intelectual</strong><br />Todo o conteúdo deste site, incluindo textos, design, logotipos e elementos visuais, é propriedade de Roland, Pessalli & Isidoro. É proibida a reprodução sem autorização prévia.</p>
              <p><strong>3. Limitação de Responsabilidade</strong><br />O escritório não se responsabiliza por decisões tomadas com base apenas nas informações gerais deste site. Cada caso jurídico possui particularidades e precisa de análise individual.</p>
              <p><strong>4. Alterações</strong><br />Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio.</p>
            </>
          }
        />
      )}
    </>
  );
};

export default Footer;