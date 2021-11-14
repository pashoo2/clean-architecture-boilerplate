[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IIdentityMultiValueObject

# Interface: IIdentityMultiValueObject<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IIdentityMultiValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md)[`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Hierarchy

- [`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)<`V`\>

  ↳ **`IIdentityMultiValueObject`**

## Table of contents

### Properties

- [value](valueobject.interfaces.iidentitymultivalueobject.md#value)

### Methods

- [equalsTo](valueobject.interfaces.iidentitymultivalueobject.md#equalsto)
- [serialize](valueobject.interfaces.iidentitymultivalueobject.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Inherited from

[IMultiValuesValueObject](valueobject.interfaces.imultivaluesvalueobject.md).[value](valueobject.interfaces.imultivaluesvalueobject.md#value)

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectBase.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/multipleValuesValueObjectBase.ts#L20)

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IMultiValuesValueObjectBase`](valueobject.interfaces.imultivaluesvalueobjectbase.md)<`V`\> |

#### Returns

`boolean`

#### Inherited from

[IMultiValuesValueObject](valueobject.interfaces.imultivaluesvalueobject.md).[equalsTo](valueobject.interfaces.imultivaluesvalueobject.md#equalsto)

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/comparison.ts#L2)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IMultiValuesValueObject](valueobject.interfaces.imultivaluesvalueobject.md).[serialize](valueobject.interfaces.imultivaluesvalueobject.md#serialize)

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/serialization.ts#L12)
