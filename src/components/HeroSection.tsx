import React from 'react';
import { ShieldCheck, Truck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { HERO_CHECKLIST } from '../data/productData';
import { PremiumKitMockup } from './PremiumKitMockup';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative text-white bg-cover bg-center overflow-hidden border-b border-slate-800"
      style={{
        backgroundImage: 'url("/images/hero-bg.webp")',
      }}
    >
      {/* Multi-layered luxury dark scrim for deep contrast & legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(37,99,235,0.22),transparent_60%)] pointer-events-none" />

      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-28 z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 text-center lg:text-left">
          {/* Left Column: Brand Lockup, Headline, Value Prop & Primary CTA */}
          <div className="lg:w-7/12 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <img
                alt="Erectus Retard Logo"
                className="w-40 md:w-48 object-contain"
                src="/images/logo.webp"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-300/90">
                Fórmula Avançada · Uso Diário
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white"
              style={{ textWrap: 'balance' }}
            >
              Retome o Controle.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Redescubra o Prazer.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A fórmula natural de alta concentração desenvolvida para prolongar seus momentos de intimidade com firmeza absoluta, resistência e confiança.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#planos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base md:text-lg font-extrabold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-[0_12px_30px_-6px_rgba(37,99,235,0.65)] transition-all hover:from-blue-500 hover:to-blue-400 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <span>EU QUERO MAIS CONTROLE</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm md:text-base font-semibold text-slate-200 border border-white/20 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
              >
                Descobrir Meu Kit Ideal
              </a>
            </div>

            {/* Quiet Unboxed Trust Metadata */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs md:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-400" />
                Frete Grátis Todo Brasil
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-blue-400" />
                Embalagem 100% Discreta
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Envio Imediato Loja do Cabo
              </span>
            </div>
          </div>

          {/* Right Column: Studio Premium Mockup Showcase + High-Impact Benefits List */}
          <div className="lg:w-5/12 w-full flex flex-col items-center">
            <div className="w-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
              <PremiumKitMockup bottles={3} variant="hero" title="Erectus Retard" />

              <div className="mt-4 pt-5 border-t border-white/10 space-y-2.5 text-left">
                {HERO_CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold tracking-wide text-amber-300 uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
