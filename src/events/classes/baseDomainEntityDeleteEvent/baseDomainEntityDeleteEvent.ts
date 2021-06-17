import {DOMAIN_ENTITY_EVENT_NAME_DELETE} from 'src/constants/domainEvents';
import {BaseDomainEntityEvent} from 'src/events/classes/baseDomainEntityEvent';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TDomainEvent = typeof DOMAIN_ENTITY_EVENT_NAME_DELETE;

export abstract class BaseDomainEntityDeleteEvent<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string
> extends BaseDomainEntityEvent<
  Id,
  Type,
  typeof DOMAIN_ENTITY_EVENT_NAME_DELETE
> {
  static eventName: TDomainEvent = DOMAIN_ENTITY_EVENT_NAME_DELETE;
  protected _name = DOMAIN_ENTITY_EVENT_NAME_DELETE;
}
