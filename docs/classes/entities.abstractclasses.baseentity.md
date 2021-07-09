[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [abstractClasses](../modules/entities.abstractclasses.md) / BaseEntity

# Class: BaseEntity<Id, Type, E\>

[entities](../modules/entities.md).[abstractClasses](../modules/entities.abstractclasses.md).BaseEntity

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

## Hierarchy

- [`BaseEntityAbstractClass`](entities.abstractclasses.baseentityabstractclass.md)<`Id`, `Type`, `E`\>

  ↳ **`BaseEntity`**

  ↳↳ [`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)

  ↳↳ [`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)

## Table of contents

### Constructors

- [constructor](entities.abstractclasses.baseentity.md#constructor)

### Properties

- [\_EntityCreateEventClass](entities.abstractclasses.baseentity.md#_entitycreateeventclass)
- [\_EntityDeleteEventClass](entities.abstractclasses.baseentity.md#_entitydeleteeventclass)
- [\_\_domainEventBus](entities.abstractclasses.baseentity.md#__domaineventbus)
- [\_\_generateUniqueIdentityString](entities.abstractclasses.baseentity.md#__generateuniqueidentitystring)
- [\_\_id](entities.abstractclasses.baseentity.md#__id)
- [\_\_isDeleted](entities.abstractclasses.baseentity.md#__isdeleted)
- [\_parameters](entities.abstractclasses.baseentity.md#_parameters)
- [\_services](entities.abstractclasses.baseentity.md#_services)
- [\_type](entities.abstractclasses.baseentity.md#_type)

### Accessors

- [id](entities.abstractclasses.baseentity.md#id)
- [isDeleted](entities.abstractclasses.baseentity.md#isdeleted)
- [type](entities.abstractclasses.baseentity.md#type)

### Methods

- [\_\_createEntityCreateEventInstance](entities.abstractclasses.baseentity.md#__createentitycreateeventinstance)
- [\_\_createEntityDeleteEventInstance](entities.abstractclasses.baseentity.md#__createentitydeleteeventinstance)
- [\_\_getEntityCreateEventClass](entities.abstractclasses.baseentity.md#__getentitycreateeventclass)
- [\_\_getEntityDeleteEventClass](entities.abstractclasses.baseentity.md#__getentitydeleteeventclass)
- [\_compareEntitiesIdentities](entities.abstractclasses.baseentity.md#_compareentitiesidentities)
- [\_compareEntitiesTypes](entities.abstractclasses.baseentity.md#_compareentitiestypes)
- [\_delete](entities.abstractclasses.baseentity.md#_delete)
- [\_emitCreateEvent](entities.abstractclasses.baseentity.md#_emitcreateevent)
- [\_emitDeleteEvent](entities.abstractclasses.baseentity.md#_emitdeleteevent)
- [\_getEventUniqueIdentity](entities.abstractclasses.baseentity.md#_geteventuniqueidentity)
- [\_getTransferableProps](entities.abstractclasses.baseentity.md#_gettransferableprops)
- [\_markDeleted](entities.abstractclasses.baseentity.md#_markdeleted)
- [\_validate](entities.abstractclasses.baseentity.md#_validate)
- [emit](entities.abstractclasses.baseentity.md#emit)
- [emitEventFailed](entities.abstractclasses.baseentity.md#emiteventfailed)
- [equalsTo](entities.abstractclasses.baseentity.md#equalsto)
- [getTransferableProps](entities.abstractclasses.baseentity.md#gettransferableprops)
- [subscribe](entities.abstractclasses.baseentity.md#subscribe)
- [subscribeOnFailed](entities.abstractclasses.baseentity.md#subscribeonfailed)
- [unsubscribe](entities.abstractclasses.baseentity.md#unsubscribe)

## Constructors

### constructor

• **new BaseEntity**<`Id`, `Type`, `E`\>(`parameters`, `services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[constructor](entities.abstractclasses.baseentityabstractclass.md#constructor)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:62](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L62)

## Properties

### \_EntityCreateEventClass

• `Protected` `Readonly` **\_EntityCreateEventClass**: `Constructor`<[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:59](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L59)

___

### \_EntityDeleteEventClass

• `Protected` `Readonly` **\_EntityDeleteEventClass**: `Constructor`<[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:54](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L54)

___

### \_\_domainEventBus

• `Private` `Readonly` **\_\_domainEventBus**: [`IDomainEventBus`](../interfaces/events.interfaces.idomaineventbus.md)<`E`\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:50](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L50)

___

### \_\_generateUniqueIdentityString

• `Private` `Readonly` **\_\_generateUniqueIdentityString**: `IServiceGeneratorIdentifierUnique`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:52](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L52)

___

### \_\_id

• `Private` `Readonly` **\_\_id**: `Id`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:44](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L44)

___

### \_\_isDeleted

• `Private` **\_\_isDeleted**: `boolean`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:48](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L48)

___

### \_parameters

• `Protected` `Readonly` **\_parameters**: [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>

#### Inherited from

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_parameters](entities.abstractclasses.baseentityabstractclass.md#_parameters)

___

### \_services

• `Protected` `Readonly` **\_services**: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>

#### Inherited from

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_services](entities.abstractclasses.baseentityabstractclass.md#_services)

___

### \_type

• `Protected` `Readonly` `Abstract` **\_type**: `Type`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L46)

## Accessors

### id

• `get` **id**(): `Id`

#### Returns

`Id`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L32)

___

### isDeleted

• `get` **isDeleted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L36)

___

### type

• `get` **type**(): `Type`

#### Returns

`Type`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:40](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L40)

## Methods

### \_\_createEntityCreateEventInstance

▸ `Private` **__createEntityCreateEventInstance**(): [`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>

#### Returns

[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:214](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L214)

___

### \_\_createEntityDeleteEventInstance

▸ `Private` **__createEntityDeleteEventInstance**(): [`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>

#### Returns

[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:203](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L203)

___

### \_\_getEntityCreateEventClass

▸ `Private` **__getEntityCreateEventClass**(): `Constructor`<[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Returns

`Constructor`<[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:192](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L192)

___

### \_\_getEntityDeleteEventClass

▸ `Private` **__getEntityDeleteEventClass**(): `Constructor`<[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Returns

`Constructor`<[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:181](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L181)

___

### \_compareEntitiesIdentities

▸ `Protected` **_compareEntitiesIdentities**(`firstId`, `secondId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstId` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `secondId` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`boolean`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:135](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L135)

___

### \_compareEntitiesTypes

▸ `Protected` **_compareEntitiesTypes**(`firstType`, `secondType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstType` | `string` |
| `secondType` | `string` |

#### Returns

`boolean`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:144](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L144)

___

### \_delete

▸ `Protected` **_delete**(): `void`

#### Returns

`void`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:151](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L151)

___

### \_emitCreateEvent

▸ `Protected` **_emitCreateEvent**(): `void`

#### Returns

`void`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:169](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L169)

___

### \_emitDeleteEvent

▸ `Protected` **_emitDeleteEvent**(): `void`

#### Returns

`void`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:163](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L163)

___

### \_getEventUniqueIdentity

▸ `Protected` **_getEventUniqueIdentity**(): `string`

#### Returns

`string`

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:175](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L175)

___

### \_getTransferableProps

▸ `Protected` `Abstract` **_getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:179](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L179)

___

### \_markDeleted

▸ `Protected` **_markDeleted**(): `void`

#### Returns

`void`

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_markDeleted](entities.abstractclasses.baseentityabstractclass.md#_markdeleted)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:159](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L159)

___

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_validate](entities.abstractclasses.baseentityabstractclass.md#_validate)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:133](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L133)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[emit](entities.abstractclasses.baseentityabstractclass.md#emit)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:102](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L102)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[emitEventFailed](entities.abstractclasses.baseentityabstractclass.md#emiteventfailed)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:106](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L106)

___

### equalsTo

▸ **equalsTo**(`anotherEntity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherEntity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Returns

`boolean`

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[equalsTo](entities.abstractclasses.baseentityabstractclass.md#equalsto)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:91](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L91)

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[getTransferableProps](entities.abstractclasses.baseentityabstractclass.md#gettransferableprops)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:98](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L98)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[subscribe](entities.abstractclasses.baseentityabstractclass.md#subscribe)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:112](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L112)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[subscribeOnFailed](entities.abstractclasses.baseentityabstractclass.md#subscribeonfailed)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:119](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L119)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[unsubscribe](entities.abstractclasses.baseentityabstractclass.md#unsubscribe)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:126](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/abstractClasses/baseEntity/baseEntity.ts#L126)
