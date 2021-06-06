import {pad} from './numbers';

describe('numbers utils', () => {
  describe('pad', () => {
    it('Should return string prefixed with zeros', () => {
      expect(pad(1000, 5)).toBe('01000');
      expect(pad(1000.1, 8)).toBe('001000.1');
    });
    it('Should return the right part of a string passed', () => {
      expect(pad(12345, 2)).toBe('45');
      expect(pad(12345.6, 3)).toBe('5.6');
    });
  });
});
