[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IBaseValueObjectStringSerialization

# Interface: IBaseValueObjectStringSerialization<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IBaseValueObjectStringSerialization

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |

## Hierarchy

- [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `string`\>

  ↳ **`IBaseValueObjectStringSerialization`**

  ↳↳ [`IUuidVO`](valueobject.interfaces.iuuidvo.md)

## Implemented by

- [`BaseValueObjectStringSerialization`](../classes/valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.ibasevalueobjectstringserialization.md#value)

### Methods

- [equalsTo](valueobject.interfaces.ibasevalueobjectstringserialization.md#equalsto)
- [serialize](valueobject.interfaces.ibasevalueobjectstringserialization.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[value](valueobject.interfaces.ibasevalueobject.md#value)

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/valueObjects/interfaces/baseValueObject.ts#L13)

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `string`\> |

#### Returns

`boolean`

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[equalsTo](valueobject.interfaces.ibasevalueobject.md#equalsto)

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/interfaces/comparison.ts#L2)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Overrides

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[serialize](valueobject.interfaces.ibasevalueobject.md#serialize)

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:23](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/valueObjects/interfaces/baseValueObject.ts#L23)
