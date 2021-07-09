[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / ICompareObjectsWithStrategy

# Interface: ICompareObjectsWithStrategy<O1, O2, S\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).ICompareObjectsWithStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `Object` |
| `O2` | extends `Object` |
| `S` | extends [`ICompareValuesStrategy`](utilities.interfaces.icomparevaluesstrategy.md)<`S`\> |

## Callable

### ICompareObjectsWithStrategy

▸ **ICompareObjectsWithStrategy**(`objectFirst`, `objectSecond`, `compareValuesStrategy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `O1` |
| `objectSecond` | `O2` |
| `compareValuesStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

[src/utilities/interfaces/comparison/objectsComparison.ts:11](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/objectsComparison.ts#L11)
