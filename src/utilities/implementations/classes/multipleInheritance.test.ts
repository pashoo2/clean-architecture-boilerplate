import {applyMixins} from 'src/utilities/implementations/classes/multipleInheritance';

describe('applyMixins', () => {
  it('Should extend class with other abstractClasses', () => {
    const aValue = 'a';
    const bValue = 'b';
    const cValue = 'c';
    class TestClassExtend {
      a = aValue;
      getA() {
        return this.a;
      }
    }
    class TestClassExtendSecond {
      b = bValue;
      getB() {
        return this.b;
      }
    }
    class TestClass {
      c = cValue;
      getC() {
        return this.c;
      }
    }

    interface TestClass extends TestClassExtend, TestClassExtendSecond {}

    applyMixins(TestClass, [TestClassExtend, TestClassExtendSecond]);

    const testInstance = new TestClass();

    expect(testInstance.a).toBe(aValue);
    expect(testInstance.getA()).toBe(aValue);
    expect(testInstance.b).toBe(bValue);
    expect(testInstance.getB()).toBe(bValue);
    expect(testInstance.c).toBe(cValue);
    expect(testInstance.getC()).toBe(cValue);
  });
});
