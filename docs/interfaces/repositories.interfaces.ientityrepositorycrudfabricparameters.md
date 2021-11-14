[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [repositories](../modules/repositories.md) / [interfaces](../modules/repositories.interfaces.md) / IEntityRepositoryCRUDFabricParameters

# Interface: IEntityRepositoryCRUDFabricParameters<Entity, EntityId, EntityType, E\>

[repositories](../modules/repositories.md).[interfaces](../modules/repositories.interfaces.md).IEntityRepositoryCRUDFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`IEntity`](entities.interfaces.ientity.md)<`EntityId`, `EntityType`\> |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject)[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain)[`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |
| `E` | extends [`IBaseEntityEventsList`](entities.interfaces.ibaseentityeventslist.md)<`EntityId`, `EntityType`\>[`IBaseEntityEventsList`](entities.interfaces.ibaseentityeventslist.md)<`EntityId`, `EntityType`\> |

## Table of contents

### Properties

- [entityConstructor](repositories.interfaces.ientityrepositorycrudfabricparameters.md#entityconstructor)

## Properties

### entityConstructor

• **entityConstructor**: `TEntityImplementationConstructorNoServices`<`EntityId`, `EntityType`, `E`, [`TEntityImplementation`](../modules/entities.interfaces.md#tentityimplementation)<`EntityId`, `EntityType`, `E`, `Entity`\>, [`TEntityImplementation`](../modules/entities.interfaces.md#tentityimplementation)<`EntityId`, `EntityType`, `E`, [`TEntityImplementation`](../modules/entities.interfaces.md#tentityimplementation)<`EntityId`, `EntityType`, `E`, `Entity`\>\>, `TEntityImplementationConstructorParametersFull`<[`TEntityImplementation`](../modules/entities.interfaces.md#tentityimplementation)<`EntityId`, `EntityType`, `E`, `Entity`\>, [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject)\>\>

A constructor that allow to create an implementation of the entity
based only on properties of the entity.

**`memberof`** IEntityRepositoryCRUDFabricParameters

#### Defined in

[src/repositories/interfaces/repository.ts:102](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/repositories/interfaces/repository.ts#L102)
