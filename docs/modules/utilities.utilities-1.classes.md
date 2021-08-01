[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](utilities.md) / [utilities](utilities.utilities-1.md) / classes

# Namespace: classes

[utilities](utilities.md).[utilities](utilities.utilities-1.md).classes

## Table of contents

### Functions

- [applyMixinsMethodInheritance](utilities.utilities-1.classes.md#applymixinsmethodinheritance)
- [applyMixinsPropsAndMethodsInheritance](utilities.utilities-1.classes.md#applymixinspropsandmethodsinheritance)

## Functions

### applyMixinsMethodInheritance

▸ **applyMixinsMethodInheritance**<`C`, `C1`, `C2`\>(`DerivedCtor`, `constructors`): `Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Constructor`<`any`, `any`[]\> |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `DerivedCtor` | `C` |
| `constructors` | [`C1`, `C2`] |

#### Returns

`Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L15)

▸ **applyMixinsMethodInheritance**<`C`, `C1`, `C2`, `C3`\>(`DerivedCtor`, `constructors`): `Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C3`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Constructor`<`any`, `any`[]\> |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |
| `C3` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `DerivedCtor` | `C` |
| `constructors` | [`C1`, `C2`, `C3`] |

#### Returns

`Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C3`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:28](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L28)

▸ **applyMixinsMethodInheritance**<`C`, `C1`, `C2`, `C3`, `C4`\>(`DerivedCtor`, `constructors`): `Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C3`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C4`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Constructor`<`any`, `any`[]\> |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |
| `C3` | extends `Constructor`<`any`, `any`[]\> |
| `C4` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `DerivedCtor` | `C` |
| `constructors` | [`C1`, `C2`, `C3`, `C4`] |

#### Returns

`Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C3`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C4`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:43](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L43)

▸ **applyMixinsMethodInheritance**<`C`, `C1`, `C2`, `C3`, `C4`, `C5`\>(`DerivedCtor`, `constructors`): `Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C3`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C4`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C5`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Constructor`<`any`, `any`[]\> |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |
| `C3` | extends `Constructor`<`any`, `any`[]\> |
| `C4` | extends `Constructor`<`any`, `any`[]\> |
| `C5` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `DerivedCtor` | `C` |
| `constructors` | [`C1`, `C2`, `C3`, `C4`, `C5`] |

#### Returns

`Constructor`<`InstanceType`<`C`\> & `PickByValueType`<`InstanceType`<`C1`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C2`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C3`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C4`\>, `Function`\> & `PickByValueType`<`InstanceType`<`C5`\>, `Function`\>, `ConstructorParameters`<`C`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:60](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L60)

___

### applyMixinsPropsAndMethodsInheritance

▸ **applyMixinsPropsAndMethodsInheritance**<`C1`, `C2`\>(`ctor1`, `ctor2`): `Constructor`<`InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor1` | `C1` |
| `ctor2` | `C2` |

#### Returns

`Constructor`<`InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:118](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L118)

▸ **applyMixinsPropsAndMethodsInheritance**<`C1`, `C2`, `C3`\>(`ctor1`, `ctor2`, `ctor3`): `Constructor`<`InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |
| `C3` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor1` | `C1` |
| `ctor2` | `C2` |
| `ctor3` | `C3` |

#### Returns

`Constructor`<`InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:125](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L125)

▸ **applyMixinsPropsAndMethodsInheritance**<`C1`, `C2`, `C3`, `C4`\>(`ctor1`, `ctor2`, `ctor3`, `ctor4`): `Constructor`<`InstanceType`<`C4`\> & `InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |
| `C3` | extends `Constructor`<`any`, `any`[]\> |
| `C4` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor1` | `C1` |
| `ctor2` | `C2` |
| `ctor3` | `C3` |
| `ctor4` | `C4` |

#### Returns

`Constructor`<`InstanceType`<`C4`\> & `InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:137](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L137)

▸ **applyMixinsPropsAndMethodsInheritance**<`C1`, `C2`, `C3`, `C4`, `C5`\>(`ctor1`, `ctor2`, `ctor3`, `ctor4`, `ctor5`): `Constructor`<`InstanceType`<`C5`\> & `InstanceType`<`C4`\> & `InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |
| `C3` | extends `Constructor`<`any`, `any`[]\> |
| `C4` | extends `Constructor`<`any`, `any`[]\> |
| `C5` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor1` | `C1` |
| `ctor2` | `C2` |
| `ctor3` | `C3` |
| `ctor4` | `C4` |
| `ctor5` | `C5` |

#### Returns

`Constructor`<`InstanceType`<`C5`\> & `InstanceType`<`C4`\> & `InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:151](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L151)

▸ **applyMixinsPropsAndMethodsInheritance**<`C1`, `C2`, `C3`, `C4`, `C5`, `C6`\>(`ctor1`, `ctor2`, `ctor3`, `ctor4`, `ctor5`, `ctor6`): `Constructor`<`InstanceType`<`C6`\> & `InstanceType`<`C5`\> & `InstanceType`<`C4`\> & `InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C1` | extends `Constructor`<`any`, `any`[]\> |
| `C2` | extends `Constructor`<`any`, `any`[]\> |
| `C3` | extends `Constructor`<`any`, `any`[]\> |
| `C4` | extends `Constructor`<`any`, `any`[]\> |
| `C5` | extends `Constructor`<`any`, `any`[]\> |
| `C6` | extends `Constructor`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor1` | `C1` |
| `ctor2` | `C2` |
| `ctor3` | `C3` |
| `ctor4` | `C4` |
| `ctor5` | `C5` |
| `ctor6` | `C6` |

#### Returns

`Constructor`<`InstanceType`<`C6`\> & `InstanceType`<`C5`\> & `InstanceType`<`C4`\> & `InstanceType`<`C3`\> & `InstanceType`<`C2`\> & `InstanceType`<`C1`\>, `ConstructorParameters`<`C1`\>\>

#### Defined in

[src/utilities/implementations/classes/multipleInheritance.ts:171](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/utilities/implementations/classes/multipleInheritance.ts#L171)
