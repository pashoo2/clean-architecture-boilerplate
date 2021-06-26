import {DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED} from 'src/constants/domainEvents';
import {TEntityType} from 'src/entities/interfaces';
import {BaseDomainEntityEvent} from 'src/events/classes/baseDomainEntityEvent';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TDomainEventName = typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;

export interface IBaseDomainEntityConstructEventParameters<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> extends BaseDomainEntityConstructEvent<EntityId, EntityType> {
  entityType: EntityType;
}

export abstract class BaseDomainEntityConstructEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> extends BaseDomainEntityEvent<
  EntityId,
  EntityType,
  typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED
> {
  static eventName: TDomainEventName = DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
  protected _name = DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
}
