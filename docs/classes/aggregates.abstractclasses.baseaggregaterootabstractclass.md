[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [abstractClasses](../modules/aggregates.abstractclasses.md) / BaseAggregateRootAbstractClass

# Class: BaseAggregateRootAbstractClass<Id, Type, E\>

[aggregates](../modules/aggregates.md).[abstractClasses](../modules/aggregates.abstractclasses.md).BaseAggregateRootAbstractClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

## Hierarchy

- [`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>

  ↳ **`BaseAggregateRootAbstractClass`**

## Implements

- [`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>

## Table of contents

### Constructors

- [constructor](aggregates.abstractclasses.baseaggregaterootabstractclass.md#constructor)

### Properties

- [\_EntityCreateEventClass](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_entitycreateeventclass)
- [\_EntityDeleteEventClass](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_entitydeleteeventclass)
- [\_parameters](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_parameters)
- [\_services](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_services)
- [\_type](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_type)

### Accessors

- [id](aggregates.abstractclasses.baseaggregaterootabstractclass.md#id)
- [isDeleted](aggregates.abstractclasses.baseaggregaterootabstractclass.md#isdeleted)
- [type](aggregates.abstractclasses.baseaggregaterootabstractclass.md#type)

### Methods

- [\_compareEntitiesIdentities](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_compareentitiesidentities)
- [\_compareEntitiesTypes](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_compareentitiestypes)
- [\_delete](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_delete)
- [\_emitCreateEvent](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_emitcreateevent)
- [\_emitDeleteEvent](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_emitdeleteevent)
- [\_getEventUniqueIdentity](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_geteventuniqueidentity)
- [\_getTransferableProps](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_gettransferableprops)
- [\_markDeleted](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_markdeleted)
- [\_validate](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_validate)
- [delete](aggregates.abstractclasses.baseaggregaterootabstractclass.md#delete)
- [emit](aggregates.abstractclasses.baseaggregaterootabstractclass.md#emit)
- [emitEventFailed](aggregates.abstractclasses.baseaggregaterootabstractclass.md#emiteventfailed)
- [equalsTo](aggregates.abstractclasses.baseaggregaterootabstractclass.md#equalsto)
- [getTransferableProps](aggregates.abstractclasses.baseaggregaterootabstractclass.md#gettransferableprops)
- [subscribe](aggregates.abstractclasses.baseaggregaterootabstractclass.md#subscribe)
- [subscribeOnFailed](aggregates.abstractclasses.baseaggregaterootabstractclass.md#subscribeonfailed)
- [unsubscribe](aggregates.abstractclasses.baseaggregaterootabstractclass.md#unsubscribe)

## Constructors

### constructor

• **new BaseAggregateRootAbstractClass**<`Id`, `Type`, `E`\>(`parameters`, `services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\> |
| `services` | [`IBaseAggregateRootServices`](../interfaces/aggregates.interfaces.ibaseaggregaterootservices.md)<`E`\> |

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[constructor](entities.abstractclasses.baseentity.md#constructor)

#### Defined in

[src/aggregates/abstractClasses/aggregateRootAbstractClass.ts:17](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/aggregates/abstractClasses/aggregateRootAbstractClass.ts#L17)

## Properties

### \_EntityCreateEventClass

• `Protected` `Readonly` **\_EntityCreateEventClass**: `Constructor`<[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_EntityCreateEventClass](entities.abstractclasses.baseentity.md#_entitycreateeventclass)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:59](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L59)

___

### \_EntityDeleteEventClass

• `Protected` `Readonly` **\_EntityDeleteEventClass**: `Constructor`<[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_EntityDeleteEventClass](entities.abstractclasses.baseentity.md#_entitydeleteeventclass)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:54](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L54)

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

[src/entities/abstractClasses/baseEntity/baseEntity.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L46)

## Accessors

### id

• `get` **id**(): `Id`

#### Returns

`Id`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[id](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#id)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L32)

___

### isDeleted

• `get` **isDeleted**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[isDeleted](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#isdeleted)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L36)

___

### type

• `get` **type**(): `Type`

#### Returns

`Type`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[type](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#type)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:40](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L40)

## Methods

### \_compareEntitiesIdentities

▸ `Protected` **_compareEntitiesIdentities**(`firstId`, `secondId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstId` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `secondId` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`boolean`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesIdentities](entities.abstractclasses.baseentity.md#_compareentitiesidentities)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:135](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L135)

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

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesTypes](entities.abstractclasses.baseentity.md#_compareentitiestypes)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:144](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L144)

___

### \_delete

▸ `Protected` **_delete**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_delete](entities.abstractclasses.baseentity.md#_delete)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:151](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L151)

___

### \_emitCreateEvent

▸ `Protected` **_emitCreateEvent**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_emitCreateEvent](entities.abstractclasses.baseentity.md#_emitcreateevent)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:169](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L169)

___

### \_emitDeleteEvent

▸ `Protected` **_emitDeleteEvent**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_emitDeleteEvent](entities.abstractclasses.baseentity.md#_emitdeleteevent)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:163](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L163)

___

### \_getEventUniqueIdentity

▸ `Protected` **_getEventUniqueIdentity**(): `string`

#### Returns

`string`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_getEventUniqueIdentity](entities.abstractclasses.baseentity.md#_geteventuniqueidentity)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:175](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L175)

___

### \_getTransferableProps

▸ `Protected` `Abstract` **_getTransferableProps**(): `TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_getTransferableProps](entities.abstractclasses.baseentity.md#_gettransferableprops)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:179](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L179)

___

### \_markDeleted

▸ `Protected` **_markDeleted**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_markDeleted](entities.abstractclasses.baseentity.md#_markdeleted)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:159](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L159)

___

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_validate](entities.abstractclasses.baseentity.md#_validate)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:133](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L133)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[delete](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#delete)

#### Defined in

[src/aggregates/abstractClasses/aggregateRootAbstractClass.ts:25](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/aggregates/abstractClasses/aggregateRootAbstractClass.ts#L25)

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

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[emit](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#emit)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[emit](entities.abstractclasses.baseentity.md#emit)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:102](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L102)

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

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[emitEventFailed](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#emiteventfailed)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[emitEventFailed](entities.abstractclasses.baseentity.md#emiteventfailed)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:106](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L106)

___

### equalsTo

▸ **equalsTo**(`anotherEntity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherEntity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Returns

`boolean`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[equalsTo](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#equalsto)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[equalsTo](entities.abstractclasses.baseentity.md#equalsto)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:91](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L91)

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[getTransferableProps](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#gettransferableprops)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[getTransferableProps](entities.abstractclasses.baseentity.md#gettransferableprops)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:98](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L98)

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

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[subscribe](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#subscribe)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[subscribe](entities.abstractclasses.baseentity.md#subscribe)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:112](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L112)

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

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[subscribeOnFailed](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#subscribeonfailed)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[subscribeOnFailed](entities.abstractclasses.baseentity.md#subscribeonfailed)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:119](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L119)

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

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[unsubscribe](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#unsubscribe)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[unsubscribe](entities.abstractclasses.baseentity.md#unsubscribe)

#### Defined in

[src/entities/abstractClasses/baseEntity/baseEntity.ts:126](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/abstractClasses/baseEntity/baseEntity.ts#L126)
