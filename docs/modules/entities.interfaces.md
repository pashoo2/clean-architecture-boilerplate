[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](entities.md) / interfaces

# Namespace: interfaces

[entities](entities.md).interfaces

## Table of contents

### Classes

- [BaseEntityAbstractClass](../classes/entities.interfaces.baseentityabstractclass.md)

### Interfaces

- [IBaseEntityEventsList](../interfaces/entities.interfaces.ibaseentityeventslist.md)
- [IBaseEntityParameters](../interfaces/entities.interfaces.ibaseentityparameters.md)
- [IBaseEntityServices](../interfaces/entities.interfaces.ibaseentityservices.md)
- [IEntity](../interfaces/entities.interfaces.ientity.md)
- [IEntityClassFabric](../interfaces/entities.interfaces.ientityclassfabric.md)
- [IEntityFabricParameters](../interfaces/entities.interfaces.ientityfabricparameters.md)
- [IEntityImplementationMethods](../interfaces/entities.interfaces.ientityimplementationmethods.md)
- [IEntityImplementationWithDeleteMethod](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)
- [IGetTransferablePropertiesOfEntity](../interfaces/entities.interfaces.igettransferablepropertiesofentity.md)
- [IValidateEntity](../interfaces/entities.interfaces.ivalidateentity.md)

### Type aliases

- [TBaseEntityEventsListCommonEvents](entities.interfaces.md#tbaseentityeventslistcommonevents)
- [TEntityImplementation](entities.interfaces.md#tentityimplementation)
- [TEntityTypeMain](entities.interfaces.md#tentitytypemain)

## Type aliases

### TBaseEntityEventsListCommonEvents

Ƭ **TBaseEntityEventsListCommonEvents**<`EntityId`, `EntityType`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_ENTITY_CONSTRUCTED` | [`BaseDomainEntityCreateEvent`](../classes/events.classes.basedomainentitycreateevent.md)<`EntityId`, `EntityType`\> |
| `DOMAIN_ENTITY_DELETED` | [`BaseDomainEntityDeleteEvent`](../classes/events.classes.basedomainentitydeleteevent.md)<`EntityId`, `string`\> |

#### Defined in

[src/entities/interfaces/baseEntity.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/baseEntity.ts#L13)

___

### TEntityImplementation

Ƭ **TEntityImplementation**<`Id`, `Type`, `E`, `Entity`\>: `Entity` & `IComparable`<`Entity`\> & `ITransferable` & [`IEntityImplementationMethods`](../interfaces/entities.interfaces.ientityimplementationmethods.md)<`Id`, `Type`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |
| `Entity` | extends [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\>[`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Defined in

[src/entities/interfaces/entity.ts:50](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L50)

___

### TEntityTypeMain

Ƭ **TEntityTypeMain**<`T`\>: \`${typeof ENTITY\_TYPE\_PREFIX}\_\_${T}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string``string` |

#### Defined in

[src/entities/interfaces/entity.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L14)
