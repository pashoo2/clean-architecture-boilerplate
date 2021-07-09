[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IValidateAggregate

# Interface: IValidateAggregate<Id, Type\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IValidateAggregate

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |

## Callable

### IValidateAggregate

▸ **IValidateAggregate**(`aggregateRoot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregateRoot` | [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `any`\> |

#### Returns

`void`

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/aggregates/interfaces/aggregateRootFabric.ts#L18)
