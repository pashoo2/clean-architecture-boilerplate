import {Constructor} from '@root/interfaces/classes';
import {
  IDomainEntityEvent,
  TDomainEventPayload,
} from '@root/events/interfaces/domainEvents';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';
import {BaseDomainEntityEvent} from '@root/events/classes/baseDomainEntityEvent';
import {TBaseDomainEntityEventParameters} from '@root/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {EDomainEntityEventType} from '@root/events/constants/eventType';

export interface IFabricDomainEntityEventParameters<
  EntityType extends string,
  EventName extends string
> {
  entityType: EntityType;
  eventName: EventName;
}

export function createDomainEntityEventConstructor<
  EventName extends string,
  EntityType extends string,
  EntityId extends TIdentityValueObject,
  P extends TDomainEventPayload = undefined
>({
  eventName,
  entityType,
}: IFabricDomainEntityEventParameters<EntityType, EventName>): Constructor<
  IDomainEntityEvent<
    EntityId,
    EntityType,
    EventName,
    P,
    EDomainEntityEventType.ENTITY_EVENT
  >,
  [TBaseDomainEntityEventParameters<EntityId, P>]
> {
  class DomainEntityEvent extends BaseDomainEntityEvent<
    EntityId,
    EntityType,
    EventName,
    P
  > {
    static eventName = eventName;
    protected _name = eventName;
    protected _entityType = entityType;
  }
  return DomainEntityEvent;
}
