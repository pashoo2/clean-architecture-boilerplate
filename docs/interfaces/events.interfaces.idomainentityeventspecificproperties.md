[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityEventSpecificProperties

# Interface: IDomainEntityEventSpecificProperties<EntityId, EntityType, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityEventSpecificProperties

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `EventType` | extends `EDomainEntityEventType` |

## Hierarchy

- **`IDomainEntityEventSpecificProperties`**

  ↳ [`IDomainEntityOrAggregateEvent`](events.interfaces.idomainentityoraggregateevent.md)

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityeventspecificproperties.md#entityid)
- [entityType](events.interfaces.idomainentityeventspecificproperties.md#entitytype)
- [eventType](events.interfaces.idomainentityeventspecificproperties.md#eventtype)

## Properties

### entityId

• `Readonly` **entityId**: `EntityId`

#### Defined in

[src/events/interfaces/domainEvents.ts:106](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L106)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Defined in

[src/events/interfaces/domainEvents.ts:107](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L107)

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Defined in

[src/events/interfaces/domainEvents.ts:108](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L108)
