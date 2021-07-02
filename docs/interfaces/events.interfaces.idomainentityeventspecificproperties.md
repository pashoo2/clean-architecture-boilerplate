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

[src/events/interfaces/domainEvents.ts:103](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L103)

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Defined in

[src/events/interfaces/domainEvents.ts:104](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L104)

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Defined in

[src/events/interfaces/domainEvents.ts:105](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L105)
