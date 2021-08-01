[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IUuidVO

# Interface: IUuidVO

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IUuidVO

## Hierarchy

- [`IBaseValueObjectStringSerialization`](valueobject.interfaces.ibasevalueobjectstringserialization.md)<`string`\>

- [`IIdentityValueObjectSimple`](valueobject.interfaces.iidentityvalueobjectsimple.md)

  ↳ **`IUuidVO`**

## Implemented by

- [`UuidValueObject`](../classes/valueobject.classes.uuidvalueobject.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.iuuidvo.md#value)

### Methods

- [equalsTo](valueobject.interfaces.iuuidvo.md#equalsto)
- [serialize](valueobject.interfaces.iuuidvo.md#serialize)

## Properties

### value

• `Readonly` **value**: `string`

#### Inherited from

[IIdentityValueObjectSimple](valueobject.interfaces.iidentityvalueobjectsimple.md).[value](valueobject.interfaces.iidentityvalueobjectsimple.md#value)

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/valueObjects/interfaces/baseValueObject.ts#L13)

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

[IIdentityValueObjectSimple](valueobject.interfaces.iidentityvalueobjectsimple.md).[equalsTo](valueobject.interfaces.iidentityvalueobjectsimple.md#equalsto)

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/interfaces/comparison.ts#L2)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IIdentityValueObjectSimple](valueobject.interfaces.iidentityvalueobjectsimple.md).[serialize](valueobject.interfaces.iidentityvalueobjectsimple.md#serialize)

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:23](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/valueObjects/interfaces/baseValueObject.ts#L23)
