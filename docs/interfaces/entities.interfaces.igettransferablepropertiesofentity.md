[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IGetTransferablePropertiesOfEntity

# Interface: IGetTransferablePropertiesOfEntity<EntityId, EntityType\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IGetTransferablePropertiesOfEntity

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |

## Callable

### IGetTransferablePropertiesOfEntity

▸ **IGetTransferablePropertiesOfEntity**<`T`\>(`entity`): `TPickTransferableProperties`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IEntity`](entities.interfaces.ientity.md)<`EntityId`, `EntityType`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `T` |

#### Returns

`TPickTransferableProperties`<`T`\>

#### Defined in

[src/entities/interfaces/entityFabric.ts:22](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entityFabric.ts#L22)
