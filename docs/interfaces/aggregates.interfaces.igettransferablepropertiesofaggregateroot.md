[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IGetTransferablePropertiesOfAggregateRoot

# Interface: IGetTransferablePropertiesOfAggregateRoot<Id, Type, Instance\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IGetTransferablePropertiesOfAggregateRoot

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `Instance` | extends [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `any`\>[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `any`\> |

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

[src/aggregates/interfaces/aggregateRootFabric.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/aggregates/interfaces/aggregateRootFabric.ts#L30)
