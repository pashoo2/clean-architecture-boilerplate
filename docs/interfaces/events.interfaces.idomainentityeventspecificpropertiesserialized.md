[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityEventSpecificPropertiesSerialized

# Interface: IDomainEntityEventSpecificPropertiesSerialized<EntityId, EntityType, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityEventSpecificPropertiesSerialized

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `EventType` | extends `EDomainEntityEventType` |

## Hierarchy

- **`IDomainEntityEventSpecificPropertiesSerialized`**

  ↳ [`IDomainEntityEventPropertiesSerialized`](events.interfaces.idomainentityeventpropertiesserialized.md)

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityeventspecificpropertiesserialized.md#entityid)
- [entityType](events.interfaces.idomainentityeventspecificpropertiesserialized.md#entitytype)
- [eventType](events.interfaces.idomainentityeventspecificpropertiesserialized.md#eventtype)

## Properties

### entityId

• `Readonly` **entityId**: `ReturnType`<`EntityId`[``"serialize"``]\>

#### Defined in

[src/events/interfaces/domainEvents.ts:113](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L113)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Defined in

[src/events/interfaces/domainEvents.ts:114](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L114)

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Defined in

[src/events/interfaces/domainEvents.ts:115](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L115)
