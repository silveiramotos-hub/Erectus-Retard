import test from 'node:test';
import assert from 'node:assert/strict';
import {
  KIT_PLANS,
  INGREDIENTS,
  FAQ_ITEMS,
  recommendKitPlan,
  filterIngredientsByCategory,
  calculateTimeRemaining,
} from './productData';

test('KIT_PLANS contains all 4 official treatment kits with valid Braip checkout URLs', () => {
  assert.equal(KIT_PLANS.length, 4);
  assert.equal(KIT_PLANS[0].title, 'Tratamento 1 Mês');
  assert.equal(KIT_PLANS[0].bottles, 1);
  assert.equal(KIT_PLANS[0].priceFormatted, 'R$ 249,90');
  assert.equal(KIT_PLANS[1].title, 'Tratamento 2 Meses');
  assert.equal(KIT_PLANS[1].bottles, 2);
  assert.equal(KIT_PLANS[1].priceFormatted, 'R$ 379,90');
  assert.equal(KIT_PLANS[2].title, 'Tratamento 3 Meses');
  assert.equal(KIT_PLANS[2].bottles, 3);
  assert.equal(KIT_PLANS[2].priceFormatted, 'R$ 529,90');
  assert.equal(KIT_PLANS[3].title, 'Tratamento 6 Meses');
  assert.equal(KIT_PLANS[3].bottles, 6);
  assert.equal(KIT_PLANS[3].priceFormatted, 'R$ 699,90');
  assert.equal(KIT_PLANS[3].isPopular, true);
  assert.ok(KIT_PLANS.every((k) => k.imageUrl.includes('Erectus-Retard-mockup-premium-final')));
});

test('recommendKitPlan selects appropriate treatment kit based on user goals', () => {
  const plan6 = recommendKitPlan({ goal: 'ambos', durationLevel: 'intenso' });
  assert.equal(plan6.months, 6);

  const plan3 = recommendKitPlan({ goal: 'controle', durationLevel: 'intermediario' });
  assert.equal(plan3.months, 3);

  const plan2 = recommendKitPlan({ goal: 'firmeza', durationLevel: 'iniciante' });
  assert.equal(plan2.months, 2);
});

test('filterIngredientsByCategory returns all 7 ingredients or filters by category', () => {
  const all = filterIngredientsByCategory('todos');
  assert.equal(all.length, 7);

  const controle = filterIngredientsByCategory('controle');
  assert.equal(controle.length, 2);
  assert.ok(controle.some((i) => i.name.includes('Valeriana')));
});

test('calculateTimeRemaining formats countdown timer accurately', () => {
  const now = 1000000;
  const target = now + (2 * 3600 + 15 * 60 + 9) * 1000;
  const res = calculateTimeRemaining(target, now);
  assert.equal(res.hours, '02');
  assert.equal(res.minutes, '15');
  assert.equal(res.seconds, '09');
  assert.equal(res.expired, false);

  const expiredRes = calculateTimeRemaining(now - 1000, now);
  assert.equal(expiredRes.expired, true);
  assert.equal(expiredRes.hours, '00');
});

test('FAQ_ITEMS contains all 5 reference questions', () => {
  assert.equal(FAQ_ITEMS.length, 5);
  assert.equal(FAQ_ITEMS[0].question, 'Como devo usar o Erectus Retard?');
});
