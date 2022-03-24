import { multiply } from 'react-native-test-lib';

const result = await multiply(3, 7, 2);

test('Test multiply function', () => {
  expect(result).toBe(42);
});
