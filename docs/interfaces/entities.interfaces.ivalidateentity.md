[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IValidateEntity

# Interface: IValidateEntity<EntityId, EntityType\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IValidateEntity

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |

## Callable

### IValidateEntity

▸ **IValidateEntity**(`entity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`IEntity`](entities.interfaces.ientity.md)<`EntityId`, `EntityType`\> |

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entityFabric.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entityFabric.ts#L15)
