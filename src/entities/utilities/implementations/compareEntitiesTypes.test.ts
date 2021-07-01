import {compareEntitiesTypesUtility} from 'src/entities/utilities/implementations/compareEntitiesTypes';
import {SIMPLE_TYPE_VALUES_SET_STRINGS} from 'src/__mock__/simpleTypes.stubs';

describe('Entities types comparison utilities', () => {
  describe('compareEntitiesTypesUtility', () => {
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS])(
      'Should return true for two equal strings %s',
      stringEntityType => {
        expect(
          compareEntitiesTypesUtility(stringEntityType, stringEntityType)
        ).toBe(true);
      }
    );
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS])(
      'Should return false for two different strings %s',
      stringEntityType => {
        expect(
          compareEntitiesTypesUtility(stringEntityType, `_${stringEntityType}`)
        ).toBe(false);
      }
    );
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS])(
      'Should return true for two equal strings %s with a spaces at the start or at the end',
      stringEntityType => {
        expect(
          compareEntitiesTypesUtility(
            `     ${stringEntityType} ` as any,
            ` ${stringEntityType}       ` as any
          )
        ).toBe(true);
      }
    );
  });
});
