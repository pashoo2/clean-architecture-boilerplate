[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / ICompareAnyByStrategy

# Interface: ICompareAnyByStrategy<V1, V2, S\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).ICompareAnyByStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | extends `any` |
| `V2` | extends `any` |
| `S` | extends [`ICompareValuesStrategy`](utilities.interfaces.icomparevaluesstrategy.md)<`S`\> |

## Callable

### ICompareAnyByStrategy

▸ **ICompareAnyByStrategy**(`anyTypeValue1`, `anyTypeValue2`, `strategy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anyTypeValue1` | `V1` |
| `anyTypeValue2` | `V2` |
| `strategy` | `S` |

#### Returns

`boolean`

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:10](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L10)
