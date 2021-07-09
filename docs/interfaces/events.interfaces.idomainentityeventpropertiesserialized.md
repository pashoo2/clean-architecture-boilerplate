[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityEventPropertiesSerialized

# Interface: IDomainEntityEventPropertiesSerialized<EntityId, EntityType, N, P, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityEventPropertiesSerialized

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |
| `EventType` | extends `EDomainEntityEventType``EDomainEntityEventType.ENTITY_EVENT` |

## Hierarchy

- [`IDomainEntityEventSpecificPropertiesSerialized`](events.interfaces.idomainentityeventspecificpropertiesserialized.md)<`EntityId`, `EntityType`, `EventType`\>

- [`IDomainEventPropertiesSerialized`](events.interfaces.idomaineventpropertiesserialized.md)<`N`, `P`\>

  ↳ **`IDomainEntityEventPropertiesSerialized`**

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityeventpropertiesserialized.md#entityid)
- [entityType](events.interfaces.idomainentityeventpropertiesserialized.md#entitytype)
- [eventType](events.interfaces.idomainentityeventpropertiesserialized.md#eventtype)
- [id](events.interfaces.idomainentityeventpropertiesserialized.md#id)
- [metaVersion](events.interfaces.idomainentityeventpropertiesserialized.md#metaversion)
- [name](events.interfaces.idomainentityeventpropertiesserialized.md#name)
- [payload](events.interfaces.idomainentityeventpropertiesserialized.md#payload)

## Properties

### entityId

• `Readonly` **entityId**: `ReturnType`<`EntityId`[``"serialize"``]\>

#### Inherited from

[IDomainEntityEventSpecificPropertiesSerialized](events.interfaces.idomainentityeventspecificpropertiesserialized.md).[entityId](events.interfaces.idomainentityeventspecificpropertiesserialized.md#entityid)

#### Defined in

[src/events/interfaces/domainEvents.ts:116](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L116)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Inherited from

[IDomainEntityEventSpecificPropertiesSerialized](events.interfaces.idomainentityeventspecificpropertiesserialized.md).[entityType](events.interfaces.idomainentityeventspecificpropertiesserialized.md#entitytype)

#### Defined in

[src/events/interfaces/domainEvents.ts:117](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L117)

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Inherited from

[IDomainEntityEventSpecificPropertiesSerialized](events.interfaces.idomainentityeventspecificpropertiesserialized.md).[eventType](events.interfaces.idomainentityeventspecificpropertiesserialized.md#eventtype)

#### Defined in

[src/events/interfaces/domainEvents.ts:118](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L118)

___

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesSerialized](events.interfaces.idomaineventpropertiesserialized.md).[id](events.interfaces.idomaineventpropertiesserialized.md#id)

#### Defined in

[src/events/interfaces/domainEvents.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L24)

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesSerialized](events.interfaces.idomaineventpropertiesserialized.md).[metaVersion](events.interfaces.idomaineventpropertiesserialized.md#metaversion)

#### Defined in

[src/events/interfaces/domainEvents.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L38)

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesSerialized](events.interfaces.idomaineventpropertiesserialized.md).[name](events.interfaces.idomaineventpropertiesserialized.md#name)

#### Defined in

[src/events/interfaces/domainEvents.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L31)

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesSerialized](events.interfaces.idomaineventpropertiesserialized.md).[payload](events.interfaces.idomaineventpropertiesserialized.md#payload)

#### Defined in

[src/events/interfaces/domainEvents.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L51)
