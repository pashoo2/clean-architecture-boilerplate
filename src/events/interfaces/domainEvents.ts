import {TAggregateTypeMain} from '@root/aggregates/interfaces';
import {TEntityTypeMain} from '@root/entities/interfaces';
import {EDomainEntityEventType} from '@root/events/constants/eventType';
import {TSimpleType} from '@root/interfaces/common';
import {
  ISerializable,
  TSerializableValue,
} from '@root/interfaces/serialization';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

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

export type TDomainEventFailedNameForDomainEventName<EventName extends string> =
  `failed::${EventName}`;

export type TDomainEventFailedName<E extends IDomainEvent> =
  TDomainEventFailedNameForDomainEventName<E['name']>;

export interface IDomainEventFailed<E extends IDomainEvent> {
  name: TDomainEventFailedName<E>;
  failedEvent: E;
  error: Error;
}

export interface IDomainEventListener<DE extends IDomainEvent> {
  (event: DE): void;
}

export interface IDomainFailedEventListener<DE extends IDomainEvent> {
  (failedEvent: IDomainEventFailed<DE>): void;
}

export interface IDomainAllEventsListener<DE extends IDomainEvent>
  extends IDomainEventListener<DE>,
    IDomainFailedEventListener<DE> {}

export interface IDomainEntityEventSpecificProperties<
  EntityId extends TIdentityValueObject,
  EntityType extends string,
  EventType extends EDomainEntityEventType
> {
  readonly entityId: EntityId;
  readonly entityType: EntityType;
  readonly eventType: EventType;
}

export interface IDomainEntityEventSpecificPropertiesSerialized<
  EntityId extends TIdentityValueObject,
  EntityType extends string,
  EventType extends EDomainEntityEventType
> {
  readonly entityId: ReturnType<EntityId['serialize']>;
  readonly entityType: EntityType;
  readonly eventType: EventType;
}

export interface IDomainEntityEventPropertiesSerialized<
  EntityId extends TIdentityValueObject,
  EntityType extends string,
  N extends string = string,
  P extends TDomainEventPayload = undefined,
  EventType extends EDomainEntityEventType = EDomainEntityEventType.ENTITY_EVENT
> extends IDomainEntityEventSpecificPropertiesSerialized<
      EntityId,
      EntityType,
      EventType
    >,
    IDomainEventPropertiesSerialized<N, P> {}

export interface IDomainEntityOrAggregateEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends string,
  N extends string = string,
  P extends TDomainEventPayload = undefined,
  EventType extends EDomainEntityEventType = EDomainEntityEventType
> extends IDomainEvent<N, P>,
    IDomainEntityEventSpecificProperties<EntityId, EntityType, EventType> {}

export interface IDomainEntityEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends string,
  N extends string = string,
  P extends TDomainEventPayload = undefined,
  EventType extends EDomainEntityEventType.ENTITY_EVENT = EDomainEntityEventType.ENTITY_EVENT
> extends IDomainEntityOrAggregateEvent<
    EntityId,
    EntityType,
    N,
    P,
    EventType
  > {}

export interface IAggregateEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends TAggregateTypeMain,
  N extends string = string,
  P extends TDomainEventPayload = undefined
> extends IDomainEntityEvent<EntityId, EntityType, N, P> {}
