[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / ICompareValuesStrategy

# Interface: ICompareValuesStrategy<S\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).ICompareValuesStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ICompareValuesStrategy`](utilities.interfaces.icomparevaluesstrategy.md)<`S`\> |

## Table of contents

### Properties

- [compareArrays](utilities.interfaces.icomparevaluesstrategy.md#comparearrays)
- [compareDates](utilities.interfaces.icomparevaluesstrategy.md#comparedates)
- [compareObjects](utilities.interfaces.icomparevaluesstrategy.md#compareobjects)
- [compareOther](utilities.interfaces.icomparevaluesstrategy.md#compareother)
- [compareSimpleType](utilities.interfaces.icomparevaluesstrategy.md#comparesimpletype)

## Properties

### compareArrays

• **compareArrays**: [`ICompareObjectsWithStrategy`](utilities.interfaces.icompareobjectswithstrategy.md)<`Object`, `Object`, `S`\>

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L18)

___

### compareDates

• **compareDates**: [`ICompareDateValues`](utilities.interfaces.icomparedatevalues.md)

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:16](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L16)

___

### compareObjects

• **compareObjects**: [`ICompareObjectsWithStrategy`](utilities.interfaces.icompareobjectswithstrategy.md)<`Object`, `Object`, `S`\>

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:17](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L17)

___

### compareOther

• **compareOther**: [`ICompareAnyByStrategy`](utilities.interfaces.icompareanybystrategy.md)<`any`, `any`, `S`\>

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L19)

___

### compareSimpleType

• **compareSimpleType**: [`ICompareSimpleTypeValues`](utilities.interfaces.icomparesimpletypevalues.md)<`TSimpleType`, `TSimpleType`\>

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L15)
