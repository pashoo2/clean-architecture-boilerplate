[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventPropertiesWithPayload

# Interface: IDomainEventPropertiesWithPayload<N, P\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventPropertiesWithPayload

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload) |

## Hierarchy

- [`IDomainEventPropertiesWithoutPayload`](events.interfaces.idomaineventpropertieswithoutpayload.md)<`N`\>

  ↳ **`IDomainEventPropertiesWithPayload`**

  ↳↳ [`IDomainEventPropertiesSerialized`](events.interfaces.idomaineventpropertiesserialized.md)

  ↳↳ [`IDomainEvent`](events.interfaces.idomainevent.md)

## Table of contents

### Properties

- [id](events.interfaces.idomaineventpropertieswithpayload.md#id)
- [metaVersion](events.interfaces.idomaineventpropertieswithpayload.md#metaversion)
- [name](events.interfaces.idomaineventpropertieswithpayload.md#name)
- [payload](events.interfaces.idomaineventpropertieswithpayload.md#payload)

## Properties

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[id](events.interfaces.idomaineventpropertieswithoutpayload.md#id)

#### Defined in

[src/events/interfaces/domainEvents.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L24)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[metaVersion](events.interfaces.idomaineventpropertieswithoutpayload.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L38)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[name](events.interfaces.idomaineventpropertieswithoutpayload.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L31)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Defined in

[src/events/interfaces/domainEvents.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L51)
