import canIterate from '../index';

test(('function canIterate'), () => {
  expect(canIterate('Netology')).toBe(true);
  expect(canIterate(10)).toBe(false);
  expect(canIterate(null)).toBe(false);
  expect(canIterate(new Map())).toBe(true);
  expect(canIterate(new Set())).toBe(true);
});
