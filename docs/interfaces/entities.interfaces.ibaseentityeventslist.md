[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IBaseEntityEventsList

# Interface: IBaseEntityEventsList<EntityId, EntityType\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IBaseEntityEventsList

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |

## Hierarchy

- [`TBaseEntityEventsListCommonEvents`](../modules/entities.interfaces.md#tbaseentityeventslistcommonevents)<`EntityId`, `EntityType`\>

- [`IEventsList`](events.interfaces.ieventslist.md)

  ↳ **`IBaseEntityEventsList`**

  ↳↳ [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)

## Table of contents

### Properties

- [DOMAIN\_ENTITY\_CONSTRUCTED](entities.interfaces.ibaseentityeventslist.md#domain_entity_constructed)
- [DOMAIN\_ENTITY\_DELETED](entities.interfaces.ibaseentityeventslist.md#domain_entity_deleted)

## Properties

### DOMAIN\_ENTITY\_CONSTRUCTED

• **DOMAIN\_ENTITY\_CONSTRUCTED**: [`BaseDomainEntityCreateEvent`](../classes/events.classes.basedomainentitycreateevent.md)<`EntityId`, `EntityType`\>

#### Inherited from

TBaseEntityEventsListCommonEvents.DOMAIN\_ENTITY\_CONSTRUCTED

#### Defined in

[src/entities/interfaces/baseEntity.ts:21](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/interfaces/baseEntity.ts#L21)

___

### DOMAIN\_ENTITY\_DELETED

• **DOMAIN\_ENTITY\_DELETED**: [`BaseDomainEntityDeleteEvent`](../classes/events.classes.basedomainentitydeleteevent.md)<`EntityId`, `string`\>

#### Inherited from

TBaseEntityEventsListCommonEvents.DOMAIN\_ENTITY\_DELETED

#### Defined in

[src/entities/interfaces/baseEntity.ts:17](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/interfaces/baseEntity.ts#L17)
