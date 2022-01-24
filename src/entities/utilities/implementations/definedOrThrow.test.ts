import {definedOrThrow} from '.';

describe('definedOrThrow', () => {
  it('Should throw if the argument is not defined', () => {
    expect(() => definedOrThrow(undefined)).toThrow();
  });
  it('Should not throw if the argument is defined', () => {
    expect(() => definedOrThrow(null)).not.toThrow();
    expect(() => definedOrThrow(0)).not.toThrow();
    expect(() => definedOrThrow('')).not.toThrow();
    expect(() => definedOrThrow(NaN)).not.toThrow();
    expect(() => definedOrThrow({})).not.toThrow();
  });
});
