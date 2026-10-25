import React, { useEffect, useState } from 'react';
import { calculateTimeRemaining } from '../data/productData';

function getInitialOfferEnd(): number {
  try {
    const saved = localStorage.getItem('offerEndDate');
    if (saved) {
      const parsed = new Date(saved).getTime();
      if (parsed > Date.now()) {
        return parsed;
      }
    }
    const next = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('offerEndDate', new Date(next).toISOString());
    return next;
  } catch {
    return Date.now() + 24 * 60 * 60 * 1000;
  }
}

export const StickyHeader: React.FC = () => {
  const [targetMs] = useState<number>(() => getInitialOfferEnd());
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(targetMs, Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(targetMs, Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetMs]);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2.5 px-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 text-center">
        <p className="font-bold text-xs sm:text-sm md:text-base">
          <span className="hidden md:inline">OFERTA ESPECIAL:</span> FRETE GRÁTIS + DESCONTO termina em:
        </p>
        {!timeLeft.expired ? (
          <div
            className="flex items-center gap-1.5 font-mono text-sm sm:text-lg md:text-xl font-extrabold tabular-nums"
            aria-label="Tempo restante da oferta"
          >
            <span className="bg-white/20 px-2 py-0.5 rounded-md">{timeLeft.hours}</span>:
            <span className="bg-white/20 px-2 py-0.5 rounded-md">{timeLeft.minutes}</span>:
            <span className="bg-white/20 px-2 py-0.5 rounded-md">{timeLeft.seconds}</span>
          </div>
        ) : (
          <p className="font-bold text-sm md:text-lg">Oferta Expirada!</p>
        )}
        <a
          href="#planos"
          className="hidden lg:inline-block ml-4 px-4 py-1.5 text-sm font-bold bg-white text-blue-700 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap shrink-0"
        >
          Aproveitar Agora
        </a>
      </div>
    </div>
  );
};
