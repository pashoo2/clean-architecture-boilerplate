[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [classes](../modules/valueobject.classes.md) / UuidValueObject

# Class: UuidValueObject

[valueObject](../modules/valueobject.md).[classes](../modules/valueobject.classes.md).UuidValueObject

## Hierarchy

- [`BaseValueObjectStringSerialization`](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md)<`string`\>

  ↳ **`UuidValueObject`**

## Implements

- [`IUuidVO`](../interfaces/valueobject.interfaces.iuuidvo.md)

## Table of contents

### Constructors

- [constructor](valueobject.classes.uuidvalueobject.md#constructor)

### Accessors

- [value](valueobject.classes.uuidvalueobject.md#value)

### Methods

- [\_validate](valueobject.classes.uuidvalueobject.md#_validate)
- [equalsTo](valueobject.classes.uuidvalueobject.md#equalsto)
- [serialize](valueobject.classes.uuidvalueobject.md#serialize)

## Constructors

### constructor

• **new UuidValueObject**(`__value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `string` |

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[constructor](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#constructor)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L14)

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IUuidVO](../interfaces/valueobject.interfaces.iuuidvo.md).[value](../interfaces/valueobject.interfaces.iuuidvo.md#value)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L12)

## Methods

### \_validate

▸ `Protected` **_validate**(): `void`

#### Returns

`void`

#### Overrides

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[_validate](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#_validate)

#### Defined in

[src/valueObjects/classes/uuidValueObject.ts:8](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/classes/uuidValueObject.ts#L8)

___

### equalsTo

▸ **equalsTo**(`anotherValueObject`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValueObject` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`string`, `string`\> |

#### Returns

`boolean`

#### Implementation of

[IUuidVO](../interfaces/valueobject.interfaces.iuuidvo.md).[equalsTo](../interfaces/valueobject.interfaces.iuuidvo.md#equalsto)

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[equalsTo](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#equalsto)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:22](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L22)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IUuidVO](../interfaces/valueobject.interfaces.iuuidvo.md).[serialize](../interfaces/valueobject.interfaces.iuuidvo.md#serialize)

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[serialize](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#serialize)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:33](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L33)
