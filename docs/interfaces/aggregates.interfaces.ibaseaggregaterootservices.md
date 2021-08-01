[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IBaseAggregateRootServices

# Interface: IBaseAggregateRootServices<E\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IBaseAggregateRootServices

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject), `string`\> |

## Hierarchy

- [`IBaseEntityServices`](entities.interfaces.ibaseentityservices.md)<`E`\>

  ↳ **`IBaseAggregateRootServices`**

## Table of contents

### Properties

- [domainEventBus](aggregates.interfaces.ibaseaggregaterootservices.md#domaineventbus)
- [generateUniqueIdentifierString](aggregates.interfaces.ibaseaggregaterootservices.md#generateuniqueidentifierstring)

## Properties

### domainEventBus

• **domainEventBus**: [`IDomainEventBus`](events.interfaces.idomaineventbus.md)<`E`\>

#### Inherited from

[IBaseEntityServices](entities.interfaces.ibaseentityservices.md).[domainEventBus](entities.interfaces.ibaseentityservices.md#domaineventbus)

#### Defined in

[src/entities/interfaces/baseEntity.ts:34](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/entities/interfaces/baseEntity.ts#L34)

___

### generateUniqueIdentifierString

• **generateUniqueIdentifierString**: `IServiceGeneratorIdentifierUnique`

#### Inherited from

[IBaseEntityServices](entities.interfaces.ibaseentityservices.md).[generateUniqueIdentifierString](entities.interfaces.ibaseentityservices.md#generateuniqueidentifierstring)

#### Defined in

[src/entities/interfaces/baseEntity.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/entities/interfaces/baseEntity.ts#L35)
