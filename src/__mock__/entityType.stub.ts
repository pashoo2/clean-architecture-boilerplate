import {ENTITY_TYPE_PREFIX} from 'src/entities/constants/entityType';
import {TEntityType} from 'src/entities/interfaces';

export const ENTITY_TYPE_STUB: TEntityType<'_entity_type'> =
  `${ENTITY_TYPE_PREFIX}_entity_type` as const;
