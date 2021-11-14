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

▸ **IEntityClassFabric**(`parameters`): `TEntityImplementationConstructor`<`EntityId`, `EntityType`, `E`, [`TEntityImplementation`](../modules/entities.interfaces.md#tentityimplementation)<`EntityId`, `EntityType`, `E`, [`IEntity`](entities.interfaces.ientity.md)<`EntityId`, `EntityType`\>\>, [`IBaseEntityParameters`](entities.interfaces.ibaseentityparameters.md)<`EntityId`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](entities.interfaces.ientityfabricparameters.md)<`EntityId`, `EntityType`\> |

#### Returns

`TEntityImplementationConstructor`<`EntityId`, `EntityType`, `E`, [`TEntityImplementation`](../modules/entities.interfaces.md#tentityimplementation)<`EntityId`, `EntityType`, `E`, [`IEntity`](entities.interfaces.ientity.md)<`EntityId`, `EntityType`\>\>, [`IBaseEntityParameters`](entities.interfaces.ibaseentityparameters.md)<`EntityId`\>\>

#### Defined in

[src/entities/interfaces/entityFabric.ts:59](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entityFabric.ts#L59)
