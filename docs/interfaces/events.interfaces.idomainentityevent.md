[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityEvent

# Interface: IDomainEntityEvent<EntityId, EntityType, N, P, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |
| `EventType` | extends `EDomainEntityEventType.ENTITY_EVENT``EDomainEntityEventType.ENTITY_EVENT` |

## Hierarchy

- [`IDomainEntityOrAggregateEvent`](events.interfaces.idomainentityoraggregateevent.md)<`EntityId`, `EntityType`, `N`, `P`, `EventType`\>

  ↳ **`IDomainEntityEvent`**

  ↳↳ [`IAggregateEvent`](events.interfaces.iaggregateevent.md)

## Implemented by

- [`BaseDomainEntityEvent`](../classes/events.classes.basedomainentityevent.md)

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityevent.md#entityid)
- [entityType](events.interfaces.idomainentityevent.md#entitytype)
- [eventType](events.interfaces.idomainentityevent.md#eventtype)
- [id](events.interfaces.idomainentityevent.md#id)
- [metaVersion](events.interfaces.idomainentityevent.md#metaversion)
- [name](events.interfaces.idomainentityevent.md#name)
- [payload](events.interfaces.idomainentityevent.md#payload)

### Methods

- [serialize](events.interfaces.idomainentityevent.md#serialize)

## Properties

### entityId

• `Readonly` **entityId**: `EntityId`

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[entityId](events.interfaces.idomainentityoraggregateevent.md#entityid)

#### Defined in

[src/events/interfaces/domainEvents.ts:106](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L106)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[entityType](events.interfaces.idomainentityoraggregateevent.md#entitytype)

#### Defined in

[src/events/interfaces/domainEvents.ts:107](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L107)

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[eventType](events.interfaces.idomainentityoraggregateevent.md#eventtype)

#### Defined in

[src/events/interfaces/domainEvents.ts:108](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L108)

___

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[id](events.interfaces.idomainentityoraggregateevent.md#id)

#### Defined in

[src/events/interfaces/domainEvents.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L24)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[metaVersion](events.interfaces.idomainentityoraggregateevent.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L38)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[name](events.interfaces.idomainentityoraggregateevent.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L31)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[payload](events.interfaces.idomainentityoraggregateevent.md#payload)

#### Defined in

[src/events/interfaces/domainEvents.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L51)

## Methods

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IDomainEntityOrAggregateEvent](events.interfaces.idomainentityoraggregateevent.md).[serialize](events.interfaces.idomainentityoraggregateevent.md#serialize)

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/interfaces/serialization.ts#L12)
