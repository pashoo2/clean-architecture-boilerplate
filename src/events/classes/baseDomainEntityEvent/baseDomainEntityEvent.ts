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
    Id extends TIdentityValueObject = TIdentityValueObject,
    Type extends string = string,
    N extends string = string,
    P extends TDomainEventPayload = undefined
  >
  extends BaseDomainEventClass<N, P>
  implements IDomainEntityEvent<Id, Type, N, P>
{
  public get entityId(): Id {
    return this.__entityId;
  }

  public get entityType(): Type {
    return this._entityType;
  }

  private __entityId: Id;

  protected abstract _entityType: Type;

  constructor(parameters: TBaseDomainEntityEventParameters<Id, P>) {
    super(parameters);
    this.__entityId = parameters.entityId;
  }

  protected _getSerializableObjectRepresentation(): IDomainEntityEventPropertiesSerialized<
    Id,
    Type,
    N,
    P
  > {
    const baseDomainEventObjectRepresentation: IDomainEventPropertiesSerialized<
      N,
      P
    > = super._getSerializableObjectRepresentation();
    return {
      ...baseDomainEventObjectRepresentation,
      entityId: this.entityId.value as ReturnType<Id['serialize']>,
      entityType: this.entityType,
    };
  }
}
