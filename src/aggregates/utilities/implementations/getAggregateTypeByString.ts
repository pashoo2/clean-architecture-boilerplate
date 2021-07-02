import {AGGREGATE_TYPE_PREFIX} from '@root/aggregates/constants/aggregateType';
import {TAggregateTypeMain} from '@root/aggregates/interfaces';
import {isEntityTypeStringContainsCorrectCharacters} from '@root/entities/utilities/implementations/typeGuards';

export function getAggregateTypeByString<T extends string | String>(
  stringValue: T
): TAggregateTypeMain<T extends String ? ReturnType<T['toString']> : T> {
  const stringTrimmed = stringValue.trim() as T extends String
    ? ReturnType<T['toString']>
    : T;
  if (!isEntityTypeStringContainsCorrectCharacters(stringTrimmed)) {
    throw new Error('The string passed contains non valid characters');
  }
  return `${AGGREGATE_TYPE_PREFIX}__${stringTrimmed}`;
}
