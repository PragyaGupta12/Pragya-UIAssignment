import { calculatePoints } from '../rewardPointCalculator';

test('calculatePoints correctly', () => {
  expect(calculatePoints(120)).toBe(90); // 2x20 + 1x50
  expect(calculatePoints(75)).toBe(25);  // 1x25
  expect(calculatePoints(50)).toBe(0);   // 0 points
  expect(calculatePoints(200)).toBe(250);// 2x100 + 1x50
});
