import {IBaseDomainEventParameters} from 'src/events/classes/baseDomainEvent/baseDomainEvent';
import {
  TDomainEventPayload,
  IDomainEntityEvent,
  IDomainEventPropertiesSerialized,
  IDomainEntityEventPropertiesSerialized,
} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';
import {BaseDomainEvent} from 'src/events/classes/baseDomainEvent';

export interface IBaseDomainEntityEventParameters<
  Id extends TIdentityValueObject = TIdentityValueObject,
  P extends TDomainEventPayload | undefined = undefined
> extends IBaseDomainEventParameters<P> {
  entityId: Id;
}

export abstract class BaseDomainEntityEvent<
    Id extends TIdentityValueObject = TIdentityValueObject,
    Type extends string = string,
    N extends string = string,
    P extends TDomainEventPayload = undefined
  >
  extends BaseDomainEvent<N, P>
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

  constructor({
    entityId,
    ...baseDomainEventProps
  }: IBaseDomainEntityEventParameters<Id, P>) {
    super({...baseDomainEventProps});
    this.__entityId = entityId;
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
      entityId: this.entityId.serialize() as ReturnType<Id['serialize']>,
      entityType: this.entityType,
    };
  }
}
