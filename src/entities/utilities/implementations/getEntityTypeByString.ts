import {ENTITY_TYPE_PREFIX} from '@root/entities/constants/entityType';
import {TEntityTypeMain} from '@root/entities/interfaces';
import {isEntityTypeStringContainsCorrectCharacters} from '@root/entities/utilities/implementations/typeGuards';

export function getEntityTypeByString<T extends string | String>(
  stringValue: T
): TEntityTypeMain<T extends string ? T : ReturnType<T['toString']>> {
  const stringTrimmed = stringValue.trim() as T extends string
    ? T
    : ReturnType<T['toString']>;
  if (!isEntityTypeStringContainsCorrectCharacters(stringTrimmed)) {
    throw new Error('The string passed contains non valid characters');
  }
  return `${ENTITY_TYPE_PREFIX}__${stringTrimmed}`;
}
