import {
  ENTITY_TYPE_PREFIX,
  ENTITY_TYPE_VALIDATION_REGEXP,
} from 'src/entities/constants/entityType';
import {TEntityType} from 'src/entities/interfaces';
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

export function isEntityType(typeValue: any): typeValue is TEntityType {
  return (
    isEntityTypeStringContainsCorrectCharacters(typeValue) &&
    typeValue.trim().length > ENTITY_TYPE_PREFIX.trim().length &&
    typeValue.startsWith(ENTITY_TYPE_PREFIX)
  );
}
