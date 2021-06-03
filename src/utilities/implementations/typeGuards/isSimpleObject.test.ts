import {isSimpleObject} from 'src/utilities/implementations/typeGuards/isSimpleObject';

describe('isSimpleObject utility', () => {
  it('Should return true for {}', () => {
    expect(isSimpleObject({})).toBe(true);
  });
  it("Should return true for { a: 1, [0]: 'b', valueOf(): Date }", () => {
    const obj = {
      a: 1,
      [0]: 'b',
      valueOf() {
        return new Date();
      },
    };
    expect(isSimpleObject(obj)).toBe(true);
  });
  it('Should return false for "() => {}"', () => {
    expect(isSimpleObject(() => {})).toBe(false);
  });
  it('Should return false Date', () => {
    expect(isSimpleObject(new Date())).toBe(false);
  });

  it('Should return false Regexp', () => {
    expect(isSimpleObject(new RegExp('[a-z]'))).toBe(false);
  });
  it('Should return false String', () => {
    expect(isSimpleObject(new String('[a-z]'))).toBe(false);
  });
  it('Should return false Number', () => {
    expect(isSimpleObject(new Number(0))).toBe(false);
  });
  it('Should return false null', () => {
    expect(isSimpleObject(null)).toBe(false);
  });
  it('Should return false for undefined', () => {
    expect(isSimpleObject(undefined)).toBe(false);
  });
});
