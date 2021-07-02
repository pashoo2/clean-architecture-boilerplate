[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](utilities.md) / [utilities](utilities.utilities-1.md) / comparison

# Namespace: comparison

[utilities](utilities.md).[utilities](utilities.utilities-1.md).comparison

## Table of contents

### Variables

- [deepComparisonStrategy](utilities.utilities-1.comparison.md#deepcomparisonstrategy)
- [shallowComparisonStrategy](utilities.utilities-1.comparison.md#shallowcomparisonstrategy)

### Functions

- [areDatesEqual](utilities.utilities-1.comparison.md#aredatesequal)
- [areSimpleValuesEqual](utilities.utilities-1.comparison.md#aresimplevaluesequal)
- [compareObjectsDeepByStrategy](utilities.utilities-1.comparison.md#compareobjectsdeepbystrategy)
- [compareObjectsDeepWithCompareValuesFunction](utilities.utilities-1.comparison.md#compareobjectsdeepwithcomparevaluesfunction)
- [compareObjectsShallowByStrategy](utilities.utilities-1.comparison.md#compareobjectsshallowbystrategy)
- [compareValuesByStrategy](utilities.utilities-1.comparison.md#comparevaluesbystrategy)
- [compareValuesFunctionFabric](utilities.utilities-1.comparison.md#comparevaluesfunctionfabric)

## Variables

### deepComparisonStrategy

• `Const` **deepComparisonStrategy**: [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`any`\>

#### Defined in

[src/utilities/implementations/comparison/valuesComparisonStrategies.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/valuesComparisonStrategies.ts#L14)

___

### shallowComparisonStrategy

• `Const` **shallowComparisonStrategy**: [`ICompareValuesShallowStrategy`](../interfaces/utilities.interfaces.icomparevaluesshallowstrategy.md)

#### Defined in

[src/utilities/implementations/comparison/valuesComparisonStrategies.ts:9](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/valuesComparisonStrategies.ts#L9)

## Functions

### areDatesEqual

▸ **areDatesEqual**(`d1`, `d2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d1` | `Date` |
| `d2` | `Date` |

#### Returns

`boolean`

#### Defined in

[src/utilities/implementations/comparison/objectTypeValuesComparison.ts:1](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/objectTypeValuesComparison.ts#L1)

___

### areSimpleValuesEqual

▸ **areSimpleValuesEqual**<`V1`, `V2`\>(`value1`, `value2`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | extends `TSimpleType` |
| `V2` | extends `TSimpleType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value1` | `V1` |
| `value2` | `V2` |

#### Returns

`boolean`

#### Defined in

[src/utilities/implementations/comparison/simpleTypeValuesComparison.ts:4](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/simpleTypeValuesComparison.ts#L4)

___

### compareObjectsDeepByStrategy

▸ **compareObjectsDeepByStrategy**<`O1`, `O2`, `S`\>(`objectFirst`, `objectSecond`, `comparisonStrategy`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `Object` |
| `O2` | extends `Object` |
| `S` | extends [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`S`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `O1` |
| `objectSecond` | `O2` |
| `comparisonStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

[src/utilities/implementations/comparison/objectComparison.ts:60](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/objectComparison.ts#L60)

___

### compareObjectsDeepWithCompareValuesFunction

▸ **compareObjectsDeepWithCompareValuesFunction**<`O1`, `O2`\>(`objectFirst`, `objectSecond`, `compareValues`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `Object` |
| `O2` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `O1` |
| `objectSecond` | `O2` |
| `compareValues` | [`ICompareValues`](../interfaces/utilities.interfaces.icomparevalues.md)<`any`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/utilities/implementations/comparison/objectComparison.ts:9](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/objectComparison.ts#L9)

___

### compareObjectsShallowByStrategy

▸ **compareObjectsShallowByStrategy**<`O1`, `O2`, `S`\>(`objectFirst`, `objectSecond`, `shallowComparisonStrategy`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `Object` |
| `O2` | extends `Object` |
| `S` | extends [`ICompareValuesShallowStrategy`](../interfaces/utilities.interfaces.icomparevaluesshallowstrategy.md)<`S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `O1` |
| `objectSecond` | `O2` |
| `shallowComparisonStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

[src/utilities/implementations/comparison/objectComparison.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/objectComparison.ts#L38)

___

### compareValuesByStrategy

▸ **compareValuesByStrategy**<`V1`, `V2`, `S`\>(`firstValue`, `secondValue`, `comparisonStrategy`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | `V1` |
| `V2` | `V2` |
| `S` | extends [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`S`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstValue` | `V1` |
| `secondValue` | `V2` |
| `comparisonStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

[src/utilities/implementations/comparison/compareByStrategy.ts:8](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/compareByStrategy.ts#L8)

___

### compareValuesFunctionFabric

▸ **compareValuesFunctionFabric**<`V1`, `V2`, `S`\>(`comparisonStrategy`): [`ICompareValues`](../interfaces/utilities.interfaces.icomparevalues.md)<`V1`, `V2`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | `V1` |
| `V2` | `V2` |
| `S` | extends [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`S`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparisonStrategy` | `S` |

#### Returns

[`ICompareValues`](../interfaces/utilities.interfaces.icomparevalues.md)<`V1`, `V2`\>

#### Defined in

[src/utilities/implementations/comparison/compareByStrategy.ts:63](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/utilities/implementations/comparison/compareByStrategy.ts#L63)
