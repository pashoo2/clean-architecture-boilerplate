import {DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED} from 'src/constants/domainEvents';
import {BaseDomainEntityEvent} from 'src/events/classes/baseDomainEntityEvent';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TDomainEventName = typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;

export interface IBaseDomainEntityConstructEventParameters<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string
> extends BaseDomainEntityConstructEvent<Id> {
  entityType: Type;
}

export abstract class BaseDomainEntityConstructEvent<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string
> extends BaseDomainEntityEvent<
  Id,
  Type,
  typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED
> {
  static eventName: TDomainEventName = DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
  protected _name = DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
}
