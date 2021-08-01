[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / ICompareValuesByStrategy

# Interface: ICompareValuesByStrategy<V1, V2, S\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).ICompareValuesByStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | `V1` |
| `V2` | `V2` |
| `S` | extends [`ICompareValuesStrategy`](utilities.interfaces.icomparevaluesstrategy.md)<`S`\> |

## Callable

### ICompareValuesByStrategy

▸ **ICompareValuesByStrategy**(`firstValue`, `secondValue`, `strategy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstValue` | `V1` |
| `secondValue` | `V2` |
| `strategy` | `S` |

#### Returns

`boolean`

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L32)
