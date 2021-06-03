import {isSimpleObject} from './isSimpleObject';

describe('isSimpleObject utility', () => {
  it('Should return false for {}', () => {
    expect(isSimpleObject({})).toBe(false);
  });
  it("Should return false for { a: 1, [0]: 'b', valueOf(): Date }", () => {
    const obj = {
      a: 1,
      [0]: 'b',
      valueOf() {
        return new Date();
      },
    };
    expect(isSimpleObject(obj)).toBe(false);
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
  it('Should return true String', () => {
    expect(isSimpleObject(new String('[a-z]'))).toBe(true);
  });
  it('Should return true Number', () => {
    expect(isSimpleObject(new Number(0))).toBe(true);
  });
  it('Should return true null', () => {
    expect(isSimpleObject(null)).toBe(true);
  });
  it('Should return true for undefined', () => {
    expect(isSimpleObject(undefined)).toBe(true);
  });
});
