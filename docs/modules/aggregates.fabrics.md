[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](aggregates.md) / fabrics

# Namespace: fabrics

[aggregates](aggregates.md).fabrics

## Table of contents

### Functions

- [aggregateClassFabric](aggregates.fabrics.md#aggregateclassfabric)
- [runTestsForAggregateClassFabric](aggregates.fabrics.md#runtestsforaggregateclassfabric)

## Functions

### aggregateClassFabric

▸ **aggregateClassFabric**<`Id`, `Type`, `E`, `Instance`, `Params`\>(`__namedParameters`): `Constructor`<`Instance`, [`Params`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`aggregate\_\_\_\_${string}\` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`, `E`\>[`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |
| `Instance` | extends [`IAggregateRoot`](../interfaces/aggregates.interfaces.iaggregateroot.md)<`Id`, `Type`, `Instance`\> & [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`, `Instance`\> & `IComparable`<[`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\>, `Instance`\> & `ITransferable`<`Instance`\> & [`IEntityImplementationMethods`](../interfaces/entities.interfaces.ientityimplementationmethods.md)<`Id`, `Type`, `E`, `Instance`\> & [`IAggregateRootImplementationMethods`](../interfaces/aggregates.interfaces.iaggregaterootimplementationmethods.md)<`Instance`\>[`TAggregateRootImplementation`](aggregates.interfaces.md#taggregaterootimplementation)<`Id`, `Type`, `E`, [`IAggregateRoot`](../interfaces/aggregates.interfaces.iaggregateroot.md)<`Id`, `Type`\>\> |
| `Params` | extends [`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`, `Params`\>[`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`IAggregateRootClassFabricParameters`](../interfaces/aggregates.interfaces.iaggregaterootclassfabricparameters.md)<`Id`, `Type`, `E`, `Instance`\> |

#### Returns

`Constructor`<`Instance`, [`Params`]\>

#### Defined in

[src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.ts#L13)

___

### runTestsForAggregateClassFabric

▸ **runTestsForAggregateClassFabric**(`aggregateClassFabric`, `testName?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aggregateClassFabric` | [`IAggregateRootClassFabric`](../interfaces/aggregates.interfaces.iaggregaterootclassfabric.md)<[`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject), [`TAggregateTypeMain`](aggregates.interfaces.md#taggregatetypemain), `TAggregateTestClassEventsList`\> | `undefined` |
| `testName` | `string` | `''` |

#### Returns

`void`

#### Defined in

[src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.runTest.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.runTest.ts#L30)
