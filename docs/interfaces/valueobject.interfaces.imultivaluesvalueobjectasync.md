[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultiValuesValueObjectAsync

# Interface: IMultiValuesValueObjectAsync<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultiValuesValueObjectAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Hierarchy

- `Omit`<[`IMultiValuesValueObjectBase`](valueobject.interfaces.imultivaluesvalueobjectbase.md)<`V`\>, ``"serialize"`` \| ``"equalsTo"``\>

- `ISerializableAsync`<`string`\>

- `IComparableAsync`<[`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)<`V`\> \| [`IMultiValuesValueObjectAsync`](valueobject.interfaces.imultivaluesvalueobjectasync.md)<`V`\>\>

  ↳ **`IMultiValuesValueObjectAsync`**

## Implemented by

- [`MultiValuesValueObjectAsync`](../classes/valueobject.interfaces.abstractclasses.multivaluesvalueobjectasync.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.imultivaluesvalueobjectasync.md#value)

### Methods

- [equalsTo](valueobject.interfaces.imultivaluesvalueobjectasync.md#equalsto)
- [serialize](valueobject.interfaces.imultivaluesvalueobjectasync.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Inherited from

Omit.value

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectBase.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/valueObjects/interfaces/multipleValuesValueObjectBase.ts#L20)

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IMultiValuesValueObjectAsync`](valueobject.interfaces.imultivaluesvalueobjectasync.md)<`V`\> \| [`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)<`V`\> |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IComparableAsync.equalsTo

#### Defined in

[src/interfaces/comparison.ts:6](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/interfaces/comparison.ts#L6)

___

### serialize

▸ **serialize**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

ISerializableAsync.serialize

#### Defined in

[src/interfaces/serialization.ts:16](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/interfaces/serialization.ts#L16)
