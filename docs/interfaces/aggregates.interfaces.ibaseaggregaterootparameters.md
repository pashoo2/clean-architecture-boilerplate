[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IBaseAggregateRootParameters

# Interface: IBaseAggregateRootParameters<Id\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IBaseAggregateRootParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

## Hierarchy

- [`IBaseEntityParameters`](entities.interfaces.ibaseentityparameters.md)<`Id`\>

  ↳ **`IBaseAggregateRootParameters`**

## Table of contents

### Properties

- [id](aggregates.interfaces.ibaseaggregaterootparameters.md#id)
- [isDeleted](aggregates.interfaces.ibaseaggregaterootparameters.md#isdeleted)

## Properties

### id

• **id**: `Id`

#### Inherited from

[IBaseEntityParameters](entities.interfaces.ibaseentityparameters.md).[id](entities.interfaces.ibaseentityparameters.md#id)

#### Defined in

[src/entities/interfaces/baseEntity.ts:9](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/interfaces/baseEntity.ts#L9)

___

### isDeleted

• **isDeleted**: `boolean`

#### Overrides

[IBaseEntityParameters](entities.interfaces.ibaseentityparameters.md).[isDeleted](entities.interfaces.ibaseentityparameters.md#isdeleted)

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:16](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/aggregates/interfaces/aggregateRoot.ts#L16)
