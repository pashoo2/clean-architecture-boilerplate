import {compareObjectsDeepWithCompareValuesFunction} from './objectComparison';
describe('Object comparison utilities', () => {
  describe('compareObjectsDeepWithCompareValuesFunction', () => {
    it('Should return true for the same object', () => {
      const testObject1 = {
        key1: 'key1',
      };
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testObject1,
          testObject1,
          () => false
        )
      ).toBe(true);
    });
    it('Should return false if objects have different amount of keys', () => {
      const testObject1 = {
        key1: 'key1',
      };
      const testObject2 = {
        ...testObject1,
        key2: 'key2',
      };
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testObject1,
          testObject2,
          () => true
        )
      ).toBe(false);
    });
    it('Should pass through all the keys of an object', () => {
      const testObject1 = {} as any;
      const testObject2 = {} as any;
      const count = 100;
      const mockComparatorFn = jest.fn(() => true);

      function createDifferent(item: number): string {
        return `0${item}`;
      }

      let idx = 0;
      while (idx < count) {
        testObject1[idx] = idx;
        testObject2[idx] = createDifferent(idx);
        idx += 1;
      }
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testObject1,
          testObject2,
          mockComparatorFn
        )
      ).toBe(true);
      expect(mockComparatorFn).toBeCalledTimes(count);

      idx = 0;
      while (idx < count) {
        expect(mockComparatorFn).toBeCalledWith(idx, createDifferent(idx));
      }
    });
  });
  describe('compareObjectsShallowWithStrategy', () => {
    // TODO
  });
  describe('compareObjectsDeepWithStrategy', () => {
    // TODO
  });
});
