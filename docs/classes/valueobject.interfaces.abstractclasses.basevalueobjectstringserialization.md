[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / [abstractClasses](../modules/valueobject.interfaces.abstractclasses.md) / BaseValueObjectStringSerialization

# Class: BaseValueObjectStringSerialization<V\>

[interfaces](../modules/valueobject.interfaces.md).[abstractClasses](../modules/valueobject.interfaces.abstractclasses.md).BaseValueObjectStringSerialization

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |

## Hierarchy

- [`BaseValueObject`](valueobject.interfaces.abstractclasses.basevalueobject.md)<`V`, `string`\>

  ↳ **`BaseValueObjectStringSerialization`**

  ↳↳ [`EmailVO`](valueobject.classes.emailvo.md)

  ↳↳ [`UuidValueObject`](valueobject.classes.uuidvalueobject.md)

## Implements

- [`IBaseValueObjectStringSerialization`](../interfaces/valueobject.interfaces.ibasevalueobjectstringserialization.md)<`V`\>

## Table of contents

### Constructors

- [constructor](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#constructor)

### Accessors

- [value](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#value)

### Methods

- [\_validate](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#_validate)
- [equalsTo](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#equalsto)
- [serialize](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#serialize)

## Constructors

### constructor

• **new BaseValueObjectStringSerialization**<`V`\>(`__value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `V` |

#### Inherited from

[BaseValueObject](valueobject.interfaces.abstractclasses.basevalueobject.md).[constructor](valueobject.interfaces.abstractclasses.basevalueobject.md#constructor)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L14)

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IBaseValueObjectStringSerialization](../interfaces/valueobject.interfaces.ibasevalueobjectstringserialization.md).[value](../interfaces/valueobject.interfaces.ibasevalueobjectstringserialization.md#value)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L12)

## Methods

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Inherited from

[BaseValueObject](valueobject.interfaces.abstractclasses.basevalueobject.md).[_validate](valueobject.interfaces.abstractclasses.basevalueobject.md#_validate)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:26](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L26)

___

### equalsTo

▸ **equalsTo**(`anotherValueObject`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValueObject` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`V`, `string`\> |

#### Returns

`boolean`

#### Implementation of

[IBaseValueObjectStringSerialization](../interfaces/valueobject.interfaces.ibasevalueobjectstringserialization.md).[equalsTo](../interfaces/valueobject.interfaces.ibasevalueobjectstringserialization.md#equalsto)

#### Inherited from

[BaseValueObject](valueobject.interfaces.abstractclasses.basevalueobject.md).[equalsTo](valueobject.interfaces.abstractclasses.basevalueobject.md#equalsto)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:22](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L22)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IBaseValueObjectStringSerialization](../interfaces/valueobject.interfaces.ibasevalueobjectstringserialization.md).[serialize](../interfaces/valueobject.interfaces.ibasevalueobjectstringserialization.md#serialize)

#### Overrides

[BaseValueObject](valueobject.interfaces.abstractclasses.basevalueobject.md).[serialize](valueobject.interfaces.abstractclasses.basevalueobject.md#serialize)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:33](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L33)
