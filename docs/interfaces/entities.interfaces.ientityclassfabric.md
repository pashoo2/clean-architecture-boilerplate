[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntityClassFabric

# Interface: IEntityClassFabric<EntityId, EntityType, E\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntityClassFabric

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |
| `E` | extends [`IBaseEntityEventsList`](entities.interfaces.ibaseentityeventslist.md)<`EntityId`, `EntityType`\> |

## Callable

### IEntityClassFabric

▸ **IEntityClassFabric**(`parameters`): `Constructor`<[`IEntityImplementation`](entities.interfaces.ientityimplementation.md)<`EntityId`, `EntityType`, `E`\>, [[`IBaseEntityParameters`](entities.interfaces.ibaseentityparameters.md)<`EntityId`\>, [`IBaseEntityServices`](entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](entities.interfaces.ientityfabricparameters.md)<`EntityId`, `EntityType`\> |

#### Returns

`Constructor`<[`IEntityImplementation`](entities.interfaces.ientityimplementation.md)<`EntityId`, `EntityType`, `E`\>, [[`IBaseEntityParameters`](entities.interfaces.ibaseentityparameters.md)<`EntityId`\>, [`IBaseEntityServices`](entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Defined in

[src/entities/interfaces/entityFabric.ts:44](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entityFabric.ts#L44)
