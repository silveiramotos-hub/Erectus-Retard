import React from 'react';

interface PremiumKitMockupProps {
  bottles: number;
  isPopular?: boolean;
  variant?: 'card' | 'hero' | 'showcase' | 'compact';
  title?: string;
}

const BOTTLE_SRC = '/assets/aistudio/Erectus-Retard-mockup-premium-final_a23fcaae.webp';

export const PremiumKitMockup: React.FC<PremiumKitMockupProps> = ({
  bottles,
  isPopular = false,
  variant = 'card',
  title = 'Erectus Retard',
}) => {
  if (variant === 'compact') {
    return (
      <div className="relative w-20 h-24 flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-xl blur-md" />
        <img
          src={BOTTLE_SRC}
          alt={title}
          className="relative z-10 h-20 w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.28)]"
          referrerPolicy="no-referrer"
        />
        {bottles > 1 && (
          <span className="absolute -bottom-1 -right-1 z-20 px-1.5 py-0.5 text-[10px] font-extrabold bg-blue-600 text-white rounded-md shadow">
            {bottles}x
          </span>
        )}
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="relative w-full max-w-md mx-auto flex items-center justify-center py-6 px-4 select-none">
        {/* Ambient Studio Pedestal Backlight */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/45 via-cyan-400/25 to-emerald-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-4 w-64 h-7 rounded-full bg-black/60 blur-xl pointer-events-none" />

        {/* Back Left Bottle */}
        <img
          src={BOTTLE_SRC}
          alt="Frasco Erectus Retard Esquerdo"
          className="relative z-10 w-32 md:w-36 h-auto object-contain -mr-10 md:-mr-12 translate-y-3 -rotate-6 opacity-90 brightness-95 drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] transition-transform duration-300"
          referrerPolicy="no-referrer"
        />

        {/* Center Hero Bottle */}
        <img
          src={BOTTLE_SRC}
          alt="Frasco Principal Erectus Retard"
          className="relative z-30 w-40 md:w-48 h-auto object-contain -translate-y-2 drop-shadow-[0_25px_40px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Back Right Bottle */}
        <img
          src={BOTTLE_SRC}
          alt="Frasco Erectus Retard Direito"
          className="relative z-20 w-32 md:w-36 h-auto object-contain -ml-10 md:-ml-12 translate-y-3 rotate-6 opacity-90 brightness-95 drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Default 'card' or 'showcase' multi-bottle studio composition
  return (
    <div
      className="relative w-full h-56 flex items-center justify-center my-3 select-none group"
      aria-label={`Mockup com ${bottles} ${bottles === 1 ? 'frasco' : 'frascos'} de ${title}`}
    >
      {/* Studio Pedestal Radial Glow */}
      <div
        className={`absolute w-44 h-44 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
          isPopular
            ? 'bg-gradient-to-tr from-blue-500/45 via-cyan-400/30 to-amber-300/20 opacity-95'
            : 'bg-gradient-to-tr from-blue-600/20 via-cyan-400/15 to-transparent opacity-80 group-hover:opacity-100'
        }`}
      />

      {/* Studio Floor Contact Shadow */}
      <div
        className={`absolute bottom-3 rounded-full blur-md pointer-events-none ${
          bottles === 1
            ? 'w-24 h-3.5 bg-slate-900/25'
            : bottles === 2
            ? 'w-36 h-4 bg-slate-900/30'
            : 'w-48 h-5 bg-slate-950/35'
        }`}
      />

      {/* 1 Bottle (Tratamento 1 Mês) */}
      {bottles === 1 && (
        <div className="relative flex items-center justify-center">
          <img
            src={BOTTLE_SRC}
            alt={title}
            className="relative z-20 h-44 w-auto object-contain drop-shadow-[0_18px_24px_rgba(15,23,42,0.28)] transition-transform duration-300 group-hover:-translate-y-1.5"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* 2 Bottles (Tratamento 2 Meses) */}
      {bottles === 2 && (
        <div className="relative flex items-end justify-center">
          <img
            src={BOTTLE_SRC}
            alt={`${title} Frasco 1`}
            className="relative z-10 h-40 w-auto object-contain -mr-7 -rotate-3 translate-y-1 brightness-95 drop-shadow-[0_14px_20px_rgba(15,23,42,0.25)] transition-transform duration-300 group-hover:-translate-x-1"
            referrerPolicy="no-referrer"
          />
          <img
            src={BOTTLE_SRC}
            alt={`${title} Frasco 2`}
            className="relative z-20 h-44 w-auto object-contain rotate-2 -translate-y-1 drop-shadow-[0_20px_28px_rgba(15,23,42,0.34)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-2"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* 3 Bottles (Tratamento 3 Meses) */}
      {bottles === 3 && (
        <div className="relative flex items-end justify-center">
          <img
            src={BOTTLE_SRC}
            alt={`${title} Frasco Esquerdo`}
            className="relative z-10 h-36 w-auto object-contain -mr-9 -rotate-6 translate-y-1.5 brightness-95 drop-shadow-[0_14px_18px_rgba(15,23,42,0.25)] transition-transform duration-300 group-hover:-translate-x-1.5"
            referrerPolicy="no-referrer"
          />
          <img
            src={BOTTLE_SRC}
            alt={`${title} Frasco Central`}
            className="relative z-30 h-44 w-auto object-contain -translate-y-1.5 drop-shadow-[0_22px_30px_rgba(15,23,42,0.38)] transition-transform duration-300 group-hover:-translate-y-2.5"
            referrerPolicy="no-referrer"
          />
          <img
            src={BOTTLE_SRC}
            alt={`${title} Frasco Direito`}
            className="relative z-20 h-36 w-auto object-contain -ml-9 rotate-6 translate-y-1.5 brightness-95 drop-shadow-[0_14px_18px_rgba(15,23,42,0.25)] transition-transform duration-300 group-hover:translate-x-1.5"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* 6 Bottles (Tratamento 6 Meses - Mais Vendido Pyramid Arrangement) */}
      {bottles >= 6 && (
        <div className="relative flex flex-col items-center justify-center">
          {/* Back Row (3 Elevated Bottles) */}
          <div className="flex items-end justify-center -mb-24 z-10 opacity-90">
            <img
              src={BOTTLE_SRC}
              alt={`${title} Frasco Traseiro 1`}
              className="h-32 w-auto object-contain -mr-7 -rotate-6 brightness-90 drop-shadow-[0_10px_15px_rgba(0,0,0,0.45)]"
              referrerPolicy="no-referrer"
            />
            <img
              src={BOTTLE_SRC}
              alt={`${title} Frasco Traseiro 2`}
              className="h-36 w-auto object-contain -translate-y-2 brightness-95 drop-shadow-[0_12px_18px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
            <img
              src={BOTTLE_SRC}
              alt={`${title} Frasco Traseiro 3`}
              className="h-32 w-auto object-contain -ml-7 rotate-6 brightness-90 drop-shadow-[0_10px_15px_rgba(0,0,0,0.45)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Front Row (3 Foreground Hero Bottles) */}
          <div className="flex items-end justify-center z-20">
            <img
              src={BOTTLE_SRC}
              alt={`${title} Frasco Frontal 1`}
              className="h-36 w-auto object-contain -mr-8 -rotate-3 translate-y-1 drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-x-1"
              referrerPolicy="no-referrer"
            />
            <img
              src={BOTTLE_SRC}
              alt={`${title} Frasco Frontal Central`}
              className="z-30 h-44 w-auto object-contain -translate-y-1 drop-shadow-[0_24px_34px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:-translate-y-2"
              referrerPolicy="no-referrer"
            />
            <img
              src={BOTTLE_SRC}
              alt={`${title} Frasco Frontal 3`}
              className="h-36 w-auto object-contain -ml-8 rotate-3 translate-y-1 drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:translate-x-1"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
};
