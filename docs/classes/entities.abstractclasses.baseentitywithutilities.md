[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [abstractClasses](../modules/entities.abstractclasses.md) / BaseEntityWithUtilities

# Class: BaseEntityWithUtilities<Id, Type, E, U\>

[entities](../modules/entities.md).[abstractClasses](../modules/entities.abstractclasses.md).BaseEntityWithUtilities

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |
| `U` | extends `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\>`IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

## Hierarchy

- [`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>

  ↳ **`BaseEntityWithUtilities`**

## Table of contents

### Constructors

- [constructor](entities.abstractclasses.baseentitywithutilities.md#constructor)

### Properties

- [\_EntityCreateEventClass](entities.abstractclasses.baseentitywithutilities.md#_entitycreateeventclass)
- [\_EntityDeleteEventClass](entities.abstractclasses.baseentitywithutilities.md#_entitydeleteeventclass)
- [\_parameters](entities.abstractclasses.baseentitywithutilities.md#_parameters)
- [\_services](entities.abstractclasses.baseentitywithutilities.md#_services)
- [\_type](entities.abstractclasses.baseentitywithutilities.md#_type)
- [\_utilities](entities.abstractclasses.baseentitywithutilities.md#_utilities)

### Accessors

- [id](entities.abstractclasses.baseentitywithutilities.md#id)
- [isDeleted](entities.abstractclasses.baseentitywithutilities.md#isdeleted)
- [type](entities.abstractclasses.baseentitywithutilities.md#type)

### Methods

- [\_compareEntitiesIdentities](entities.abstractclasses.baseentitywithutilities.md#_compareentitiesidentities)
- [\_compareEntitiesTypes](entities.abstractclasses.baseentitywithutilities.md#_compareentitiestypes)
- [\_delete](entities.abstractclasses.baseentitywithutilities.md#_delete)
- [\_emitCreateEvent](entities.abstractclasses.baseentitywithutilities.md#_emitcreateevent)
- [\_emitDeleteEvent](entities.abstractclasses.baseentitywithutilities.md#_emitdeleteevent)
- [\_getEventUniqueIdentity](entities.abstractclasses.baseentitywithutilities.md#_geteventuniqueidentity)
- [\_getTransferableProps](entities.abstractclasses.baseentitywithutilities.md#_gettransferableprops)
- [\_markDeleted](entities.abstractclasses.baseentitywithutilities.md#_markdeleted)
- [\_validate](entities.abstractclasses.baseentitywithutilities.md#_validate)
- [emit](entities.abstractclasses.baseentitywithutilities.md#emit)
- [emitEventFailed](entities.abstractclasses.baseentitywithutilities.md#emiteventfailed)
- [equalsTo](entities.abstractclasses.baseentitywithutilities.md#equalsto)
- [getTransferableProps](entities.abstractclasses.baseentitywithutilities.md#gettransferableprops)
- [subscribe](entities.abstractclasses.baseentitywithutilities.md#subscribe)
- [subscribeOnFailed](entities.abstractclasses.baseentitywithutilities.md#subscribeonfailed)
- [unsubscribe](entities.abstractclasses.baseentitywithutilities.md#unsubscribe)

## Constructors

### constructor

• **new BaseEntityWithUtilities**<`Id`, `Type`, `E`, `U`\>(`parameters`, `services`, `_utilities`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |
| `U` | extends `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`, `U`\>`IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |
| `_utilities` | `U` |

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[constructor](entities.abstractclasses.baseentity.md#constructor)

#### Defined in

[src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.ts#L30)

## Properties

### \_EntityCreateEventClass

• `Protected` `Readonly` **\_EntityCreateEventClass**: `Constructor`<[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_EntityCreateEventClass](entities.abstractclasses.baseentity.md#_entitycreateeventclass)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:59](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L59)

___

### \_EntityDeleteEventClass

• `Protected` `Readonly` **\_EntityDeleteEventClass**: `Constructor`<[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_EntityDeleteEventClass](entities.abstractclasses.baseentity.md#_entitydeleteeventclass)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:54](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L54)

___

### \_parameters

• `Protected` `Readonly` **\_parameters**: [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_parameters](entities.abstractclasses.baseentity.md#_parameters)

___

### \_services

• `Protected` `Readonly` **\_services**: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_services](entities.abstractclasses.baseentity.md#_services)

___

### \_type

• `Protected` `Readonly` `Abstract` **\_type**: `Type`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_type](entities.abstractclasses.baseentity.md#_type)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L46)

___

### \_utilities

• `Protected` **\_utilities**: `U`

## Accessors

### id

• `get` **id**(): `Id`

#### Returns

`Id`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L32)

___

### isDeleted

• `get` **isDeleted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L36)

___

### type

• `get` **type**(): `Type`

#### Returns

`Type`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:40](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L40)

## Methods

### \_compareEntitiesIdentities

▸ `Protected` **_compareEntitiesIdentities**(`firstId`, `secondId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstId` | `Id` |
| `secondId` | `Id` |

#### Returns

`boolean`

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesIdentities](entities.abstractclasses.baseentity.md#_compareentitiesidentities)

#### Defined in

[src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.ts:42](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.ts#L42)

___

### \_compareEntitiesTypes

▸ `Protected` **_compareEntitiesTypes**(`firstType`, `secondType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstType` | `Type` |
| `secondType` | `Type` |

#### Returns

`boolean`

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesTypes](entities.abstractclasses.baseentity.md#_compareentitiestypes)

#### Defined in

[src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.ts#L46)

___

### \_delete

▸ `Protected` **_delete**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_delete](entities.abstractclasses.baseentity.md#_delete)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:151](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L151)

___

### \_emitCreateEvent

▸ `Protected` **_emitCreateEvent**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_emitCreateEvent](entities.abstractclasses.baseentity.md#_emitcreateevent)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:169](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L169)

___

### \_emitDeleteEvent

▸ `Protected` **_emitDeleteEvent**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_emitDeleteEvent](entities.abstractclasses.baseentity.md#_emitdeleteevent)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:163](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L163)

___

### \_getEventUniqueIdentity

▸ `Protected` **_getEventUniqueIdentity**(): `string`

#### Returns

`string`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_getEventUniqueIdentity](entities.abstractclasses.baseentity.md#_geteventuniqueidentity)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:175](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L175)

___

### \_getTransferableProps

▸ `Protected` `Abstract` **_getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_getTransferableProps](entities.abstractclasses.baseentity.md#_gettransferableprops)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:179](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L179)

___

### \_markDeleted

▸ `Protected` **_markDeleted**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_markDeleted](entities.abstractclasses.baseentity.md#_markdeleted)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:159](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L159)

___

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_validate](entities.abstractclasses.baseentity.md#_validate)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:133](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L133)

___

### emit

▸ **emit**<`Event`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`string`, `any`, `Event`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[emit](entities.abstractclasses.baseentity.md#emit)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:102](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L102)

___

### emitEventFailed

▸ **emitEventFailed**<`Ev`\>(`eventFailed`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ev` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`string`, `any`, `Ev`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFailed` | [`IDomainEventFailed`](../interfaces/events.interfaces.idomaineventfailed.md)<`Ev`\> |

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[emitEventFailed](entities.abstractclasses.baseentity.md#emiteventfailed)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:106](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L106)

___

### equalsTo

▸ **equalsTo**(`anotherEntity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherEntity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Returns

`boolean`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[equalsTo](entities.abstractclasses.baseentity.md#equalsto)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:91](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L91)

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[getTransferableProps](entities.abstractclasses.baseentity.md#gettransferableprops)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:98](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L98)

___

### subscribe

▸ **subscribe**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainEventListener`](../interfaces/events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[subscribe](entities.abstractclasses.baseentity.md#subscribe)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:112](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L112)

___

### subscribeOnFailed

▸ **subscribeOnFailed**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainFailedEventListener`](../interfaces/events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[subscribeOnFailed](entities.abstractclasses.baseentity.md#subscribeonfailed)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:119](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L119)

___

### unsubscribe

▸ **unsubscribe**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainEventListener`](../interfaces/events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[unsubscribe](entities.abstractclasses.baseentity.md#unsubscribe)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:126](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L126)
