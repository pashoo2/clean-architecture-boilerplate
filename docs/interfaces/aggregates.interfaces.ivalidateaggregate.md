[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IValidateAggregate

# Interface: IValidateAggregate<Id, Type, Instance\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IValidateAggregate

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `Instance` | extends [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `any`\>[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `any`\> |

## Callable

### IValidateAggregate

▸ **IValidateAggregate**(`aggregateRoot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregateRoot` | `Instance` |

#### Returns

`void`

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:23](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/aggregates/interfaces/aggregateRootFabric.ts#L23)
