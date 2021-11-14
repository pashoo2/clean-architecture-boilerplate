[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IGetTransferablePropertiesOfAggregateRoot

# Interface: IGetTransferablePropertiesOfAggregateRoot<Id, Type, Instance\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IGetTransferablePropertiesOfAggregateRoot

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `Instance` | extends [`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`Id`, `Type`, `any`\>[`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`Id`, `Type`, `any`\> |

## Callable

### IGetTransferablePropertiesOfAggregateRoot

▸ **IGetTransferablePropertiesOfAggregateRoot**(`aggregateRoot`): `TPickTransferableProperties`<`Instance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregateRoot` | `Instance` |

#### Returns

`TPickTransferableProperties`<`Instance`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:37](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L37)
