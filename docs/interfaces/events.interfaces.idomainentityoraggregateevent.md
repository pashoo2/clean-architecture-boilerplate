[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityOrAggregateEvent

# Interface: IDomainEntityOrAggregateEvent<EntityId, EntityType, N, P, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityOrAggregateEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |
| `EventType` | extends `EDomainEntityEventType``EDomainEntityEventType` |

## Hierarchy

- [`IDomainEvent`](events.interfaces.idomainevent.md)<`N`, `P`\>

- [`IDomainEntityEventSpecificProperties`](events.interfaces.idomainentityeventspecificproperties.md)<`EntityId`, `EntityType`, `EventType`\>

  ↳ **`IDomainEntityOrAggregateEvent`**

  ↳↳ [`IDomainEntityEvent`](events.interfaces.idomainentityevent.md)

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityoraggregateevent.md#entityid)
- [entityType](events.interfaces.idomainentityoraggregateevent.md#entitytype)
- [eventType](events.interfaces.idomainentityoraggregateevent.md#eventtype)
- [id](events.interfaces.idomainentityoraggregateevent.md#id)
- [metaVersion](events.interfaces.idomainentityoraggregateevent.md#metaversion)
- [name](events.interfaces.idomainentityoraggregateevent.md#name)
- [payload](events.interfaces.idomainentityoraggregateevent.md#payload)

### Methods

- [serialize](events.interfaces.idomainentityoraggregateevent.md#serialize)

## Properties

### entityId

• `Readonly` **entityId**: `EntityId`

#### Inherited from

[IDomainEntityEventSpecificProperties](events.interfaces.idomainentityeventspecificproperties.md).[entityId](events.interfaces.idomainentityeventspecificproperties.md#entityid)

#### Defined in

[src/events/interfaces/domainEvents.ts:103](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L103)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Inherited from

[IDomainEntityEventSpecificProperties](events.interfaces.idomainentityeventspecificproperties.md).[entityType](events.interfaces.idomainentityeventspecificproperties.md#entitytype)

#### Defined in

[src/events/interfaces/domainEvents.ts:104](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L104)

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Inherited from

[IDomainEntityEventSpecificProperties](events.interfaces.idomainentityeventspecificproperties.md).[eventType](events.interfaces.idomainentityeventspecificproperties.md#eventtype)

#### Defined in

[src/events/interfaces/domainEvents.ts:105](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L105)

___

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[id](events.interfaces.idomainevent.md#id)

#### Defined in

[src/events/interfaces/domainEvents.ts:21](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L21)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[metaVersion](events.interfaces.idomainevent.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L35)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[name](events.interfaces.idomainevent.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:28](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L28)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[payload](events.interfaces.idomainevent.md#payload)

#### Defined in

[src/events/interfaces/domainEvents.ts:48](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L48)

## Methods

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[serialize](events.interfaces.idomainevent.md#serialize)

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/interfaces/serialization.ts#L12)
