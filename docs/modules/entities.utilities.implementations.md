[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](entities.md) / [utilities](entities.utilities.md) / implementations

# Namespace: implementations

[entities](entities.md).[utilities](entities.utilities.md).implementations

## Table of contents

### Functions

- [compareEntitiesIdentitiesUtility](entities.utilities.implementations.md#compareentitiesidentitiesutility)
- [compareEntitiesTypesUtility](entities.utilities.implementations.md#compareentitiestypesutility)
- [getEntityTypeByString](entities.utilities.implementations.md#getentitytypebystring)
- [isEntityMainType](entities.utilities.implementations.md#isentitymaintype)
- [isEntityTypeStringContainsCorrectCharacters](entities.utilities.implementations.md#isentitytypestringcontainscorrectcharacters)
- [validateEntityBasic](entities.utilities.implementations.md#validateentitybasic)
- [validateEntityObject](entities.utilities.implementations.md#validateentityobject)
- [validateEntityType](entities.utilities.implementations.md#validateentitytype)

## Functions

### compareEntitiesIdentitiesUtility

▸ **compareEntitiesIdentitiesUtility**(`firstId`, `secondId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstId` | [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `secondId` | [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`boolean`

#### Defined in

[src/entities/utilities/implementations/compareEntitiesIdentities.ts:8](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/compareEntitiesIdentities.ts#L8)

___

### compareEntitiesTypesUtility

▸ **compareEntitiesTypesUtility**(`firstEntityType`, `secondEntityType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstEntityType` | `string` |
| `secondEntityType` | `string` |

#### Returns

`boolean`

#### Defined in

[src/entities/utilities/implementations/compareEntitiesTypes.ts:1](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/compareEntitiesTypes.ts#L1)

___

### getEntityTypeByString

▸ **getEntityTypeByString**<`T`\>(`stringValue`): [`TEntityTypeMain`](entities.interfaces.md#tentitytypemain)<`T` extends `String` ? `ReturnType`<`T`[``"toString"``]\> : `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `String` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringValue` | `T` |

#### Returns

[`TEntityTypeMain`](entities.interfaces.md#tentitytypemain)<`T` extends `String` ? `ReturnType`<`T`[``"toString"``]\> : `T`\>

#### Defined in

[src/entities/utilities/implementations/getEntityTypeByString.ts:5](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/getEntityTypeByString.ts#L5)

___

### isEntityMainType

▸ **isEntityMainType**(`typeValue`): typeValue is \`entity\_\_\_\_${string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeValue` | `any` |

#### Returns

typeValue is \`entity\_\_\_\_${string}\`

#### Defined in

[src/entities/utilities/implementations/typeGuards.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/typeGuards.ts#L18)

___

### isEntityTypeStringContainsCorrectCharacters

▸ **isEntityTypeStringContainsCorrectCharacters**(`entityTypeString`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityTypeString` | `string` \| `String` |

#### Returns

`boolean`

#### Defined in

[src/entities/utilities/implementations/typeGuards.ts:8](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/typeGuards.ts#L8)

___

### validateEntityBasic

▸ **validateEntityBasic**<`EntityId`, `EntityType`\>(`entity`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends \`entity\_\_\_\_${string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`EntityId`, `EntityType`\> |

#### Returns

`void`

#### Defined in

[src/entities/utilities/implementations/validateEntityBasic.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/validateEntityBasic.ts#L24)

___

### validateEntityObject

▸ **validateEntityObject**<`EntityId`, `EntityType`\>(`entity`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends \`entity\_\_\_\_${string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`EntityId`, `EntityType`\> |

#### Returns

`void`

#### Defined in

[src/entities/utilities/implementations/validateEntityBasic.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/validateEntityBasic.ts#L12)

___

### validateEntityType

▸ **validateEntityType**(`entityType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityType` | [`TEntityTypeMain`](entities.interfaces.md#tentitytypemain) |

#### Returns

`void`

#### Defined in

[src/entities/utilities/implementations/validateEntityBasic.ts:6](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/utilities/implementations/validateEntityBasic.ts#L6)
