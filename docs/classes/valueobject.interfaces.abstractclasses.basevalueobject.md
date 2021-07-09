[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / [abstractClasses](../modules/valueobject.interfaces.abstractclasses.md) / BaseValueObject

# Class: BaseValueObject<V, S\>

[interfaces](../modules/valueobject.interfaces.md).[abstractClasses](../modules/valueobject.interfaces.abstractclasses.md).BaseValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType``string` |

## Hierarchy

- **`BaseValueObject`**

  ↳ [`BaseValueObjectStringSerialization`](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md)

## Implements

- [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\>

## Table of contents

### Constructors

- [constructor](valueobject.interfaces.abstractclasses.basevalueobject.md#constructor)

### Accessors

- [value](valueobject.interfaces.abstractclasses.basevalueobject.md#value)

### Methods

- [\_validate](valueobject.interfaces.abstractclasses.basevalueobject.md#_validate)
- [equalsTo](valueobject.interfaces.abstractclasses.basevalueobject.md#equalsto)
- [serialize](valueobject.interfaces.abstractclasses.basevalueobject.md#serialize)

## Constructors

### constructor

• **new BaseValueObject**<`V`, `S`\>(`__value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType``string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `V` |

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L14)

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IBaseValueObject](../interfaces/valueobject.interfaces.ibasevalueobject.md).[value](../interfaces/valueobject.interfaces.ibasevalueobject.md#value)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L12)

## Methods

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:26](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L26)

___

### equalsTo

▸ **equalsTo**(`anotherValueObject`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValueObject` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\> |

#### Returns

`boolean`

#### Implementation of

[IBaseValueObject](../interfaces/valueobject.interfaces.ibasevalueobject.md).[equalsTo](../interfaces/valueobject.interfaces.ibasevalueobject.md#equalsto)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:22](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L22)

___

### serialize

▸ `Abstract` **serialize**(): `S`

#### Returns

`S`

#### Implementation of

[IBaseValueObject](../interfaces/valueobject.interfaces.ibasevalueobject.md).[serialize](../interfaces/valueobject.interfaces.ibasevalueobject.md#serialize)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/baseValueObject.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/abstractClasses/baseValueObject.ts#L20)
