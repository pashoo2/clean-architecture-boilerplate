import {Constructor} from 'src/interfaces/classes';
import {
  applyMixinsMethodInheritance,
  applyMixinsPropsAndMethodsInheritance,
} from 'src/utilities/implementations/classes/multipleInheritance';

describe('multipleInheritance', () => {
  describe('applyMixinsMethodInheritance', () => {
    it('Should not change an original array of constructors passed', () => {
      const aValue = 'a';
      const bValue = 'b';
      const cValue = 'c';
      class TestClassExtend {
        a = aValue;
        smth = aValue;
        getA() {
          return this.a;
        }
        getSmth() {
          return this.smth;
        }
      }
      class TestClassExtendSecond {
        b = bValue;
        smth = bValue;
        getB() {
          return this.b;
        }
        getSmth() {
          return this.b;
        }
      }
      class TestClass {
        get c() {
          return cValue;
        }
        smth = cValue;
        getC() {
          return this.c;
        }
        getSmth() {
          return this.smth;
        }
      }

      const constructorsToAppply: [
        Constructor<TestClassExtend>,
        Constructor<TestClassExtendSecond>
      ] = [TestClassExtend, TestClassExtendSecond];

      class NewTestClass extends applyMixinsMethodInheritance(
        TestClass,
        constructorsToAppply
      ) {}

      new NewTestClass();
      expect(constructorsToAppply[0]).toBe(TestClassExtend);
      expect(constructorsToAppply[1]).toBe(TestClassExtendSecond);
    });
    it('Should inherit only methods from classes passed - methods of inherited classes with references to "this"', () => {
      const aValue = 'a';
      const bValue = 'b';
      const cValue = 'c';
      class TestClassExtend {
        a = aValue;
        smth = aValue;
        getA() {
          return this.a;
        }
        getSmth() {
          return this.smth;
        }
      }
      class TestClassExtendSecond {
        b = bValue;
        smth = bValue;
        getB() {
          return this.b;
        }
        getSmth() {
          return this.b;
        }
      }
      class TestClass {
        get c() {
          return cValue;
        }
        smth = cValue;
        getC() {
          return this.c;
        }
        getSmth() {
          return this.smth;
        }
      }

      class NewTestClass extends applyMixinsMethodInheritance(TestClass, [
        TestClassExtend,
        TestClassExtendSecond,
      ]) {}

      const testInstance = new NewTestClass();

      expect((testInstance as any).a).toBeUndefined();
      expect(testInstance.getA()).toBeUndefined();
      expect((testInstance as any).b).toBeUndefined();
      expect(testInstance.getB()).toBeUndefined();
      expect(testInstance.c).toBe(cValue);
      expect(testInstance.getC()).toBe(cValue);
      expect(testInstance.smth).toBe(cValue);
      expect(testInstance.getSmth()).toBe(cValue);
    });
    it('Should inherit only methods from classes passed in the same order - methods of inherited classes without references to "this"', () => {
      const aValue = 'a';
      const bValue = 'b';
      const cValue = 'c';
      class TestClassExtend {
        a = aValue;
        smth = aValue;
        getA() {
          return aValue;
        }
        getSmth() {
          return aValue;
        }
      }
      class TestClassExtendSecond {
        b = bValue;
        smth = bValue;
        c = bValue;
        getA() {
          return bValue;
        }
        getB() {
          return bValue;
        }
        getSmth() {
          return bValue;
        }
      }
      class TestClass {
        c = cValue;
        smth = cValue;
        getC() {
          return cValue;
        }
        getSmth() {
          return cValue;
        }
      }

      class NewTestClass extends applyMixinsMethodInheritance(TestClass, [
        TestClassExtend,
        TestClassExtendSecond,
      ]) {}

      const testInstance = new NewTestClass();

      expect((testInstance as any).a).toBeUndefined();
      expect(testInstance.getA()).toBe(aValue);
      expect((testInstance as any).b).toBeUndefined();
      expect(testInstance.getB()).toBe(bValue);
      expect(testInstance.c).toBe(cValue);
      expect(testInstance.getC()).toBe(cValue);
      expect(testInstance.smth).toBe(cValue);
      expect(testInstance.getSmth()).toBe(cValue);
    });
    it('Should inherit only methods from classes passed in the same order and exclude all getters and setters', () => {
      const aValue = 'a';
      const bValue = 'b';
      const cValue = 'c';
      const dValue = 'd';
      const eValue = 'e';
      class TestClassExtend {
        a = aValue;
        smth = aValue;
        get d() {
          return dValue;
        }
        set d(v) {
          this.a = v;
        }

        getA() {
          return aValue;
        }
        getSmth() {
          return aValue;
        }
      }
      class TestClassExtendSecond {
        b = bValue;
        smth = bValue;
        c = bValue;
        get e() {
          return bValue;
        }
        getB() {
          return bValue;
        }
        getSmth() {
          return bValue;
        }
      }
      class TestClass {
        c = cValue;
        smth = cValue;
        get e() {
          return eValue;
        }
        getC() {
          return cValue;
        }
        getSmth() {
          return cValue;
        }
      }

      class NewTestClass extends applyMixinsMethodInheritance(TestClass, [
        TestClassExtend,
        TestClassExtendSecond,
      ]) {}

      const testInstance = new NewTestClass();

      expect((testInstance as any).a).toBeUndefined();
      expect(testInstance.getA()).toBe(aValue);
      expect((testInstance as any).b).toBeUndefined();
      expect(testInstance.getB()).toBe(bValue);
      expect(testInstance.c).toBe(cValue);
      expect(testInstance.getC()).toBe(cValue);
      expect((testInstance as any).d).toBeUndefined();
      expect(testInstance.e).toBe(eValue);
      expect(testInstance.smth).toBe(cValue);
      expect(testInstance.getSmth()).toBe(cValue);
    });
    it('Should inherit only methods from classes passed in the same order and include all getters and setters', () => {
      const aValue = 'a';
      const bValue = 'b';
      const cValue = 'c';
      const dValue = 'd';
      const eValue = 'e';
      class TestClassExtend {
        a = aValue;
        smth = aValue;
        private __dValue = dValue;
        get d() {
          return this.__dValue;
        }
        set d(v) {
          this.__dValue = v;
        }

        getA() {
          return aValue;
        }
        getSmth() {
          return aValue;
        }
      }
      class TestClassExtendSecond {
        b = bValue;
        smth = bValue;
        c = bValue;
        get e() {
          return bValue;
        }
        getB() {
          return bValue;
        }
        getSmth() {
          return bValue;
        }
      }
      class TestClass {
        c = cValue;
        smth = cValue;
        get e() {
          return eValue;
        }
        getC() {
          return cValue;
        }
        getSmth() {
          return cValue;
        }
      }

      class NewTestClass extends applyMixinsMethodInheritance(TestClass, [
        TestClassExtend,
        TestClassExtendSecond,
      ]) {}

      const testInstance = new NewTestClass();

      expect((testInstance as any).a).toBeUndefined();
      expect(testInstance.getA()).toBe(aValue);
      expect((testInstance as any).b).toBeUndefined();
      expect(testInstance.getB()).toBe(bValue);
      expect(testInstance.c).toBe(cValue);
      expect(testInstance.getC()).toBe(cValue);
      expect((testInstance as any).d).toBeUndefined();
      expect(testInstance.e).toBe(eValue);
      expect(testInstance.smth).toBe(cValue);
      expect(testInstance.getSmth()).toBe(cValue);
    });
  });
  describe('applyMixinsPropsAndMethodsInheritance', () => {
    it('Should extend class with other abstractClasses', () => {
      const aValue = 'a';
      const bValue = 'b';
      const cValue = 'c';
      const dValue = 'd';
      const eValue = 'e';
      class TestClassExtend {
        a = aValue;
        smth = aValue;
        get e() {
          return aValue;
        }
        private __dValue = dValue;
        get d() {
          return this.__dValue;
        }
        set d(v) {
          this.__dValue = v;
        }
        getA() {
          return aValue;
        }
        getSmth() {
          return aValue;
        }
      }
      class TestClassExtendSecond {
        b = bValue;
        smth = bValue;
        c = bValue;
        get d() {
          return bValue;
        }
        set d(v) {
          return;
        }
        getB() {
          return bValue;
        }
        getSmth() {
          return bValue;
        }
      }
      class TestClass {
        c = cValue;
        smth = cValue;
        get e() {
          return eValue;
        }
        getC() {
          return cValue;
        }
        getSmth() {
          return cValue;
        }
      }

      class NewTestClass extends applyMixinsPropsAndMethodsInheritance(
        TestClass,
        TestClassExtend,
        TestClassExtendSecond
      ) {}

      const testInstance = new NewTestClass();

      expect(testInstance.a).toBe(aValue);
      expect(testInstance.getA()).toBe(aValue);
      expect(testInstance.b).toBe(bValue);
      expect(testInstance.getB()).toBe(bValue);
      expect(testInstance.c).toBe(cValue);
      expect(testInstance.getC()).toBe(cValue);
      expect(testInstance.e).toBe(eValue);
      expect(testInstance.d).toBe(dValue);
      expect(testInstance.smth).toBe(cValue);
      expect(testInstance.getSmth()).toBe(cValue);

      const changedDValue = '1';

      testInstance.d = changedDValue;
      expect(testInstance.d).toBe(changedDValue);
    });
  });
});
