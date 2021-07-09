[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / ICompareValuesShallowStrategy

# Interface: ICompareValuesShallowStrategy

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).ICompareValuesShallowStrategy

## Hierarchy

- `Omit`<[`ICompareValuesStrategy`](utilities.interfaces.icomparevaluesstrategy.md)<`any`\>, ``"compareObjects"`` \| ``"compareOther"`` \| ``"compareArrays"``\>

  ↳ **`ICompareValuesShallowStrategy`**

## Table of contents

### Properties

- [compareDates](utilities.interfaces.icomparevaluesshallowstrategy.md#comparedates)
- [compareSimpleType](utilities.interfaces.icomparevaluesshallowstrategy.md#comparesimpletype)

## Properties

### compareDates

• **compareDates**: [`ICompareDateValues`](utilities.interfaces.icomparedatevalues.md)

#### Inherited from

Omit.compareDates

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:16](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L16)

___

### compareSimpleType

• **compareSimpleType**: [`ICompareSimpleTypeValues`](utilities.interfaces.icomparesimpletypevalues.md)<`TSimpleType`, `TSimpleType`\>

#### Inherited from

Omit.compareSimpleType

#### Defined in

[src/utilities/interfaces/comparison/valuesComparisonStrategies.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/comparison/valuesComparisonStrategies.ts#L15)
