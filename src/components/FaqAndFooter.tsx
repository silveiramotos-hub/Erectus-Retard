import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_CONTACTS } from '../data/productData';
import { ChevronDown, Mail, MessageCircle, ShieldCheck, Award } from 'lucide-react';

export const FaqAndFooter: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      {/* Section 7: Perguntas Frequentes */}
      <section id="faq" className="bg-gray-50 py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Perguntas Frequentes
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Tire suas dúvidas e compre com total confiança.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 px-6 md:px-8 py-2 shadow-sm">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className={`${idx !== FAQ_ITEMS.length - 1 ? 'border-b border-gray-200' : ''} py-5`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center text-left text-lg font-bold text-gray-900 focus:outline-none hover:text-blue-700 transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`transform transition-transform duration-200 shrink-0 text-blue-600 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-4 text-gray-600 leading-relaxed text-base">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8: Produto Exclusivo da Loja do Cabo Ltda. */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Produto Exclusivo da Loja do Cabo Ltda.
          </h2>
          <div className="max-w-4xl text-lg text-gray-300 space-y-6 leading-relaxed">
            <p>
              Orgulhosamente, o Erectus Retard é um produto exclusivo da Loja do Cabo Ltda., uma empresa de suplementação natural e de alta qualidade que há décadas se dedica a oferecer soluções eficazes para o bem-estar dos homens. Nosso compromisso é fornecer apenas produtos confiáveis, seguros e com comprovada eficácia.
            </p>
            <p>
              Ao escolher o Erectus Retard, você tem a tranquilidade de adquirir um suplemento desenvolvido com o cuidado e a expertise da nossa equipe, além de contar com nosso suporte dedicado para garantir a melhor experiência possível.
            </p>
          </div>
          <a
            href="#planos"
            className="inline-flex items-center justify-center mt-4 px-8 py-3.5 text-lg font-bold text-white bg-blue-600 rounded-full transition-all hover:bg-blue-500 hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Ver Planos
          </a>
        </div>
      </section>

      {/* Section 9: 4 Security & Payment Seal Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center h-full">
              <img
                alt="Compra Segura"
                className="max-h-20 w-auto object-contain"
                src="/images/badge-seguranca.png"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center h-full">
              <img
                alt="Métodos de Pagamento"
                className="max-h-20 w-auto object-contain"
                src="/images/badge-pagamento.png"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center h-full">
              <img
                alt="Envio Correios"
                className="max-h-20 w-auto object-contain"
                src="/images/badge-correios.png"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-blue-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center h-full">
              <img
                alt="Site Seguro"
                className="max-h-20 w-auto object-contain"
                src="/images/badge-site-seguro.png"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Garantia de Satisfação & Site 100% Blindado */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center p-8 border border-gray-200 rounded-xl bg-gray-50/40">
              <Award className="w-12 h-12 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 mt-4">Garantia de Satisfação</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Confiamos tanto em nossa fórmula que garantimos sua satisfação. Se não ficar contente com os resultados, entre em contato conosco.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 border border-gray-200 rounded-xl bg-gray-50/40">
              <ShieldCheck className="w-12 h-12 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 mt-4">Site 100% Blindado</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Seus dados são protegidos com criptografia de ponta a ponta. Compre com total segurança e discrição.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold mb-4">Erectus Retard</h3>
              <p className="text-gray-400 leading-relaxed">
                Transformando sua vida íntima com segurança e confiança.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contato e Suporte</h3>
              <ul className="space-y-3">
                {WHATSAPP_CONTACTS.map((contact) => (
                  <li key={contact.phone}>
                    <a
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      <MessageCircle className="h-5 w-5 mr-2 shrink-0" />
                      {contact.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:suporte@lojadocabo.com"
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2 shrink-0" />
                    suporte@lojadocabo.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Loja do Cabo Ltda.</h3>
              <p className="text-gray-400 leading-relaxed">
                Produtos exclusivos, desenvolvidos com os mais altos padrões de qualidade para o seu bem-estar.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm space-y-2">
            <p>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="underline hover:text-white transition-colors"
              >
                Política de Privacidade
              </button>{' '}
              - Erectus Retard - Todos os Direitos Reservados
            </p>
            <p>Loja do Cabo Ltda.</p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          <div className="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl space-y-4">
            <h3 id="privacy-modal-title" className="text-xl font-extrabold">
              Política de Privacidade e Sigilo — Loja do Cabo Ltda.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A Loja do Cabo Ltda. garante total sigilo sobre os seus dados pessoais e financeiros. Todas as transações de pagamento são processadas sob criptografia SSL de 256 bits através da plataforma certificada Braip.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sua encomenda é despachada em embalagem parda discreta, sem menção ao nome do produto na parte externa, assegurando sua total privacidade desde o envio até a entrega.
            </p>
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
