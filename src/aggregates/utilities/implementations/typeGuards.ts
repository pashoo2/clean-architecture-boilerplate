import {AGGREGATE_TYPE_PREFIX} from 'src/aggregates/constants/aggregateType';
import {TAggregateTypeMain} from 'src/aggregates/interfaces';
import {isEntityTypeStringContainsCorrectCharacters} from 'src/entities/utilities/implementations';

export function isAggregateMainType(
  typeValue: any
): typeValue is TAggregateTypeMain {
  return (
    isEntityTypeStringContainsCorrectCharacters(typeValue) &&
    typeValue.trimStart().startsWith(AGGREGATE_TYPE_PREFIX)
  );
}
