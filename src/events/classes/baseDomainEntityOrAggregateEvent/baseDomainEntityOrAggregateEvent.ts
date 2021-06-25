import {TEntityType} from 'src/entities/interfaces';
import {
  BaseDomainEventClass,
  TBaseDomainEventClassParameters,
} from 'src/events/classes/baseDomainEvent/baseDomainEvent';
import {EDomainEntityEventType} from 'src/events/constants/eventType';
import {
  TDomainEventPayload,
  IDomainEventPropertiesSerialized,
  IDomainEntityEventPropertiesSerialized,
  IDomainEntityOrAggregateEvent,
} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TBaseDomainEntityOrAggregateEventParameters<
  Id extends TIdentityValueObject,
  P extends TDomainEventPayload
> = TBaseDomainEventClassParameters<P> & {
  entityId: Id;
};

export abstract class BaseDomainEntityOrAggregateEvent<
    EntityId extends TIdentityValueObject,
    EntityType extends TEntityType,
    N extends string = string,
    P extends TDomainEventPayload = undefined,
    EventType extends EDomainEntityEventType = EDomainEntityEventType
  >
  extends BaseDomainEventClass<N, P>
  implements
    IDomainEntityOrAggregateEvent<EntityId, EntityType, N, P, EventType>
{
  public get entityId(): EntityId {
    return this.__entityId;
  }

  public get entityType(): EntityType {
    return this._entityType;
  }

  public get eventType(): EventType {
    return this._eventType;
  }

  private __entityId: EntityId;

  protected abstract _entityType: EntityType;

  protected abstract _eventType: EventType;

  constructor(
    parameters: TBaseDomainEntityOrAggregateEventParameters<EntityId, P>
  ) {
    super(parameters);
    this.__entityId = parameters.entityId;
  }

  protected _getSerializableObjectRepresentation(): IDomainEntityEventPropertiesSerialized<
    EntityId,
    EntityType,
    N,
    P,
    EventType
  > {
    const baseDomainEventObjectRepresentation: IDomainEventPropertiesSerialized<
      N,
      P
    > = super._getSerializableObjectRepresentation();
    return {
      ...baseDomainEventObjectRepresentation,
      entityId: this.entityId.value as ReturnType<EntityId['serialize']>,
      entityType: this.entityType,
      eventType: this.eventType,
    };
  }
}
