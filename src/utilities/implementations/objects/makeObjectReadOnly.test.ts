import {makeObjectReadOnly} from './makeObjectReadOnly';

describe('makeObjectReadOnly', () => {
  it('Should return a copy of the object', () => {
    const value = {
      a: 1,
      b: 2,
      c: {
        d: 'e',
      },
    };
    const readonlyObject = makeObjectReadOnly(value);
    expect(readonlyObject).not.toBe(value);
  });
  it('Should return an equal object', () => {
    const value = {
      a: 1,
      b: 2,
      c: {
        d: 'e',
      },
    };
    const readonlyObject = makeObjectReadOnly(value);
    expect(readonlyObject).toEqual(value);
  });
  it('Should return object with read-only properties', () => {
    const value = {
      a: 1,
      b: 2,
      c: {
        d: 'e',
      },
    };
    const readonlyObject = makeObjectReadOnly(value);
    expect(() => {
      (readonlyObject as any).a = 'another value';
    }).toThrow();
  });
  it('Should make the object as readonly shallowly', () => {
    const value = {
      a: 1,
      b: 2,
      c: {
        d: 'e',
      },
    };
    const readonlyObject = makeObjectReadOnly(value);
    expect(() => {
      readonlyObject.c.d = 'another value';
    }).not.toThrow();
  });
});
