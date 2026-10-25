import React, { useState } from 'react';
import {
  TESTIMONIALS,
  KIT_PLANS,
  KitPlan,
  SimulationInput,
  recommendKitPlan,
} from '../data/productData';
import {
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  Truck,
  X,
  Lock,
  Sparkles,
  Check,
} from 'lucide-react';
import { PremiumKitMockup } from './PremiumKitMockup';

export const TestimonialsAndKits: React.FC = () => {
  const [simInput, setSimInput] = useState<SimulationInput>({
    goal: 'ambos',
    durationLevel: 'intermediario',
  });
  const [selectedQuickBuyKit, setSelectedQuickBuyKit] = useState<KitPlan | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerCep, setCustomerCep] = useState('');
  const [shippingCalculated, setShippingCalculated] = useState<string | null>(null);
  const [cepError, setCepError] = useState<string | null>(null);

  const recommendedKit = recommendKitPlan(simInput);

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCep = customerCep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      setCepError('Digite um CEP válido com 8 dígitos (ex: 01310-100).');
      setShippingCalculated(null);
      return;
    }
    setCepError(null);
    setShippingCalculated(
      `Frete Grátis Expresso confirmado para o CEP ${cleanCep.slice(0, 5)}-${cleanCep.slice(5)} (Entrega em embalagem 100% discreta em 3 a 7 dias úteis).`
    );
  };

  return (
    <>
      {/* Section 5: O Que Nossos Clientes Dizem */}
      <section id="depoimentos" className="bg-white py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              Resultados Comprovados
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              O Que Nossos Clientes Dizem
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
              Relatos reais de homens que transformaram sua confiança e intimidade com Erectus Retard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50/80 p-8 rounded-2xl border border-slate-200/90 flex flex-col justify-between transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-0.5" aria-label={`Avaliação ${t.rating} de 5 estrelas`}>
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5 text-amber-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      Compra Verificada · {t.kitUsed}
                    </span>
                  </div>

                  <blockquote className="text-slate-700 italic mb-6 leading-relaxed text-base">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/70">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}, {t.age} anos</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Cliente Oficial
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Treatment Kit Simulator */}
      <section id="simulador" className="py-16 bg-slate-950 text-white scroll-mt-24 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/50 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="lg:w-7/12 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1.5">
                    Configurador Personalizado de Ciclo
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    Descubra o Kit Ideal para o Seu Objetivo
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base mt-1.5">
                    Selecione seu objetivo principal e a duração desejada para visualizar o protocolo ideal:
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      1. Qual é a sua prioridade principal?
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'controle', label: 'Mais Tempo na Cama' },
                        { id: 'firmeza', label: 'Rigidez Máxima' },
                        { id: 'ambos', label: 'Controle + Rigidez' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() =>
                            setSimInput((prev) => ({ ...prev, goal: opt.id as SimulationInput['goal'] }))
                          }
                          className={`px-3 py-3 text-xs md:text-sm font-bold rounded-xl border transition-all whitespace-nowrap truncate ${
                            simInput.goal === opt.id
                              ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/25'
                              : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-600'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      2. Qual intensidade de transformação você busca?
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'iniciante', label: 'Teste Inicial (60 dias)' },
                        { id: 'intermediario', label: 'Recomendado (90 dias)' },
                        { id: 'intenso', label: 'Definitivo (180 dias)' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() =>
                            setSimInput((prev) => ({
                              ...prev,
                              durationLevel: opt.id as SimulationInput['durationLevel'],
                            }))
                          }
                          className={`px-3 py-3 text-xs md:text-sm font-bold rounded-xl border transition-all whitespace-nowrap truncate ${
                            simInput.durationLevel === opt.id
                              ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/25'
                              : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-600'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation Result Box with Live Mockup */}
              <div className="lg:w-5/12 w-full bg-slate-950/90 border border-blue-500/40 rounded-2xl p-6 text-center space-y-3 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Ciclo Recomendado para Você
                </p>
                <h4 className="text-2xl font-extrabold text-white">{recommendedKit.title}</h4>
                <p className="text-xs text-slate-300">
                  {recommendedKit.subtitle} · {recommendedKit.capsules} Cápsulas
                </p>

                <div className="py-1">
                  <PremiumKitMockup
                    bottles={recommendedKit.bottles}
                    isPopular={recommendedKit.isPopular}
                    title={recommendedKit.title}
                  />
                </div>

                <p className="text-3xl font-extrabold text-white tabular-nums">
                  {recommendedKit.priceFormatted}
                </p>
                <p className="text-xs text-slate-400">
                  {recommendedKit.dailyCostFormatted} · {recommendedKit.savingsFormatted}
                </p>
                <div className="pt-2">
                  <a
                    href="#planos"
                    onClick={() => setSelectedQuickBuyKit(recommendedKit)}
                    className="inline-flex items-center justify-center w-full py-3.5 px-6 text-sm font-extrabold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors shadow-lg"
                  >
                    Selecionar {recommendedKit.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Escolha o seu Kit Preferido! (#planos) - Modern Premium Redesign */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Editorial Transformation Showcase Banner */}
          <div className="max-w-5xl mx-auto mb-16">
            <img
              alt="Banner Erectus Retard Kits"
              className="w-full mx-auto rounded-2xl shadow-xl object-cover border border-slate-200"
              src="/images/kits-banner.jpg"
              referrerPolicy="no-referrer"
            />
          </div>

          <div id="planos" className="text-center mb-12 scroll-mt-20">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-2">
              Tabela Oficial de Tratamentos · Frete Grátis
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Escolha o seu Kit Preferido!
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Kits originais com desconto progressivo e envio imediato em embalagem discreta para todo o Brasil.
            </p>
          </div>

          {/* Free Shipping CEP Checker */}
          <div className="max-w-xl mx-auto mb-14 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm">
            <form onSubmit={handleCalculateShipping} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 shrink-0">
                <Truck className="w-5 h-5 text-blue-600" />
                <span>Simular Entrega Discreta:</span>
              </div>
              <input
                type="text"
                value={customerCep}
                onChange={(e) => setCustomerCep(e.target.value)}
                placeholder="Digite seu CEP (ex: 01310-100)"
                aria-label="Digite seu CEP para simular entrega"
                className="w-full sm:flex-1 px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
              >
                Verificar CEP
              </button>
            </form>
            {cepError && <p className="mt-2 text-xs text-red-600 font-medium">{cepError}</p>}
            {shippingCalculated && (
              <p className="mt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 shrink-0" />
                {shippingCalculated}
              </p>
            )}
          </div>

          {/* 4 Modern Premium Kit Pricing Cards with Studio Bottle Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl mx-auto items-stretch">
            {KIT_PLANS.map((kit) => {
              const isPopular = Boolean(kit.isPopular);
              return (
                <div
                  key={kit.id}
                  className={`relative rounded-3xl p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                    isPopular
                      ? 'bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white border-2 border-blue-500 shadow-[0_25px_50px_-12px_rgba(30,64,175,0.45)] lg:scale-[1.03]'
                      : 'bg-white text-slate-900 border border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.08)] hover:border-blue-300'
                  }`}
                >
                  {/* Top Badge for Best Seller */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Mais Vendido · 53% OFF
                    </div>
                  )}

                  <div>
                    {/* Header: Kit Title & Capsules */}
                    <div className="text-center space-y-1">
                      <p
                        className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                          isPopular ? 'text-blue-300' : 'text-blue-600'
                        }`}
                      >
                        {kit.subtitle}
                      </p>
                      <h3 className="text-2xl font-extrabold tracking-tight whitespace-nowrap">{kit.title}</h3>
                      <p
                        className={`text-sm font-medium whitespace-nowrap ${
                          isPopular ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {kit.capsules} Cápsulas · {kit.dailyCostFormatted}
                      </p>
                    </div>

                    {/* Studio 3D Bottle Mockup Composition */}
                    <PremiumKitMockup
                      bottles={kit.bottles}
                      isPopular={isPopular}
                      title={kit.title}
                    />

                    {/* Pricing Breakdown */}
                    <div className="text-center space-y-1 pt-2 border-t border-current/10">
                      <p
                        className={`text-xs line-through tabular-nums ${
                          isPopular ? 'text-slate-400' : 'text-slate-400'
                        }`}
                      >
                        De R$ {kit.originalPrice.toFixed(2).replace('.', ',')}
                      </p>

                      <p className="text-4xl font-extrabold tracking-tight tabular-nums">
                        {kit.priceFormatted}
                      </p>

                      <p
                        className={`text-xs font-semibold tabular-nums ${
                          isPopular ? 'text-blue-200' : 'text-slate-600'
                        }`}
                      >
                        ou {kit.installmentValueFormatted} no cartão
                      </p>
                    </div>

                    {/* Feature & Savings List */}
                    <div className="mt-4 mb-5 space-y-2 text-left text-xs">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <Check
                          className={`w-4 h-4 shrink-0 ${
                            isPopular ? 'text-emerald-400' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          <strong>{kit.savingsFormatted}</strong> ({kit.savingsPercent}% OFF)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <Check
                          className={`w-4 h-4 shrink-0 ${
                            isPopular ? 'text-emerald-400' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          Frete Grátis Expresso + Sigilo
                        </span>
                      </div>
                      <div className="h-5 flex items-center justify-center">
                        {kit.stockMessage && (
                          <p
                            className={`text-xs font-bold whitespace-nowrap ${
                              isPopular ? 'text-amber-300' : 'text-red-600'
                            }`}
                          >
                            {kit.stockMessage}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Primary & Secondary CTAs */}
                  <div className="w-full mt-auto space-y-2.5">
                    <a
                      href={kit.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 inline-flex items-center justify-center gap-2 font-extrabold text-base rounded-2xl transition-all shadow-lg whitespace-nowrap ${
                        isPopular
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white shadow-blue-600/30'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      <span>Comprar Agora</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedQuickBuyKit(kit)}
                      className={`w-full py-2.5 text-xs font-bold rounded-xl border transition-colors whitespace-nowrap ${
                        isPopular
                          ? 'border-white/20 text-slate-200 hover:bg-white/10'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      Ver Resumo do Pedido
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Bar under Kits */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-slate-600 font-medium">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Pagamento Processado pela Braip
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              Aprovação Imediata via PIX ou Cartão
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-600" />
              Despacho em até 24h Úteis
            </span>
          </div>
        </div>
      </section>

      {/* Quick Order Summary Modal when clicking "Ver Resumo do Pedido" */}
      {selectedQuickBuyKit && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-kit-title"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative text-slate-900 border border-slate-100">
            <button
              type="button"
              onClick={() => setSelectedQuickBuyKit(null)}
              aria-label="Fechar resumo do pedido"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
              <h3 id="modal-kit-title" className="text-xl font-extrabold">
                Resumo do Kit Selecionado
              </h3>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-5">
              <PremiumKitMockup
                bottles={selectedQuickBuyKit.bottles}
                variant="compact"
                title={selectedQuickBuyKit.title}
              />
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase">
                  {selectedQuickBuyKit.subtitle}
                </p>
                <h4 className="font-extrabold text-slate-900 text-lg">{selectedQuickBuyKit.title}</h4>
                <p className="text-xs text-slate-600">{selectedQuickBuyKit.capsules} Cápsulas Originais</p>
                <p className="text-2xl font-extrabold text-blue-700 tabular-nums mt-1">
                  {selectedQuickBuyKit.priceFormatted}
                </p>
                <p className="text-xs text-emerald-700 font-semibold">
                  Frete Grátis Incluso · {selectedQuickBuyKit.savingsFormatted}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <label className="block text-xs font-bold text-slate-700">
                Seu Nome (opcional para atendimento via WhatsApp):
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
              <div className="text-xs text-slate-500 space-y-1">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  Checkout Oficial Braip 100% Seguro (PIX, Cartão em até 12x ou Boleto)
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={selectedQuickBuyKit.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <span>Ir para o Checkout Oficial Braip</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/557198382-1218?text=${encodeURIComponent(
                  `Olá${customerName ? `, meu nome é ${customerName}` : ''}! Quero finalizar o pedido do ${selectedQuickBuyKit.title} (${selectedQuickBuyKit.priceFormatted}) do Erectus Retard.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
              >
                <span>Comprar pelo WhatsApp com Atendente</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
