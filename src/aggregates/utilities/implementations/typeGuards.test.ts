import {AGGREGATE_TYPE_PREFIX} from '@root/aggregates/constants/aggregateType';
import {isAggregateMainType} from '@root/aggregates/utilities/implementations/typeGuards';
import {isEntityTypeStringContainsCorrectCharacters} from '@root/entities/utilities/implementations';
import {OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR} from '@root/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from '@root/__mock__/simpleTypes.stubs';

describe('Aggregates utilities type guards', () => {
  describe('isAggregateType', () => {
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
    ])('Should return false for a non string value %p', str => {
      expect(isAggregateMainType(str)).toBe(false);
    });
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
        str => !str.includes(AGGREGATE_TYPE_PREFIX)
      )
    )(
      `Should return false for the string %s that is not prefixed with ${AGGREGATE_TYPE_PREFIX}`,
      str => {
        expect(isAggregateMainType(str)).toBe(false);
      }
    );
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
        str => !isEntityTypeStringContainsCorrectCharacters(str)
      )
    )(
      'Should return false for the string %s which is not a valid entity type',
      str => {
        expect(isAggregateMainType(str)).toBe(false);
      }
    );
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
        isEntityTypeStringContainsCorrectCharacters
      )
    )(
      `Should return true for the string %s prefixed with the ${AGGREGATE_TYPE_PREFIX}`,
      str => {
        expect(isAggregateMainType(`${AGGREGATE_TYPE_PREFIX}${str}`)).toBe(
          true
        );
      }
    );
  });
});
