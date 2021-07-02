import {
  BaseDomainEventClass,
  TBaseDomainEventClassParameters,
} from '@root/events/classes/baseDomainEvent/baseDomainEvent';
import {EDomainEntityEventType} from '@root/events/constants/eventType';
import {
  TDomainEventPayload,
  IDomainEntityEvent,
  IDomainEntityEventPropertiesSerialized,
  IDomainEventPropertiesSerialized,
} from '@root/events/interfaces/domainEvents';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export type TBaseDomainEntityEventParameters<
  Id extends TIdentityValueObject,
  P extends TDomainEventPayload
> = TBaseDomainEventClassParameters<P> & {
  entityId: Id;
};

export abstract class BaseDomainEntityEvent<
    EntityId extends TIdentityValueObject,
    EntityType extends string,
    N extends string = string,
    P extends TDomainEventPayload = undefined
  >
  extends BaseDomainEventClass<N, P>
  implements
    IDomainEntityEvent<
      EntityId,
      EntityType,
      N,
      P,
      EDomainEntityEventType.ENTITY_EVENT
    >
{
  public get entityId(): EntityId {
    return this.__entityId;
  }

  public get entityType(): EntityType {
    return this._entityType;
  }

  public get eventType() {
    return EDomainEntityEventType.ENTITY_EVENT;
  }

  private __entityId: EntityId;

  protected abstract _entityType: EntityType;

  constructor(parameters: TBaseDomainEntityEventParameters<EntityId, P>) {
    super(parameters);
    this.__entityId = parameters.entityId;
  }

  protected _getSerializableObjectRepresentation(): IDomainEntityEventPropertiesSerialized<
    EntityId,
    EntityType,
    N,
    P
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
