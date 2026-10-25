/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StickyHeader } from './components/StickyHeader';
import { HeroSection } from './components/HeroSection';
import { BenefitsAndFormula } from './components/BenefitsAndFormula';
import { TestimonialsAndKits } from './components/TestimonialsAndKits';
import { FaqAndFooter } from './components/FaqAndFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <StickyHeader />
      <HeroSection />
      <main>
        <BenefitsAndFormula />
        <TestimonialsAndKits />
        <FaqAndFooter />
      </main>
    </div>
  );
}
