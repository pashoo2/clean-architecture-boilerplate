import {AGGREGATE_TYPE_PREFIX} from 'src/aggregates/constants/aggregateType';
import {isAggregateType} from 'src/aggregates/utilities/implementations/typeGuargs';
import {isEntityType} from 'src/entities/utilities/implementations';
import {OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR} from 'src/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from 'src/__mock__/simpleTypes.stubs';

describe('Aggregates utilities type guards', () => {
  describe('isAggregateType', () => {
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
    ])('Should return false for a non string value %p', str => {
      expect(isAggregateType(str)).toBe(false);
    });
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
        str => !str.includes(AGGREGATE_TYPE_PREFIX)
      )
    )(
      `Should return false for the string %s that is not prefixed with ${AGGREGATE_TYPE_PREFIX}`,
      str => {
        expect(isAggregateType(str)).toBe(false);
      }
    );
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(str => !isEntityType(str))
    )(
      'Should return false for the string %s which is not a valid entity type',
      str => {
        expect(isAggregateType(str)).toBe(false);
      }
    );
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(isEntityType))(
      `Should return true for the string %s prefixed with the ${AGGREGATE_TYPE_PREFIX}`,
      str => {
        expect(isAggregateType(`${AGGREGATE_TYPE_PREFIX}${str}`)).toBe(true);
      }
    );
  });
});
