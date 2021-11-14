[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [repositories](../modules/repositories.md) / [interfaces](../modules/repositories.interfaces.md) / IAggregateRepositoryCRUDFabricParameters

# Interface: IAggregateRepositoryCRUDFabricParameters<Aggregate, AggregateId, AggregateType, E\>

[repositories](../modules/repositories.md).[interfaces](../modules/repositories.interfaces.md).IAggregateRepositoryCRUDFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Aggregate` | extends [`IAggregateRoot`](aggregates.interfaces.iaggregateroot.md)<`AggregateId`, `AggregateType`\> |
| `AggregateId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject)[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `AggregateType` | extends `string``string` |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`AggregateId`, `AggregateType`\>[`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`AggregateId`, `AggregateType`\> |

## Table of contents

### Properties

- [aggregateConstructor](repositories.interfaces.iaggregaterepositorycrudfabricparameters.md#aggregateconstructor)

## Properties

### aggregateConstructor

• **aggregateConstructor**: [`TAggregateRootImplementationConstructorNoServices`](../modules/aggregates.interfaces.md#taggregaterootimplementationconstructornoservices)<`AggregateId`, `AggregateType`, `E`, [`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`AggregateId`, `AggregateType`, `E`, `Aggregate`\>, [`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`AggregateId`, `AggregateType`, `E`, [`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`AggregateId`, `AggregateType`, `E`, `Aggregate`\>\>, `TEntityImplementationConstructorParametersFull`<[`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`AggregateId`, `AggregateType`, `E`, `Aggregate`\>, [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject)\>\>

Constructor of an instance of the aggregate

**`memberof`** IAggregateRepositoryCRUDFabricParameters

#### Defined in

[src/repositories/interfaces/repository.ts:139](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L139)
