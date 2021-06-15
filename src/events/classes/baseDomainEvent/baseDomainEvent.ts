import {
  IDomainEvent,
  IDomainEventPropertiesSerialized,
  TDomainEventPayload,
} from 'src/events/interfaces/domainEvents';

export interface IBaseDomainEventParametersWithoutPayload {
  id: string;
  metaVersion?: number;
}

export interface IBaseDomainEventParameters<P extends TDomainEventPayload>
  extends IBaseDomainEventParametersWithoutPayload {
  payload: P;
}

export abstract class BaseDomainEventClass<
  N extends string = string,
  P extends TDomainEventPayload = undefined
> implements IDomainEvent<N, P>
{
  public get name(): N {
    return this._name;
  }

  public get metaVersion(): number {
    return this.__metaVersion;
  }

  public get payload(): P {
    return this.__payload;
  }

  public get id(): string {
    return this.__id;
  }

  protected abstract _name: N;

  private readonly __metaVersion: number;
  private readonly __payload: P;
  private readonly __id: string;

  constructor(
    parameters: P extends undefined
      ? IBaseDomainEventParametersWithoutPayload
      : IBaseDomainEventParameters<P>
  ) {
    const {
      id,
      payload = undefined,
      metaVersion = 1,
    } = parameters as IBaseDomainEventParameters<P>;

    if (!id) {
      throw new Error('The "identity" parameter must not be empty');
    }
    if (
      metaVersion !== null &&
      (typeof metaVersion !== 'number' || metaVersion === 0)
    ) {
      throw new Error('A meta version value must be a number');
    }

    this.__id = id;
    this.__payload = payload as P;
    this.__metaVersion = metaVersion;
  }

  public serialize(): string {
    return JSON.stringify(this._getSerializableObjectRepresentation());
  }

  protected _getSerializableObjectRepresentation(): IDomainEventPropertiesSerialized<
    N,
    P
  > {
    return {
      id: this.id,
      name: this.name,
      payload: this.payload,
      metaVersion: this.metaVersion,
    };
  }
}
