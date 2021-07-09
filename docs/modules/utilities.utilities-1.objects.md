[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](utilities.md) / [utilities](utilities.utilities-1.md) / objects

# Namespace: objects

[utilities](utilities.md).[utilities](utilities.utilities-1.md).objects

## Table of contents

### Functions

- [copyOwnPropertiesIntoTarget](utilities.utilities-1.objects.md#copyownpropertiesintotarget)
- [makeObjectReadOnly](utilities.utilities-1.objects.md#makeobjectreadonly)
- [mergeDeep](utilities.utilities-1.objects.md#mergedeep)

## Functions

### copyOwnPropertiesIntoTarget

▸ **copyOwnPropertiesIntoTarget**<`T`, `B`\>(`target`, `baseObject`): target is T & B

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `B` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `baseObject` | `B` |

#### Returns

target is T & B

#### Defined in

[src/utilities/implementations/objects/copyOwnProperties.ts:1](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/utilities/implementations/objects/copyOwnProperties.ts#L1)

___

### makeObjectReadOnly

▸ **makeObjectReadOnly**<`O`\>(`o`): `Readonly`<`O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `O` |

#### Returns

`Readonly`<`O`\>

#### Defined in

[src/utilities/implementations/objects/makeObjectReadOnly.ts:1](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/utilities/implementations/objects/makeObjectReadOnly.ts#L1)

___

### mergeDeep

▸ `Const` **mergeDeep**<`T`\>(...`objects`): `TUnionToIntersection`<`T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IObject`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | `T` |

#### Returns

`TUnionToIntersection`<`T`[`number`]\>

#### Defined in

[src/utilities/implementations/objects/mergeDeep.ts:29](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/utilities/implementations/objects/mergeDeep.ts#L29)
