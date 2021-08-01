[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRootClassFabric

# Interface: IAggregateRootClassFabric<Id, Type, E\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRootClassFabric

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

## Callable

### IAggregateRootClassFabric

▸ **IAggregateRootClassFabric**(`parameters`): `Constructor`<[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IAggregateRootClassFabricParameters`](aggregates.interfaces.iaggregaterootclassfabricparameters.md)<`Id`, `Type`, `E`, [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>\> |

#### Returns

`Constructor`<[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:60](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/aggregates/interfaces/aggregateRootFabric.ts#L60)
