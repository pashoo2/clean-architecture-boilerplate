[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntityFabricParameters

# Interface: IEntityFabricParameters<EntityId, EntityType\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntityFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |

## Table of contents

### Properties

- [getTransferableProps](entities.interfaces.ientityfabricparameters.md#gettransferableprops)
- [type](entities.interfaces.ientityfabricparameters.md#type)
- [validateInstance](entities.interfaces.ientityfabricparameters.md#validateinstance)

## Properties

### getTransferableProps

• **getTransferableProps**: [`IGetTransferablePropertiesOfEntity`](entities.interfaces.igettransferablepropertiesofentity.md)<`EntityId`, `EntityType`\>

#### Defined in

[src/entities/interfaces/entityFabric.ts:34](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/interfaces/entityFabric.ts#L34)

___

### type

• **type**: `EntityType`

#### Defined in

[src/entities/interfaces/entityFabric.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/interfaces/entityFabric.ts#L32)

___

### validateInstance

• **validateInstance**: [`IValidateEntity`](entities.interfaces.ivalidateentity.md)<`EntityId`, `EntityType`\>

#### Defined in

[src/entities/interfaces/entityFabric.ts:33](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/interfaces/entityFabric.ts#L33)
