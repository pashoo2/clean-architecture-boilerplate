import {ENTITY_TYPE_VALIDATION_REGEXP} from 'src/entities/constants/entityType';
import {getEntityTypeByString} from 'src/entities/utilities/implementations/getEntityTypeByString';
import {isEntityType} from 'src/entities/utilities/implementations/typeGuards';
import {OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR} from 'src/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from 'src/__mock__/simpleTypes.stubs';

describe('getEntityTypeByString', () => {
  it.each([
    ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
    ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
  ])('Should throw for a non string value "%p"', value => {
    expect(() => getEntityTypeByString(value as any)).toThrow();
  });
  it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(s => !s))(
    'Should throw for an empty string ""%s""',
    str => {
      expect(() => getEntityTypeByString(str as any)).toThrow();
    }
  );
  it.each(
    [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
      s => !ENTITY_TYPE_VALIDATION_REGEXP.test(String(s).trim())
    )
  )('Should throw for the string "%s" contains a non valid characters', str => {
    expect(() => getEntityTypeByString(str as any)).toThrow();
  });
  it.each(
    [...SIMPLE_TYPE_VALUES_SET_STRINGS]
      .filter(s => ENTITY_TYPE_VALIDATION_REGEXP.test(String(s).trim()))
      .concat(['0', '  0 '])
  )('Should return a valid entity type for the string "%s"', str => {
    expect(isEntityType(getEntityTypeByString(str))).toBe(true);
  });
});
