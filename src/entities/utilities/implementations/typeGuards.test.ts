import {
  ENTITY_TYPE_PREFIX,
  ENTITY_TYPE_VALIDATION_REGEXP,
} from 'src/entities/constants/entityType';
import {
  isEntityMainType,
  isEntityTypeStringContainsCorrectCharacters,
} from 'src/entities/utilities/implementations/typeGuards';
import {OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR} from 'src/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from 'src/__mock__/simpleTypes.stubs';

describe('Entities utilities type guards', () => {
  describe('isEntityTypeStringContainsCorrectCharacters', () => {
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
    ])('Should return false for a non string value %p', str => {
      expect(isEntityTypeStringContainsCorrectCharacters(str)).toBe(false);
    });
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(s => !s))(
      'Should return false for empty string ""%s""',
      str => {
        expect(isEntityTypeStringContainsCorrectCharacters(str)).toBe(false);
      }
    );
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS]
        .filter(s => ENTITY_TYPE_VALIDATION_REGEXP.test(String(s)))
        .concat('0')
    )('Should return true for the string "%s"', str => {
      expect(isEntityTypeStringContainsCorrectCharacters(str)).toBe(true);
    });
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
        s => !ENTITY_TYPE_VALIDATION_REGEXP.test(String(s))
      )
    )('Should return false for the string "%s"', str => {
      expect(isEntityTypeStringContainsCorrectCharacters(str)).toBe(false);
    });
  });
  describe('isEntityType', () => {
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
    ])('Should return false for a non string value %p', str => {
      expect(isEntityMainType(str)).toBe(false);
    });
    it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(s => !s))(
      'Should return false for empty string "%s"',
      str => {
        expect(isEntityMainType(str)).toBe(false);
      }
    );
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS, 'stringWith aSpace'].filter(
        s => !isEntityTypeStringContainsCorrectCharacters(s)
      )
    )(
      'Should return false for the string contains a characters prohibited "%s"',
      str => {
        expect(isEntityMainType(str)).toBe(false);
      }
    );
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS].filter(
        s =>
          s &&
          isEntityTypeStringContainsCorrectCharacters(s) &&
          !s.startsWith(ENTITY_TYPE_PREFIX)
      )
    )(
      `Should return false for the string "%s" not prefixed with the "${ENTITY_TYPE_PREFIX}"`,
      str => {
        expect(isEntityMainType(str)).toBe(false);
      }
    );
    it(`Should return "false" for a string which consists of only the prefix "${ENTITY_TYPE_PREFIX}"`, () => {
      expect(isEntityMainType(ENTITY_TYPE_PREFIX)).toBe(false);
      expect(isEntityMainType(`  ${ENTITY_TYPE_PREFIX}   `)).toBe(false);
    });
    it.each(
      [...SIMPLE_TYPE_VALUES_SET_STRINGS]
        .filter(s => isEntityTypeStringContainsCorrectCharacters(s))
        .concat('0')
    )(
      `Should return true for the string "%s" prefixed with the "${ENTITY_TYPE_PREFIX}"`,
      str => {
        expect(isEntityMainType(`${ENTITY_TYPE_PREFIX}_${str}`)).toBe(true);
      }
    );
  });
});
