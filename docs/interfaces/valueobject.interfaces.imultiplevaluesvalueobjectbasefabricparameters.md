[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultipleValuesValueObjectBaseFabricParameters

# Interface: IMultipleValuesValueObjectBaseFabricParameters<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultipleValuesValueObjectBaseFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Table of contents

### Properties

- [compareValues](valueobject.interfaces.imultiplevaluesvalueobjectbasefabricparameters.md#comparevalues)
- [serializeValue](valueobject.interfaces.imultiplevaluesvalueobjectbasefabricparameters.md#serializevalue)
- [validateValue](valueobject.interfaces.imultiplevaluesvalueobjectbasefabricparameters.md#validatevalue)

## Properties

### compareValues

• **compareValues**: [`ICompareValues`](utilities.interfaces.icomparevalues.md)<`V`, `V`\>

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectBase.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/multipleValuesValueObjectBase.ts#L30)

___

### serializeValue

• **serializeValue**: `ISerializer`<`V`, `string`\>

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectBase.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/multipleValuesValueObjectBase.ts#L31)

___

### validateValue

• **validateValue**: `IValidator`<`V`\>

#### Defined in

[src/valueObjects/interfaces/multipleValuesValueObjectBase.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/valueObjects/interfaces/multipleValuesValueObjectBase.ts#L32)
