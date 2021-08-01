[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultipleValuesValueObjectAsyncFabricParameters

# Interface: IMultipleValuesValueObjectAsyncFabricParameters<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultipleValuesValueObjectAsyncFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Table of contents

### Properties

- [compareValues](valueobject.interfaces.imultiplevaluesvalueobjectasyncfabricparameters.md#comparevalues)
- [serializeValue](valueobject.interfaces.imultiplevaluesvalueobjectasyncfabricparameters.md#serializevalue)
- [validateValue](valueobject.interfaces.imultiplevaluesvalueobjectasyncfabricparameters.md#validatevalue)

## Properties

### compareValues

• **compareValues**: [`ICompareValuesAsync`](utilities.interfaces.icomparevaluesasync.md)<`V`, `V`\>

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectAsync.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/multipleValuesValueObjectAsync.ts#L30)

___

### serializeValue

• **serializeValue**: `ISerializerAsync`<`V`, `string`\>

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectAsync.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/multipleValuesValueObjectAsync.ts#L31)

___

### validateValue

• **validateValue**: `IValidator`<`V`\>

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectAsync.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/multipleValuesValueObjectAsync.ts#L32)
