import {
  ENTITY_TYPE_PREFIX,
  ENTITY_TYPE_VALIDATION_REGEXP,
} from 'src/entities/constants/entityType';
import {TEntityTypeMain} from 'src/entities/interfaces';
import {isString} from 'src/utilities/implementations/typeGuards';

export function isEntityTypeStringContainsCorrectCharacters(
  entityTypeString: string | String
): boolean {
  return (
    isString(entityTypeString) &&
    Boolean(entityTypeString) &&
    ENTITY_TYPE_VALIDATION_REGEXP.test(`${entityTypeString}`)
  );
}

export function isEntityMainType(typeValue: any): typeValue is TEntityTypeMain {
  return (
    isEntityTypeStringContainsCorrectCharacters(typeValue) &&
    typeValue.trim().length > ENTITY_TYPE_PREFIX.trim().length &&
    typeValue.startsWith(ENTITY_TYPE_PREFIX)
  );
}
