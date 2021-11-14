[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IAggregateEvent

# Interface: IAggregateEvent<EntityId, EntityType, N, P\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IAggregateEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TAggregateTypeMain`](../modules/aggregates.interfaces.md#taggregatetypemain) |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- [`IDomainEntityEvent`](events.interfaces.idomainentityevent.md)<`EntityId`, `EntityType`, `N`, `P`\>

  ↳ **`IAggregateEvent`**

## Table of contents

### Properties

- [entityId](events.interfaces.iaggregateevent.md#entityid)
- [entityType](events.interfaces.iaggregateevent.md#entitytype)
- [eventType](events.interfaces.iaggregateevent.md#eventtype)
- [id](events.interfaces.iaggregateevent.md#id)
- [metaVersion](events.interfaces.iaggregateevent.md#metaversion)
- [name](events.interfaces.iaggregateevent.md#name)
- [payload](events.interfaces.iaggregateevent.md#payload)

### Methods

- [serialize](events.interfaces.iaggregateevent.md#serialize)

## Properties

### entityId

• `Readonly` **entityId**: `EntityId`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[entityId](events.interfaces.idomainentityevent.md#entityid)

#### Defined in

[src/events/interfaces/domainEvents.ts:106](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L106)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[entityType](events.interfaces.idomainentityevent.md#entitytype)

#### Defined in

[src/events/interfaces/domainEvents.ts:107](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L107)

___

### eventType

• `Readonly` **eventType**: `ENTITY_EVENT`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[eventType](events.interfaces.idomainentityevent.md#eventtype)

#### Defined in

[src/events/interfaces/domainEvents.ts:108](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L108)

___

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[id](events.interfaces.idomainentityevent.md#id)

#### Defined in

[src/events/interfaces/domainEvents.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L24)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[metaVersion](events.interfaces.idomainentityevent.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L38)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[name](events.interfaces.idomainentityevent.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L31)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[payload](events.interfaces.idomainentityevent.md#payload)

#### Defined in

[src/events/interfaces/domainEvents.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L51)

## Methods

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[serialize](events.interfaces.idomainentityevent.md#serialize)

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/serialization.ts#L12)
