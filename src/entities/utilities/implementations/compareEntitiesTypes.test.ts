import {compareEntitiesTypes} from 'src/entities/utilities/implementations/compareEntitiesTypes';
import {SIMPLE_TYPE_VALUES_SET_STRINGS} from 'src/__mock__/simpleTypes.stubs';

describe('Entities types comparison utilities', () => {
  describe('compareEntitiesTypes', () => {
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS])(
      'Should return true for two equal strings %s',
      stringEntityType => {
        expect(compareEntitiesTypes(stringEntityType, stringEntityType)).toBe(
          true
        );
      }
    );
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS])(
      'Should return false for two different strings %s',
      stringEntityType => {
        expect(
          compareEntitiesTypes(stringEntityType, `_${stringEntityType}`)
        ).toBe(false);
      }
    );
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS])(
      'Should return true for two equal strings %s with a spaces at the start or at the end',
      stringEntityType => {
        expect(
          compareEntitiesTypes(
            `     ${stringEntityType} ` as any,
            ` ${stringEntityType}       ` as any
          )
        ).toBe(true);
      }
    );
  });
});
