import {DOMAIN_ENTITY_EVENT_NAME_DELETE} from '@root/constants/domainEvents';
import {TEntityTypeMain} from '@root/entities/interfaces';
import {BaseDomainEntityEvent} from '@root/events/classes/baseDomainEntityEvent';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export type TDomainEvent = typeof DOMAIN_ENTITY_EVENT_NAME_DELETE;

export abstract class BaseDomainEntityDeleteEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends string
> extends BaseDomainEntityEvent<
  EntityId,
  EntityType,
  typeof DOMAIN_ENTITY_EVENT_NAME_DELETE
> {
  static eventName: TDomainEvent = DOMAIN_ENTITY_EVENT_NAME_DELETE;
  protected _name = DOMAIN_ENTITY_EVENT_NAME_DELETE;
}
