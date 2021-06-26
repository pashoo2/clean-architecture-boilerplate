import {DOMAIN_ENTITY_EVENT_NAME_DELETE} from 'src/constants/domainEvents';
import {TEntityType} from 'src/entities/interfaces';
import {BaseDomainEntityEvent} from 'src/events/classes/baseDomainEntityEvent';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TDomainEvent = typeof DOMAIN_ENTITY_EVENT_NAME_DELETE;

export abstract class BaseDomainEntityDeleteEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> extends BaseDomainEntityEvent<
  EntityId,
  EntityType,
  typeof DOMAIN_ENTITY_EVENT_NAME_DELETE
> {
  static eventName: TDomainEvent = DOMAIN_ENTITY_EVENT_NAME_DELETE;
  protected _name = DOMAIN_ENTITY_EVENT_NAME_DELETE;
}
