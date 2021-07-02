import {AGGREGATE_TYPE_PREFIX} from '@root/aggregates/constants/aggregateType';
import {TAggregateTypeMain} from '@root/aggregates/interfaces';
import {isEntityTypeStringContainsCorrectCharacters} from '@root/entities/utilities/implementations';

export function isAggregateMainType(
  typeValue: any
): typeValue is TAggregateTypeMain {
  return (
    isEntityTypeStringContainsCorrectCharacters(typeValue) &&
    typeValue.trimStart().startsWith(AGGREGATE_TYPE_PREFIX)
  );
}
