import {
  BaseDomainEntityNoPayloadEvent,
  IBaseDomainEntityNoPayloadEventParameters,
} from 'src/events/classes/baseDomainEntityNoPayloadEvent/baseDomainEntityNoPayloadEvent';
import {Constructor} from 'src/interfaces/classes';
import {IDomainEntityEvent} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IFabricDomainEntityEventParameters<
  EntityType extends string,
  EventName extends string
> {
  entityType: EntityType;
  eventName: EventName;
}

export function createDomainEntityEventConstructor<
  EntityId extends TIdentityValueObject,
  EntityType extends string,
  EventName extends string
>({
  eventName,
  entityType,
}: IFabricDomainEntityEventParameters<EntityType, EventName>): Constructor<
  IDomainEntityEvent<EntityId, EntityType, EventName>,
  [IBaseDomainEntityNoPayloadEventParameters<EntityId>]
> {
  class DomainEntityEvent extends BaseDomainEntityNoPayloadEvent<
    EntityId,
    EntityType,
    EventName
  > {
    static eventName = eventName;
    protected _name = eventName;
    protected _entityType = entityType;
  }
  return DomainEntityEvent;
}
