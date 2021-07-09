[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](aggregates.md) / fabrics

# Namespace: fabrics

[aggregates](aggregates.md).fabrics

## Table of contents

### Functions

- [aggregateClassFabric](aggregates.fabrics.md#aggregateclassfabric)
- [runTestsForAggregateClassFabric](aggregates.fabrics.md#runtestsforaggregateclassfabric)

## Functions

### aggregateClassFabric

▸ **aggregateClassFabric**<`Id`, `Type`, `E`\>(`__namedParameters`): `Constructor`<[`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`aggregate\_\_\_\_${string}\` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`, `E`\>[`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`IAggregateRootClassFabricParameters`](../interfaces/aggregates.interfaces.iaggregaterootclassfabricparameters.md)<`Id`, `Type`, `E`\> |

#### Returns

`Constructor`<[`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Defined in

[src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.ts#L13)

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

[src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.runTest.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.runTest.ts#L30)
