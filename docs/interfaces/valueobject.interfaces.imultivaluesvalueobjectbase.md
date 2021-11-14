[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultiValuesValueObjectBase

# Interface: IMultiValuesValueObjectBase<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultiValuesValueObjectBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Hierarchy

- `ISerializable`<`string`\>

- `IComparable`<[`IMultiValuesValueObjectBase`](valueobject.interfaces.imultivaluesvalueobjectbase.md)<`V`\>\>

  ↳ **`IMultiValuesValueObjectBase`**

  ↳↳ [`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.imultivaluesvalueobjectbase.md#value)

### Methods

- [equalsTo](valueobject.interfaces.imultivaluesvalueobjectbase.md#equalsto)
- [serialize](valueobject.interfaces.imultivaluesvalueobjectbase.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

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

IComparable.equalsTo

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/comparison.ts#L2)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

ISerializable.serialize

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/serialization.ts#L12)
