[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IIdentityValueObjectSimple

# Interface: IIdentityValueObjectSimple

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IIdentityValueObjectSimple

## Hierarchy

- [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`string`, `string`\>

  ↳ **`IIdentityValueObjectSimple`**

## Table of contents

### Properties

- [value](valueobject.interfaces.iidentityvalueobjectsimple.md#value)

### Methods

- [equalsTo](valueobject.interfaces.iidentityvalueobjectsimple.md#equalsto)
- [serialize](valueobject.interfaces.iidentityvalueobjectsimple.md#serialize)

## Properties

### value

• `Readonly` **value**: `string`

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[value](valueobject.interfaces.ibasevalueobject.md#value)

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/interfaces/baseValueObject.ts#L13)

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`string`, `string`\> |

#### Returns

`boolean`

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[equalsTo](valueobject.interfaces.ibasevalueobject.md#equalsto)

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/interfaces/comparison.ts#L2)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[serialize](valueobject.interfaces.ibasevalueobject.md#serialize)

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/interfaces/serialization.ts#L12)
