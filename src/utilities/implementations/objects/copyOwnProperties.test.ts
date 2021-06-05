import {copyOwnPropertiesIntoTarget} from './copyOwnProperties';
describe('copyOwnPropertiesIntoTarget', () => {
  it('Should copy all own properties whether they are enumerable or not', () => {
    const testObjectTarget = {
      a: 'a',
      b: 'b',
      __c: 'c',
      get c() {
        return this.__c;
      },
      set c(c) {
        this.__c = 'c';
      },
      getA() {
        return this.a;
      },
    };
    const testObjectSource = {
      a: 'a1',
      b: 'b1',
      __c: 'c1',
      get c() {
        return this.__c;
      },
      set c(c) {
        this.__c = 'c1';
      },
      getA() {
        return this.c;
      },
    };
    const testObjectTargetCopy = {
      ...testObjectTarget,
    };
    const testObjectSourceCopy = {
      ...testObjectSource,
    };

    expect(
      copyOwnPropertiesIntoTarget(testObjectTarget, testObjectSource)
    ).toBe(true);
    expect(testObjectTarget).toEqual(
      expect.objectContaining({
        ...testObjectTargetCopy,
        ...testObjectSourceCopy,
      })
    );
    expect(testObjectTarget.a).toBe(testObjectSourceCopy.a);
    expect(testObjectTarget.b).toBe(testObjectSourceCopy.b);
    expect(testObjectTarget.c).toBe(testObjectSourceCopy.c);
    expect(testObjectTarget.getA).toBe(testObjectSourceCopy.getA);

    testObjectTarget.c = 'another value of c';
    expect(testObjectTarget.c).toBe('c1');
  });
  it('Should not copy all properties from "prototype"', () => {
    class Target {
      get a() {
        return 'a';
      }
      get b() {
        return 'b';
      }
    }
    class Source {
      get c() {
        return 'c';
      }
      get d() {
        return 'd';
      }
    }
    const testObjectTarget = new Target();

    expect(copyOwnPropertiesIntoTarget(testObjectTarget, new Source())).toBe(
      true
    );
    expect(testObjectTarget.a).toBe('a');
    expect(testObjectTarget.b).toBe('b');
    expect((testObjectTarget as any).c).toBeUndefined();
    expect((testObjectTarget as any).d).toBeUndefined();
  });
});
