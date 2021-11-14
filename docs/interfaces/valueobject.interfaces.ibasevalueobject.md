[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IBaseValueObject

# Interface: IBaseValueObject<V, S\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IBaseValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType``string` |

## Hierarchy

- `ISerializable`<`S`\>

- `IComparable`<[`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\>\>

  ↳ **`IBaseValueObject`**

  ↳↳ [`IBaseValueObjectStringSerialization`](valueobject.interfaces.ibasevalueobjectstringserialization.md)

  ↳↳ [`IEmailVO`](valueobject.interfaces.iemailvo.md)

  ↳↳ [`IIdentityValueObjectSimple`](valueobject.interfaces.iidentityvalueobjectsimple.md)

## Implemented by

- [`BaseValueObject`](../classes/valueobject.interfaces.abstractclasses.basevalueobject.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.ibasevalueobject.md#value)

### Methods

- [equalsTo](valueobject.interfaces.ibasevalueobject.md#equalsto)
- [serialize](valueobject.interfaces.ibasevalueobject.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/baseValueObject.ts#L13)

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\> |

#### Returns

`boolean`

#### Inherited from

IComparable.equalsTo

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/comparison.ts#L2)

___

### serialize

▸ **serialize**(): `S`

#### Returns

`S`

#### Inherited from

ISerializable.serialize

#### Defined in

[src/interfaces/serialization.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/serialization.ts#L12)
