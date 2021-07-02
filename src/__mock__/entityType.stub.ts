import {AGGREGATE_TYPE_PREFIX} from '@root/aggregates/constants/aggregateType';
import {TAggregateTypeMain} from '@root/aggregates/interfaces';
import {ENTITY_TYPE_PREFIX} from '@root/entities/constants/entityType';
import {TEntityTypeMain} from '@root/entities/interfaces';

export const ENTITY_TYPE_STUB: TEntityTypeMain<'entity_type'> =
  `${ENTITY_TYPE_PREFIX}__entity_type` as const;

export const AGGREGATE_TYPE_STUB: TAggregateTypeMain<'aggregate_type'> =
  `${AGGREGATE_TYPE_PREFIX}__aggregate_type` as const;
