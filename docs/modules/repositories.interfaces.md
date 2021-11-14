[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [repositories](repositories.md) / interfaces

# Namespace: interfaces

[repositories](repositories.md).interfaces

## Table of contents

### Interfaces

- [IAggregateRepositoryCRUDFabricParameters](../interfaces/repositories.interfaces.iaggregaterepositorycrudfabricparameters.md)
- [IEntityRepositoryCRUD](../interfaces/repositories.interfaces.ientityrepositorycrud.md)
- [IEntityRepositoryCRUDFabricParameters](../interfaces/repositories.interfaces.ientityrepositorycrudfabricparameters.md)

### Type aliases

- [EntityList](repositories.interfaces.md#entitylist)
- [FilterEntityFunc](repositories.interfaces.md#filterentityfunc)
- [TAggregateRepositoryCRUDFabric](repositories.interfaces.md#taggregaterepositorycrudfabric)
- [TEntityRepositoryCRUDFabric](repositories.interfaces.md#tentityrepositorycrudfabric)

## Type aliases

### EntityList

Ƭ **EntityList**<`Entity`\>: `Entity`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`IEntity`](../interfaces/entities.interfaces.ientity.md)<[`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject), `string`\> |

#### Defined in

[src/repositories/interfaces/repository.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L15)

___

### FilterEntityFunc

Ƭ **FilterEntityFunc**<`Entity`\>: (`entity`: `Entity`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`IEntity`](../interfaces/entities.interfaces.ientity.md)<[`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject), `string`\> |

#### Type declaration

▸ (`entity`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

##### Returns

`boolean`

#### Defined in

[src/repositories/interfaces/repository.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L18)

___

### TAggregateRepositoryCRUDFabric

Ƭ **TAggregateRepositoryCRUDFabric**<`Aggregate`\>: (`parameters`: [`IAggregateRepositoryCRUDFabricParameters`](../interfaces/repositories.interfaces.iaggregaterepositorycrudfabricparameters.md)<`Aggregate`\>) => [`IEntityRepositoryCRUD`](../interfaces/repositories.interfaces.ientityrepositorycrud.md)<`Aggregate`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Aggregate` | extends [`IAggregateRoot`](../interfaces/aggregates.interfaces.iaggregateroot.md)<[`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject), `string`\> |

#### Type declaration

▸ (`parameters`): [`IEntityRepositoryCRUD`](../interfaces/repositories.interfaces.ientityrepositorycrud.md)<`Aggregate`\>

A fabric for construction an instance of the aggregate root.

##### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IAggregateRepositoryCRUDFabricParameters`](../interfaces/repositories.interfaces.iaggregaterepositorycrudfabricparameters.md)<`Aggregate`\> |

##### Returns

[`IEntityRepositoryCRUD`](../interfaces/repositories.interfaces.ientityrepositorycrud.md)<`Aggregate`\>

#### Defined in

[src/repositories/interfaces/repository.ts:150](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L150)

___

### TEntityRepositoryCRUDFabric

Ƭ **TEntityRepositoryCRUDFabric**<`Entity`\>: (`parameters`: [`IEntityRepositoryCRUDFabricParameters`](../interfaces/repositories.interfaces.ientityrepositorycrudfabricparameters.md)<`Entity`\>) => [`IEntityRepositoryCRUD`](../interfaces/repositories.interfaces.ientityrepositorycrud.md)<`Entity`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`IEntity`](../interfaces/entities.interfaces.ientity.md)<[`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject), [`TEntityTypeMain`](entities.interfaces.md#tentitytypemain)\> |

#### Type declaration

▸ (`parameters`): [`IEntityRepositoryCRUD`](../interfaces/repositories.interfaces.ientityrepositorycrud.md)<`Entity`\>

A fabric for construction an instance of the entity.

##### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityRepositoryCRUDFabricParameters`](../interfaces/repositories.interfaces.ientityrepositorycrudfabricparameters.md)<`Entity`\> |

##### Returns

[`IEntityRepositoryCRUD`](../interfaces/repositories.interfaces.ientityrepositorycrud.md)<`Entity`\>

#### Defined in

[src/repositories/interfaces/repository.ts:113](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L113)
