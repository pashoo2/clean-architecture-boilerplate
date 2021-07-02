[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IBaseEntityServices

# Interface: IBaseEntityServices<E\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IBaseEntityServices

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](events.interfaces.ieventslist.md) |

## Hierarchy

- **`IBaseEntityServices`**

  ↳ [`IBaseAggregateRootServices`](aggregates.interfaces.ibaseaggregaterootservices.md)

## Table of contents

### Properties

- [domainEventBus](entities.interfaces.ibaseentityservices.md#domaineventbus)
- [generateUniqueIdentifierString](entities.interfaces.ibaseentityservices.md#generateuniqueidentifierstring)

## Properties

### domainEventBus

• **domainEventBus**: [`IDomainEventBus`](events.interfaces.idomaineventbus.md)<`E`\>

#### Defined in

[src/entities/interfaces/baseEntity.ts:34](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/interfaces/baseEntity.ts#L34)

___

### generateUniqueIdentifierString

• **generateUniqueIdentifierString**: `IServiceGeneratorIdentifierUnique`

#### Defined in

[src/entities/interfaces/baseEntity.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/interfaces/baseEntity.ts#L35)
