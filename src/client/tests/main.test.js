//grab data from geonames api
import { main } from '../js/main';

describe('the function "main" should exist', () => {
  test('It should return true', () => {
    expect(main).toBeDefined();
  });
});

describe('the function "main()" should be a function', () => {
  test('It should be a function', () => {
    expect(typeof main).toBe('function');
  });
});
