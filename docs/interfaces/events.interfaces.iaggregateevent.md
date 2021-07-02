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

[src/events/interfaces/domainEvents.ts:103](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L103)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[entityType](events.interfaces.idomainentityevent.md#entitytype)

#### Defined in

[src/events/interfaces/domainEvents.ts:104](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L104)

___

### eventType

• `Readonly` **eventType**: `ENTITY_EVENT`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[eventType](events.interfaces.idomainentityevent.md#eventtype)

#### Defined in

[src/events/interfaces/domainEvents.ts:105](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L105)

___

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[id](events.interfaces.idomainentityevent.md#id)

#### Defined in

[src/events/interfaces/domainEvents.ts:21](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L21)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[metaVersion](events.interfaces.idomainentityevent.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L35)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[name](events.interfaces.idomainentityevent.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:28](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L28)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[payload](events.interfaces.idomainentityevent.md#payload)

#### Defined in

[src/events/interfaces/domainEvents.ts:48](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L48)

## Methods

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[serialize](events.interfaces.idomainentityevent.md#serialize)

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/interfaces/serialization.ts#L12)
