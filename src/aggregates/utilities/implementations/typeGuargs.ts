import {AGGREGATE_TYPE_PREFIX} from 'src/aggregates/constants/aggregateType';
import {TAggregateType} from 'src/aggregates/interfaces';
import {isEntityType} from 'src/entities/utilities/implementations';

export function isAggregateType(typeValue: any): typeValue is TAggregateType {
  return (
    isEntityType(typeValue) &&
    typeValue.trimStart().startsWith(AGGREGATE_TYPE_PREFIX)
  );
}
