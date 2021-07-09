[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](valueobject.md) / [utilities](valueobject.utilities.md) / implementations

# Namespace: implementations

[valueObject](valueobject.md).[utilities](valueobject.utilities.md).implementations

## Table of contents

### Functions

- [isBaseValueObject](valueobject.utilities.implementations.md#isbasevalueobject)
- [isEmptyBaseValueObjectValue](valueobject.utilities.implementations.md#isemptybasevalueobjectvalue)
- [isEmptyMultipleValuesValueObjectValue](valueobject.utilities.implementations.md#isemptymultiplevaluesvalueobjectvalue)
- [isMultipleValuesValueObject](valueobject.utilities.implementations.md#ismultiplevaluesvalueobject)
- [isMultipleValuesValueObjectInsteadOfBase](valueobject.utilities.implementations.md#ismultiplevaluesvalueobjectinsteadofbase)
- [isValueObject](valueobject.utilities.implementations.md#isvalueobject)
- [validateEntityIdentity](valueobject.utilities.implementations.md#validateentityidentity)
- [validateEntityIdentityBase](valueobject.utilities.implementations.md#validateentityidentitybase)
- [validateEntityIdentityMultipleValue](valueobject.utilities.implementations.md#validateentityidentitymultiplevalue)

## Functions

### isBaseValueObject

▸ **isBaseValueObject**(`valueObject`): valueObject is IBaseValueObject<TSimpleType, string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | `any` |

#### Returns

valueObject is IBaseValueObject<TSimpleType, string\>

#### Defined in

[src/valueObjects/utilities/implementations/typeGuards.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/typeGuards.ts#L36)

___

### isEmptyBaseValueObjectValue

▸ **isEmptyBaseValueObjectValue**(`valueObjectValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObjectValue` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`TSimpleType`\>[``"value"``] |

#### Returns

`boolean`

#### Defined in

[src/valueObjects/utilities/implementations/isEmptyValueObjectValue.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/isEmptyValueObjectValue.ts#L12)

___

### isEmptyMultipleValuesValueObjectValue

▸ **isEmptyMultipleValuesValueObjectValue**(`valueObjectValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObjectValue` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<[`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md)\>[``"value"``] |

#### Returns

`boolean`

#### Defined in

[src/valueObjects/utilities/implementations/isEmptyValueObjectValue.ts:25](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/isEmptyValueObjectValue.ts#L25)

___

### isMultipleValuesValueObject

▸ **isMultipleValuesValueObject**(`valueObject`): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | `any` |

#### Returns

valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Defined in

[src/valueObjects/utilities/implementations/typeGuards.ts:48](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/typeGuards.ts#L48)

___

### isMultipleValuesValueObjectInsteadOfBase

▸ **isMultipleValuesValueObjectInsteadOfBase**(`valueObject`): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<[`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md)\> \| [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`TSimpleType`\> |

#### Returns

valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Defined in

[src/valueObjects/utilities/implementations/typeGuards.ts:66](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/typeGuards.ts#L66)

___

### isValueObject

▸ **isValueObject**(`valueObject`): valueObject is IBaseValueObject<any, string\> \| IMultiValuesValueObject<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | `any` |

#### Returns

valueObject is IBaseValueObject<any, string\> \| IMultiValuesValueObject<any\>

#### Defined in

[src/valueObjects/utilities/implementations/typeGuards.ts:9](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/typeGuards.ts#L9)

___

### validateEntityIdentity

▸ **validateEntityIdentity**(`entityId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`void`

#### Defined in

[src/valueObjects/utilities/implementations/validate.ts:40](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/validate.ts#L40)

___

### validateEntityIdentityBase

▸ **validateEntityIdentityBase**(`entityId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`TSimpleType`\> |

#### Returns

`void`

#### Defined in

[src/valueObjects/utilities/implementations/validate.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/validate.ts#L18)

___

### validateEntityIdentityMultipleValue

▸ **validateEntityIdentityMultipleValue**(`entityId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<`any`\> |

#### Returns

`void`

#### Defined in

[src/valueObjects/utilities/implementations/validate.ts:29](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/valueObjects/utilities/implementations/validate.ts#L29)
