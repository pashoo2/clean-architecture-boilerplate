import {
  isSimpleArray,
  isSimpleObject,
  isSimpleTypeOrArrayOrObject,
} from 'src/utilities/implementations/typeGuards/isSimpleTypeOrArrayOrObject';

describe('isSimpleTypeOrArrayOrObject utility', () => {
  describe('isSimpleObject', () => {
    it('Should return true for {}', () => {
      expect(isSimpleObject({})).toBe(true);
    });
    it("Should return true for an object doesn't contain methods and getters/setters", () => {
      const obj = {
        a: 1,
        [0]: 'b',
        nestedObj: {},
        nestedArray: [1, '2', undefined, {}],
        notDefined: undefined,
        nullable: null,
      };
      expect(isSimpleObject(obj)).toBe(true);
    });
    it("Should return true for an object doesn't contains methods but with getters and setters", () => {
      const obj = {
        get a() {
          return 1;
        },
        set a(v) {
          return;
        },
        get [0]() {
          return 'b';
        },
        set [0](v) {
          return;
        },
        get nestedObj() {
          return {
            a: 1,
          };
        },
        get nestedArray() {
          return [1, '2', undefined, {}];
        },
        get notDefined() {
          return undefined;
        },
        get nullable() {
          return null;
        },
      };
      expect(isSimpleObject(obj)).toBe(true);
    });
    it('Should return false for an object contains a method', () => {
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
  describe('isSimpleArray', () => {
    it('Should return true for [{}]', () => {
      expect(isSimpleArray([{}])).toBe(true);
    });
    it("Should return true for an array with an object doesn't contain methods and getters/setters", () => {
      const obj = {
        a: 1,
        [0]: 'b',
        nestedObj: {},
        nestedArray: [1, '2', undefined, {}],
        notDefined: undefined,
        nullable: null,
      };
      expect(isSimpleArray([obj])).toBe(true);
    });
    it("Should return true for an array with an object doesn't contain methods but with getters and setters", () => {
      const obj = {
        get a() {
          return 1;
        },
        set a(v) {
          return;
        },
        get [0]() {
          return 'b';
        },
        set [0](v) {
          return;
        },
        get nestedObj() {
          return {
            a: 1,
          };
        },
        get nestedArray() {
          return [1, '2', undefined, {}];
        },
        get notDefined() {
          return undefined;
        },
        get nullable() {
          return null;
        },
      };
      expect(isSimpleArray([obj])).toBe(true);
    });
    it('Should return true for an array contains numbers, string, null or undefined', () => {
      expect(
        isSimpleArray([
          null,
          undefined,
          new Number(1),
          1,
          new String('string'),
          'string',
        ])
      ).toBe(true);
    });
    it('Should return false for an array contains numbers, string, null, undefined along with a Date or Regexp or a Function', () => {
      const simpleArray = [
        null,
        undefined,
        new Number(1),
        1,
        new String('string'),
        'string',
      ];
      expect(isSimpleArray(simpleArray)).toBe(true);
      expect(isSimpleArray([...simpleArray, new Date()])).toBe(false);
      expect(isSimpleArray([...simpleArray, new RegExp('')])).toBe(false);
      expect(isSimpleArray([...simpleArray, () => {}])).toBe(false);
    });
    it('Should return false for an array with an object contains a method', () => {
      const obj = {
        a: 1,
        [0]: 'b',
        valueOf() {
          return new Date();
        },
      };
      expect(isSimpleArray([obj])).toBe(false);
    });
    it('Should return false for an array contains a function', () => {
      expect(isSimpleArray([() => {}])).toBe(false);
    });
    it('Should return false for an array contains a Date', () => {
      expect(isSimpleArray([new Date()])).toBe(false);
    });

    it('Should return false for an Regexp', () => {
      expect(isSimpleArray([new RegExp('[a-z]')])).toBe(false);
    });
    it('Should return false String', () => {
      expect(isSimpleArray(new String('[a-z]'))).toBe(false);
    });
    it('Should return false Number', () => {
      expect(isSimpleArray(new Number(0))).toBe(false);
    });
    it('Should return false null', () => {
      expect(isSimpleArray(null)).toBe(false);
    });
    it('Should return false for undefined', () => {
      expect(isSimpleArray(undefined)).toBe(false);
    });
  });
  describe('isSimpleTypeOrArrayOrObject', () => {
    it('Should return true for an array of simple values', () => {
      const obj = {
        get a() {
          return 1;
        },
        set a(v) {
          return;
        },
        get [0]() {
          return 'b';
        },
        set [0](v) {
          return;
        },
        get nestedObj() {
          return {
            a: 1,
          };
        },
        get nestedArray() {
          return [1, '2', undefined, {}];
        },
        get notDefined() {
          return undefined;
        },
        get nullable() {
          return null;
        },
      };
      expect(
        isSimpleTypeOrArrayOrObject([
          obj,
          1,
          '2',
          new Number(1),
          new String('string'),
          null,
          undefined,
        ])
      ).toBe(true);
    });
    it('Should return true for an object of simple values', () => {
      const obj = {
        get a() {
          return 1;
        },
        set a(v) {
          return;
        },
        get [0]() {
          return 'b';
        },
        set [0](v) {
          return;
        },
        get nestedObj() {
          return {
            a: 1,
          };
        },
        get nestedArray() {
          return [1, '2', undefined, {}];
        },
        get notDefined() {
          return undefined;
        },
        get nullable() {
          return null;
        },
      };
      expect(isSimpleTypeOrArrayOrObject(obj)).toBe(true);
    });
  });
});
