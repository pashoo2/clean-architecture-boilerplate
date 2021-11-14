[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IBaseValueObjectConstructorFabricParameters

# Interface: IBaseValueObjectConstructorFabricParameters<V, S\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IBaseValueObjectConstructorFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType` |

## Table of contents

### Properties

- [compareValues](valueobject.interfaces.ibasevalueobjectconstructorfabricparameters.md#comparevalues)
- [serializeValue](valueobject.interfaces.ibasevalueobjectconstructorfabricparameters.md#serializevalue)
- [validateValue](valueobject.interfaces.ibasevalueobjectconstructorfabricparameters.md#validatevalue)

## Properties

### compareValues

• **compareValues**: [`ICompareValues`](utilities.interfaces.icomparevalues.md)<`V`, `V`\>

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/baseValueObject.ts#L30)

___

### serializeValue

• **serializeValue**: `ISerializer`<`V`, `S`\>

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/baseValueObject.ts#L31)

___

### validateValue

• **validateValue**: `IValidator`<`V`\>

#### Defined in

[src/valueObjects/interfaces/baseValueObject.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/valueObjects/interfaces/baseValueObject.ts#L32)
