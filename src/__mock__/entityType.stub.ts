import {ENTITY_TYPE_PREFIX} from 'src/entities/constants/entityType';
import {TEntityTypeMain} from 'src/entities/interfaces';

export const ENTITY_TYPE_STUB: TEntityTypeMain<'_entity_type'> =
  `${ENTITY_TYPE_PREFIX}_entity_type` as const;
