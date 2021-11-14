[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [repositories](../modules/repositories.md) / [interfaces](../modules/repositories.interfaces.md) / IEntityRepositoryCRUD

# Interface: IEntityRepositoryCRUD<Entity, EntityId\>

[repositories](../modules/repositories.md).[interfaces](../modules/repositories.interfaces.md).IEntityRepositoryCRUD

## Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`IEntity`](entities.interfaces.ientity.md)<`EntityId`, `string`\> |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject)[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

## Table of contents

### Methods

- [create](repositories.interfaces.ientityrepositorycrud.md#create)
- [deleteById](repositories.interfaces.ientityrepositorycrud.md#deletebyid)
- [getById](repositories.interfaces.ientityrepositorycrud.md#getbyid)
- [list](repositories.interfaces.ientityrepositorycrud.md#list)
- [update](repositories.interfaces.ientityrepositorycrud.md#update)

## Methods

### create

▸ **create**(`data`): `Promise`<`void`\>

Create a new entity in a data source

**`memberof`** IEntityRepositoryCRUD

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Entity` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/repositories/interfaces/repository.ts:33](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L33)

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`void`\>

Delete an entity by its identity

**`memberof`** IEntityRepositoryCRUD

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `EntityId` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/repositories/interfaces/repository.ts:57](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L57)

___

### getById

▸ **getById**(`id`): `Promise`<`undefined` \| `Entity`\>

Read an entity by its identity

**`memberof`** IEntityRepositoryCRUD

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `EntityId` |

#### Returns

`Promise`<`undefined` \| `Entity`\>

#### Defined in

[src/repositories/interfaces/repository.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L41)

___

### list

▸ **list**(): `Promise`<[`EntityList`](../modules/repositories.interfaces.md#entitylist)<`Entity`\>\>

List all entities available in a data source connected.

**`memberof`** IEntityRepositoryCRUD

#### Returns

`Promise`<[`EntityList`](../modules/repositories.interfaces.md#entitylist)<`Entity`\>\>

#### Defined in

[src/repositories/interfaces/repository.ts:64](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L64)

▸ **list**(`filterFunction`): `Promise`<[`EntityList`](../modules/repositories.interfaces.md#entitylist)<`Entity`\>\>

List entities and filter them with the function provided
as the argument.

**`memberof`** IEntityRepositoryCRUD

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterFunction` | [`FilterEntityFunc`](../modules/repositories.interfaces.md#filterentityfunc)<`Entity`\> |

#### Returns

`Promise`<[`EntityList`](../modules/repositories.interfaces.md#entitylist)<`Entity`\>\>

#### Defined in

[src/repositories/interfaces/repository.ts:73](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L73)

___

### update

▸ **update**(`data`): `Promise`<`void`\>

Update data of an entity

**`memberof`** IEntityRepositoryCRUD

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Entity` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/repositories/interfaces/repository.ts:49](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L49)
