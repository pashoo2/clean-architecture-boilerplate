import {getAggregateTypeByString} from '@root/aggregates/utilities/implementations/getAggregateTypeByString';
import {isAggregateMainType} from '@root/aggregates/utilities/implementations/typeGuards';
import {ENTITY_TYPE_VALIDATION_REGEXP} from '@root/entities/constants/entityType';
import {OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR} from '@root/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from '@root/__mock__/simpleTypes.stubs';

describe('getAggregateTypeByString', () => {
  it.each([
    ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
    ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
  ])('Should throw for a non string value "%p"', value => {
    expect(() => getAggregateTypeByString(value as any)).toThrow();
  });
  it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(s => !s))(
    'Should throw for an empty string ""%s""',
    str => {
      expect(() => getAggregateTypeByString(str as any)).toThrow();
    }
  );
  it.each(
    [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
      s => !ENTITY_TYPE_VALIDATION_REGEXP.test(String(s).trim())
    )
  )('Should throw for the string "%s" contains a non valid characters', str => {
    expect(() => getAggregateTypeByString(str as any)).toThrow();
  });
  it.each(
    [...SIMPLE_TYPE_VALUES_SET_STRINGS]
      .filter(s => ENTITY_TYPE_VALIDATION_REGEXP.test(String(s).trim()))
      .concat(['0', '  0 '])
  )('Should return a valid entity type for the string "%s"', str => {
    expect(isAggregateMainType(getAggregateTypeByString(str))).toBe(true);
  });
});
