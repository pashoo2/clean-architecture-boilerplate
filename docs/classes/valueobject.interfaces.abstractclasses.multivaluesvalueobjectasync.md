[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / [abstractClasses](../modules/valueobject.interfaces.abstractclasses.md) / MultiValuesValueObjectAsync

# Class: MultiValuesValueObjectAsync<V\>

[interfaces](../modules/valueobject.interfaces.md).[abstractClasses](../modules/valueobject.interfaces.abstractclasses.md).MultiValuesValueObjectAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Implements

- [`IMultiValuesValueObjectAsync`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectasync.md)<`V`\>

## Table of contents

### Constructors

- [constructor](valueobject.interfaces.abstractclasses.multivaluesvalueobjectasync.md#constructor)

### Accessors

- [value](valueobject.interfaces.abstractclasses.multivaluesvalueobjectasync.md#value)

### Methods

- [\_validate](valueobject.interfaces.abstractclasses.multivaluesvalueobjectasync.md#_validate)
- [equalsTo](valueobject.interfaces.abstractclasses.multivaluesvalueobjectasync.md#equalsto)
- [serialize](valueobject.interfaces.abstractclasses.multivaluesvalueobjectasync.md#serialize)

## Constructors

### constructor

• **new MultiValuesValueObjectAsync**<`V`\>(`__value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `V` |

#### Defined in

[src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts#L13)

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IMultiValuesValueObjectAsync](../interfaces/valueobject.interfaces.imultivaluesvalueobjectasync.md).[value](../interfaces/valueobject.interfaces.imultivaluesvalueobjectasync.md#value)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts:11](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts#L11)

## Methods

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Defined in

[src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts#L24)

___

### equalsTo

▸ `Abstract` **equalsTo**(`anotherValueObject`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValueObject` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<`V`\> |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IMultiValuesValueObjectAsync](../interfaces/valueobject.interfaces.imultivaluesvalueobjectasync.md).[equalsTo](../interfaces/valueobject.interfaces.imultivaluesvalueobjectasync.md#equalsto)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts#L20)

___

### serialize

▸ `Abstract` **serialize**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[IMultiValuesValueObjectAsync](../interfaces/valueobject.interfaces.imultivaluesvalueobjectasync.md).[serialize](../interfaces/valueobject.interfaces.imultivaluesvalueobjectasync.md#serialize)

#### Defined in

[src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync.ts#L18)
