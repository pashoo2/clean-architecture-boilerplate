import {isSimpleType} from './isSimpleType';

describe('isSimpleTypeOrArrayOrObject utility', () => {
  it('Should return false for {}', () => {
    expect(isSimpleType({})).toBe(false);
  });
  it('Should return false for a class instance', () => {
    class TestClass {
      a = 1;
      b = 2;
    }
    expect(isSimpleType(new TestClass())).toBe(false);
  });
  it("Should return false for { a: 1, [0]: 'b', valueOf(): Date }", () => {
    const obj = {
      a: 1,
      [0]: 'b',
      valueOf() {
        return new Date();
      },
    };
    expect(isSimpleType(obj)).toBe(false);
  });
  it('Should return false for a function', () => {
    expect(isSimpleType(() => {})).toBe(false);
    function testFunction() {
      return 'test';
    }
    expect(isSimpleType(testFunction)).toBe(false);
  });
  it('Should return false for a Date', () => {
    expect(isSimpleType(new Date())).toBe(false);
  });
  it('Should return false for a Symbol', () => {
    expect(isSimpleType(Symbol.for('symbol'))).toBe(false);
  });
  it('Should return false an Regexp', () => {
    expect(isSimpleType(new RegExp('[a-z]'))).toBe(false);
  });
  it('Should return true for a String', () => {
    expect(isSimpleType(new String('a,b,c'))).toBe(true);
  });
  it('Should return true for a Number', () => {
    expect(isSimpleType(new Number(0))).toBe(true);
  });
  it('Should return true for a null', () => {
    expect(isSimpleType(null)).toBe(true);
  });
  it('Should return true for an undefined', () => {
    expect(isSimpleType(undefined)).toBe(true);
  });
});
