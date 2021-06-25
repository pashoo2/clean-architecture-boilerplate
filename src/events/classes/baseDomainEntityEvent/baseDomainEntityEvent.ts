import {BaseDomainEntityOrAggregateEvent} from 'src/events/classes/baseDomainEntityOrAggregateEvent';
import {TBaseDomainEventClassParameters} from 'src/events/classes/baseDomainEvent/baseDomainEvent';
import {EDomainEntityEventType} from 'src/events/constants/eventType';
import {
  TDomainEventPayload,
  IDomainEntityEvent,
} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TBaseDomainEntityEventParameters<
  Id extends TIdentityValueObject,
  P extends TDomainEventPayload
> = TBaseDomainEventClassParameters<P> & {
  entityId: Id;
};

export abstract class BaseDomainEntityEvent<
    EntityId extends TIdentityValueObject = TIdentityValueObject,
    EntityType extends string = string,
    N extends string = string,
    P extends TDomainEventPayload = undefined
  >
  extends BaseDomainEntityOrAggregateEvent<
    EntityId,
    EntityType,
    N,
    P,
    EDomainEntityEventType.ENTITY_EVENT
  >
  implements
    IDomainEntityEvent<
      EntityId,
      EntityType,
      N,
      P,
      EDomainEntityEventType.ENTITY_EVENT
    >
{
  protected _eventType = EDomainEntityEventType.ENTITY_EVENT as const;
}
