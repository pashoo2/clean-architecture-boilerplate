import {Constructor} from 'src/interfaces/classes';
import {
  IDomainEntityEvent,
  TDomainEventPayload,
} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';
import {BaseDomainEntityEvent} from 'src/events/classes/baseDomainEntityEvent';
import {TBaseDomainEntityEventParameters} from 'src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {EDomainEntityEventType} from 'src/events/constants/eventType';

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
