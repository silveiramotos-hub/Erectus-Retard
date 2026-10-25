import React, { useState } from 'react';
import { BENEFITS, INGREDIENTS, Ingredient } from '../data/productData';
import { CheckCircle2, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { PremiumKitMockup } from './PremiumKitMockup';

export const BenefitsAndFormula: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | Ingredient['category']>('todos');
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null);

  const filteredIngredients =
    selectedCategory === 'todos'
      ? INGREDIENTS
      : INGREDIENTS.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Section 1: Diga Adeus à Ejaculação Precoce */}
      <section id="beneficios" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-2">
              Desempenho & Controle Absoluto
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Diga Adeus à Ejaculação Precoce
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
              O Erectus Retard é um suplemento inovador que combina ingredientes naturais para ajudar homens a ter mais controle, confiança e prazer prolongado. Transforme sua vida íntima de forma segura e discreta.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            {/* Left Column: Premium Dark Studio Showcase Card with Uploaded Bottle Mockup */}
            <div className="lg:w-1/2 w-full flex">
              <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 md:p-10 shadow-2xl border border-slate-800 text-white flex flex-col justify-between">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
                <div className="relative z-10 text-center space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    Tecnologia de Absorção Rápida
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    Potência Máxima na Hora &ldquo;H&rdquo;
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Fórmula avançada em cápsulas de liberação otimizada para vigor imediato e controle prolongado.
                  </p>
                </div>

                <div className="my-auto py-4">
                  <PremiumKitMockup bottles={3} isPopular={true} title="Erectus Retard" />
                </div>

                <div className="relative z-10 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-xl font-extrabold text-blue-400 tabular-nums">100%</p>
                    <p className="text-xs text-slate-300">Ativos Naturais</p>
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-blue-400 tabular-nums">30 Cáp.</p>
                    <p className="text-xs text-slate-300">Por Frasco</p>
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-blue-400 tabular-nums">Sigilo</p>
                    <p className="text-xs text-slate-300">Envio Discreto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Benefits List */}
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Seja dono do seu tempo na cama.
              </h3>
              <p className="text-slate-600 text-lg">
                Com Erectus Retard, você ganha um aliado eficaz para:
              </p>

              <ul className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <li
                    key={benefit.id}
                    className="flex items-start p-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-2xl">
                      {benefit.icon}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-2 text-xs text-blue-700 font-bold mb-0.5">
                        <span>{benefit.metric}</span>
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-900">{benefit.title}</h4>
                      <p className="text-slate-600 mt-1 text-sm md:text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <a
                  href="#planos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-extrabold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Garantir Meu Erectus Retard</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Video Promocional */}
      <section id="video" className="py-24 bg-slate-950 text-white scroll-mt-24 border-y border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-2">
            Apresentação Oficial
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Veja como Erectus Retard Pode Mudar o Jogo
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300 mb-12">
            Assista ao nosso vídeo e descubra a confiança e o controle que você pode alcançar.
          </p>

          <div
            className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(37,99,235,0.35)] border border-slate-800 bg-black"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/NmMrdeKk16A"
              title="Vídeo Promocional Erectus Retard"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Desenvolvido para vigor e controle masculino
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Sem necessidade de receita médica
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Fórmula segura de uso diário
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: Uma Fórmula Poderosa e Natural */}
      <section id="formula" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="lg:w-5/12">
              <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-2">
                Composição Sinérgica · 7 Ativos
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Uma Fórmula Poderosa e Natural
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Cada ingrediente do Erectus Retard foi cuidadosamente selecionado para oferecer o máximo de eficácia e segurança, atuando em sinergia para melhorar seu desempenho.
              </p>

              {/* High-End Bottle Formula Card */}
              <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-blue-950 p-6 text-white shadow-xl border border-slate-800 mb-6">
                <PremiumKitMockup bottles={1} isPopular={true} title="Fórmula Erectus Retard" />
                <div className="text-center pt-2 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Fórmula Avançada Concentrada
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Tadalafila · Long Jack · Saw Palmetto · Marapuama · Valeriana · Damiana · Ginseng
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 text-sm text-slate-700 space-y-2 shadow-sm">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Sinergia Tripla Ação
                </p>
                <p className="text-slate-600">
                  Clique em qualquer ativo ao lado para inspecionar seu mecanismo de ação fisiológico detalhado no organismo.
                </p>
              </div>
            </div>

            <div className="lg:w-7/12 w-full">
              {/* Interactive Category Filter Tabs */}
              <div
                className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-2xl mb-6"
                role="tablist"
                aria-label="Filtrar ingredientes por atuação"
              >
                {[
                  { id: 'todos', label: 'Todos (7)' },
                  { id: 'circulacao', label: 'Circulação & Rigidez' },
                  { id: 'controle', label: 'Controle & Foco' },
                  { id: 'libido', label: 'Libido & Prazer' },
                  { id: 'energia', label: 'Energia Física' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === tab.id}
                    onClick={() => setSelectedCategory(tab.id as typeof selectedCategory)}
                    className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 ${
                      selectedCategory === tab.id
                        ? 'bg-white text-blue-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredIngredients.map((ingredient) => {
                  const isSelected = activeIngredient?.id === ingredient.id;
                  return (
                    <div
                      key={ingredient.id}
                      onClick={() => setActiveIngredient(isSelected ? null : ingredient)}
                      className={`bg-white p-6 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 ring-2 ring-blue-600/15 shadow-md'
                          : 'border-slate-200/90 hover:border-blue-300 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1.5">
                        <span>{ingredient.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-blue-700 font-semibold">{ingredient.dosage}</span>
                      </div>
                      <h4 className="font-extrabold text-lg text-blue-700">{ingredient.name}</h4>
                      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{ingredient.description}</p>
                      {isSelected && (
                        <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-700 bg-blue-50/60 p-3.5 rounded-xl">
                          <strong className="block text-blue-900 mb-1">Mecanismo de Ação:</strong>
                          {ingredient.mechanism}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Couple Lifestyle Banner */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              alt="Casal feliz e confiante"
              className="w-full h-auto object-cover"
              src="/images/couple-banner.jpg"
              style={{ maxHeight: '480px' }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-6 md:p-10">
              <div className="text-white max-w-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-1">
                  Intimidade Plena & Confiança
                </p>
                <p className="text-xl md:text-2xl font-extrabold">
                  Surpreenda quem você ama com noites mais intensas e duradouras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
