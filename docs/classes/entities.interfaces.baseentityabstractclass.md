[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / BaseEntityAbstractClass

# Class: BaseEntityAbstractClass<Id, Type, E\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).BaseEntityAbstractClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

## Implements

- [`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>

## Table of contents

### Constructors

- [constructor](entities.interfaces.baseentityabstractclass.md#constructor)

### Properties

- [\_parameters](entities.interfaces.baseentityabstractclass.md#_parameters)
- [\_services](entities.interfaces.baseentityabstractclass.md#_services)
- [type](entities.interfaces.baseentityabstractclass.md#type)

### Accessors

- [id](entities.interfaces.baseentityabstractclass.md#id)
- [isDeleted](entities.interfaces.baseentityabstractclass.md#isdeleted)

### Methods

- [\_markDeleted](entities.interfaces.baseentityabstractclass.md#_markdeleted)
- [\_validate](entities.interfaces.baseentityabstractclass.md#_validate)
- [emit](entities.interfaces.baseentityabstractclass.md#emit)
- [emitEventFailed](entities.interfaces.baseentityabstractclass.md#emiteventfailed)
- [equalsTo](entities.interfaces.baseentityabstractclass.md#equalsto)
- [getTransferableProps](entities.interfaces.baseentityabstractclass.md#gettransferableprops)
- [subscribe](entities.interfaces.baseentityabstractclass.md#subscribe)
- [subscribeOnFailed](entities.interfaces.baseentityabstractclass.md#subscribeonfailed)
- [unsubscribe](entities.interfaces.baseentityabstractclass.md#unsubscribe)

## Constructors

### constructor

• `Protected` **new BaseEntityAbstractClass**<`Id`, `Type`, `E`\>(`_parameters`, `_services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_parameters` | [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\> |
| `_services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L31)

## Properties

### \_parameters

• `Protected` `Readonly` **\_parameters**: [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>

___

### \_services

• `Protected` `Readonly` **\_services**: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>

___

### type

• `Readonly` `Abstract` **type**: `Type`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[type](../interfaces/entities.interfaces.ientityimplementation.md#type)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L31)

## Accessors

### id

• `Abstract` `get` **id**(): `Id`

#### Returns

`Id`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[id](../interfaces/entities.interfaces.ientityimplementation.md#id)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:27](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L27)

___

### isDeleted

• `Abstract` `get` **isDeleted**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[isDeleted](../interfaces/entities.interfaces.ientityimplementation.md#isdeleted)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:29](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L29)

## Methods

### \_markDeleted

▸ `Protected` `Abstract` **_markDeleted**(): `void`

#### Returns

`void`

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:72](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L72)

___

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:70](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L70)

___

### emit

▸ `Abstract` **emit**<`Event`\>(`event`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[emit](../interfaces/entities.interfaces.ientityimplementation.md#emit)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:49](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L49)

___

### emitEventFailed

▸ `Abstract` **emitEventFailed**<`Ev`\>(`eventFailed`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[emitEventFailed](../interfaces/entities.interfaces.ientityimplementation.md#emiteventfailed)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L51)

___

### equalsTo

▸ `Abstract` **equalsTo**(`anotherEntity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherEntity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Returns

`boolean`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[equalsTo](../interfaces/entities.interfaces.ientityimplementation.md#equalsto)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:45](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L45)

___

### getTransferableProps

▸ `Abstract` **getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntityAbstractClass`](entities.abstractclasses.baseentityabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntityAbstractClass`](entities.abstractclasses.baseentityabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[getTransferableProps](../interfaces/entities.interfaces.ientityimplementation.md#gettransferableprops)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:47](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L47)

___

### subscribe

▸ `Abstract` **subscribe**<`N`\>(`eventName`, `eventListener`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[subscribe](../interfaces/entities.interfaces.ientityimplementation.md#subscribe)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:55](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L55)

___

### subscribeOnFailed

▸ `Abstract` **subscribeOnFailed**<`N`\>(`eventName`, `eventListener`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[subscribeOnFailed](../interfaces/entities.interfaces.ientityimplementation.md#subscribeonfailed)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:60](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L60)

___

### unsubscribe

▸ `Abstract` **unsubscribe**<`N`\>(`eventName`, `eventListener`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[unsubscribe](../interfaces/entities.interfaces.ientityimplementation.md#unsubscribe)

#### Defined in

[src/entities/abstractClasses/baseEntityAbstractClass.ts:65](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/entities/abstractClasses/baseEntityAbstractClass.ts#L65)
