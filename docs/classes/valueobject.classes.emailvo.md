[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [classes](../modules/valueobject.classes.md) / EmailVO

# Class: EmailVO

[valueObject](../modules/valueobject.md).[classes](../modules/valueobject.classes.md).EmailVO

## Hierarchy

- [`BaseValueObjectStringSerialization`](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md)<`string`\>

  ↳ **`EmailVO`**

## Implements

- [`IEmailVO`](../interfaces/valueobject.interfaces.iemailvo.md)

## Table of contents

### Constructors

- [constructor](valueobject.classes.emailvo.md#constructor)

### Accessors

- [value](valueobject.classes.emailvo.md#value)

### Methods

- [\_validate](valueobject.classes.emailvo.md#_validate)
- [equalsTo](valueobject.classes.emailvo.md#equalsto)
- [serialize](valueobject.classes.emailvo.md#serialize)

## Constructors

### constructor

• **new EmailVO**(`__value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `string` |

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[constructor](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#constructor)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L14)

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IEmailVO](../interfaces/valueobject.interfaces.iemailvo.md).[value](../interfaces/valueobject.interfaces.iemailvo.md#value)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L12)

## Methods

### \_validate

▸ `Protected` **_validate**(): `void`

#### Returns

`void`

#### Overrides

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[_validate](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#_validate)

#### Defined in

[src/valueObjects/classes/emailValueObject.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/classes/emailValueObject.ts#L13)

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

[IEmailVO](../interfaces/valueobject.interfaces.iemailvo.md).[equalsTo](../interfaces/valueobject.interfaces.iemailvo.md#equalsto)

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[equalsTo](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#equalsto)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:22](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L22)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IEmailVO](../interfaces/valueobject.interfaces.iemailvo.md).[serialize](../interfaces/valueobject.interfaces.iemailvo.md#serialize)

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[serialize](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#serialize)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:33](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L33)
