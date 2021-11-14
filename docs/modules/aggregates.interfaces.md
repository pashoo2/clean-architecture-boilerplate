[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](aggregates.md) / interfaces

# Namespace: interfaces

[aggregates](aggregates.md).interfaces

## Table of contents

### Interfaces

- [IAggregateRoot](../interfaces/aggregates.interfaces.iaggregateroot.md)
- [IAggregateRootClassFabric](../interfaces/aggregates.interfaces.iaggregaterootclassfabric.md)
- [IAggregateRootClassFabricParameters](../interfaces/aggregates.interfaces.iaggregaterootclassfabricparameters.md)
- [IAggregateRootImplementationMethods](../interfaces/aggregates.interfaces.iaggregaterootimplementationmethods.md)
- [IBaseAggregateRootEventsList](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)
- [IBaseAggregateRootParameters](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)
- [IBaseAggregateRootServices](../interfaces/aggregates.interfaces.ibaseaggregaterootservices.md)
- [IGetTransferablePropertiesOfAggregateRoot](../interfaces/aggregates.interfaces.igettransferablepropertiesofaggregateroot.md)
- [IValidateAggregate](../interfaces/aggregates.interfaces.ivalidateaggregate.md)

### Type aliases

- [TAggregateRootImplementation](aggregates.interfaces.md#taggregaterootimplementation)
- [TAggregateRootImplementationConstructorNoServices](aggregates.interfaces.md#taggregaterootimplementationconstructornoservices)
- [TAggregateTypeMain](aggregates.interfaces.md#taggregatetypemain)

## Type aliases

### TAggregateRootImplementation

Ƭ **TAggregateRootImplementation**<`Id`, `Type`, `E`, `Aggregate`\>: `Aggregate` & [`TEntityImplementation`](entities.interfaces.md#tentityimplementation)<`Id`, `Type`, `E`\> & [`IAggregateRootImplementationMethods`](../interfaces/aggregates.interfaces.iaggregaterootimplementationmethods.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\>[`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |
| `Aggregate` | extends [`IAggregateRoot`](../interfaces/aggregates.interfaces.iaggregateroot.md)<`Id`, `Type`\>[`IAggregateRoot`](../interfaces/aggregates.interfaces.iaggregateroot.md)<`Id`, `Type`\> |

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRoot.ts#L41)

___

### TAggregateRootImplementationConstructorNoServices

Ƭ **TAggregateRootImplementationConstructorNoServices**<`Id`, `Type`, `E`, `AggregateRoot`, `AggregateRootImplementation`, `ConstructorParameters`\>: `Constructor`<`AggregateRootImplementation`, [`ConstructorParameters`]\>

A constructor of an instance of the entity, which doesn't require
services as a parameter

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |
| `AggregateRoot` | extends [`IAggregateRoot`](../interfaces/aggregates.interfaces.iaggregateroot.md)<`Id`, `Type`\>[`IAggregateRoot`](../interfaces/aggregates.interfaces.iaggregateroot.md)<`Id`, `Type`\> |
| `AggregateRootImplementation` | extends [`TAggregateRootImplementation`](aggregates.interfaces.md#taggregaterootimplementation)<`Id`, `Type`, `E`, `AggregateRoot`\>[`TAggregateRootImplementation`](aggregates.interfaces.md#taggregaterootimplementation)<`Id`, `Type`, `E`, `AggregateRoot`\> |
| `ConstructorParameters` | extends `TEntityImplementationConstructorParametersFull`<`AggregateRoot`\>`TEntityImplementationConstructorParametersFull`<`AggregateRoot`\> |

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:78](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L78)

___

### TAggregateTypeMain

Ƭ **TAggregateTypeMain**<`T`\>: \`${typeof AGGREGATE\_TYPE\_PREFIX}\_\_${T}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string``string` |

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:11](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRoot.ts#L11)
