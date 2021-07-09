[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEvent

# Interface: IDomainEvent<N, P\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- `ISerializable`<`string`\>

- [`IDomainEventPropertiesWithPayload`](events.interfaces.idomaineventpropertieswithpayload.md)<`N`, `P`\>

  ↳ **`IDomainEvent`**

  ↳↳ [`IDomainEntityOrAggregateEvent`](events.interfaces.idomainentityoraggregateevent.md)

## Implemented by

- [`BaseDomainEventClass`](../classes/events.classes.basedomaineventclass.md)

## Table of contents

### Properties

- [id](events.interfaces.idomainevent.md#id)
- [metaVersion](events.interfaces.idomainevent.md#metaversion)
- [name](events.interfaces.idomainevent.md#name)
- [payload](events.interfaces.idomainevent.md#payload)

### Methods

- [serialize](events.interfaces.idomainevent.md#serialize)

## Properties

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[id](events.interfaces.idomaineventpropertieswithpayload.md#id)

#### Defined in

[src/events/interfaces/domainEvents.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L24)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[metaVersion](events.interfaces.idomaineventpropertieswithpayload.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L38)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[name](events.interfaces.idomaineventpropertieswithpayload.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L31)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[payload](events.interfaces.idomaineventpropertieswithpayload.md#payload)

#### Defined in

[src/events/interfaces/domainEvents.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L51)

## Methods

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

ISerializable.serialize

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/interfaces/serialization.ts#L12)
