// TODO - implement a class which takes an unique id generator as a second parameter
// and do not accept an identity as an event parameter
import {
  IDomainEvent,
  IDomainEventPropertiesSerialized,
  TDomainEventPayload,
} from 'src/events/interfaces/domainEvents';

export interface IBaseDomainEventParameters<
  P extends TDomainEventPayload = TDomainEventPayload
> {
  id: string;
  payload: P;
  version?: number;
}

export interface IBaseDomainEventClassServices {
  getUniqueIdentifierString(): string;
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
    return this.__version;
  }

  public get payload(): P {
    return this.__payload;
  }

  public get id(): string {
    return this.__id;
  }

  protected abstract _name: N;

  private __version: number;
  private __payload: P;
  private __id: string;

  constructor(
    {
      id,
      payload,
      version = 1,
    }: P extends never
      ? IBaseDomainEventParameters
      : IBaseDomainEventParameters<P>,
    {getUniqueIdentifierString}: IBaseDomainEventClassServices
  ) {
    this.__version = version;
    this.__id = id;
    this.__payload = payload as P;
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
      version: this.version,
      name: this.name,
      payload: this.payload,
    };
  }
}
