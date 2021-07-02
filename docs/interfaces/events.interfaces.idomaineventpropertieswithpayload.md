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

[src/events/interfaces/domainEvents.ts:21](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L21)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[metaVersion](events.interfaces.idomaineventpropertieswithoutpayload.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L35)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[name](events.interfaces.idomaineventpropertieswithoutpayload.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:28](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L28)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Defined in

[src/events/interfaces/domainEvents.ts:48](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L48)
