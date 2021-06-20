import {
  BaseDomainEventClass,
  TBaseDomainEventClassParameters,
} from 'src/events/classes/baseDomainEvent/baseDomainEvent';
import {
  TDomainEventPayload,
  IDomainEntityEvent,
  IDomainEventPropertiesSerialized,
  IDomainEntityEventPropertiesSerialized,
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
  extends BaseDomainEventClass<N, P>
  implements IDomainEntityEvent<EntityId, EntityType, N, P>
{
  public get entityId(): EntityId {
    return this.__entityId;
  }

  public get entityType(): EntityType {
    return this._entityType;
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
    };
  }
}
