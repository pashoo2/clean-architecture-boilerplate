[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](aggregates.md) / [utilities](aggregates.utilities.md) / implementations

# Namespace: implementations

[aggregates](aggregates.md).[utilities](aggregates.utilities.md).implementations

## Table of contents

### Functions

- [getAggregateTypeByString](aggregates.utilities.implementations.md#getaggregatetypebystring)
- [isAggregateMainType](aggregates.utilities.implementations.md#isaggregatemaintype)

## Functions

### getAggregateTypeByString

▸ **getAggregateTypeByString**<`T`\>(`stringValue`): [`TAggregateTypeMain`](aggregates.interfaces.md#taggregatetypemain)<`T` extends `String` ? `ReturnType`<`T`[``"toString"``]\> : `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `String` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringValue` | `T` |

#### Returns

[`TAggregateTypeMain`](aggregates.interfaces.md#taggregatetypemain)<`T` extends `String` ? `ReturnType`<`T`[``"toString"``]\> : `T`\>

#### Defined in

[src/aggregates/utilities/implementations/getAggregateTypeByString.ts:5](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/aggregates/utilities/implementations/getAggregateTypeByString.ts#L5)

___

### isAggregateMainType

▸ **isAggregateMainType**(`typeValue`): typeValue is \`aggregate\_\_\_\_${string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeValue` | `any` |

#### Returns

typeValue is \`aggregate\_\_\_\_${string}\`

#### Defined in

[src/aggregates/utilities/implementations/typeGuards.ts:5](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/aggregates/utilities/implementations/typeGuards.ts#L5)
