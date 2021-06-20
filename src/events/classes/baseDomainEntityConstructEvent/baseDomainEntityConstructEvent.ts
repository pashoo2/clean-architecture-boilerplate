import {DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED} from 'src/constants/domainEvents';
import {BaseDomainEntityEvent} from 'src/events/classes/baseDomainEntityEvent';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TDomainEventName = typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;

export interface IBaseDomainEntityConstructEventParameters<
  EntityId extends TIdentityValueObject = TIdentityValueObject,
  EntityType extends string = string
> extends BaseDomainEntityConstructEvent<EntityId> {
  entityType: EntityType;
}

export abstract class BaseDomainEntityConstructEvent<
  EntityId extends TIdentityValueObject = TIdentityValueObject,
  EntityType extends string = string
> extends BaseDomainEntityEvent<
  EntityId,
  EntityType,
  typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED
> {
  static eventName: TDomainEventName = DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
  protected _name = DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
}
