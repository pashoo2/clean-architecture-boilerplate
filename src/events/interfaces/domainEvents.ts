import {TSimpleType} from 'src/interfaces/common';
import {ISerializable, TSerializableValue} from 'src/interfaces/serialization';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IDomainEventPayloadKeyValue {
  [key: string]: TSimpleType | IDomainEventPayloadKeyValue;
}

export type TDomainEventPayload = TSerializableValue;

export interface IDomainEventPropertiesWithoutPayload<N extends string> {
  /**
   * A unique identifier of an event
   *
   * @type {string}
   * @memberof IDomainEvent
   */
  readonly id: string;
  /**
   * A name of the event
   *
   * @type {N}
   * @memberof IDomainEvent
   */
  readonly name: N;
  /**
   * Version of the event format
   *
   * @type {number}
   * @memberof IDomainEvent
   */
  readonly metaVersion: number;
}

export interface IDomainEventPropertiesWithPayload<
  N extends string,
  P extends TDomainEventPayload
> extends IDomainEventPropertiesWithoutPayload<N> {
  /**
   * Payload of the event
   *
   * @type {P}
   * @memberof IDomainEvent
   */
  readonly payload: P;
}

export type TDomainEventProperties<
  N extends string,
  P extends TDomainEventPayload
> = P extends undefined | void | never
  ? IDomainEventPropertiesWithoutPayload<N>
  : IDomainEventPropertiesWithPayload<N, P>;

export interface IDomainEventPropertiesSerialized<
  N extends string = string,
  P extends TDomainEventPayload = undefined
> extends IDomainEventPropertiesWithPayload<N, P> {}

export interface IDomainEvent<
  N extends string = string,
  P extends TDomainEventPayload = undefined
> extends ISerializable<string>,
    IDomainEventPropertiesWithPayload<N, P> {}

export type TDomainEvent<
  N extends string = string,
  P extends TDomainEventPayload = undefined
> = ISerializable<string> & TDomainEventProperties<N, P>;

export interface IDomainEventFailed<E extends IDomainEvent> {
  name: `failed::${E['name']}`;
  failedEvent: E;
  error: Error;
}

export interface IDomainEventListener<DE extends IDomainEvent> {
  (event: DE): void;
}

export interface IDomainFailedEventListener<DE extends IDomainEvent> {
  (failedEvent: IDomainEventFailed<DE>): void;
}

export interface IDomainEntityEventSpecificProperties<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string
> {
  readonly entityId: Id;
  readonly entityType: Type;
}

export interface IDomainEntityEventSpecificPropertiesSerialized<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string
> {
  readonly entityId: ReturnType<Id['serialize']>;
  readonly entityType: Type;
}

export interface IDomainEntityEventPropertiesSerialized<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string,
  N extends string = string,
  P extends TDomainEventPayload = undefined
> extends IDomainEntityEventSpecificPropertiesSerialized<Id, Type>,
    IDomainEventPropertiesSerialized<N, P> {}

export interface IDomainEntityEvent<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string,
  N extends string = string,
  P extends TDomainEventPayload = undefined
> extends IDomainEvent<N, P>,
    IDomainEntityEventSpecificProperties<Id, Type> {}
